import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import InputOption from './InputOption';

const Post= forwardRef(({title,message , description , imgUrl},ref)  => {
  return (
    <div  ref={ref} className='flex-col z-0  mx-5 mb-2 p-5 bg-white rounded-lg mt-5 h-fit'>
    <div className='post__header flex items-center '>
        <Avatar src={imgUrl} className='mr-2' >
        {!imgUrl? title[0]: null}
        </Avatar>
        <div>
        <h2 className='text-md font-bold '  > {title}</h2>
        <p className='text-sm text-gray-500 leading-none'> {description}</p>
        </div>
    </div>
    <div className='post__body flex-col flex-wrap p-2'>
        <p> {message} </p>
        </div>
        <div className='post_buttons flex justify-items-start space-x-3 font-bold '>
        <InputOption  Icon={ThumbUpIcon} title={"Like"} />
        <InputOption Icon={ChatIcon} title={"Comment"} />
        <InputOption Icon={ShareIcon} title={"Share"}/>
        <InputOption Icon={SendIcon} title={"Send"}/>

        </div>

    </div>
  )
});

export default Post