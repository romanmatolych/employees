import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import Employees from './containers/employees/employees';
import EmployeesBirthday from './containers/employees-birthday/employees-birthday';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <Employees />
        <EmployeesBirthday />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
