import { TableCell, TableHead, TableRow } from "@material-ui/core";

const headCells = [
  {
    id: "vehicle",
    disablePadding: true,
    label: "Vehicle",
  },
  { id: "time", disablePadding: false, label: "Time" },
  { id: "totalKm", disablePadding: false, label: "Total KM" },
  { id: "volume", disablePadding: false, label: "Volume" },
  { id: "cost", disablePadding: false, label: "Cost" },
  { id: "actions", disablePadding: false, label: "Actions" },
];
const FuelHistryTableHead = props => {
  const { classes } = props;
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "default"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
export default FuelHistryTableHead;
