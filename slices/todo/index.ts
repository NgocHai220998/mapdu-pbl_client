import { getMethod, requestWithToken } from './../../utils/fetchTool';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../constants/api";
import { getItem, KEY_TYPES } from "../../utils/localStoreTools";

export interface ITodo {
  id: number;
  work_space_id?: string;
  description?: string;
  title?: string;
  created_at: string | Date;
  updated_at: string | Date;
}

export const TODO_EMPTY = {
  id: 0,
  work_space_id: 0,
  description: '',
  title: '',
  created_at: '',
  updated_at: ''
}

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (id: number) => {
    const user = getItem(KEY_TYPES.AUTHEN)
    const response: any = await fetch(API.GET_TODOS_BY_WORKSPACE_ID(id), {
      method: getMethod.method,
      headers: requestWithToken(user.auth_token)
    }).then(response => response.json())

    return response?.data?.todos || []
  }
)

const initValues: ITodo[] = []

const todos = createSlice({
  name: 'todos',
  initialState: initValues,
  reducers: {
    setTodos: (_, action) => ([...action.payload]),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return [
        ...action.payload
      ]
    })
  },
})

const { reducer, actions } = todos;
export const { setTodos } = actions;
export default reducer;
