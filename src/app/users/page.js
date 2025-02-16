"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users");
      if (!res.ok) {
        console.error("Failed to fetch users");
        return;
      }
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  async function handleAddUser() {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      console.error("Failed to add user");
      return;
    }

    const newUser = await res.json();
    setUsers((prev) => [...prev, newUser]);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username} ({user.email})</li>
        ))}
      </ul>

      <h2>Add User</h2>
      <input type="text" name="id" placeholder="ID" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}
