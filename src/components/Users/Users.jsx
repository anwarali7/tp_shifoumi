import { Link } from 'react-router-dom';

const Users = ({ users }) => {
  return (
    <ol className="users-list">
      {users.map((user, index) => (
        <li key={index} style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}>
          <div>
            {user.name} - Score : {user.score}
          </div>
          <Link style={{
            marginLeft: '1rem',
            textDecoration: 'underline'

          }} to={`/users/${user.email}`}>Voir</Link>
        </li>
      ))}
    </ol>
  )
}

export default Users;