import React from 'react'



function InputOption({title, Icon, color, onClick}) {
  return (
    <div onClick={onClick} className='flex items-center text-gray-500 mt-3 p-3 cursor-pointer h-fit rounded-lg hover:bg-gray-100'>
    <Icon style={{color:color}}/>
    <p className='ml-1'>{title}</p>

    </div>
  )
}

export default InputOption