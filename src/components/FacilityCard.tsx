
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface Facility {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

interface FacilityCardProps {
  facility: Facility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={facility.imageUrl} 
          alt={facility.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="bg-school-primary/90 p-2 rounded-full inline-block mb-2">
            {facility.icon}
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-school-primary">{facility.name}</CardTitle>
        <CardDescription>{facility.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FacilityCard;
