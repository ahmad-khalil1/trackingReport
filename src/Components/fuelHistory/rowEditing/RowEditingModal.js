import {
  Button,
  Dialog,
  IconButton,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import EditFuelForm from "./EditFuelForm";

// import {  useDispatch, useSelector } from "react-redux";
// import { rowEditingActions } from "../../../store/rowEditingSlice";
import { connect } from "react-redux";
import { getEditingState } from "../../../store/selectors";
import { resetEditRow } from "../../../store/actions";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      <IconButton
        aria-label='close'
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyle = makeStyles(theme => {
  return {
    saveButtonRoot: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: "rgba(77,124,254,0.81)",
      },
    },
  };
});

const RowEditingModal = props => {
  const { isEditing, resetEditRow } = props;
  // const isEditing = useSelector(state => state.rowEdit.isEditing);
  // const dispatch = useDispatch();
  const classes = useStyle();

  const handleClose = () => {
    resetEditRow();
  };

  return (
    <Dialog
      fullWidth
      open={isEditing}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='customized-dialog-title' onClose={handleClose}>
        Edit Fuel Entry
      </DialogTitle>
      <DialogContent dividers>
        <EditFuelForm />
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant='outlined' onClick={handleClose}>
          Cancel
        </Button>
        <Button
          autoFocus
          classes={{ root: classes.saveButtonRoot }}
          type='submit'
          form='EditFuelForm'
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = state => {
  return { isEditing: getEditingState(state) };
};
export default connect(mapStateToProps, {
  resetEditRow,
})(RowEditingModal);
