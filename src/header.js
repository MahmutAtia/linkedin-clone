import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './header_option';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebse';
function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logoutOfApp = ()=> {
    dispatch(logout());
    auth.signOut();
  };
  
  return (
    <div className='flex justify-evenly sticky top-0 z-999 border-b-2 py-3 sticky  w-full bg-white'>
    {/* left container */}
        <div className='flex items-center'>
        <img className='object-contain h-10 m-2' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />
                 {/* search */}

                <div className=' flex-row items-center h-9 bg-searchbg p-2.7 h-6 border-r-1 p-2 text-gray-500'> 
                <SearchIcon />
                <input className='outline-none border-none bg-transparent' type="text"/>
                </div>
        </div>

     {/* right container */}
     <div className='flex bg-red-500'></div>
        <HeaderOption title="Home" Icon={HomeIcon } />
        <HeaderOption title="Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jops" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messagin" Icon={ChatIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOption title="Me" onClick={logoutOfApp} avatar={true}/>



    </div>
  )
}

export default Header