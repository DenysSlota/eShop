import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn'
import { signIn } from '../redux/users/reducer';

const SignInPage = () => {
    const users = useSelector(state => state.users.usersTotal);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const login = e.target.login.value;
        const password = e.target.password.value;
        const exist = users.find((user) => user.login === login && user.password === password);
        
        if (exist) {
            dispatch(signIn());
            navigate(-1);
        } else {
            alert ('invalid login or password');
        }
    } 

    return (
        <SignIn onSubmit={handleSubmit} />
    )
}

export default SignInPage;