
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, GraduationCap, BookOpen, Users, MapPin, Building, Award, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import GoogleMap from '@/components/GoogleMap';
import { eventsData } from '@/data/eventsData';

const Home = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Take only the first 3 events for the homepage
  const upcomingEvents = eventsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-blue-50/70 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-school-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="aos-fade-right">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-school-primary mb-4">
                  Welcome to Adeiso Methodist JHS
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Providing quality education and shaping the future leaders of tomorrow. Our commitment is to nurture well-rounded individuals through academic excellence and character development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/about">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 aos-fade-left">
              <img 
                src="/lovable-uploads/6d71897e-2871-4084-a095-eb61f98531da.png" 
                alt="Adeiso Methodist JHS Logo" 
                className="mx-auto h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 aos-fade-up">
            <h2 className="text-3xl font-playfair font-bold text-school-primary mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest activities and events happening at Adeiso Methodist JHS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event, index) => (
              <Card key={event.id} className="overflow-hidden h-full aos-fade-up" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-white/90 dark:bg-slate-900/90 text-sm font-medium px-2 py-1 rounded">
                      {event.date}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/events/${event.id}`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center aos-fade-up">
            <Button asChild>
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 aos-fade-up">
            <h2 className="text-3xl font-playfair font-bold text-school-primary mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              At Adeiso Methodist JHS, we provide a well-rounded education that prepares students for success in their academic and personal lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="aos-fade-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-6">
                <div className="rounded-full bg-school-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="text-school-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quality Education</h3>
                <p className="text-muted-foreground">
                  Our curriculum is designed to provide students with a strong academic foundation and critical thinking skills.
                </p>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-6">
                <div className="rounded-full bg-school-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-school-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Dedicated Staff</h3>
                <p className="text-muted-foreground">
                  Our experienced and passionate teachers are committed to the success of each and every student.
                </p>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6">
                <div className="rounded-full bg-school-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="text-school-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Modern Library</h3>
                <p className="text-muted-foreground">
                  Our library, built by Village Book Builders, provides students with access to a wide range of books and resources.
                </p>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.4s'}}>
              <CardContent className="pt-6">
                <div className="rounded-full bg-school-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="text-school-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Student Leadership</h3>
                <p className="text-muted-foreground">
                  We foster leadership skills through our prefect system and various student-led initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.5s'}}>
              <CardContent className="pt-6">
                <div className="rounded-full bg-school-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="text-school-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Modern Facilities</h3>
                <p className="text-muted-foreground">
                  Our school boasts modern classrooms, a computer lab, and sports facilities to enhance the learning experience.
                </p>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.6s'}}>
              <CardContent className="pt-6">
                <div className="rounded-full bg-school-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="text-school-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Strategic Location</h3>
                <p className="text-muted-foreground">
                  Located in the heart of Adeiso, our school is easily accessible to students from all parts of the town.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 aos-fade-up">
              <h3 className="text-xl font-playfair font-bold text-school-primary mb-4">Meet Our Staff</h3>
              <p className="text-muted-foreground mb-4">
                Learn about our dedicated headmaster, teachers, and administrative staff who make our school exceptional.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/staff">
                  View Staff Profiles
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 aos-fade-up" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-playfair font-bold text-school-primary mb-4">School Prefects</h3>
              <p className="text-muted-foreground mb-4">
                Meet our student leaders who help maintain discipline and organize activities within the school.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/students">
                  Meet Our Prefects
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 aos-fade-up" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-playfair font-bold text-school-primary mb-4">Our Facilities</h3>
              <p className="text-muted-foreground mb-4">
                Explore our library, sports facilities, and other amenities that enhance the learning experience.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/facilities">
                  Explore Facilities
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 aos-fade-up">
            <h2 className="text-3xl font-playfair font-bold text-school-primary mb-4">Visit Our School</h2>
            <p className="text-muted-foreground">
              Located in the heart of Adeiso, our school is easily accessible. Come visit us and see what makes Adeiso Methodist JHS special.
            </p>
          </div>

          <div className="aos-fade-up">
            <GoogleMap />
          </div>

          <div className="mt-8 text-center aos-fade-up">
            <Button asChild size="lg">
              <a href="https://maps.app.goo.gl/aYqy6WSpbzjt2iPn6" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-school-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto aos-fade-up">
            <h2 className="text-3xl font-playfair font-bold mb-4">Ready to Join Our School?</h2>
            <p className="text-white/80 mb-8">
              Contact us today to learn more about admission requirements and the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white bg-school-primary/30 border-white hover:bg-white/20">
                <a href="tel:0541813988">
                  Call Us: 0541 813 988
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
