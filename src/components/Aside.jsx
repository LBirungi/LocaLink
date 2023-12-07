import React from "react";
import { Avatar, Button, Card } from "@mantine/core";

const members = [
  {
    name: "Grace Nabulime",
    username: "@GraceNabulime",
    lastActive: "Online",
    avatar: "/avatarprofile.jpg",
    recentActivity: "Liked a post",
  },
  {
    name: "Johnson Byaruhanga",
    username: "@JohnsonB",
    lastActive: "3 hours ago",
    avatar: "/johnson.jpg",
    recentActivity: "Commented on a project",
  },
  {
    name: "Ronnie Kagulire",
    username: "@RonnieK",
    lastActive: "5 days ago",
    avatar: "/ronnie.jpg",
    recentActivity: "Shared an activity",
  },
];

function RecentActivity({ name, recentActivity, lastActive }) {
  return (
    <div className="mb-2">
      <p className="text-gray-500">
        <span className="font-semibold">{name}</span>{" "}
        {recentActivity} <span className="text-gray-700">• {lastActive}</span>
      </p>
    </div>
  );
}

function Aside() {
  return (
    <aside className="p-4 bg-blue-950 h-full">
      <div className="flex flex-col items-center justify-start text-white h-full">
        {/* Avatar section at the top */}
        <div className="mt-4 mb-6">
          <div className="relative">
            <Avatar
              variant="outline"
              radius="xl"
              size={200}
              src="/avatarprofile.jpg"
              className="rounded-full border-solid border-14 border-white"
              style={{
                clipPath:
                  "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
              }}
            />

            <p className="absolute bottom-0 right-0 bg-white text-black px-1 py-0.5 rounded text-xxxs">
              Online
            </p>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm font-semibold">Grace Nabulime</p>
            <p className="text-xs">@GraceNabulime</p>
          </div>
        </div>

        {/* New Members section centered and shifted down */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-semibold mb-2">New Members</h3>
          <div className="flex flex-wrap justify-center">
            {members.slice(1).map((member, index) => (
              <div key={index} className="flex items-center m-2">
                <Avatar
                  size={100}
                  src={member.avatar}
                  alt={member.name}
                  className="mr-2 rounded-full border-4 border-gray-200"
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

        {/* Recent Activity section centered and moved down */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
          <div className="text-xs">
            {members.map((member, index) => (
              <RecentActivity
                key={index}
                name={member.name}
                recentActivity={member.recentActivity}
                lastActive={member.lastActive}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
