import { List, ListItemButton, ListItemText, Pagination } from "@mui/material"
import { NextPage } from "next"
import { useEffect, useState } from "react";

import { Box } from "@mui/system"
import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../slices/loading";
import { API } from "../../constants/api";
import { getMethod, requestWithToken } from "../../utils/fetchTool";
import { showToast } from "../../slices/toast";
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "../../constants/config";
import { IWorkspace, setWorkSpaces } from "../../slices/workspace";
import { convertTime, delayTime } from "../../utils/helpers";
import { useRouter } from "next/dist/client/router";

const Workspace: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: any) => state.user);
  const workspaces = useSelector((state: any) => state.work_spaces);

  const [datas, setDatas] = useState<IWorkspace[]>(workspaces)
  const [totalPage, setTotalPage] = useState<number>(1)

  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    router.push(`/?workspace_id=${index}`, undefined, { shallow: true })
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    handleGetWorkspaces(value)
  };

  const handleGetWorkspaces = async (page = DEFAULT_PAGE, perPage = DEFAULT_PER_PAGE) => {
    dispatch(showLoadding())
    await delayTime(500);

    fetch(API.GET_WORKSPACE(page, perPage), {
      method: getMethod.method,
      headers: requestWithToken(user.token)
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          const wspaces: IWorkspace[] = res?.data?.work_spaces?.collection || []
          dispatch(setWorkSpaces(wspaces))

          setDatas(wspaces)
          setTotalPage(res?.data?.work_spaces?.pagination?.pages || 1)
          handleListItemClick(wspaces[0].id)
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

  useEffect(() => {
    handleGetWorkspaces()
  }, [])

  return (
    <>
      <div className="workspace-container background">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="primary mailbox folder">
            {
              datas?.map((workspace: IWorkspace) => (
                <ListItemButton
                  key={`workspace-${workspace.id}`}
                  className={`${selectedIndex === workspace.id ? 'selected' : 'el-hover border-hover'}`}
                  onClick={() => handleListItemClick(workspace.id)}
                >
                  <ListItemText primary={workspace.name} secondary={convertTime(workspace.created_at)} />
                </ListItemButton>
              ))
            }
          </List>
          {
            datas?.length ? (
              <div className="workspace-pagination">
                <Pagination
                  count={totalPage}
                  color="primary" variant="outlined"
                  hidePrevButton hideNextButton
                  page={page}
                  onChange={(handleChange)}
                />
              </div>
            ) : (
              <p className="no-data">No Data</p>
            )
          }
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
