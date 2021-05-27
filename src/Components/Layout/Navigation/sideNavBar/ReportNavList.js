import { List } from "@material-ui/core";
import React from "react";
import NavLinkListItem from "./NavLinkListItem";

class ReportNavList extends React.Component {
  render() {
    return (
      <List style={{ width: "100%" }}>
        <NavLinkListItem to='/report/operatingCost' title='Operating Cost' />
        <NavLinkListItem to='/report/fuelHistory' title='Fuel History' />
        <NavLinkListItem to='/report/cost-meter' title='Cost/Meter' />
        <NavLinkListItem to='/report/totalCost' title='Total Cost' />
        <NavLinkListItem to='/report/expenseSummery' title='Expense Summery' />
        <NavLinkListItem to='/report/utilization' title='Utilization' />
        <NavLinkListItem to='/report/maintaince' title='Maintaince' />
        <NavLinkListItem to='/report/service' title='Service' />
      </List>
    );
  }
}

export default ReportNavList;
