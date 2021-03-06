import { makeStyles, TableCell, TableHead, TableRow } from "@material-ui/core";

const headCells = [
  { id: "time", isAction: false, disablePadding: false, label: "Time" },
  { id: "totalKm", isAction: false, disablePadding: false, label: "Total KM" },
  { id: "volume", isAction: false, disablePadding: false, label: "Volume" },
  { id: "cost", isAction: false, disablePadding: false, label: "Cost" },
  { id: "actions", isAction: true, disablePadding: false, label: "Actions" },
];

const useStyles = makeStyles(theme => ({
  headRowStyleRoot: {
    backgroundColor: theme.palette.background.default,
  },
  cellRoot: { color: theme.palette.text.hint },
}));
const FuelHistryTableHead = _ => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow classes={{ root: classes.headRowStyleRoot }}>
        <TableCell classes={{ root: classes.cellRoot }}>Vehicle</TableCell>
        {headCells.map(headCell => (
          <TableCell
            classes={{ root: classes.cellRoot }}
            key={headCell.id}
            align={headCell.isAction ? "center" : "left"}
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
