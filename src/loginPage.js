import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebse';
import { login } from './features/userSlice';

function Login() {
    const [fullName, setFullNAme] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const signin = (e)=> {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName:fullName,
                        profilePic:profilePic

            })).catch(error=>alert(error))
        })
        
        
    }

    const register = ()=>{
        if(!fullName){alert("Please enter your full name")}
             auth.createUserWithEmailAndPassword(email,password)
             .then((userAuth) => {
                userAuth.user
                .updateProfile({
                    displayName : fullName,
                    profilePic : profilePic
                })
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName:fullName,
                        profilePic:profilePic
                    }));
                });
             }).catch(error => alert(error.message) )
             };
        

  return (
    <div className=' flex flex-col items-center py-24 place-items-center'>
    <img className='h-16 object-contain my-5' src='https://cdn.wmaraci.com/nedir/linkedin.png' />
    <form className='flex flex-col items-center'>
        <input className='h-12 w-80 border-2 rounded-md mb-3 p-3' value = {fullName} onChange={e=>(setFullNAme(e.target.value))}  placeholder='Full Name' type="text" />
        <input className='h-12 w-80 border-2 rounded-md mb-3 p-3' value = {profilePic} onChange={e=>(setProfilePic(e.target.value))}  placeholder='Profile Photo URL' type="text" />
        <input className='h-12 w-80 border-2 rounded-md mb-3 p-3'value = {email} onChange={e=>(setEmail(e.target.value))} placeholder='Email' type="text" />
        <input  className='h-12 w-80 border-2 rounded-md mb-3 p-3' value = {password} onChange={e=>(setPassword(e.target.value))} placeholder='Password' type="password" />
        <button className='h-12 w-80 border-2 rounded-md mb-3 p-3 bg-blue-400 text-lg text-white text-center place-items-center' onClick={signin}>Login</button>
    </form>
    <div className='flex space-x-1'>
        <span> not a member? </span> <a className='text-blue-500 cursor-pointer' onClick={register}>  Register Now</a>  
        </div>
    </div>
  )
}

export default Login