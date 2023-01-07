import { NavLink } from "react-router-dom";
import Theme from "../Theme/Theme";
import Cart from '../../images/cart.png';
import UserMenu from "../Header/UserMenu";

const MobileMenu = ({ isOpen = false }) => {
    return (
      <>
          <div className={`absolute top-0 left-0 right-0 bg-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>            
          </div>
          <div className={`absolute right-0 top-0 w-1/2 bg-gray-800 z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
                <div className='text-white flex flex-col text-xl my-20 space-y-5'>
                    <ul className='text-white text-2xl flex flex-col'>
                        <li className=' hover:text-[#61dafb]'><NavLink to="/">Home</NavLink></li>
                        <li className=' hover:text-[#61dafb]'><NavLink to="/products">Products</NavLink></li>
                        <li className=' hover:text-[#61dafb]'><NavLink to="/about">About</NavLink></li>
                        <li className=' hover:text-[#61dafb]'><NavLink to="/contacts">Contacts</NavLink></li> 
                        <li className=' hover:text-[#61dafb]'><NavLink to="/search">Search</NavLink></li>          
                    </ul>                
                    <Theme />
                    <NavLink to="/cart"><img className="w-12 h-12" src={Cart} alt="cart" /></NavLink>
                    <UserMenu />           
                </div>
          </div>
      </>
    )
  }

export default MobileMenu