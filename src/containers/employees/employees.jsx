import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUsers, triggerUser } from '../../store/actions';
import * as styles from './employees.module.css';
import { ALPHABET } from '../../constants';
import LetterSection from '../../components/letter-section/letter-section';

const Employees = ({ users, loadUsers, triggerUser, isLoading, selectedUserIds, error }) => {
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const prepareUserList = (letter) =>
    users
      .filter(({ lastName }) => lastName.toLowerCase().startsWith(letter))
      .map((user) => ({
        ...user,
        checked: selectedUserIds.includes(user.id),
      }));

  const userCheckedHandler = (id, e) => triggerUser(id, e.target.checked);

  const getMenuContent = () => {
    if (error) {
      return `Error: ${error.message}`;
    }

    return isLoading
      ? 'Loading...'
      : ALPHABET.map((letter) => (
          <LetterSection
            key={letter}
            letter={letter}
            users={prepareUserList(letter)}
            onUserCheck={userCheckedHandler}
          />
        ));
  };

  return (
    <div className={styles.employees}>
      <div className="header">
        <span className="headerText">Employees</span>
      </div>
      <div className={styles.alphabetMenu}>{getMenuContent()}</div>
    </div>
  );
};

const mapState = ({ users: { byId, allIds, loading, error, selectedIds } }) => ({
  users: allIds.map((id) => byId[id]),
  isLoading: loading,
  error,
  selectedUserIds: selectedIds,
});

const mapDispatch = {
  loadUsers,
  triggerUser,
};

export default connect(mapState, mapDispatch)(Employees);
