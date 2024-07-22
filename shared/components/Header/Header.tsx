import React from 'react';
import  Link  from 'next/link';


interface HeaderProps {
  username: string;
  profilePicture: string;
}

const Header: React.FC<HeaderProps> = ({ username, profilePicture }) => {
  return (
    <header className="h-screen w-full bg-whiteLight1 flex justify-between items-center py-4">
      <div className="header-logo flex items-center">
        <Link href="/">
          <a>
            <img src="/foody-logo.png" alt="Foody Logo" className="h-8 w-8" />
          </a>
        </Link>
      </div>
      <div className="header-nav flex justify-between items-center">
        <ul className="flex justify-between items-center">
          <li className="mr-4">
            <Link href="/admin/dashboard">
              <a className="text-grayText1 hover:text-darkBlue1 transition duration-300 ease-in-out">
                Dashboard
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/admin/products">
              <a className="text-grayText1 hover:text-darkBlue1 transition duration-300 ease-in-out">
                Products
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/admin/orders">
              <a className="text-grayText1 hover:text-darkBlue1 transition duration-300 ease-in-out">
                Orders
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/admin/users">
              <a className="text-grayText1 hover:text-darkBlue1 transition duration-300 ease-in-out">
                Users
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/admin/settings">
              <a className="text-grayText1 hover:text-darkBlue1 transition duration-300 ease-in-out">
                Settings
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-profile flex items-center">
        <img src={profilePicture} alt={username} className="h-8 w-8 rounded-full" />
        <span className="text-grayText1 ml-2">{username}</span>
        
        
      </div>
    </header>
  );
};

export default Header;