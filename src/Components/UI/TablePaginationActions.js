import {
  Divider,
  IconButton,
  makeStyles,
  Paper,
  useTheme,
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    // display: "flex",
    marginLeft: theme.spacing(2.5),
  },
  iconRoot: {
    color: theme.palette.text.primary,
    display: "flex",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={classes.root}>
      {/* <Grid container justify='space-between'> */}
      <Paper elevation={0} className={classes.iconRoot} variant='outlined'>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label='previous page'
          color='inherit'
        >
          {theme.direction === "rtl" ? <ArrowRight /> : <ArrowLeft />}
        </IconButton>
        <Divider orientation='vertical' flexItem />
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='next page'
          color='inherit'
        >
          {theme.direction === "rtl" ? <ArrowLeft /> : <ArrowRight />}
        </IconButton>
      </Paper>
      {/* </Grid> */}
    </div>
  );
}

export default TablePaginationActions;
