import React from "react";
import "../App.css";

import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
const { useState } = React;

const employeeData = [
  {
    id: 1,
    name: "Lillian Birungi",
    username: "@LillianBirungi",
    rise: true,
    location: "Nansana",
    url: "/Lillian.jpeg",
    lastSeen: "3 days ago",
  },

  {
    id: 2,
    name: "Ronnie Kagulire",
    username: "@RonnieKagulire",
    rise: false,
    location: "Katabi",
    url: "/Ronald.png",
    lastSeen: "3 days ago",
  },

  {
    id: 3,
    name: "Johnson Byaruhanga",
    username: "@JohnsonByaruhanga",
    rise: true,
    location: "Seeta",
    url: "/Johnson.png",
    lastSeen: "20 days ago",
  },
];

const items = [
  {
    image: "/santa.jpeg",
    title: "Santa is Coming to Town",
    description:
      "Uniting Communities,spreading love and crossing cultural boundaries",
    authorImage: "/Ronald.png",
  },
  {
    image: "/plumber.jpg",
    title: "Professional plumbing services in your area",
    description:
      "From installations to repairs, we fix leaks, manage drainage, and ensure efficient water systems for homes and businesses. Reliable solutions for your plumbing needs!.",
    authorImage: "/Johnson.png",
  },

  {
    image: "/immunisation.webp",
    title: "Are your child's vaccines up to date – immunise!",
    description:
      " Your action today secures a healthier tomorrow for them and their community. Stay strong, stay safe, and vaccinate!",
    authorImage: "/Lillian.jpeg",
  },
];

const Countrydata = [
  { name: "Makindye", Members: 31190, id: 1, join: true },
  { name: "Nateete", Members: 11910, id: 2 },
  { name: "Najjera", Members: 1920, id: 3 },
  { name: "Muyenga", Members: 1812, id: 4 },
];

const Posts = [
  { feed: "Flooded Roads", Post: 1190, id:1, },
  { feed: "New Year Events",Post: 1910,id:2 },
  { feed: "Thieves Caught", Post: 1920, id: 3 },
  { feed: "Christmas Rush", Post: 1812, id: 4 },
];


const sidebarItems = [
  [
    { id: "0", title: "Home", dashboard: false },
    { id: "1", title: "Discover", dashboard: false },
    { id: "2", title: "Opportunities", dashboard: false },
    { id: "3", title: "Services", dashboard: false },
  ],

  [
    { id: "4", title: "Notifications", dashboard: 5 },
    { id: "5", title: "Messages", dashboard: 8 },
    { id: "6", title: "Groups", dashboard: 6 },
  ],
  [
    { id: "7", title: "About Us", dashboard: false },
    { id: "8", title: "Contact Us", dashboard: false },
    { id: "9", title: "Help/FAQs", dashboard: false },
    { id: "10", title: "Settings", dashboard: false },
  ],
];

const Dashboard = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      />
    </div>
  );
};

const handleJoin = (communityId) => {
  // Here, you can implement the logic for joining a community
  // For example, you might make an API call to join the community
  // or update the state to indicate that the user has joined this community

  // For demonstration purposes, let's log a message indicating the community ID being joined
  console.log(`Joining community with ID: ${communityId}`);
};


function Sidebar({ onSidebarHide, showSidebar }) {
  const [selected, setSelected] = useState("0");
  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
            Localink
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        <div className="w-full p-2 h-14 sm:h-10 xl:h-5 hidden sm:block flex-shrink-0"></div>

        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className="mt-4 mb-0 font-bold px-3 block sm:hidden xl:block">
          NOTIFICATIONS
        </div>

        {sidebarItems[1].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className="mt-4 mb-0 font-bold px-3 block sm:hidden xl:block">
          LINK US
        </div>
        {sidebarItems[2].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}

       

        <div className="flex-grow" />
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <Image url="/Grace.jpg" className="w-10 h-10" />
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            Grace Mukisa
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <Icon
            path="res-react-dash-options"
            className="block sm:hidden xl:block w-3 h-3"
          />
        </div>
      </div>
    </div>
  );
}
function MenuItem({ item: { id, title, dashboard }, onClick, selected }) {
  return (
    <div
      className={clsx(
        "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
        selected === id ? "sidebar-item-selected" : "sidebar-item"
      )}
      onClick={() => onClick(id)}
    >
      <SidebarIcons id={id} />
      <div className="block sm:hidden xl:block ml-2">{title}</div>
      <div className="block sm:hidden xl:block flex-grow" />
      {dashboard && (
        <div className="flex sm:hidden xl:flex bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2">
          <div className="text-white text-sm">{dashboard}</div>
        </div>
      )}
    </div>
  );
}
function Content({ onSidebarHide }) {
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white">Hello Grace</div>
              </div>
              
            </div>
            <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={onSidebarHide}
            />
          </div>
          <div className="mr-4">
          <button
          type="button"
          className="bg-blue-600 py-2 inline-flex px-4 flex items-center font-semibold justify-center gap-x-2 text-md font-semibold rounded-lg border border-transparent text-white  hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-square-rounded-plus text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            <path d="M15 12h-6" />
            <path d="M12 9v6" />
          </svg>
        </button>
          </div>

          <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
            <Icon
              path="res-react-dash-search"
              className="w-5 h-5 search-icon left-3 absolute"
            />

            <form action="#" method="POST">
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                placeholder="search Localink"
              />
            </form>
            
          </div>
          
        </div>
        {employeeData.map(
          ({ id, name, username, rise, location, url, lastSeen }) => (
            <NameCard
              key={id}
              id={id}
              name={name}
              username={username}
              rise={rise}
              location={location}
              url={url}
              lastSeen={lastSeen}
            />
          )
        )}

        <div className="w-full p-2 lg:w-1/2">
          <div className="rounded-lg bg-card sm:h-80 ">
            <Card />
          </div>
        </div>

        <div className="w-full p-2 lg:w-1/2">
          <div className="rounded-lg bg-card h-80">
            <NearbyCommunities />
          </div>
        </div>
        <div className="w-full p-2 lg:w-3/3">
          <div className="rounded-lg bg-card overflow-hidden h-80">
            <Headlines />
          </div>
        </div>
      </div>
    </div>
  );
}

function NameCard({ name, username,location, url, lastSeen }) {
  
  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className="rounded-lg bg-card flex justify-between p-3 h-32">
        <div className="">
          <div className="flex items-center">
            <Image url={url} className="w-11 h-11" />
            <div className="ml-2">
              <div className="flex items-center">
                <div className="mr-2 font-bold text-white">{name}</div>
                <Icon path="res-react-dash-tick" />
              </div>
              <div className="text-sm ">{username}</div>
            </div>
          </div>

          <div className="text-sm  mt-2">{`${location}`}</div>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Connect
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-affiliate"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
              <path d="M11.683 12.317l5.759 -5.759" />
              <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
              <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
              <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
              <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
            </svg>
          </button>
          <div className="text-sm py-6">{lastSeen}</div>
        </div>
      </div>
    </div>
  );
}

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full pt-4 sm:h-80 h-60 ">
      <div className="overflow-hidden w-full ">
        <div
          className="flex h-60 transition-transform duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-none w-full ">
              <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" h-2 w-1/3 h-full object-cover"
                />
                {""}
                {/* The image fills half the width and the full height of the card */}
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h1 className="mt-auto text-xl font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-gray-700 py-4">{item.description}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                        <img
                          alt="profile"
                          src={item.authorImage} //item.authorImage Lillian.jpeg
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium leading-none">
                        {item.authorName}
                      </p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 z-10 p-2 text-white bg-black bg-opacity-50"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 z-10 p-2 text-white bg-black bg-opacity-50"
      >
        Next
      </button>
    </div>
  );
};

function Card() {
  return (
    <div className="flex p-4 h-full flex-col">
      <div className="">
        <div className="flex items-center">
          <div className="font-bold text-white">Local Faves</div>
          <div className="flex-grow" />
        </div>
      </div>
      <div className="">
        <Carousel className="bg-pink-400 h-2/3" items={items} />
      </div>
    </div>

  );
}





function NearbyCommunities() {
  return (
    <div className="flex p-4 flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Communities</div>
        <Icon path="res-react-dash-plus" className="w-5 h-5" />
      </div>
      <div className="flex gap-4">Areas</div>
      {Countrydata.map(({ name, Members, id, join }) => (
        <div className="flex items-center mt-3" key={id}>
          <div className="">{id}</div>

          <div className="ml-3">{name}</div>
          <div className="flex-grow" />
          {/* <div className="ml-1">
            Members
            <div className="ml-2">{`${Members.toLocaleString()}`}</div>
          </div> */}
         
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 rounded-md">
          <span>
            
            </span>
      Join
    </button>
        </div>
      ))}
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div className="">See More</div>
      </div>
    </div>
  );
}

function TrendingPosts() {
  return (
    <div className="flex p-4 flex-col h-full justify-between ">
      <div className="flex gap-4 mt-4">Trending</div>
      {Posts.map(({ feed, Post, id,views}) => (
        <div className="flex items-center mt-3" key={id}>
          <div className="py-1">{id}</div>

          <div className="ml-2">{feed}</div>
          <div className="flex-grow" />
          <div className="flex gap-8">
            Views
            <div className="flex-grow flex gap-8">{`${Post.toLocaleString()}`}</div>
          </div>
        </div>
      ))}
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div className="">See More</div>
      </div>
    </div>
  );
}

function Headlines() {
  return (
    <div className="flex justify-center w-full px-4 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-screen-lg w-full">
        {/* Header */}
        <div className="mt-10 h-8 lg:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <h2 className="text-lg lg:text-xl font-semibold text-white">Trending Posts</h2>
        </div>
        {/* TrendingPosts component */}
        <div className="overflow-hidden">
          <TrendingPosts />
        </div>
      </div>
    </div>
  );
}



function SidebarIcons({ id }) {
  const icons = {
    0: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-home"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </>
    ),
    1: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-map-pin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
      </>
    ),
    2: (
      <>
        <path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 14H7V12H17V14Z" />
      </>
    ),
    3: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-briefcase"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
        <path d="M12 12l0 .01" />
        <path d="M3 13a20 20 0 0 0 18 0" />
      </svg>
    ),
    4: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-message-chatbot"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
        <path d="M9.5 9h.01" />
        <path d="M14.5 9h.01" />
        <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
      </svg>
    ),
    5: (
      <>
        <path d="M2 4V18L6.8 14.4C7.14582 14.1396 7.56713 13.9992 8 14H16C17.1046 14 18 13.1046 18 12V4C18 2.89543 17.1046 2 16 2H4C2.89543 2 2 2.89543 2 4ZM4 14V4H16V12H7.334C6.90107 11.9988 6.47964 12.1393 6.134 12.4L4 14Z" />
        <path d="M22 22V9C22 7.89543 21.1046 7 20 7V18L17.866 16.4C17.5204 16.1393 17.0989 15.9988 16.666 16H7C7 17.1046 7.89543 18 9 18H16C16.4329 17.9992 16.8542 18.1396 17.2 18.4L22 22Z" />
      </>
      // <>
      //   <path d="M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z" />
      //   <path d="M11 16H13V18H11V16Z" />
      // </>
    ),
    6: (
      <>
        <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" />
        <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" />
        <path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" />
        <path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" />
      </>
    ),

    7: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-info-hexagon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
        <path d="M12 9h.01" />
        <path d="M11 12h1v4h1" />
      </svg>
    ),
    8: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-phone-call"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        <path d="M15 7a2 2 0 0 1 2 2" />
        <path d="M15 3a6 6 0 0 1 6 6" />
      </svg>
    ),
    9: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-help-square-rounded"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        <path d="M12 16v.01" />
        <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
      </svg>
    ),

    10: (
      <>
        <path d="M13.82 22H10.18C9.71016 22 9.3036 21.673 9.20304 21.214L8.79604 19.33C8.25309 19.0921 7.73827 18.7946 7.26104 18.443L5.42404 19.028C4.97604 19.1709 4.48903 18.9823 4.25404 18.575L2.43004 15.424C2.19763 15.0165 2.2777 14.5025 2.62304 14.185L4.04804 12.885C3.98324 12.2961 3.98324 11.7019 4.04804 11.113L2.62304 9.816C2.27719 9.49837 2.19709 8.98372 2.43004 8.576L4.25004 5.423C4.48503 5.0157 4.97204 4.82714 5.42004 4.97L7.25704 5.555C7.5011 5.37416 7.75517 5.20722 8.01804 5.055C8.27038 4.91269 8.53008 4.78385 8.79604 4.669L9.20404 2.787C9.30411 2.32797 9.71023 2.00049 10.18 2H13.82C14.2899 2.00049 14.696 2.32797 14.796 2.787L15.208 4.67C15.4888 4.79352 15.7623 4.93308 16.027 5.088C16.274 5.23081 16.5127 5.38739 16.742 5.557L18.58 4.972C19.0277 4.82967 19.5142 5.01816 19.749 5.425L21.569 8.578C21.8015 8.98548 21.7214 9.49951 21.376 9.817L19.951 11.117C20.0158 11.7059 20.0158 12.3001 19.951 12.889L21.376 14.189C21.7214 14.5065 21.8015 15.0205 21.569 15.428L19.749 18.581C19.5142 18.9878 19.0277 19.1763 18.58 19.034L16.742 18.449C16.5095 18.6203 16.2678 18.7789 16.018 18.924C15.7559 19.0759 15.4854 19.2131 15.208 19.335L14.796 21.214C14.6956 21.6726 14.2895 21.9996 13.82 22ZM7.62004 16.229L8.44004 16.829C8.62489 16.9652 8.81755 17.0904 9.01704 17.204C9.20474 17.3127 9.39801 17.4115 9.59604 17.5L10.529 17.909L10.986 20H13.016L13.473 17.908L14.406 17.499C14.8133 17.3194 15.1999 17.0961 15.559 16.833L16.38 16.233L18.421 16.883L19.436 15.125L17.853 13.682L17.965 12.67C18.0142 12.2274 18.0142 11.7806 17.965 11.338L17.853 10.326L19.437 8.88L18.421 7.121L16.38 7.771L15.559 7.171C15.1998 6.90671 14.8133 6.68175 14.406 6.5L13.473 6.091L13.016 4H10.986L10.527 6.092L9.59604 6.5C9.39785 6.58704 9.20456 6.68486 9.01704 6.793C8.81878 6.90633 8.62713 7.03086 8.44304 7.166L7.62204 7.766L5.58204 7.116L4.56504 8.88L6.14804 10.321L6.03604 11.334C5.98684 11.7766 5.98684 12.2234 6.03604 12.666L6.14804 13.678L4.56504 15.121L5.58004 16.879L7.62004 16.229ZM11.996 16C9.7869 16 7.99604 14.2091 7.99604 12C7.99604 9.79086 9.7869 8 11.996 8C14.2052 8 15.996 9.79086 15.996 12C15.9933 14.208 14.204 15.9972 11.996 16ZM11.996 10C10.9034 10.0011 10.0139 10.8788 9.99827 11.9713C9.98262 13.0638 10.8466 13.9667 11.9387 13.9991C13.0309 14.0315 13.9469 13.1815 13.996 12.09V12.49V12C13.996 10.8954 13.1006 10 11.996 10Z" />
      </>
    ),
  };
  return (
    <svg
      className="w-8 h-8 xl:w-5 xl:h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[id]}
    </svg>
  );
}

function Icon({ path = "options", className = "w-4 h-4" }) {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.svg`}
      alt=""
      className={clsx(className)}
    />
  );
}

function IconButton({
  onClick = () => {},
  icon = "options",
  className = "w-4 h-4",
}) {
  return (
    <button onClick={onClick} type="button" className={className}>
      <img
        src={`https://assets.codepen.io/3685267/${icon}.svg`}
        alt=""
        className="w-full h-full"
      />
    </button>
  );
}

function Image({ url, className = "w-4 h-4" }) {
  return <img src={url} alt="" className={clsx(className, "rounded-full")} />;
}

export default Dashboard;
