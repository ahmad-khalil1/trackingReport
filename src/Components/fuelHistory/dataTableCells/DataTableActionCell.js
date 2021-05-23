import { IconButton, makeStyles } from "@material-ui/core";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
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
  // const dispatch = useDispatch();
  const { id, deleteRow, startEditRow } = props;

  const handleDelete = () => {
    deleteRow(id);
  };
  const handleEdit = () => {
    startEditRow(id);
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

export default connect(null, {
  deleteRow: rowActions.deleteRow,
  startEditRow: rowEditingActions.startEditRow,
})(DataTableActionCell);
