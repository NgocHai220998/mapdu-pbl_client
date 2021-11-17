import { NextPage } from "next"
import React, { useState } from "react";
import { 
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
} from "@mui/material"

import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../../../slices/loading";
import { delayTime } from "../../../../utils/helpers";
import { API } from "../../../../constants/api";
import { postMethod, requestWithToken } from "../../../../utils/fetchTool";
import { showToast } from "../../../../slices/toast";
import { IWorkspace } from "../../../../slices/workspace";
import { fetchTodos, ITodo, setTodos } from "../../../../slices/todo";

interface ITodoCreateProps {
  workspace: IWorkspace;
}

const TodoCreate: NextPage<ITodoCreateProps> = (props: ITodoCreateProps) => {
  const { workspace } = props;
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleGetTodos = async () => {
    dispatch(showLoadding())
    await delayTime(500);

    const data: any = await dispatch(fetchTodos(workspace.id))
    const todoList: ITodo[] = data?.payload || []
    dispatch(setTodos(todoList))
    dispatch(hiddenLoading())
  }

  const handleSubmit = async () => {
    dispatch(showLoadding())
    setOpen(false)
    await delayTime(500)
  
    fetch(API.CREATE_TODO, {
      method: postMethod.method,
      headers: requestWithToken(user.token),
      body: JSON.stringify({
        todo: {
          title: title,
          description: '',
          priority: 'LOW',
          status: 'TODO'
        },
        work_space_id: workspace.id
      })
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          setTitle('')
          handleGetTodos();
          dispatch(showToast({
            message: "Create successful!!!",
            type: 'success'
          }))
          handleClose()
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
        Add new todo
      </Button>
      <Dialog
        open={open} onClose={handleClose}
        fullWidth
      >
        <DialogTitle>Create new Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="todo-name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
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

export default TodoCreate
