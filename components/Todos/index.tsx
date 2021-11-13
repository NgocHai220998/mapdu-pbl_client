import { ExpandMoreOutlined } from "@mui/icons-material"
import { Accordion, AccordionDetails, Typography } from "@mui/material"
import { NextPage } from "next"
import TodosWorkspace from "./workspace"

const Todos: NextPage = () => {
  return (
    <>
      <div className="todos-container background">
        <TodosWorkspace />
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
