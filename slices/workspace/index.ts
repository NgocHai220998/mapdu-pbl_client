import { getMethod } from './../../utils/fetchTool';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../constants/api";
import { requestWithToken } from "../../utils/fetchTool";
import { getItem, KEY_TYPES } from "../../utils/localStoreTools";

export interface IWorkspace {
  id: number;
  name: string;
  description: string;
  created_at: string | Date;
  updated_at: string | Date;
}

export const WORKSPACE_EMPTY = {
  id: 0,
  name: '',
  description: '',
  created_at: '',
  updated_at: ''
}

const initValues: {
  collection: IWorkspace[],
  pagination: any
} = {
  collection: [],
  pagination: {}
}

export const fetchWorkspaces = createAsyncThunk(
  'workspace/fetchWorkspaces',
  async (params: any) => {
    const user = getItem(KEY_TYPES.AUTHEN)
    const response: any = await fetch(API.GET_WORKSPACE(params.page, params.perPage), {
      method: getMethod.method,
      headers: requestWithToken(user.auth_token)
    }).then(response => response.json())

    return response?.data?.work_spaces
  }
)

const workspaces = createSlice({
  name: 'workspaces',
  initialState: initValues,
  reducers: {
    setWorkSpaces: (state, action) => ({
      ...state,
      workspaces: [...action.payload]
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWorkspaces.fulfilled, (state, action) => {
      return {
        ...state,
        collection: action.payload?.collection,
        pagination: action.payload?.pagination
      }
    })
  },
})

const { reducer, actions } = workspaces;
export const { setWorkSpaces } = actions;
export default reducer;
