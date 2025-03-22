
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Student {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  grade?: string;
}

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={student.imageUrl} 
          alt={`${student.name} - ${student.role}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {student.grade && (
          <Badge className="absolute top-3 right-3 bg-school-secondary/90">
            {student.grade}
          </Badge>
        )}
      </div>
      <CardHeader className="py-3 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-medium">{student.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{student.role}</p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default StudentCard;
