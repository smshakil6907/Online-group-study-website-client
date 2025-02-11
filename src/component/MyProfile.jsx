import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function MyProfile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-6 md:p-12 lg:p-16">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-300">
          Welcome, {user?.displayName}
        </h1>

        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4"
          />
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-300">
                Profile Information
              </h2>
            </div>
            <div className="text-gray-300">
              <p>
                <strong>Name:</strong> {user?.displayName}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
