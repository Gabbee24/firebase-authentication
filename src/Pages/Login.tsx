import {auth, provider} from '../Config/firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () =>{
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate('/');
    };

  return (
    <div>
        <p>Sign In with Google to continue</p>
        <button className='loginBtn' onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default Login