import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  NativeSelect,
  TablePagination,
  Toolbar,
} from "@material-ui/core";

const useToolbarStyles = makeStyles(theme => ({
  root: {},
  title: {
    // flex: "1 1 100%"
  },
  selectFilled: {
    backgroundColor: theme.palette.background.paper,
  },
  nextNBackIconButton: {},
  formformControl: {},
}));

const FuelHistoryToolBar = props => {
  const classes = useToolbarStyles();
  return (
    <Toolbar>
      <TablePagination
        rowsPerPageOptions={[]}
        labelRowsPerPage={""}
        component='div'
        backIconButtonProps={{
          classes: {
            root: classes.nextNBackIconButton,
          },
        }}
        nextIconButtonProps={{
          classes: {
            root: classes.nextNBackIconButton,
          },
        }}
        count={props.rowsCount}
        rowsPerPage={10}
        page={1}
        onChangePage={props.handleChangePage}
        onChangeRowsPerPage={props.handleChangeRowsPerPage}
      />
      <FormControl variant='filled' className={classes.formControl}>
        <InputLabel id='demo-simple-select-filled-label'>Age</InputLabel>
        <NativeSelect
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          //   value={age}
          //   onChange={handleChange}
        >
          <MenuItem value={"egypt"}>EGY</MenuItem>
          <MenuItem value={"saudi"}>KSA</MenuItem>
        </NativeSelect>
      </FormControl>
    </Toolbar>
  );
};
export default FuelHistoryToolBar;
