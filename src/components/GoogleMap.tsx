
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';

const GoogleMap: React.FC = () => {
  // School coordinates
  const latitude = 5.7920359;
  const longitude = -0.4904469;
  
  // Create Google Maps embed URL with the coordinates
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=15`;
  
  return (
    <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-md">
      <iframe
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={googleMapsUrl}
        title="Adeiso Methodist JHS Location"
      ></iframe>
      
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

export default GoogleMap;
