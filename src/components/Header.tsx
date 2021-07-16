import React, { useEffect, useState } from "react";
import useStore from "../store";

export default function Header() {
  const users = useStore((store) => store.users);
  const fetchUsers = useStore((store) => store.fetchUsers);

  const selectedUserId = useStore((store) => store.selectedUserId);
  const getSelectedUserId = useStore((store) => store.getSelectedUserId);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <header className="main-header">
      <div className="wrapper">
        {users.map((user, index: number) => (
          <div
            key={index}
            onClick={() => {
              getSelectedUserId(user.id);
            }}
            className={selectedUserId === user.id ? "chip active" : "chip"}
          >
            <div className="avatar-small">
              <img src={user.avatar} alt={user.username} />
            </div>
            <span>{user.username}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
