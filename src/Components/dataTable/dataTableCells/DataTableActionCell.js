import { IconButton, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import { rowEditingActions } from "../../../store/rowEditingSlice";
import { rowActions } from "../../../store/rowSlice";
const useStyle = makeStyles(theme => ({
  iconRedColor: { color: "#FE4D5C" },
  iconOrangeColor: { color: "#FFAB2B" },
}));
const DataTableActionCell = props => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(rowActions.deleteRow(props.id));
  };
  const handleEdit = () => {
    dispatch(rowEditingActions.startEditRow(props.id));
  };
  return (
    <>
      <IconButton
        classes={{ root: classes.iconOrangeColor }}
        onClick={handleEdit}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        onClick={handleDelete}
        classes={{ root: classes.iconRedColor }}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default DataTableActionCell;
