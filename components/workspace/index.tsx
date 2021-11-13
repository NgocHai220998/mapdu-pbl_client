import { List, ListItemButton, ListItemText, Pagination } from "@mui/material"
import { NextPage } from "next"
import { useState } from "react";

import { Box } from "@mui/system"

const Workspace: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="workspace-container background">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="primary mailbox folder">
            <ListItemButton
              className={`${selectedIndex === 1 ? 'selected' : 'el-hover border-hover'}`}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItemButton>
            <ListItemButton
              className={`${selectedIndex === 2 ? 'selected' : 'el-hover border-hover'}`}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItemButton>
            <ListItemButton
              className={`${selectedIndex === 3 ? 'selected' : 'el-hover border-hover'}`}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItemButton>
            <ListItemButton
              className={`${selectedIndex === 4 ? 'selected' : 'el-hover border-hover'}`}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItemButton>
            <ListItemButton
              className={`${selectedIndex === 5 ? 'selected' : 'el-hover border-hover'}`}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItemButton>
          </List>
          <div className="workspace-pagination">
            <Pagination
              count={8}
              color="primary" variant="outlined"
              hidePrevButton hideNextButton
              page={page}
              onChange={(handleChange)}
            />
          </div>
        </Box>
      </div>
      <style jsx global>{`
        .workspace-container {
          border-radius: 5px;
          
          p, span {
            color: white;
          }
          .selected {
            background-color: rgba(21, 21, 21, .65)
          }

          .workspace-pagination {
            display: flex;
            background-color: white;
            padding: 8px 16px;
            justify-content: center;
            border-radius: 0px 0px 5px 5px;
          }
        }
      `}
      </style>
    </>
  )
}

export default Workspace
