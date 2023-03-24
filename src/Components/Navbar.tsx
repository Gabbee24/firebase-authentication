import {Link} from 'react-router-dom';
import {auth} from '../Config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';
import { async } from '@firebase/util';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const [activeNav, setActiveNav] = useState('');
    console.log(activeNav);
    
    const navigate = useNavigate();

    const signUserOut = async ()=>{
        await signOut(auth)

        navigate('/login');
    };

  return (
    <div className='navbar'>
        <div className="links">
            <Link className={activeNav === 'home' ? 'active' : ''} onClick={()=> setActiveNav('home')} to='/' >Home</Link>

            {!user ? ( 
                <Link to='/login' >Login</Link>
            ) : (
            <Link className={activeNav === 'createpost' ? 'active' : ''} onClick={()=> setActiveNav('createpost')} to='/createpost' >Create Post </Link>
            )}
            
        </div>

        <div className='user'>
            {/* <p>{auth.currentUser?.displayName}</p> */}
            {/* <img src={auth.currentUser?.photoURL || ''} alt="current user" width='100' height='100'  /> */}
            
            {user &&
                <>
                    <p>{user?.displayName}</p>
                    <img src={user?.photoURL || ''} alt="current user" width='30' height='30'  />
                    <button className='btn' onClick={signUserOut}>Log Out</button>
                </>
            }
        </div>
    </div>
  )
}

export default Navbar