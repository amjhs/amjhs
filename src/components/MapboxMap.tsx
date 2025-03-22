
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Compass, ZoomIn, ZoomOut, Info, Layers, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";

// Normally, I would use an environment variable for this
// For demo purposes, using a temporary token
const MAPBOX_TOKEN = 'pk.eyJ1IjoibG92YWJsZWRldiIsImEiOiJjbHp2ZzlsenEwZzdjMmtwOGVmZWd3ZjJ6In0.a9qL4ZaLU3IEJC7KzgwQZw';

type MapLocation = {
  name: string;
  description: string;
  coordinates: [number, number];
  zoom: number;
}

const MapboxMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePlaceIndex, setActivePlaceIndex] = useState(0);
  
  // Parse coordinates from the Google Maps URL
  // This is from: https://maps.app.goo.gl/aYqy6WSpbzjt2iPn6
  const defaultLocation: MapLocation = {
    name: "Matsumoto Castle",
    description: "Matsumoto Castle is one of Japan's most beautiful original castles, located in Matsumoto, Nagano Prefecture.",
    coordinates: [137.9686, 36.2380], // Longitude, Latitude for Matsumoto Castle
    zoom: 15
  };
  
  const interestingPlaces: MapLocation[] = [
    defaultLocation,
    {
      name: "Matsumoto City Museum of Art",
      description: "Home to works by Yayoi Kusama and other renowned artists, nestled in the heart of Matsumoto.",
      coordinates: [137.9721, 36.2329],
      zoom: 16
    },
    {
      name: "Nawate Street",
      description: "A historic shopping street lined with small shops and food stalls near the Metoba River.",
      coordinates: [137.9732, 36.2337],
      zoom: 17
    },
    {
      name: "Yohashira Shrine",
      description: "A peaceful Shinto shrine located in downtown Matsumoto, offering a serene escape from the city.",
      coordinates: [137.9720, 36.2328],
      zoom: 16.5
    }
  ];

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    const initializeMap = async () => {
      try {
        const newMap = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/light-v11',
          center: defaultLocation.coordinates,
          zoom: defaultLocation.zoom,
          pitch: 45,
          bearing: 10,
          antialias: true
        });

        // Add navigation control
        newMap.addControl(
          new mapboxgl.NavigationControl({
            showCompass: false,
            visualizePitch: false
          }),
          'bottom-right'
        );

        newMap.on('load', () => {
          setMapLoaded(true);
          
          // Add terrain and sky
          newMap.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
          });
          
          newMap.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
          
          newMap.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
              'sky-type': 'atmosphere',
              'sky-atmosphere-sun': [0.0, 90.0],
              'sky-atmosphere-sun-intensity': 15
            }
          });

          // Add markers for each location
          interestingPlaces.forEach((place, index) => {
            // Create a custom marker element
            const markerEl = document.createElement('div');
            markerEl.className = 'flex items-center justify-center w-10 h-10';
            
            const pinEl = document.createElement('div');
            pinEl.className = 'absolute animate-pulse-subtle';
            pinEl.innerHTML = `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" fill="#3B82F6"/>
              <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            
            markerEl.appendChild(pinEl);
            
            // Add a ripple effect for the active location
            if (index === activePlaceIndex) {
              const rippleEl = document.createElement('div');
              rippleEl.className = 'absolute w-12 h-12 bg-primary/20 rounded-full animate-ping';
              markerEl.appendChild(rippleEl);
            }
            
            // Create the marker and add it to the map
            new mapboxgl.Marker(markerEl)
              .setLngLat(place.coordinates)
              .addTo(newMap);
          });
        });

        // Add interactions for enhanced UX
        newMap.on('move', () => {
          // Add any move effects here
        });

        map.current = newMap;
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Fly to a specific place when activePlaceIndex changes
  useEffect(() => {
    if (map.current && mapLoaded) {
      const destination = interestingPlaces[activePlaceIndex];
      
      map.current.flyTo({
        center: destination.coordinates,
        zoom: destination.zoom,
        pitch: 60,
        bearing: Math.random() * 60 - 30, // Random bearing for visual interest
        duration: 2000,
        essential: true
      });
    }
  }, [activePlaceIndex, mapLoaded]);

  const handleNextPlace = () => {
    setActivePlaceIndex((prev) => (prev + 1) % interestingPlaces.length);
  };

  const handlePrevPlace = () => {
    setActivePlaceIndex((prev) => (prev - 1 + interestingPlaces.length) % interestingPlaces.length);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Map Container */}
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Title Bar */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="glass-panel py-2 px-4 rounded-full shadow-sm animate-fade-in flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Explore Matsumoto</span>
        </div>
      </div>
      
      {/* Sidebar */}
      <div 
        className={cn(
          "absolute top-0 bottom-0 z-20 w-80 glass-panel rounded-r-xl shadow-lg transition-all duration-500 ease-in-out transform",
          sidebarOpen ? "left-0" : "-left-80"
        )}
      >
        <button 
          onClick={toggleSidebar}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 glass-panel p-2 rounded-r-lg shadow-sm"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
        
        <div className="p-6 space-y-6 h-full overflow-auto">
          <header className="space-y-1">
            <Badge variant="outline" className="mb-2 animate-fade-in">Japan</Badge>
            <h1 className="text-2xl font-medium animate-slide-up">Matsumoto, Nagano</h1>
            <p className="text-muted-foreground text-sm animate-slide-up delay-100">
              Discover the historical beauty of this castle town in the Japanese Alps
            </p>
          </header>
          
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-medium border-b pb-2">Highlighted Places</h2>
            
            <div className="space-y-3">
              {interestingPlaces.map((place, index) => (
                <div 
                  key={place.name}
                  onClick={() => setActivePlaceIndex(index)}
                  className={cn(
                    "p-3 rounded-lg transition-all cursor-pointer hover:bg-primary/5",
                    index === activePlaceIndex ? "bg-primary/10 shadow-sm" : "bg-transparent"
                  )}
                >
                  <h3 className="font-medium flex items-center">
                    <span className={cn(
                      "h-2 w-2 rounded-full mr-2",
                      index === activePlaceIndex ? "bg-primary animate-pulse-subtle" : "bg-gray-300"
                    )}></span>
                    {place.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{place.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-slide-up">
        <div className="glass-panel rounded-full shadow-sm flex items-center p-1">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handlePrevPlace}
            className="rounded-full"
            aria-label="Previous location"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="px-3">
            <span className="text-sm font-medium">{activePlaceIndex + 1} of {interestingPlaces.length}</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNextPlace}
            className="rounded-full"
            aria-label="Next location"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Map Controls */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 space-y-2 animate-fade-in">
        <div className="map-controls flex flex-col space-y-2">
          <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8" aria-label="Zoom in">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8" aria-label="Zoom out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-lg h-8 w-8" aria-label="Rotate">
            <Compass className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapboxMap;
