"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserPages() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/git-users")
      .then((response) => response.json())
      .then((response) => setUsers(response))
      .catch((errors) => console.error(errors));
  }, []);

  return (
    <div className="page-background">
      <h1 className="text-4xl font-extrabold text-red-600 mb-4">User Pages</h1>

      <div className="card-scroll">
        <ul className="card-user">
          {users.map((user) => (
            <li key={user.id} className="p-5 m-5 bg-white rounded-lg shadow-md w-32 h-40">
              <figure>
                <Image src={user.avatar_url} alt="Avatar" width={50} height={50} />
                <figcaption className="text-center font-bold text-sm mt-2">
                  {user.login}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
