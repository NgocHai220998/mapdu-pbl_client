import { NextPage } from "next"
import React, { useState } from "react";
import { 
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Slide,
} from "@mui/material"

import { TransitionProps } from '@mui/material/transitions';
import { hiddenLoading, showLoadding } from "../../../../../slices/loading";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../../../../constants/api";
import { postMethod, requestWithToken } from "../../../../../utils/fetchTool";
import { showToast } from "../../../../../slices/toast";
import { delayTime } from "../../../../../utils/helpers";
import { useRouter } from "next/dist/client/router";
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "../../../../../constants/config";
import { fetchWorkspaces, IWorkspace, setWorkSpaces } from "../../../../../slices/workspace";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IMenuCreateProps {
  handleCloseMenu: () => void;
}

const MenuCreate: NextPage<IMenuCreateProps> = (props: IMenuCreateProps) => {
  const { handleCloseMenu } = props;
  const dispatch = useDispatch()
  const workspaces = useSelector((state: any) => state.workspaces)
  const user = useSelector((state: any) => state.user)
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
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

  const handleSubmit = async () => {
    dispatch(showLoadding())
    setOpen(false)
    await delayTime(500)
  
    fetch(API.CREATE_WORKSPACE, {
      method: postMethod.method,
      headers: requestWithToken(user.token),
      body: JSON.stringify({
        work_space: {
          name: name,
          description: ''
        }
        
      })
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          handleGetWorkspaces(1)
          setName('')
          handleClose
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
      <Button
        className="el-hover"
        onClick={handleClickOpen}
        color="primary"
        size="small"
        variant="contained"
      >
        Add new workspace
      </Button>
      <Dialog
        open={open} onClose={handleClose}
        fullWidth
      >
        <DialogTitle>Create new workspace</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="workspace-name"
            label="Workspace Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MenuCreate
