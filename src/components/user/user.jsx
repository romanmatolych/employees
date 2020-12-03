import React from 'react';

import * as styles from './user.module.css';

const User = ({ user, onChange }) => {
  const { lastName, firstName, id, checked } = user;
  const changeHandler = (e) => onChange(id, e);

  return (
    <div className={styles.user}>
      <span>
        {lastName} {firstName}
      </span>
      <input type="checkbox" onChange={changeHandler} checked={checked} />
    </div>
  );
};

export default User;
