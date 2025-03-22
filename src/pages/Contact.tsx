
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, SendHorizontal } from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16 bg-blue-50/70 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-playfair font-bold text-school-primary mb-4 aos-fade-up">Contact Us</h1>
          <p className="text-muted-foreground aos-fade-up">
            Get in touch with Adeiso Methodist JHS. We'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="aos-fade-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-school-primary/10 p-3 rounded-full">
                    <Phone className="text-school-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:0541813988" className="text-muted-foreground hover:text-school-primary transition-colors">
                      0541 813 988
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-school-primary/10 p-3 rounded-full">
                    <Mail className="text-school-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:methodistjhsadeiso@gmail.com" className="text-muted-foreground hover:text-school-primary transition-colors">
                      methodistjhsadeiso@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="aos-fade-up" style={{animationDelay: '0.3s'}}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-school-primary/10 p-3 rounded-full">
                    <MapPin className="text-school-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">
                      Adeiso, Eastern Region, Ghana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map and Form Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Map */}
          <div className="aos-fade-right">
            <h2 className="text-2xl font-playfair font-bold text-school-primary mb-4">Our Location</h2>
            <p className="text-muted-foreground mb-6">
              Visit us at our campus in Adeiso. We're conveniently located and easily accessible.
            </p>
            <GoogleMap />
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <a href="https://maps.app.goo.gl/aYqy6WSpbzjt2iPn6" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="aos-fade-left">
            <h2 className="text-2xl font-playfair font-bold text-school-primary mb-4">Send Us a Message</h2>
            <p className="text-muted-foreground mb-6">
              Have a question or want to learn more about our school? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input 
                  id="subject" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                  placeholder="Enter message subject" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Enter your message" 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>Sending Message...</>
                ) : (
                  <>
                    <SendHorizontal className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </section>

        {/* School Hours */}
        <section>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-8 aos-fade-up">
            <h2 className="text-2xl font-playfair font-bold text-school-primary mb-4">School Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Academic Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>7:30 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Administration Office</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>8:00 AM - 12:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
