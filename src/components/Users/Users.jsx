const Users = ({ users }) => {
  return (
    <ol className="users-list">
      {users.map((user, index) => (
        <li key={index}>{user.name} - Score : {user.score}</li>
      ))}
    </ol>
  )
}

export default Users;