import { ActionsTypes, ThunkType, User } from '../../types/reduxTypes';
import { userAPI } from '../../api';
import { sortCities, sortCompany } from '../../Utils/sort';

const initialState = {
  users: [] as Array<User>,
  isPending: true,
};

type InitialStateType = typeof initialState;

const userReducer = (
  state = initialState,
  action: ActionsTypes<typeof actions>,
): InitialStateType => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.users };
    case 'TOOGLE_PENDING':
      return { ...state, isPending: action.isPending };
    case 'SORT_SITIES':
      return { ...state, users: state.users.sort((a, b) => sortCities(a, b)) };
    case 'SORT_COMPANY':
      return { ...state, users: state.users.sort(sortCompany) };
    default:
      return state;
  }
};

export const actions = {
  getUsersSuccess: (users: Array<User>) =>
    ({
      type: 'GET_USERS',
      users,
    } as const),
  togglePending: (isPending: boolean) =>
    ({
      type: 'TOOGLE_PENDING',
      isPending,
    } as const),
  sortOnCities: () =>
    ({
      type: 'SORT_SITIES',
    } as const),
  sortOnCompany: () =>
    ({
      type: 'SORT_COMPANY',
    } as const),
};

export const getUsers = (): ThunkType => async dispatch => {
  try {
    const users = await userAPI.getUsers();
    dispatch(actions.getUsersSuccess(users.data));
    dispatch(actions.togglePending(false));
  } catch (e) {
    dispatch(actions.togglePending(false));
    alert('Ошибка при получении данных');
  }
};

export default userReducer;
