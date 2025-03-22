
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from 'lucide-react';

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  department?: string;
  email?: string;
  phone?: string;
  description: string;
}

interface StaffCardProps {
  staff: StaffMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={staff.imageUrl} 
          alt={`${staff.name} - ${staff.role}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {staff.department && (
          <Badge className="absolute top-3 right-3 bg-school-primary/90">
            {staff.department}
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-playfair text-xl text-school-primary">{staff.name}</CardTitle>
        <CardDescription className="font-medium text-base">{staff.role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{staff.description}</p>
      </CardContent>
      <CardFooter className="pt-0 flex-col items-start gap-2">
        {staff.email && (
          <a 
            href={`mailto:${staff.email}`} 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-school-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            {staff.email}
          </a>
        )}
        {staff.phone && (
          <a 
            href={`tel:${staff.phone}`} 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-school-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            {staff.phone}
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default StaffCard;
