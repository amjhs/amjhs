
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="max-w-md w-full glass-panel rounded-xl p-8 animate-zoom-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
            <MapPin className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-4xl font-medium">Location Not Found</h1>
          
          <p className="text-muted-foreground text-balance">
            We couldn't find the destination you're looking for. The coordinates might be incorrect or the location doesn't exist on our map.
          </p>
          
          <Button asChild className="mt-6">
            <a href="/">Return to Map</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
