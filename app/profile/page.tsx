import { Pencil1Icon } from "@radix-ui/react-icons";
import { CircleUserIcon, Pencil, PenIcon, PenSquareIcon, UserIcon } from "lucide-react";
import React from "react";
import "../sass/Profile.scss"

const Profile = () => {
  return (
    <div className="container-profile min-h-screen relative bg-[#f0f4f9]">
      <div className="w-full flex flex-col items-center  h-screen p-12">
        <div className="flex flex-col space-y-6   sm:w-[80%] md:w-[70%]">

          <div className=" user-container flex flex-col items-center space-y-1">
              <CircleUserIcon className="size-20 text-neutral-600 mb-3 cursor-pointer" />
              <h2 className="text-2xl space-x-2 flex items-center">
                <span>User name</span>{" "}
                <span className="user-profile">
        
                </span>
              </h2>
              <h3 className="text-lg text-neutral-800">johndoe@email.com</h3>
          </div>
          <div className=" bio-container w-full bg-white space-y-2 px-4 py-6 rounded-lg">
            <div className="flex justify-between">
                <h3 className="text-xl">Bio</h3>
                <span className="text-neutral-600 cursor-pointer hover:text-black">
                  <Pencil/>
                </span>
            </div>
            {/* <div className="underline w-full"></div> */}
            <p className="text-pretty">
            🌟On a transformative journey to better mental health with Mind Harmony. Embracing balance, positivity, and personal growth every day. 🌱 Passionate about self-care and mental wellness, i am here to share my experiences, learn from others, and build a supportive community. Together, we can thrive and create a harmonious mind! 💪✨
            </p>
          </div>
          <footer className="  text-center">
            <a href="#" className="text-red-600 no-underline border border-red-500 rounded px-4 py-2 hover:bg-red-500 hover:text-white">Log out</a>
          </footer>
        </div>
      </div>
      {/* <div className="bg-blue-300   w-full flex flex-col items-center">
          <div className="bg-red-200">
            <div className="text-center">
            <CircleUserIcon className="text-3xl"/>
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
      </div> */}
    </div>
  );
};

export default Profile;
