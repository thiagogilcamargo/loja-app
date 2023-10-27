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
<div className="h-24 w-48 mx-auto mt-8 flex items-center justify-center bg-gradient-to-b  bg-slate-800 bg-slate-800 rounded-lg p-4">
  <h1 className="text-lg font-extrabold text-red-800 border-2 border-red-700 p-3">
    User Pages
  </h1>
</div>






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
