import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Button
} from "@mui/material";
import { NextPage } from "next"
import { useState } from "react";

const TodoItem: NextPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <div className="item-container">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '100%', flexShrink: 0 }}>
              General settings
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Stack className="item-container__actions" spacing={2} direction="row">
          <Button
            size="small"
            variant="contained"
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          >
            Text
          </Button>
        </Stack>
      </div>
      <style jsx global>{`
        .item-container {
          display: block!important;
          position: relative;
          &__actions {
            position: absolute;
            top: 8px;
            right: 16px;
          }
        }
      `}
      </style>
    </>
  )
}

export default TodoItem
