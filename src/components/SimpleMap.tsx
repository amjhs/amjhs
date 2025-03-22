
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Compass, ZoomIn, ZoomOut, Info, Layers } from 'lucide-react';

// For demo purposes only - in production should use env variables
// Using a public token for demonstration - this should be replaced with your own token
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

mapboxgl.accessToken = MAPBOX_TOKEN;

const SimpleMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Updated coordinates for Adeiso Methodist JHS
  const schoolCoordinates: [number, number] = [-0.4904469, 5.7920359]; // Longitude, Latitude for Adeiso Methodist JHS

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    const initializeMap = async () => {
      try {
        const newMap = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: schoolCoordinates,
          zoom: 15,
          pitch: 45,
          bearing: 10,
        });

        // Add navigation control
        newMap.addControl(
          new mapboxgl.NavigationControl({
            showCompass: true,
            visualizePitch: true
          }),
          'bottom-right'
        );

        newMap.on('load', () => {
          setMapLoaded(true);
          
          // Add marker for the school
          const markerEl = document.createElement('div');
          markerEl.className = 'flex items-center justify-center';
          markerEl.innerHTML = `
            <div class="bg-school-primary text-white p-2 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          `;
          
          // Create the marker and add it to the map with a popup
          new mapboxgl.Marker(markerEl)
            .setLngLat(schoolCoordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML('<h3 class="font-bold">Adeiso Methodist JHS</h3><p>Adeiso, Eastern Region, Ghana</p>')
            )
            .addTo(newMap);
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

  return (
    <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-md">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Map Title */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white/90 dark:bg-slate-900/90 py-2 px-4 rounded-lg shadow-sm flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-school-primary" />
          <span className="text-sm font-medium">Adeiso Methodist JHS</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleMap;
