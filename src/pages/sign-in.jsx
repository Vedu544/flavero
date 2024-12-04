import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();

  // Redirect the user to the homepage after a successful sign-in
  const handleOnSignIn = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          redirectUrl="/" // Ensures Clerk redirects after sign-in
          afterSignInUrl="/"
          onSignIn={handleOnSignIn} // Triggered after sign-in
          appearance={{
            elements: {
              card: 'shadow-lg rounded-lg', // Customize appearance if needed
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
