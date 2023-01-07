import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../redux/users/reducer";
import User from '../../images/user.svg';

const UserMenu = () => {
    const auth = useSelector(state => state.users.auth);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleUser = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        dispatch(signOut());
    }

  return (
    <>
        <div className="flex items-center w-10 h-10 md:w-8 md:h-8 cursor-pointer" onClick={handleUser}>
            <img className="w-10 h-10 md:w-8 md:h-8" src={User} alt="user" />
        </div>
        <div className={`absolute right-0 xl:right-60 top-[420px] md:top-20 w-64 bg-gray-800 rounded-xl z-20 justify-center h-52 ${isOpen ? 'flex' : 'hidden'}`}>                
            <div className='text-white text-2xl flex flex-col my-4 space-y-5'>
                {
                    auth ?
                    <div onClick={handleClick} className=' hover:text-[#61dafb]'><NavLink to="/">SignOut</NavLink></div>                                 
                    :
                    <div className=' hover:text-[#61dafb]'><NavLink to="/signin">SignIn</NavLink></div>
                }
                <div className=' hover:text-[#61dafb]'><NavLink to="/signup">SignUp</NavLink></div>
            </div>                
        </div>
    </>
  )
}

export default UserMenu;