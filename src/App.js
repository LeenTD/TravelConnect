import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Search from './page/Local';
import Profile from './page/Profile';
import Post from './page/Post';
import AdminListUser from './page/admin/AdminListUser';
import TripManagement from './page/local/TripManagement';

function App() {
  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/tripmanagement" element={<TripManagement />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminListUser />} />
      </Routes>
    </Router>
  );
}

export default App;
