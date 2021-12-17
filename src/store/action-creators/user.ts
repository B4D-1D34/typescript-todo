import axios from "axios";
import { UserAction, UserActionTypes, User } from "../../types/user";
import { Dispatch } from "redux";

type UserTypeResponse = User[];

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get<UserTypeResponse>(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_FAILURE,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
