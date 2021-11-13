import { NextPage } from "next"
import { useState } from "react";
import { Button, Menu } from "@mui/material"
import MenuDetail from "./components/detail";
import MenuDelete from "./components/delete";
import MenuEdit from "./components/edit";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuCreate from "./components/create";

const TodosWorkspace: NextPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <div className="todos-container__header">
        <div className="workspace-name">
          <span className="over-text">Workspace: <i>Học lập trình react native</i></span>
        </div>
        <div className="workspace-action">
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            variant="contained"
            size="small"
            color="secondary"
            className="el-hover"
            style={{padding: 0, minWidth: '32px'}}
          >
           <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuDetail handleCloseMenu={handleClose} />
            <MenuEdit handleCloseMenu={handleClose} />
            <MenuDelete handleCloseMenu={handleClose} />
          </Menu>
        </div>
        <div className="workspace-new">
          <MenuCreate handleCloseMenu={handleClose} />
        </div>
      </div>
      <style jsx global>{`
        .todos-container__header {
          display: flex;

          .workspace-name {
            span {
              display: inline-block;
              max-width: 768px;
              font-size: 28px;
              color: white;
              font-family: "Comic Sans MS", "Comic Sans", cursive;
            }
          }
          .workspace-action {
            display: flex;
            align-items: center;
          }

          .workspace-new {
            display: flex;
            justify-content: right;
            margin: 4px 4px 0 0;
            width: 100%;
          }
        }
      `}
      </style>
    </>
  )
}

export default TodosWorkspace
