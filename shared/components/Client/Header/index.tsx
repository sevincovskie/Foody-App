

import Link from 'next/link';
import ClientNavbar from '../Navbar/ClientNavbar';
import ClientFooter from '../Footer/ClientFooter';



const Header: React.FC = () => {
  

  return (
  <>
      <header className="">
      <nav className="flex justify-between  items-center m-0 rounded-md py-11 px-5 sm:m-8   cursor-pointer   bg-mainGray sm:p-11">
      <Link href="/" className="text-black text-lg font-bold">
          <h2>Foody<span>.</span></h2>
        </Link>
        <ClientNavbar/>
      
      </nav>
      
    </header>
    <ClientFooter/>
  </>

  );
};

export default Header;
