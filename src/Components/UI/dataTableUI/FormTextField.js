import MuiTextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";

const FormTextField = withStyles(theme => {
  const outlineColor = theme.palette.divider;
  const focusedOutlineColor = "#7FAED1";
  const hoverColor = "#84869C";

  return {
    root: {
      "& .MuiOutlinedInput-root": {
        "& input": {
          color: theme.palette.text.secondary,
        },
        "& fieldset": {
          borderColor: outlineColor,
        },
        "&:hover fieldset": {
          borderColor: hoverColor,
        },
        "&.Mui-focused fieldset": {
          borderColor: focusedOutlineColor,
        },
      },
    },
  };
})(MuiTextField);

export default FormTextField;
