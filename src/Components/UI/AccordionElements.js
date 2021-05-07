import { withStyles } from "@material-ui/core";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

// accordion style overrideing
export const Accordion = withStyles(theme => {
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

export const AccordionSummary = withStyles(theme => {
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

export const AccordionDetails = withStyles(theme => ({
  root: {
    padding: "0px ",
  },
}))(MuiAccordionDetails);
