import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Button,
  TextField,
  Chip
} from "@mui/material";
import { NextPage } from "next"
import { useState } from "react";
import { fetchTodos, ITodo, setTodos } from "../../../../slices/todo";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { ACTION_TYPES } from "./config";
import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../../../slices/loading";
import { delayTime } from "../../../../utils/helpers";
import { API } from "../../../../constants/api";
import { putMethod, requestWithToken } from "../../../../utils/fetchTool";
import { IWorkspace } from "../../../../slices/workspace";
import { showToast } from "../../../../slices/toast";

interface ITodoItemProps {
  todo: ITodo;
  workspace: IWorkspace;
}

const TodoItem: NextPage<ITodoItemProps> = (props: ITodoItemProps) => {
  const { todo, workspace } = props;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user)
  const [expanded, setExpanded] = useState<string | false>(false);
  const [actionType, setActionType] = useState<string>(ACTION_TYPES.DETAIL);
  const [description, setDescription] = useState<string>(todo?.description || 'Updating ...');
  const [title, setTitle] = useState<string>(todo?.title || '');

  const handleGetTodos = async () => {
    dispatch(showLoadding())

    const data: any = await dispatch(fetchTodos(workspace.id))
    const todoList: ITodo[] = data?.payload || []
    dispatch(setTodos(todoList))
    dispatch(hiddenLoading())
  }

  const handleChange =
    (panel: string) => (event: any, isExpanded: boolean) => {
      if (!isExpanded) setActionType(ACTION_TYPES.DETAIL)
      setExpanded(isExpanded ? panel : false);
    };

    const handleEdit = async () => {
      dispatch(showLoadding())
      await delayTime(500)

      fetch(API.UPDATE_TODO_BY_ID(todo.id), {
        method: putMethod.method,
        headers: requestWithToken(user.token),
        body: JSON.stringify({
          todo: {
            title: title,
            description: description,
            priority: todo.priority,
            status: todo.status
          }
        })
      }).then(response => response.json())
        .then(res => {
          dispatch(hiddenLoading())
          if (res.code === 200) {
            handleGetTodos();
            setActionType(ACTION_TYPES.DETAIL);
            setExpanded(false);
            dispatch(showToast({
              message: "Update successful!!!",
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
      <div className="item-container">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            {
              actionType === ACTION_TYPES.DETAIL ? (
                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  {todo.title}
                </Typography>
              ) : (
                <TextField
                  autoFocus
                  margin="dense"
                  id="todo-name"
                  label="Todo title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={title}
                  onChange={(e: any) => setTitle(e.target.value)}
                  onClick={(e: any) => {
                    e.stopPropagation();
                  }}
                  style={{ marginTop: '32px' }}
                />
              )
            }
          </AccordionSummary>
          <AccordionDetails>
            {
              actionType === ACTION_TYPES.DETAIL ? (
                <MDEditor.Markdown source={todo?.description || "Updating..."} />
              ) : (
                <div>
                  <MDEditor
                    value={description}
                    onChange={(value?: string) => setDescription(value || '')}
                    height={365}
                    autoFocus
                  />
                </div>
              )
            }
          </AccordionDetails>
        </Accordion>
        <Stack
          className={`item-container__tag-edit ${actionType === ACTION_TYPES.DETAIL ? '' : 'show-tag-edit'}`}>
          <Chip label="Edit Todo" color="warning" variant="outlined" 
            onDelete={() => {
              setExpanded(false);
              setActionType(ACTION_TYPES.DETAIL);
            }} 
          />
        </Stack>
        <Stack className="item-container__actions" spacing={1} direction="row">
          {
            actionType === ACTION_TYPES.DETAIL ? (
              <>
                <Button
                  size="small"
                  variant="contained"
                  color="warning"
                  style={{ minWidth: '32px' }}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setExpanded('panel1');
                    setActionType(ACTION_TYPES.EDIT);
                  }}
                >
                  <ModeEditIcon fontSize="small" />
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  style={{ minWidth: '32px' }}
                  onClick={(e: any) => {
                    e.stopPropagation();
                  }}
                >
                  <DeleteOutlineIcon fontSize="small" />
                </Button>
              </>
            ) : (
              <Button
                size="small"
                variant="contained"
                color="success"
                style={{ minWidth: '32px' }}
                onClick={(e: any) => {
                  e.stopPropagation();
                  handleEdit();
                }}
              >
                save
              </Button>
            )
          }
          
        </Stack>
      </div>
      <style jsx global>{`
        .item-container {
          margin-bottom: 4px;
          display: block!important;
          position: relative;
          &__actions {
            position: absolute;
            top: 8px;
            right: 16px;
            display: none;
          }
          &__tag-edit {
            position: absolute;
            top: 8px;
            left: 16px;
            display: none;

            &.show-tag-edit {
              display: block;
            }
          }

          &:hover {
            .item-container__actions {
              display: block;
            }
          }
        }
      `}
      </style>
    </>
  )
}

export default TodoItem
