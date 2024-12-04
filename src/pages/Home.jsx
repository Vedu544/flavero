import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Cart from "../components/Cart";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";

const Home = () => {
  const { user } = useUser(); // Access the user object when signed in

  return (
    <>
      <div className="flex gap-3 justify-center">
        {/* Signed-Out Message */}
        <SignedOut>
          <div className="text-center mt-4">
            <h2 className="text-2xl mb-2 font-bold">
              Welcome to Flavero, Please login to add food to your cart.
            </h2>
          </div>
        </SignedOut>

        {/* Signed-In Message */}
        <SignedIn>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold">
              Welcome back{user?.firstName ? `, ${user.firstName}` : ""}!
            </h2>
          </div>
        </SignedIn>
      </div>

      {/* Main Components */}
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;
