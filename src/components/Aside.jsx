import React from "react";
import { AppShell, Avatar, Button } from "@mantine/core";

const members = [
  {
    name: "Grace Nabulime",
    username: "@GraceNabulime",
    lastActive: "Online",
    avatar: "/avatarprofile.jpg", // Path to Grace's avatar image
    recentActivity: "Liked a post", // Recent activity for Grace
  },
  {
    name: "Johnson Byaruhanga",
    username: "@JohnsonB",
    lastActive: "3 hours ago",
    avatar: "/johnson.jpg", // Path to Johnson's avatar image
    recentActivity: "Commented on a project", // Recent activity for Johnson
  },
  {
    name: "Ronnie Kagulie",
    username: "@RonnieK",
    lastActive: "5 days ago",
    avatar: "/ronnie.jpg", // Path to Ronnie's avatar image
    recentActivity: "Shared an activity", // Recent activity for Ronnie
  },
];

function RecentActivity({ member }) {
  return (
    <div key={member.name} className="mb-2">
      <p className="text-gray-500">
        <span className="font-semibold">{member.name}</span>{" "}
        {member.recentActivity} <span className="text-gray-700">• {member.lastActive}</span>
      </p>
    </div>
  );
}

function Aside() {
  return (
    <AppShell.Aside p="md" className="h-full px-4 bg-blue-950">
      <div className="flex justify-center items-start min-h-screen text-white">
        <div className="flex flex-col items-center w-full">
          {/* Profile section for Grace Nabulime */}
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
          </div>

          {/* New Members section */}
          <div className="text-left">
            <h3 className="text-sm font-semibold mb-2">New Members</h3>
            {/* Display avatars, information, and Follow button for all members */}
            <div className="flex flex-wrap justify-center">
              {members.slice(1).map((member, index) => (
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
                    <Button variant="outline" size="xs" className="mt-1">
                      Follow
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity section */}
          <div className="mt-6 text-left">
            <h3 className="text-sm font-semibold mb-2">Recent Activity</h3>
            {/* Display recent activity for all members */}
            <div className="text-xs">
              {members.map((member) => (
                <RecentActivity member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell.Aside>
  );
}

export default Aside;
