import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types'

type StateTypes = {
  users: User[];
  user: User | {}
}
const initialState: StateTypes = {
    users: [],
    user: {}
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
          return {...state,
              users: action.payload
            }
        },
        addOneUser: (state, action) => {
          return {...state,
            user: action.payload
          }
        }
    }
})

export const { addUsers, addOneUser } = usersSlice.actions;

export const getAllUsers = (state: any) => {
  return state.users.users};
export const getOneUser = (state: any) => {
  return state.users.user
};
export default usersSlice.reducer;