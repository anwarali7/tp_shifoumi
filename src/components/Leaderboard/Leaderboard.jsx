import { useSelector } from 'react-redux';
import Users from '../Users/Users';

function Leaderboard() {

  const { users } = useSelector((state) => state.user);

  const sortedUsers = users.toSorted((a, b) => b.score - a.score);

  return (
    <div>
      <h2>Classement</h2>
      <p>Liste des utilisateurs et leurs scores</p>
      <Users users={sortedUsers} />
    </div>
  )
}

export default Leaderboard
