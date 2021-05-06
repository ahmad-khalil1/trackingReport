import { List } from "@material-ui/core";

import NavLinkListItem from "./NavLinkListItem";

const ReportNavList = () => {
  return (
    <List>
      <NavLinkListItem to='operatingCost' title='Operating Cost' />
      <NavLinkListItem to='fuelHistory' title='Fuel History' />
      <NavLinkListItem to='cost-meter' title='Cost/Meter' />
      <NavLinkListItem to='totalCost' title='Total Cost' />
      <NavLinkListItem to='expenseSummery' title='Expense Summery' />
      <NavLinkListItem to='utilization' title='Utilization' />
      <NavLinkListItem to='maintaince' title='Maintaince' />
      <NavLinkListItem to='service' title='Service' />
    </List>
  );
};

export default ReportNavList;
