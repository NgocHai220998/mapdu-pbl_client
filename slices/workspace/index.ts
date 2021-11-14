import { createSlice } from "@reduxjs/toolkit";

export interface IWorkspace {
  id: number;
  name: string;
  description: string;
  created_at: string | Date;
  updated_at: string | Date;
}

const initValues: IWorkspace[] = []

const workspaces = createSlice({
  name: 'workspaces',
  initialState: initValues,
  reducers: {
    setWorkSpaces: (state, action) => ([
      ...state,
      ...action.payload
    ]),
  }
})

const { reducer, actions } = workspaces;
export const { setWorkSpaces } = actions;
export default reducer;
