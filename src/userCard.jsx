import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 w-full max-w-sm mx-auto flex flex-col items-center">
      <div className="text-5xl mb-4">👤</div>
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.role}</p>
      <p className="text-gray-500 mb-4">{user.location}</p>
      <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Contact
      </button>
    </div>
  );
};

export default UserCard;