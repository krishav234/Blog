import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserNotLoggedIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  return (
    <>
      <p>You have to first login before creating a post!!</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default UserNotLoggedIn;
