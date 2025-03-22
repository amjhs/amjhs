
import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import StaffCard, { StaffMember } from '@/components/StaffCard';

// Sample staff data - in a real app, this would come from an API
const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "John Mensah",
    role: "Headmaster",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "Administration",
    email: "headmaster@methodistjhsadeiso.edu.gh",
    phone: "0541813988",
    description: "Mr. Mensah has been leading Adeiso Methodist JHS for 8 years, focusing on academic excellence and student character development."
  },
  {
    id: 2,
    name: "Grace Osei",
    role: "Deputy Headmistress",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "Administration",
    email: "deputy@methodistjhsadeiso.edu.gh",
    description: "Ms. Osei oversees the curriculum and ensures smooth day-to-day operations of the school."
  },
  {
    id: 3,
    name: "Daniel Acquah",
    role: "Mathematics Teacher",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "Mathematics",
    description: "Mr. Acquah makes mathematics fun and accessible, with a passion for helping students build strong foundations in the subject."
  },
  {
    id: 4,
    name: "Abigail Owusu",
    role: "English Teacher",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "English",
    description: "Ms. Owusu is dedicated to developing students' language skills through creative and engaging teaching methods."
  },
  {
    id: 5,
    name: "Emmanuel Adjei",
    role: "Science Teacher",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "Science",
    description: "Mr. Adjei brings science to life through practical experiments and real-world applications."
  },
  {
    id: 6,
    name: "Sophia Boateng",
    role: "Social Studies Teacher",
    imageUrl: "https://images.unsplash.com/photo-1590650213165-c1fef80648c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "Social Studies",
    description: "Ms. Boateng helps students understand society and develop critical thinking skills about social issues."
  },
  {
    id: 7,
    name: "Isaac Nkrumah",
    role: "ICT Teacher",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "ICT",
    description: "Mr. Nkrumah prepares students for the digital age by teaching essential computer and technology skills."
  },
  {
    id: 8,
    name: "Esther Ankomah",
    role: "Religious & Moral Education",
    imageUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    department: "RME",
    description: "Ms. Ankomah guides students in understanding religious principles and moral values for character development."
  },
];

const Staff = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Group staff by department
  const administration = staffMembers.filter(staff => staff.department === 'Administration');
  const teachers = staffMembers.filter(staff => staff.department !== 'Administration');

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-playfair font-bold text-school-primary mb-4 aos-fade-up">Our Staff</h1>
          <p className="text-muted-foreground aos-fade-up">
            Meet the dedicated team of professionals who make Adeiso Methodist JHS a center of excellence in education.
          </p>
        </div>

        {/* Administration Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-playfair font-bold text-school-primary mb-6 aos-fade-up">Administration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {administration.map((staff, index) => (
              <div key={staff.id} className="aos-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <StaffCard staff={staff} />
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Staff Section */}
        <section>
          <h2 className="text-2xl font-playfair font-bold text-school-primary mb-6 aos-fade-up">Teaching Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((staff, index) => (
              <div key={staff.id} className="aos-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <StaffCard staff={staff} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;
