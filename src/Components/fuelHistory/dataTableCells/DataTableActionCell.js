import { IconButton, makeStyles } from "@material-ui/core";
import DeleteIcon from "../../../assets/icons/DeleteIcon";
import EditIcon from "../../../assets/icons/EditIcon";

// import { useDispatch } from "react-redux";
// import { rowEditingActions } from "../../../store/rowEditingSlice";
// import { rowActions } from "../../../store/rowSlice";
import { connect } from "react-redux";
import { deleteRow, startEditRow } from "../../../store/actions";

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
  deleteRow,
  startEditRow,
})(DataTableActionCell);
