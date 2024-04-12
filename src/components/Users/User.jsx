import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User () {
  const { id } = useParams();

  const user = useSelector((state) => state.user.users.find(user => user.email === id))
  
  return (
    <div>
      <h2>User</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.score}</p>
    </div>
  )
}

export default User;
