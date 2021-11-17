import { NextPage } from "next"
import { IWorkspace } from "../../../slices/workspace"
import TodoCreate from "./AddNewTodo";
import TodoItem from "./item";

interface ITodoListProps {
  workspace: IWorkspace;
}

const TodoList: NextPage<ITodoListProps> = (props: ITodoListProps) => {
  const { workspace } = props;

  return (
    <>
      <div className="list-container">
        <div style={{ marginBottom: '8px' }}>
          <TodoCreate workspace={workspace}/>
        </div>
        <TodoItem />
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
