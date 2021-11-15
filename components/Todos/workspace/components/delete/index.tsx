import { NextPage } from "next"
import { useState } from "react";
import { 
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  DialogActions 
} from "@mui/material"
import { fetchWorkspaces, IWorkspace, setWorkSpaces } from "../../../../../slices/workspace";
import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../../../../slices/loading";
import { delayTime } from "../../../../../utils/helpers";
import { API } from "../../../../../constants/api";
import { deleteMethod, requestWithToken } from "../../../../../utils/fetchTool";
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "../../../../../constants/config";
import { showToast } from "../../../../../slices/toast";

interface IMenuDeleteProps {
  handleCloseMenu: () => void;
  workspace: IWorkspace;
}

const MenuDelete: NextPage<IMenuDeleteProps> = (props: IMenuDeleteProps) => {
  const { handleCloseMenu, workspace } = props;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user)
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    handleCloseMenu();
  };

  const handleGetWorkspaces = async (page = DEFAULT_PAGE, perPage = DEFAULT_PER_PAGE) => {
    dispatch(showLoadding())
    await delayTime(500);

    const data: any = await dispatch(fetchWorkspaces({ page: page, perPage: perPage}))
    const wspaces: IWorkspace[] = data?.payload?.collection || []
    dispatch(setWorkSpaces(wspaces))
    dispatch(hiddenLoading())
  }

  const handleDelete = async () => {
    dispatch(showLoadding())
    setOpen(false)
    handleClose()
    await delayTime(500)
  
    fetch(API.DELETE_WORKSPACE_BY_ID(workspace.id), {
      method: deleteMethod.method,
      headers: requestWithToken(user.token)
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          handleGetWorkspaces(1)
          dispatch(showToast({
            message: `Delete successful!!!`,
            type: 'success'
          }))
        } else {
          dispatch(showToast({
            message: `${res.errors?.message || 'Something wrong!'} 😱`,
            type: 'error'
          }))
        }
      })
      .catch(() => {
        dispatch(hiddenLoading())
        dispatch(showToast({
          message: 'Something wrong! 😱',
          type: 'error'
        }))
      })
  }


  return (
    <>
      <MenuItem className="el-hover" onClick={handleClickOpen}>Delete</MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you "Agree" then the data will also be deleted and can't be restored!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MenuDelete
