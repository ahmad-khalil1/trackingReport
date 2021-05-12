import { IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import EditIcon from "../../../assets/icons/EditIcon";
const useStyle = makeStyles(theme => ({
  iconRedColor: { color: "#FE4D5C" },
  iconOrangeColor: { color: "#FFAB2B" },
}));
const DataTableActionCell = props => {
  const classes = useStyle();
  return (
    <>
      <IconButton classes={{ root: classes.iconOrangeColor }}>
        <EditIcon />
      </IconButton>
      <IconButton classes={{ root: classes.iconRedColor }}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default DataTableActionCell;
