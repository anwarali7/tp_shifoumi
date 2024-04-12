import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../features/user/userSlice';

const Signup = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ name, email }));
        navigate('/shifoumi');
    }

    return (
        <div>
            <h2>S&apos;enregistrer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;
