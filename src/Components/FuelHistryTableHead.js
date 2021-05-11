import { makeStyles, TableCell, TableHead, TableRow } from "@material-ui/core";

const headCells = [
  // {
  //   id: "vehicle",
  //   numeric: false,
  //   disablePadding: true,
  //   label: "Vehicle",
  // },
  { id: "time", numeric: true, disablePadding: false, label: "Time" },
  { id: "totalKm", numeric: true, disablePadding: false, label: "Total KM" },
  { id: "volume", numeric: true, disablePadding: false, label: "Volume" },
  { id: "cost", numeric: true, disablePadding: false, label: "Cost" },
  { id: "actions", numeric: true, disablePadding: false, label: "Actions" },
];

const useStyles = makeStyles(theme => ({
  headRowStyleRoot: {
    backgroundColor: theme.palette.background.default,
  },
  cellRoot: { color: theme.palette.text.hint },
}));
const FuelHistryTableHead = props => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow classes={{ root: classes.headRowStyleRoot }}>
        <TableCell classes={{ root: classes.cellRoot }}>Vehicle</TableCell>
        {headCells.map(headCell => (
          <TableCell
            classes={{ root: classes.cellRoot }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
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
