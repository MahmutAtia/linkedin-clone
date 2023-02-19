import { Avatar, Icon } from '@material-ui/core'
import React from 'react'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function HeaderOption({title, Icon, avatar, onClick}) {
  const user = useSelector(selectUser);
  const url = "";
  return (
    <div onClick={onClick} className='flex-col items-center cursor-pointer text-gray-500 hover:text-black   !w-1  '>
    {Icon &&  <Icon className='object-contain !h-6 !w-6' />}
    {avatar && <Avatar className='object-contain !h-6 !w-6'  >
  { user &&  user.displayName[0] }     </Avatar>}
    <h3 > {title}</h3>
    </div>
  )
}

export default HeaderOption