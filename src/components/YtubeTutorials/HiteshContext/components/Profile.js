import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-red-500 text-center">Not Logged in</h1>
        <p className="text-gray-500 text-center mt-2">
          Please log in to view your profile.
        </p>
      </div>
    );

  return (
    <div>
      <h2 className="text-2xl mb-2 text-center">Profile</h2>
      <p className="text-lg text-center">Username: {user.userName}</p>
    </div>
  );
}

export default Profile;
