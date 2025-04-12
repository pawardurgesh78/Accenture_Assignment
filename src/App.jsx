import { useState } from 'react'
import UserCard from './userCard';
import { users as userData } from "./users";


function App() {
  const [search, setSearch] = useState("");
//get filtered users
  const filteredUsers = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder="Search by name or role..."
        className="w-full p-3 border border-gray-300 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    {filteredUsers.length > 0 ? (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No users to display.</p>
    )}
  </div>
  )
}

export default App
