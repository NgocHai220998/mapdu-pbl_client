import { NextPage } from "next"
import React, { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { 
  Button,
  Dialog,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Typography,
  TextField,
} from "@mui/material"

import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { fetchWorkspaces, IWorkspace, setWorkSpaces } from "../../../../../slices/workspace";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../../../../slices/loading";
import { delayTime } from "../../../../../utils/helpers";
import { API } from "../../../../../constants/api";
import { putMethod, requestWithToken } from "../../../../../utils/fetchTool";
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "../../../../../constants/config";
import { showToast } from "../../../../../slices/toast";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IMenuEditProps {
  handleCloseMenu: () => void;
  workspace: IWorkspace;
}

const MenuEdit: NextPage<IMenuEditProps> = (props: IMenuEditProps) => {
  const { handleCloseMenu, workspace } = props;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user)
  const [open, setOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(workspace?.description || '');
  const [name, setName] = useState<string>(workspace?.name || '');
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
    handleClose()
    await delayTime(500)
  
    fetch(API.UPDATE_WORKSPACE(workspace.id), {
      method: putMethod.method,
      headers: requestWithToken(user.token),
      body: JSON.stringify({
        work_space: {
          name: name,
          description: description
        }
        
      })
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          handleGetWorkspaces(1)
          dispatch(showToast({
            message: `Update successful!!!`,
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
      <MenuItem className="el-hover" onClick={handleClickOpen}>Edit</MenuItem>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit workspace
            </Typography>
            <Button color="inherit" onClick={handleSubmit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box style={{ padding: '16px' }}>
          <TextField
            margin="dense"
            id="workspace-name"
            label="Workspace Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <MDEditor
            value={description}
            onChange={(value?: string) => setDescription(value || '')}
            height={768}
            autoFocus
          />
        </Box>
      </Dialog>
    </>
  )
}

export default MenuEdit
