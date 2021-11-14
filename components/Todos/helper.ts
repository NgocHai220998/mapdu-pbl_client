import { IWorkspace, WORKSPACE_EMPTY } from './../../slices/workspace/index';

export const getWorkspaceByID = (workspaces: IWorkspace[], id: number) => {
  return workspaces.find((workspace: IWorkspace) => workspace.id == id) || WORKSPACE_EMPTY
}