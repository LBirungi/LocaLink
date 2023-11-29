import React from "react";
import { AppShell, Avatar, Button } from "@mantine/core";

function Aside() {
  const members = [
    // Existing member data including Grace Nabulime's profile
    {
      name: "Lillian Birungi",
      username: "@LillianBirungi",
      lastActive: "Online",
      avatar: "/avatarprofile.jpg", // Path to Grace's avatar image
    },
    {
      name: "Johnson Byaruhanga",
      username: "@JohnsonB",
      lastActive: "3 hours ago",
      avatar: "/johnson.jpg", // Path to Johnson's avatar image
    },
    {
      name: "Ronnie Kagulie",
      username: "@RonnieK",
      lastActive: "5 days ago",
      avatar: "/ronnie.jpg", // Path to Ronnie's avatar image
    },
  ];

  return (
    <AppShell.Aside p="md" className="h-full px-4 bg-blue-950">
      <div className="flex justify-center items-start min-h-screen text-white">
        <div className="flex flex-col items-center w-full">
          <div className="mt-4 mb-6">
            {/* Display Grace Nabulime's profile */}
            <div className="relative">
              <Avatar
                variant="outline"
                radius="lg"
                size={100}
                src="/avatarprofile.jpg"
                className="rounded-full border-solid border-4 border-grey"
                style={{
                  clipPath:
                    "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
                }}
              />
              <p className="absolute bottom-0 right-0 bg-white text-black px-1 py-0.5 rounded text-xxxs">
                Online
              </p>
            </div>
            {/* Grace Nabulime's information */}
            <div className="mt-2 text-center">
              <p className="text-sm font-semibold">Grace Nabulime</p>
              <p className="text-xs">@GraceNabulime</p>
            </div>
            {/* Button for Grace */}
            <div className="mt-2">
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>
          </div>
          {/* New Members section */}
          <div className="text-left">
            <h3 className="text-sm font-semibold mb-2">New Members</h3>
            {/* Display avatars and information for all members */}
            <div className="flex flex-wrap justify-center">
              {members.map((member, index) => (
                <div key={index} className="flex items-center m-2">
                  <Avatar
                    size={40}
                    src={member.avatar}
                    alt={member.name}
                    className="mr-2 rounded-full border-solid border-2 border-gray-200"
                  />
                  <div>
                    <p className="text-sm font-semibold">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.username}</p>
                    <p className="text-xs text-gray-500">{`Last active: ${member.lastActive}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell.Aside>
  );
}

export default Aside;
