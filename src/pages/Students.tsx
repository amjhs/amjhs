
import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import StudentCard, { Student } from '@/components/StudentCard';

// Sample student prefects data - in a real app, this would come from an API
const studentPrefects: Student[] = [
  {
    id: 1,
    name: "Kofi Adu",
    role: "Senior Boys Prefect",
    imageUrl: "https://images.unsplash.com/photo-1582240930922-a74fbc8736a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  },
  {
    id: 2,
    name: "Akosua Mensah",
    role: "Senior Girls Prefect",
    imageUrl: "https://images.unsplash.com/photo-1583452208101-7c1cc44442b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  },
  {
    id: 3,
    name: "Emmanuel Ofori",
    role: "Academic Prefect",
    imageUrl: "https://images.unsplash.com/photo-1595436065982-84fa400ba96f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  },
  {
    id: 4,
    name: "Abena Osei",
    role: "Health Prefect",
    imageUrl: "https://images.unsplash.com/photo-1624703307604-5e1663b874ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  },
  {
    id: 5,
    name: "David Ankomah",
    role: "Sports Prefect",
    imageUrl: "https://images.unsplash.com/photo-1592498604413-3c87524d7a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  },
  {
    id: 6,
    name: "Ruth Boateng",
    role: "Library Prefect",
    imageUrl: "https://images.unsplash.com/photo-1593986810450-9f5b37663607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  },
  {
    id: 7,
    name: "Samuel Frimpong",
    role: "Compound Prefect",
    imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  },
  {
    id: 8,
    name: "Mercy Adjei",
    role: "Entertainment Prefect",
    imageUrl: "https://images.unsplash.com/photo-1542145748-56c501cf4ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    grade: "JHS 3"
  }
];

const Students = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-playfair font-bold text-school-primary mb-4 aos-fade-up">Student Leaders</h1>
          <p className="text-muted-foreground aos-fade-up">
            Meet our prefects who help maintain discipline and organize activities within the school. They are selected based on their academic performance, leadership abilities, and character.
          </p>
        </div>

        {/* School Prefects */}
        <section className="mb-16">
          <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-lg mb-8 aos-fade-up">
            <h2 className="text-2xl font-playfair font-bold text-school-primary mb-2">School Prefects</h2>
            <p className="text-muted-foreground">
              Our prefects serve as role models and assist teachers in maintaining order and discipline in the school. They are elected by students and appointed by teachers based on their exemplary conduct.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {studentPrefects.map((student, index) => (
              <div key={student.id} className="aos-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <StudentCard student={student} />
              </div>
            ))}
          </div>
        </section>

        {/* Student Activities */}
        <section className="aos-fade-up">
          <h2 className="text-2xl font-playfair font-bold text-school-primary mb-6">Student Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 aos-fade-right">
              <h3 className="text-xl font-medium mb-3">Academic Clubs</h3>
              <p className="text-muted-foreground mb-4">
                Students participate in various clubs such as Science Club, Debate Club, and Mathematics Club where they develop their skills and interests.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Science Club</li>
                <li>Debate Club</li>
                <li>Mathematics Club</li>
                <li>Reading Club</li>
                <li>ICT Club</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 aos-fade-left">
              <h3 className="text-xl font-medium mb-3">Extracurricular Activities</h3>
              <p className="text-muted-foreground mb-4">
                We offer various extracurricular activities to help students develop their talents and interests outside the classroom.
              </p>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Football Team</li>
                <li>Volleyball Team</li>
                <li>Athletics</li>
                <li>Cultural Dance</li>
                <li>School Choir</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Students;
