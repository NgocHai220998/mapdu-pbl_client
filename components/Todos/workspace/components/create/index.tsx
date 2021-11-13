import { NextPage } from "next"
import React, { useState } from "react";
import { 
  Button,
  Dialog,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Typography
} from "@mui/material"

import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';

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
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    handleCloseMenu();
  };


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
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <h1>Hello</h1>
      </Dialog>
    </>
  )
}

export default MenuCreate
