import React, { useEffect } from "react";
import { getUser } from "./auth"; // Adjust the import path

const LoggedUserLogger = ({ children }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
console.log('dest')
    }, 10000); // 2000 milliseconds = 2 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when component unmounts
    };
  }, []);

  return children;
};

export default LoggedUserLogger;
