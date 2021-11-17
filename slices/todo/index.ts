import { createSlice } from "@reduxjs/toolkit";

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

const initValues: ITodo[] = []

const todos = createSlice({
  name: 'todos',
  initialState: initValues,
  reducers: {
    setTodos: (_, action) => ([...action.payload]),
  },
})

const { reducer, actions } = todos;
export const { setTodos } = actions;
export default reducer;
