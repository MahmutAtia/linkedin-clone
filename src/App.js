import './App.css';
import Header from './header';
import SideBar from './sidebar';
import Feed from './feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser, logout } from './features/userSlice';
import Login from './loginPage';
import { auth } from './firebse';
import { useEffect } from 'react';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("its working")
 auth.onAuthStateChanged( user=>{
      if (user){
        dispatch(
          login({
            email:user.email,
            uid : user.uid,
            displayName:user.displayName,
            profilePic:user.profilePic
          })
        )
      }else{
        dispatch(logout());
      }
  
  
    })}, []);

  return (
    <div className='flex-col bg-inbg items-center'>
   <Header />
  
    {!user ? 
    <Login /> 
    :
    <div className='app__body flex'>
    <SideBar />
     <Feed />
    </div>

    }
    </div>
  );
}

export default App;
