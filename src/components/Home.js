import React from "react";
import { User, useAuth0 } from "@auth0/auth0-react";
export default function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    
    <div>
      <h1>Welcome to the Book Listing App</h1>
      <p>This is the home page.</p>
    </div>
  );
}
