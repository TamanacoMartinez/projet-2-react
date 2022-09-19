import React from 'react';
import { useSelector } from 'react-redux';
import { userEmailSelector } from '../store/authSelectors';

const User = () => {
    const email = useSelector(userEmailSelector);
  return (
    <div>
      <h3>{email}</h3>
    </div>
  )
}

export default User
