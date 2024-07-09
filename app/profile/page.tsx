import { Pencil1Icon } from "@radix-ui/react-icons";
import { CircleUserIcon, Pencil, PenIcon, PenSquareIcon, UserIcon } from "lucide-react";
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen relative bg-[#f0f4f9]">
      <div className="w-full flex flex-col items-center  h-screen p-12">
        <div className="flex flex-col space-y-6   sm:w-[80%] md:w-[70%]">

          <div className="flex flex-col items-center space-y-1">
              <CircleUserIcon className="size-20 text-neutral-600 mb-3 cursor-pointer" />
              <h2 className="text-2xl space-x-2 flex items-center">
                <span>User name</span>{" "}
                <span>
                  <PenIcon className="size-5" />
                </span>
              </h2>
              <h3 className="text-lg text-neutral-800">johndoe@email.com</h3>
          </div>
          <div className=" w-full bg-white space-y-2 px-4 py-6 rounded-lg">
            <div className="flex justify-between">
                <h3 className="text-xl">Bio</h3>
                <span className="text-neutral-600 cursor-pointer hover:text-black">
                  <Pencil/>
                </span>
            </div>
            {/* <div className="underline w-full"></div> */}
            <p className="text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
              perferendis officiis. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Natus, atque!
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
