import { ActionsTypes, ThunkType, User } from '../../types/reduxTypes';
import { userAPI } from '../../api';
import { sortCities, sortCompany } from '../../Utils/sort';

let initialState = {
  users: [] as Array<User>,
  isPending: true,
  userProfile: null as User | null,
};

type InitialStateType = typeof initialState;

const userReducer = (
  state = initialState,
  action: ActionsTypes<typeof actions>,
): InitialStateType => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.users, userProfile: null };
    case 'TOGGLE_PENDING':
      return { ...state, isPending: action.isPending };
    case 'SORT_SITIES':
      return { ...state, users: state.users.sort(sortCities) };
    case 'SORT_COMPANY':
      return { ...state, users: state.users.sort(sortCompany) };
    case 'GET_PROFILE':
      return { ...state, userProfile: action.profile };
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
      type: 'TOGGLE_PENDING',
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
  getProfileUser: (profile: User) =>
    ({
      type: 'GET_PROFILE',
      profile,
    } as const),
};

export const getUsers = (): ThunkType => async dispatch => {
  try {
    const users = await userAPI.getUsers();
    dispatch(actions.getUsersSuccess(users.data));
    dispatch(actions.togglePending(false));
  } catch (e) {
    dispatch(actions.togglePending(false));
    alert('Ошибка при получении данных\nВозможно стоит попробовать через VPN');
  }
};
export const getProfile =
  (name: string): ThunkType =>
  async dispatch => {
    try {
      const profile = await userAPI.getProfileUser(name);
      const [userData] = profile.data;
      dispatch(actions.getProfileUser(userData));
    } catch (e) {}
  };

export default userReducer;
