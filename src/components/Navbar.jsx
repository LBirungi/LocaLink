import React, { useState } from "react";
import { IconHome,IconTrash,IconMenu2,IconSettingsCog,IconMap } from '@tabler/icons-react';
import { BellRinging,Briefcase,BrandWechat,} from 'tabler-icons-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-bold">Localink</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block">
              <button
                onClick={toggleMenu}
                className="inline-block px-3 py-2 text-white hover:text-gray-300 focus:outline-none"
              >
                Toggle Menu
              </button>
              {menuOpen && (
                <div className="absolute mt-2 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <MenuItem icon={<IconHome size={20} strokeWidth={1} color="black" />} text="Home" />
                    <MenuItem icon={<IconMap size={20} strokeWidth={1} color="black" />} text="Discover" />
                    <MenuItem icon={<Briefcase size={20} strokeWidth={1} color="black" />} text="Opportunities" />
                    <MenuItem icon={<BellRinging size={20} strokeWidth={1} color="black" />} text="Notifications" />
                    <MenuItem icon={<IconSettingsCog size={20} strokeWidth={1} color="black" />} text="Help/FAQs" />
                    <MenuItem icon={<IconTrash size={20} strokeWidth={1} color="black" />} text="Delete my account" color="red" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// MenuItem component to render individual items in the menu
const MenuItem = ({ icon, text, color }) => {
  return (
    <button className={`block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${color ? `text-${color}-500` : ''}`}>
      {icon}
      {text}
    </button>
  );
};

export default Navbar;
