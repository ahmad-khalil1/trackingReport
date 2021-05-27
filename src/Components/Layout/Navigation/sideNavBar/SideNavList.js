import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, Paper, Typography, withStyles } from "@material-ui/core";
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
// const useStyles = makeStyles(theme => {
//   return {
//     typographyRoot: {
//       marginLeft: "18px",
//     },
//   };
// });

const styles = theme => {
  return {
    typographyRoot: {
      marginLeft: "18px",
    },
  };
};

class SideNavList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: "report" };
    this.handleChange = this.handleChange.bind(this);
  }
  // styleClasses = useStyles();
  // const [expanded, setExpanded] = useState("report");

  // handle accordion state
  handleChange = panel => (event, newExpanded) => {
    this.setState(newExpanded ? panel : false);
  };
  render() {
    const { classes: styleClasses } = this.props;
    return (
      <Paper elevation={0}>
        {/* VEHICLES ACCORDION ITEM */}

        <Accordion
          square
          expanded={this.state.expanded === "vehicle"}
          onChange={this.handleChange("vehicle")}
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
          expanded={this.state.expanded === "report"}
          onChange={this.handleChange("report")}
        >
          <AccordionSummary
            aria-controls='reportID-content'
            id='reportID-header'
          >
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
          expanded={this.state.expanded === "people"}
          onChange={this.handleChange("people")}
        >
          <AccordionSummary
            aria-controls='peopleID-content'
            id='peopleID-header'
          >
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
  }
}
// export default SideNavList;

SideNavList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavList);
