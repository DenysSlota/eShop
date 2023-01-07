import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../images/icon-close-menu.svg';
import Theme from "../Theme/Theme";
import MobileMenu from "../MobileMenu/MobileMenu";
import UserMenu from "./UserMenu";
import Cart from '../../images/cart.png';




const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <header className='bg-gray-800 fixed top-0 left-0 right-0 z-10'>
        <div className='h-[80px] flex justify-between items-center max-w-[1280px] mx-auto px-10'>
          <div className='text-white text-2xl font-medium cursor-default mr-4'>eShop</div>
            <ul className='text-white text-xl hidden md:flex justify-between mx-2 space-x-8 xl:space-x-20'>
                <li className=' hover:text-[#61dafb]'><NavLink to="/">Home</NavLink></li>
                <li className=' hover:text-[#61dafb]'><NavLink to="/products">Products</NavLink></li>
                <li className=' hover:text-[#61dafb]'><NavLink to="/about">About</NavLink></li>
                <li className=' hover:text-[#61dafb]'><NavLink to="/contacts">Contacts</NavLink></li>
                <li className=' hover:text-[#61dafb]'><NavLink to="/search">Search</NavLink></li>           
            </ul>
          <div className='hidden md:flex items-center mx-4 space-x-2'>
            <Theme />
            <NavLink to="/cart"><img className="w-10 h-10 md:w-8 md:h-8" src={Cart} alt="cart" /></NavLink>
            <UserMenu />            
          </div>
          <div 
            className="flex md:hidden ml-auto cursor-pointer z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >          
            {isMobileMenuOpen ? <CloseMenuIcon /> : <MenuIcon />}
          </div>
          <MobileMenu isOpen={isMobileMenuOpen} />
        </div>
      </header>
    );
  };
  
  export default Header;


  