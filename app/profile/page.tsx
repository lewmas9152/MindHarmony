import { PenIcon, UserIcon } from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex">
      <div>
        <UserIcon size={4} />
        <div>
          <h2>
            Username{" "}
            <span>
              <PenIcon size={4} />
            </span>
          </h2>
          <p>Email Address</p>
        </div>
      </div>
      <div>
        <h2>
          Bio{" "}
          <span>
            <PenIcon size={4} />
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, recusandae?
        </p>
      </div>
      <div>
        <a href="#" className="text-red-600 no-underline">Log out</a>
      </div>
    </div>
  );
};

export default Profile;
