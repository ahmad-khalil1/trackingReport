import {
  FormControl,
  InputAdornment,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import DropDownSelectIcon from "../../../assets/icons/DropDownSelectIcon";

const useStyle = makeStyles(theme => ({
  selectpaperRoot: {
    padding: "0.375rem 1rem",
    // cellRoot: { color: theme.palette.text.hint },
    marginLeft: "28px",
    "& p": { color: theme.palette.text.hint },
    color: theme.palette.text.secondary,
  },
  selectRoot: { color: theme.palette.text.secondary, marginRight: "0.5rem" },
  menuRoot: {
    color: theme.palette.text.secondary,
    marginRight: "0.5rem",
    // "& li": { "&:select": { backgroundColor: "none" } },
  },
  iconStyle: { color: theme.palette.text.primary },
  nextNBackIconButton: {},
  formformControl: { color: theme.palette.text.secondary },
}));

const SortingSelect = props => {
  const { selectTitle, value, onChangeHandler } = props;
  const classes = useStyle();
  const menuClasses = { paper: classes.menuRoot };

  return (
    <>
      <Paper
        elevation={0}
        className={classes.selectpaperRoot}
        variant='outlined'
      >
        <FormControl
          // variant='filled'
          color='secondary'
          className={classes.formControl}
        >
          {/* <InputLabel id='demo-simple-select-filled-label'>Age</InputLabel> */}
          <Select
            disableUnderline
            id='adsf'
            onChange={onChangeHandler}
            value={value}
            IconComponent={ExpandMore}
            MenuProps={{ classes: { ...menuClasses } }}
            classes={{ root: classes.selectRoot, icon: classes.iconStyle }}
            startAdornment={
              <InputAdornment position='start'>
                <Typography>{selectTitle}: </Typography>
              </InputAdornment>
            }
          >
            {props.children}
          </Select>
        </FormControl>
      </Paper>
    </>
  );
};

export default SortingSelect;
