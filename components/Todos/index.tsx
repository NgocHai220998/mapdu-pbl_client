import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IWorkspace, WORKSPACE_EMPTY } from "../../slices/workspace"
import { getWorkspaceByID } from "./helper"
import TodosWorkspace from "./workspace"

const Todos: NextPage = () => {
  const router = useRouter();
  const workspaces = useSelector((state: any) => state.workspaces)
  const [workspace, setWorkspace] = useState<IWorkspace>(WORKSPACE_EMPTY)

  useEffect(() => {
    const workspaceID: number = router.query?.workspace_id || workspaces[0]?.id
    setWorkspace(getWorkspaceByID(workspaces, workspaceID)) 
  }, [router.query.workspace_id])

  return (
    <>
      <div className="todos-container background">
        <TodosWorkspace workspace={workspace} />
      </div>
      <style jsx global>{`
        .todos-container {
          border-radius: 5px;
          padding: 8px 16px;
        }
      `}
      </style>
    </>
  )
}

export default Todos
