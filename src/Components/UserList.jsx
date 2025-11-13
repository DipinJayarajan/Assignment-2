import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import UserCard from "./UserCard";
import EditUserModal from "./EditUserModal";
import Loader from "./Loader/Loader"; 

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);


    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchUsers();
  } , []);

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

    if (loading) {
    return <Loader />;
  }

  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default UserList;
