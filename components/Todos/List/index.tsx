import { NextPage } from "next"
import { useState } from "react";
import { IWorkspace } from "../../../slices/workspace"
import TodoItem from "./item";

interface ITodoListProps {
  workspace: IWorkspace;
}

const TodoList: NextPage<ITodoListProps> = (props: ITodoListProps) => {
  const { workspace } = props;

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <div className="list-container">

        <TodoItem />
      </div>
      <style jsx>{`
        .list-container {
        }
      `}
      </style>
    </>
  )
}

export default TodoList
