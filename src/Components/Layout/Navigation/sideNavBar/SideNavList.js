import { useState } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../../UI/AccordionElements";

import VehiclesIcon from "../../../../assets/Navigation/icons/VehiclesIcon";
import ReportIcon from "../../../../assets/Navigation/icons/ReportIcon";
import PeopleIcon from "../../../../assets/Navigation/icons/PeopleIcon";
import ReportNavList from "./ReportNavList";

// custom Style
const useStyles = makeStyles(theme => {
  return {
    typographyRoot: {
      marginLeft: "18px",
    },
  };
});

const SideNavList = props => {
  const styleClasses = useStyles();
  const [expanded, setExpanded] = useState("report");

  // handle accordion state
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Paper elevation={0}>
      {/* VEHICLES ACCORDION ITEM */}

      <Accordion
        square
        expanded={expanded === "vehicle"}
        onChange={handleChange("vehicle")}
      >
        <AccordionSummary
          aria-controls='vehicleID-content'
          id='vehicleID-header'
        >
          <VehiclesIcon />
          <Typography className={styleClasses.typographyRoot}>
            VEHICLES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum</Typography>
        </AccordionDetails>
      </Accordion>

      {/* REPORT ACCORDION ITEM */}

      <Accordion
        square
        expanded={expanded === "report"}
        onChange={handleChange("report")}
      >
        <AccordionSummary aria-controls='reportID-content' id='reportID-header'>
          <ReportIcon />
          <Typography className={styleClasses.typographyRoot}>
            REPORT
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReportNavList />
        </AccordionDetails>
      </Accordion>

      {/* PEOPLE ACCORDION ITEM */}

      <Accordion
        square
        expanded={expanded === "people"}
        onChange={handleChange("people")}
      >
        <AccordionSummary aria-controls='peopleID-content' id='peopleID-header'>
          <PeopleIcon />
          <Typography className={styleClasses.typographyRoot}>
            PEOPLE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
export default SideNavList;
