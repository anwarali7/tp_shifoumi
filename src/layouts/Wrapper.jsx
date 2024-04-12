import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../features/user/userSlice';
import Nav from '../components/Nav/Nav';

const Wrapper = ({ children }) => {

  const { users, currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCurrentUser(e.target.value));
  }

  return (
    <div>
      <h1>TP Shi-Fou-Mi</h1>

      <div>
        Utilisateur actuel :
        <select name="currentUser" id="currentUser" value={currentUser !== null ? currentUser.email : ''} onChange={handleChange}>
          <option value="">Aucun</option>
          {users.map((user, index) => (
            <option key={index} value={user.email}>{user.name}</option>
          ))}
        </select>
      </div>
      <br />

      <Nav />

      <main>{children}</main>
    </div>
  )
}

export default Wrapper;
