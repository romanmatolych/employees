import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  USER_TRIGGER,
} from '../actions';

const getInitialState = () => {
  let selectedIds = localStorage.getItem('selectedUserIds');
  try {
    selectedIds = selectedIds ? JSON.parse(selectedIds) : [];
  } catch (_) {
    selectedIds = [];
  }

  return {
    error: null,
    loading: false,
    byId: {},
    allIds: [],
    selectedIds,
  };
};

const userReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case LOAD_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USERS_SUCCESS:
      const normalized = action.payload.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});

      return {
        ...state,
        loading: false,
        error: null,
        byId: normalized,
        allIds: Object.keys(normalized),
      };
    case LOAD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case USER_TRIGGER:
      return {
        ...state,
        selectedIds: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
