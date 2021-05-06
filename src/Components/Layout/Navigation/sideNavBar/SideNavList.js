import { useState } from "react";
import { List, withStyles, Paper, Typography } from "@material-ui/core";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

import VehiclesIcon from "../../../../assets/Navigation/icons/VehiclesIcon";
import ReportIcon from "../../../../assets/Navigation/icons/ReportIcon";
import PeopleIcon from "../../../../assets/Navigation/icons/PeopleIcon";
import ReportNavList from "./ReportNavList";

// accordion style overrideing
const Accordion = withStyles(theme => {
  return {
    root: {
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
        backgroundColor: theme.palette.action.active,
      },
    },
    expanded: {},
  };
})(MuiAccordion);

const AccordionSummary = withStyles(theme => {
  return {
    root: {
      marginBottom: -1,
      padding: "10px 10px 10px 30px ",
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
        backgroundColor: theme.palette.action.active,
        borderLeft: "3px solid #4D7CFE",
        padding: "10px 10px 10px 27px ",
        "& svg": { color: "#4D7CFE" },
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
  };
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: "0px ",
  },
}))(MuiAccordionDetails);

const SideNavList = props => {
  const [expanded, setExpanded] = useState("report");

  // handle accordion state
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Paper elevation={0}>
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
          <Typography style={{ marginLeft: "18px" }}>VEHICLES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "report"}
        onChange={handleChange("report")}
      >
        <AccordionSummary aria-controls='reportID-content' id='reportID-header'>
          <ReportIcon />
          <Typography style={{ marginLeft: "18px" }}>REPORT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReportNavList />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "people"}
        onChange={handleChange("people")}
      >
        <AccordionSummary aria-controls='peopleID-content' id='peopleID-header'>
          <PeopleIcon />
          <Typography style={{ marginLeft: "18px" }}>PEOPLE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
export default SideNavList;
