// client/src/App.js
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';

export default function App() {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });

  const handleLogin = (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 16 }}>
      <Navbar user={user} onLogout={handleLogout} />
      {!user ? (
        <>
          <Register />
          <hr />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <>
          <BookList />
          {user.role === 'admin' && (
            <>
              <hr />
              <AddBook />
            </>
          )}
        </>
      )}
    </div>
  );
}
