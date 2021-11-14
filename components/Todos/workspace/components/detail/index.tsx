import { NextPage } from "next"
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, MenuItem, Typography } from "@mui/material"
import { styled } from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';
import { IWorkspace } from "../../../../../slices/workspace";

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialogContent-root': {
    padding: '16px',
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface IMenuDetailProps {
  workspace: IWorkspace;
  handleCloseMenu: () => void;
}

const MenuDetail: NextPage<IMenuDetailProps> = (props: IMenuDetailProps) => {
  const { handleCloseMenu, workspace } = props;
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
      <MenuItem className="el-hover" onClick={handleClickOpen}>Detail</MenuItem>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {workspace?.name || "Updating..."}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {workspace?.description || "Updating..."}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

export default MenuDetail
