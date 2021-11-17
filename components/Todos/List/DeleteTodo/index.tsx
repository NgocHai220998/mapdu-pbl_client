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
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, ITodo, setTodos } from "../../../../slices/todo";
import { hiddenLoading, showLoadding } from "../../../../slices/loading";
import { delayTime } from "../../../../utils/helpers";
import { API } from "../../../../constants/api";
import { deleteMethod, requestWithToken } from "../../../../utils/fetchTool";
import { showToast } from "../../../../slices/toast";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface IDeleteTodoProps {
  todo: ITodo;
}

const DeleteTodo: NextPage<IDeleteTodoProps> = (props: IDeleteTodoProps) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user)
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGetTodos = async () => {
    dispatch(showLoadding())

    const data: any = await dispatch(fetchTodos(todo.id))
    const todoList: ITodo[] = data?.payload || []
    dispatch(setTodos(todoList))
    dispatch(hiddenLoading())
  }

  const handleDelete = async () => {
    dispatch(showLoadding())
    setOpen(false)
    handleClose()
    await delayTime(500)
  
    fetch(API.DELETE_TODO_BY_ID(todo.id), {
      method: deleteMethod.method,
      headers: requestWithToken(user.token)
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          handleGetTodos()
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
      <Button
        size="small"
        variant="contained"
        color="error"
        style={{ minWidth: '32px' }}
        className="el-hover"
        onClick={(e: any) => {
          e.stopPropagation();
          handleClickOpen()
        }}
      >
        <DeleteOutlineIcon fontSize="small" />
      </Button>
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
            {`If you "Agree" then the data will also be deleted and can't be restored!`}
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

export default DeleteTodo
