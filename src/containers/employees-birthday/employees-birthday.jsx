import React from 'react';
import { connect } from 'react-redux';

import MonthGroup from '../../components/month-group/month-group';
import { groupUsersByBirthdayMonths } from '../../utils';
import * as styles from './employees-birthday.module.css';

const EmployeesBirthday = ({ selectedUsers }) => {
  const usersGroupedByMonth = groupUsersByBirthdayMonths(selectedUsers);

  const monthGroups = Object.entries(usersGroupedByMonth).map(([monthName, users]) =>
    users.length ? <MonthGroup key={monthName} monthName={monthName} users={users.slice()} /> : null,
  );

  return (
    <div className={styles.employeesBirthday}>
      <div className="header">Employees birthday</div>
      {selectedUsers.length
        ? monthGroups
        : 'No selected employees'}
    </div>
  );
};

const mapState = ({ users: { byId, selectedIds } }) => ({
  selectedUsers: selectedIds.map((id) => byId[id]).filter((user) => !!user),
});

export default connect(mapState)(EmployeesBirthday);
