export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
export const USER_TRIGGER = 'USER_TRIGGER';

const API_BASE_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0';

export const loadUsers = () => async dispatch => {
  dispatch({ type: LOAD_USERS_REQUEST });
  const response = await fetch(`${API_BASE_URL}/users`);
  try {
    if (!response.ok) {
      throw new Error('Bad request');
    }
    const data = await response.json();
    dispatch({ type: LOAD_USERS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: LOAD_USERS_FAILURE, error: e });
  }
};

export const triggerUser = (userId, checked) => (dispatch, getState) => {
  const { users } = getState();
  const selectedIds = checked
    ? [...users.selectedIds, userId]
    : users.selectedIds.filter((currId) => currId !== userId);

  localStorage.setItem('selectedUserIds', JSON.stringify(selectedIds));

  dispatch({ type: USER_TRIGGER, payload: selectedIds });
};
