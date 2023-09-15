import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';


const TawkToChat = () => {
    const location = useLocation();
  
    // Define an array of page paths where you want to exclude the component
    const excludedPaths = ['/Messaging', '/contact'];
  
    useEffect(() => {
      // Check if the current page's path is in the excludedPaths array
      if (!excludedPaths.includes(location.pathname)) {
        // Load the Tawk.to script when the component mounts
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = 'https://embed.tawk.to/650453c8b1aaa13b7a770836/1haceeins';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        document.head.appendChild(s1);
  
        // Clean up the script when the component unmounts
        return () => {
          document.head.removeChild(s1);
        };
      }
    }, [location.pathname]);
  
    return null; // You can return null or an empty div, as this component doesn't render any content
  };
  
  export default TawkToChat;