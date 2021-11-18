import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NextPage } from 'next';
import { ITodo } from '../../../../../../slices/todo';
import { Chip } from '@mui/material';
import { STATUS_OPTIONS } from '../../config';
import { getColorByValue } from '../../helper';

interface ITodoStatusProps {
  todo: ITodo;
  handleUpdate: (status?: string, priority?: string) => void;
}

const Status: NextPage<ITodoStatusProps> = (props: ITodoStatusProps) => {
  const { todo, handleUpdate } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleChangeStatus = (event: React.MouseEvent<HTMLButtonElement>, status: string) => {
    handleClose(event)
    handleUpdate(status, todo.priority)
  }

  return (
    <>
      <Chip
        id="basic-button"
        size="small"
        color={getColorByValue(todo.status || '')}
        aria-controls="basic-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        label={todo.status}
        variant="outlined"
        className="el-hover"
        style={{ marginLeft: '8px' }}
        onClick={(e: any) => handleClick(e)} 
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={(e: any) => handleChangeStatus(e, STATUS_OPTIONS.TODO)}>TODO</MenuItem>
        <MenuItem onClick={(e: any) => handleChangeStatus(e, STATUS_OPTIONS.DOING)}>DOING</MenuItem>
        <MenuItem onClick={(e: any) => handleChangeStatus(e, STATUS_OPTIONS.DONE)}>DONE</MenuItem>
      </Menu>
    </>
  );
}

export default Status