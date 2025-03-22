
import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Book, Users } from 'lucide-react';

const About = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-playfair font-bold text-school-primary mb-4 aos-fade-up">About Our School</h1>
          <p className="text-muted-foreground aos-fade-up">
            Learn about the history, mission, and values of Adeiso Methodist Junior High School.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aos-fade-right">
              <h2 className="text-2xl font-playfair font-bold text-school-primary mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Adeiso Methodist Junior High School was established as part of the Methodist Church's commitment to providing quality education to children in Ghana. Located in Adeiso in the Eastern Region, our school has a proud history of educational excellence.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we have grown into a leading educational institution in the community, known for our academic excellence, strong moral values, and commitment to developing well-rounded individuals.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to build on our rich heritage while embracing modern educational approaches to prepare our students for success in an ever-changing world.
              </p>
            </div>
            <div className="aos-fade-left">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/6d71897e-2871-4084-a095-eb61f98531da.png" 
                  alt="Adeiso Methodist JHS Logo" 
                  className="absolute inset-0 w-full h-full object-contain bg-white p-4"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-6">
                  <div className="text-white font-playfair">
                    <p className="font-bold text-xl">Thy Kingdom Come</p>
                    <p className="text-sm">School Motto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="aos-fade-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-bold text-school-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide quality education in a nurturing environment that promotes academic excellence, moral values, and the holistic development of students to become responsible citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-bold text-school-primary mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a leading educational institution that produces academically excellent, morally upright, and socially responsible individuals who contribute positively to society.
                </p>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-playfair font-bold text-school-primary mb-3">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-school-primary mt-0.5 shrink-0" />
                    <span>Excellence in all endeavors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-school-primary mt-0.5 shrink-0" />
                    <span>Integrity and honesty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-school-primary mt-0.5 shrink-0" />
                    <span>Respect for all individuals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-school-primary mt-0.5 shrink-0" />
                    <span>Christian principles and values</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-playfair font-bold text-school-primary mb-6 aos-fade-up">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md aos-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-school-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-school-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Academic Excellence</h3>
              <p className="text-muted-foreground">
                Consistently high performance in the Basic Education Certificate Examination (BECE).
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md aos-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-school-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-school-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Sports Championships</h3>
              <p className="text-muted-foreground">
                Multiple district and regional championships in football, volleyball, and athletics.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md aos-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-school-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Book className="text-school-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Debate Competitions</h3>
              <p className="text-muted-foreground">
                Winners of several inter-school debate competitions at the district and regional levels.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md aos-fade-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-school-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-school-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Community Service</h3>
              <p className="text-muted-foreground">
                Recognition for various community service initiatives led by our students.
              </p>
            </div>
          </div>
        </section>

        {/* Message from Headmaster */}
        <section>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden aos-fade-up">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Headmaster" 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <h2 className="text-2xl font-playfair font-bold text-school-primary mb-3">Message from the Headmaster</h2>
                <p className="text-muted-foreground mb-4 italic">
                  "At Adeiso Methodist Junior High School, we believe in developing the whole child – intellectually, physically, socially, and spiritually. Our dedicated team of educators works tirelessly to create a conducive learning environment where students can discover and develop their God-given talents."
                </p>
                <p className="text-muted-foreground mb-4">
                  "We strive to instill in our students the values of excellence, integrity, respect, and service. These values guide our approach to education and prepare our students to become responsible citizens who contribute positively to society."
                </p>
                <p className="text-muted-foreground mb-6">
                  "We invite you to join our school community and partner with us in shaping the future of these young minds."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-medium">John Mensah</p>
                    <p className="text-sm text-muted-foreground">Headmaster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
