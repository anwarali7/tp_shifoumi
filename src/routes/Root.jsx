import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Shifoumi from '../components/Shifoumi/Shifoumi';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import Signup from '../components/Signup/Signup';
import Wrapper from '../layouts/Wrapper';
import Users from '../components/Users/Users';

const Root = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Wrapper><Home /></Wrapper>} />
      <Route path="/shifoumi" element={<Wrapper> <Shifoumi /></Wrapper>} />
      <Route path="/leaderboard" element={<Wrapper> <Leaderboard /></Wrapper>} />
      <Route path="/users" element={<Wrapper> <Users /></Wrapper>} />
      <Route path="/signup" element={<Wrapper> <Signup /></Wrapper>} />
    </Routes>
  )
}

export default Root;