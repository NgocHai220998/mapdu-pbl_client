import { NextPage } from "next"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hiddenLoading, showLoadding } from "../../../slices/loading";
import { fetchTodos, ITodo, setTodos } from "../../../slices/todo";
import { IWorkspace } from "../../../slices/workspace"
import { delayTime } from "../../../utils/helpers";
import TodoCreate from "./AddNewTodo";
import TodoItem from "./item";

interface ITodoListProps {
  workspace: IWorkspace;
}

const TodoList: NextPage<ITodoListProps> = (props: ITodoListProps) => {
  const { workspace } = props;
  const dispatch = useDispatch()
  const todos = useSelector((state: any) => state.todos)
  const [datas, setDatas] = useState<ITodo[]>(todos)

  const handleGetTodos = async () => {
    dispatch(showLoadding())

    const data: any = await dispatch(fetchTodos(workspace.id))
    const todoList: ITodo[] = data?.payload || []
    dispatch(setTodos(todoList))
    setDatas(todoList)
    dispatch(hiddenLoading())
  }

  useEffect(() => {
    if (!!workspace.id) {
      handleGetTodos()
    }
  }, [workspace])

  useEffect(() => {
    setDatas(todos)
  }, [todos])

  return (
    <>
      <div className="list-container">
        <div style={{ marginBottom: '8px' }}>
          <TodoCreate workspace={workspace}/>
        </div>
        {
          !!datas.length ? datas?.map((item: ITodo) => (
            <TodoItem key={`todos-${item.id}`} todo={item} workspace={workspace} />
          )) : (
            <p className="no-data">No Data</p>
          )
        }
      </div>
      <style jsx>{`
        .list-container {
          margin-top: 8px;
        }
      `}
      </style>
    </>
  )
}

export default TodoList
