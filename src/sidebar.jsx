import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const linkedinBG = "https://media.licdn.com/dms/image/C4D16AQEeaG9UoRlPOw/profile-displaybackgroundimage-shrink_350_1400/0/1659960977387?e=1681948800&v=beta&t=pc2Ty_TiJwguDMbT5Lywvz0mhvE7WsgOe5_rinP2i-4";
const avatarBG = "https://media.licdn.com/dms/image/D4D03AQFYLpSCHKd5Pw/profile-displayphoto-shrink_400_400/0/1668921443240?e=1681948800&v=beta&t=QLrUL6y-TV40e4l6xaRw-JAt7cLZ16vHadX-r2zL65w";


function SideBar() {
    
    const user = useSelector(selectUser);
    const ResentItem = ({item})=>{
        return(
            <div className='flex px-10 text-lg hover:rounded-lg hover:bg-gray-300 hover:cursor-pointer hover:text-black'>
            <span>#</span>
            <p>{item}</p>
        </div>
        )
    }
        
  return (
    <div className='flex-initial w-1/5 sticky top-32 z-99 mt-5 text-center h-fit'>
    <div className="sidebar__top flex-col border-1 items-center border-gray-400  pb-3 rounded-xl bg-white">
        
        <img className='-m-4 w-full object-cover' src= {linkedinBG} />
        <Avatar src={user.profilePic} className='mb-2 mx-auto !w-10 !h-10'> 

        {!user.profilePic? user.displayName[0] : null }

         </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
    </div>

    <div className="sidebar__middle bg-white p-3 rounded-xl border-1 border-gray-400">

    <div className='flex justify-between text-left text-gray-500 font-bold text-sm  '>
        <p>Who's viewed your profile</p>
        <p>14</p>
    </div>
    <div className='flex justify-between text-left text-gray-500 font-bold text-sm'>
        <p>views on posts</p>
        <p>14</p>
    </div>

    </div>

    <div className="sidebar__bottom flex-col text-left  ">

    <div>
        <p>Recent</p>
    </div>
    <ResentItem  item=  {"React.js"} />
    <ResentItem item= {"React.js"} />
    <ResentItem item= {"React.js"} />
    <ResentItem item= {"React.js"} />
    <ResentItem  item= {"React.js"} />
    
    
    </div>

    
    
    </div>
  )
}

export default SideBar