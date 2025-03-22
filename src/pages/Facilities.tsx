
import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import FacilityCard, { Facility } from '@/components/FacilityCard';
import { BookOpen, LandPlot, Volleyball, Building, Home, Laptop } from 'lucide-react';

// Sample facilities data
const facilities: Facility[] = [
  {
    id: 1,
    name: "Library",
    description: "Our modern library built by Village Book Builders provides students with access to a wide range of books and resources.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    icon: <BookOpen className="h-5 w-5 text-white" />
  },
  {
    id: 2,
    name: "Sports Field",
    description: "Our large sports field hosts football, athletics, and other sporting events for student physical development.",
    imageUrl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    icon: <LandPlot className="h-5 w-5 text-white" />
  },
  {
    id: 3,
    name: "Volleyball Court",
    description: "A dedicated volleyball court for students to develop their volleyball skills and enjoy the sport.",
    imageUrl: "https://images.unsplash.com/photo-1591491634233-7c21204e94e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    icon: <Volleyball className="h-5 w-5 text-white" />
  },
  {
    id: 4,
    name: "Classrooms",
    description: "Well-ventilated, spacious classrooms designed to create an optimal learning environment for students.",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    icon: <Building className="h-5 w-5 text-white" />
  },
  {
    id: 5,
    name: "Assembly Hall",
    description: "A large hall for school assemblies, presentations, and cultural events that bring the school community together.",
    imageUrl: "https://images.unsplash.com/photo-1576843776838-032ac46fbb93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    icon: <Home className="h-5 w-5 text-white" />
  },
  {
    id: 6,
    name: "Computer Lab",
    description: "A modern computer lab equipped with computers to help students develop essential digital skills.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    icon: <Laptop className="h-5 w-5 text-white" />
  }
];

const Facilities = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-playfair font-bold text-school-primary mb-4 aos-fade-up">Our Facilities</h1>
          <p className="text-muted-foreground aos-fade-up">
            Explore the facilities that enhance the learning experience at Adeiso Methodist JHS, providing students with the resources they need to succeed.
          </p>
        </div>

        {/* Facilities Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={facility.id} className="aos-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <FacilityCard facility={facility} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Facility - Library */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden aos-fade-up">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Library" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="bg-school-primary/10 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <BookOpen className="text-school-primary h-5 w-5" />
                </div>
                <h2 className="text-2xl font-playfair font-bold text-school-primary mb-3">Village Book Builders Library</h2>
                <p className="text-muted-foreground mb-4">
                  Our state-of-the-art library was built in partnership with Village Book Builders, a non-profit organization dedicated to providing educational resources to communities worldwide.
                </p>
                <p className="text-muted-foreground mb-4">
                  The library houses a diverse collection of books, covering various subjects and genres, from textbooks to fiction, to cater to the academic and recreational reading needs of our students.
                </p>
                <p className="text-muted-foreground">
                  The library also serves as a quiet study space where students can complete their assignments and engage in research activities, fostering a culture of independent learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sports Facilities */}
        <section>
          <h2 className="text-2xl font-playfair font-bold text-school-primary mb-6 aos-fade-up">Sports Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden aos-fade-right">
              <img 
                src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Sports Field" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Large Sports Field</h3>
                <p className="text-muted-foreground">
                  Our spacious sports field accommodates various activities including football matches, athletics competitions, and physical education classes. It's a hub for sports enthusiasts and promotes physical fitness among students.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden aos-fade-left">
              <img 
                src="https://images.unsplash.com/photo-1591491634233-7c21204e94e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Volleyball Court" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Dedicated Volleyball Court</h3>
                <p className="text-muted-foreground">
                  Our volleyball court is a popular spot for students to engage in friendly matches and competitive games. The court is well-maintained and used for both practice sessions and tournaments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
