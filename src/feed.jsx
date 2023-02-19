import React ,{useState, useEffect}from 'react'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Post from './post';
import {db} from "./firebse"
import firebase from 'firebase/compat/app';
import { collection, addDoc } from "firebase/firestore"; 
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function  Feed() {
    const user = useSelector(selectUser);
    const [posts , setPosts] = useState([]);
    const [input, setInput]  = useState("")
  
    
    {/* load the posts once from the database and update posts*/}
    useEffect(() => {
        
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot(snapshot=>(
            setPosts(
                snapshot.docs.map(
                    doc => ({
                         
                        id : doc.id,
                        data:doc.data()
                    })
                )

            )
        ))}
        , []);



    {/*Sending a post*/}

        const sendPost = async (e) => {
            e.preventDefault();  
           
            try {
                const docRef = await addDoc(collection(db, "posts"), {
                    name: user.displayName,
                    description:user.email,
                    message: input,
                    imgUrl : "",
                    timeStamp : firebase.firestore.FieldValue.serverTimestamp()
        
                });
                console.log("Document written with ID: ", docRef.id);
                setInput("")
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
     
      console.log(posts)

  return (
    <div className="flex-initial w-3/5">
    <div className='flex-col  mx-5 mb-2 p-10 bg-white rounded-lg mt-5 h-fit'>
        <div className='Input_feed flex border rounded-2xl p-3 pl-4 border-gray-400 hover:bg-gray-400'>
        <CreateIcon />
        <form className='flex w-full justify-between'>
        <input onChange={(e)=>(setInput(e.target.value))} value={input} type="text"  className='border-none ml-3 outline-none w-full '/>
        <button onClick={sendPost} type='submit'>Send</button>
        </form>
        </div>
        <div className='Icons_feed flex justify-evenly'>
            <InputOption title="Photo" Icon= {ImageIcon} color={"#378FE9"} />
            <InputOption title="Photo" Icon= {SubscriptionsIcon} color={"#378FE9"} />
            <InputOption title="Photo" Icon= {EventIcon} color={"#378FE9"} />
            <InputOption title="Photo" Icon= {CalendarTodayIcon} color={"#378FE9"} />

        </div>
    </div>
    <FlipMove>
  {  posts.map(({id,data:{name , description ,message, profilePic}}) => (
     <Post key={id} title={name} description={description} message= {message} imgUrl={profilePic} />
        
    ))}
    </FlipMove>
    

     </div>

  )
}

export default Feed