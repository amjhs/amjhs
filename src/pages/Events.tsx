import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { eventsData } from '@/data/eventsData';

const Events = () => {
  const { id } = useParams();
  useScrollAnimation();
  
  // If we have an ID, show the event details
  if (id) {
    const eventId = parseInt(id);
    const event = eventsData.find(e => e.id === eventId);
    
    if (!event) {
      return (
        <div className="pt-24 pb-16 min-h-screen bg-blue-50/70 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h1 className="text-3xl font-playfair font-bold text-school-primary mb-4">Event Not Found</h1>
              <p className="text-muted-foreground mb-8">Sorry, the event you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/events">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="pt-24 pb-16 bg-blue-50/70 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <Link to="/events" className="inline-flex items-center text-school-primary hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Events
          </Link>
          
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden aos-fade-up">
            <div className="relative h-64 sm:h-80 md:h-96">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-white dark:bg-slate-900 text-school-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {event.date}
                </div>
                <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white">{event.title}</h1>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="text-school-primary mr-2 h-5 w-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-school-primary mr-2 h-5 w-5" />
                  <span>{event.time || "All Day"}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-school-primary mr-2 h-5 w-5" />
                  <span>{event.location || "School Campus"}</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-school-primary mr-2 h-5 w-5" />
                  <span>{event.audience || "All Students"}</span>
                </div>
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                <h2>About This Event</h2>
                <p className="text-lg">{event.description}</p>
                
                {event.fullDescription && event.fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                
                {event.highlights && (
                  <>
                    <h3>Event Highlights</h3>
                    <ul>
                      {event.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Otherwise, show all events
  return (
    <div className="pt-24 pb-16 bg-blue-50/70 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-playfair font-bold text-school-primary mb-4 aos-fade-up">School Events</h1>
          <p className="text-muted-foreground aos-fade-up">
            Explore our upcoming events and activities at Adeiso Methodist JHS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eventsData.map((event, index) => (
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
      </div>
    </div>
  );
};

export default Events;
