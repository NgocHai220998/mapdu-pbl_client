import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NextPage } from 'next';
import { ITodo } from '../../../../../../slices/todo';
import { Chip } from '@mui/material';
import { PRIORITY_OPTIONS } from '../../config';
import { getColorByValue } from '../../helper';

interface ITodoPriorityProps {
  todo: ITodo;
  handleUpdate: (status?: string, priority?: string) => void;
}

const Priority: NextPage<ITodoPriorityProps> = (props: ITodoPriorityProps) => {
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

  const handleChangePriority = (event: React.MouseEvent<HTMLButtonElement>, priority: string) => {
    handleClose(event)
    handleUpdate(todo.status, priority)
  }

  return (
    <>
      <Chip
        id="basic-button"
        size="small"
        color={getColorByValue(todo.priority || '')}
        aria-controls="basic-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        label={todo.priority}
        variant="filled"
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
        <MenuItem onClick={(e: any) => handleChangePriority(e, PRIORITY_OPTIONS.LOW)}>LOW</MenuItem>
        <MenuItem onClick={(e: any) => handleChangePriority(e, PRIORITY_OPTIONS.NORMAL)}>NORMAL</MenuItem>
        <MenuItem onClick={(e: any) => handleChangePriority(e, PRIORITY_OPTIONS.HIGHT)}>HIGHT</MenuItem>
      </Menu>
    </>
  );
}

export default Priority