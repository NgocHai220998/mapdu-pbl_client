import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Button
} from "@mui/material";
import { NextPage } from "next"
import { useState } from "react";
import { ITodo } from "../../../../slices/todo";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { ACTION_TYPES } from "./config";
import MDEditor from '@uiw/react-md-editor';

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: NextPage<ITodoItemProps> = (props: ITodoItemProps) => {
  const { todo } = props;
  const [expanded, setExpanded] = useState<string | false>(false);
  const [actionType, setActionType] = useState<string>(ACTION_TYPES.DETAIL);
  const [description, setDescription] = useState<string>(todo.description || 'Updating ...');

  const handleChange =
    (panel: string) => (event: any, isExpanded: boolean) => {
      if (!isExpanded) setActionType(ACTION_TYPES.DETAIL)
      setExpanded(isExpanded ? panel : false);
    };

  const handleEdit = () => {
    console.log(todo)
  }

  return (
    <>
      <div className="item-container">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0 }}>
              {todo.title}
            </Typography>
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
        <Stack className="item-container__actions" spacing={1} direction="row">
          {

            actionType === ACTION_TYPES.DETAIL ? (
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
