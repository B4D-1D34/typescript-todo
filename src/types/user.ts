interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailureAction {
  type: UserActionTypes.FETCH_USERS_FAILURE;
  payload: string;
}

export type User = {
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: { bs: string; catchPhrase: string; name: string };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export interface UserState {
  users: User[];
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
}
export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
