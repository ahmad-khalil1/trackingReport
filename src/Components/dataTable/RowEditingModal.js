import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { rowEditingActions } from "../../store/rowEditingSlice";
import EditFuelForm from "./EditFuelForm";

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
    modalRoot: {
      // minWidth: "600px",
      // backgroundColor: "black",
    },
    inputFocusd: {
      border: "1px solid #",
    },
    saveButtonRoot: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: "rgba(77,124,254,0.81)",
        // border: "1px solid #778CA2",
      },
    },
  };
});

const RowEditingModal = props => {
  // const { open, onClose: handleClose } = props;
  const isEditing = useSelector(state => state.rowEdit.isEditing);
  const currentRowID = useSelector(state => state.rowEdit.currentEditingRowID);
  const currentEditeRow = useSelector(state =>
    state.rows.rows.find(row => row.id === currentRowID)
  );
  const dispatch = useDispatch();

  const classes = useStyle();

  const handleClose = () => {
    dispatch(rowEditingActions.resetEditRow());
  };

  return (
    <Dialog
      fullWidth
      classes={{ paper: classes.modalRoot }}
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
          // onClick={handleClose}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default RowEditingModal;
