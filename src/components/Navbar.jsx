import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { SignIn, useUser, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isSignedIn } = useUser();
  const { openUserProfile, signOut } = useClerk(); // Add signOut for logout functionality

  const handleProfileClick = () => {
    if (isSignedIn) {
      openUserProfile(); // Open the Clerk user profile modal
    } else {
      window.location.href = "/sign-in"; // Redirect to the SignIn page
    }
  };

  const handleLogout = () => {
    signOut(); // Logs out the user
  };

  return (
    <nav className="flex flex-col lg:flex-row py-3 mx-6 mb-10 justify-between items-center">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ">Flavoro Foods</h1>
      </div>

      {/* Right-Aligned Section */}
      <div className="flex gap-3 items-center ml-auto">
        {/* Search Input */}
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          />
        </div>

        {/* Custom Profile and Logout Buttons */}
        {isSignedIn ? (
          <div className="flex gap-2">
            <button
              onClick={handleProfileClick}
              className="p-2 border border-gray-400 rounded-lg h-12 text-xl bg-green-400 text-white"
            >
              Profile 
            </button>
            <button
              onClick={handleLogout}
              className="p-2 border border-gray-400 rounded-lg h-12 text-xl bg-red-500 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              window.location.href = "/sign-in";
            }}
            className="p-2 border border-gray-400 rounded-lg h-12 text-xl bg-green-400 text-white"
          >
            Sign In
          </button>
        )}
      </div>

      {/* Clerk SignIn Component */}
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </nav>
  );
};

export default Navbar;
