import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  makeStyles,
  MenuItem,
  OutlinedInput,
  //   TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import MuiTextField from "@material-ui/core/TextField";
import { ExpandMore } from "@material-ui/icons";
import { useFormik } from "formik";
import * as yup from "yup";

const TextField = withStyles(theme => {
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

const vehiclesArray = [
  "Toyota auris",
  "Daihatsu xenia",
  "Toyota auriss",
  "Toyota avanzas",
  "Toyota avanza",
  "Toyota prius",
];

const fuelType = [80, 92, 95];

const useStyles = makeStyles(theme => {
  return {
    selectRoot: { color: theme.palette.text.secondary },
    iconStyle: { color: theme.palette.text.primary },
    inputAndemortRoot: { color: "rgba(11,11,13,0.5)" },
  };
});

const validationSchema = yup.object({
  vehicles: yup
    .string()
    .oneOf(vehiclesArray, "This vehicle isn't Available ")
    .required("Required"),
  startDate: yup.date().required("Required"),
  odometer: yup.number().positive("invalid Odemeter").required("Required"),
  volume: yup.number().positive("invalid Volume").required("Required"),
  fuelType: yup.number().oneOf(fuelType, "this isn't fuel type").notRequired(),
});

const EditFuelForm = props => {
  const formik = useFormik({
    initialValues: {
      vehicles: "Toyota prius",
      startDate: "2019-07-12",
      odometer: 75.591,
      volume: 45,
      fuelType: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleChange = () => {};
  const classes = useStyles();
  return (
    <form>
      <Grid style={{ marginBottom: "10px" }}>
        <Typography>Vehicle</Typography>
        <TextField
          id='vehicles'
          name='vehicles'
          value={formik.values.vehicles}
          onChange={formik.handleChange}
          error={formik.touched.vehicles && Boolean(formik.errors.vehicles)}
          helperText={formik.touched.vehicles && formik.errors.vehicles}
          onBlur={formik.handleBlur}
          variant='outlined'
          fullWidth
          select
          SelectProps={{
            IconComponent: ExpandMore,
            classes: { root: classes.selectRoot, icon: classes.iconStyle },
          }}
        >
          {vehiclesArray.map(vehicle => {
            return (
              <MenuItem key={`${1}${vehicle}`} value={vehicle}>
                {vehicle}(B-41082)
              </MenuItem>
            );
          })}
        </TextField>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography>Start Date</Typography>
          <TextField
            id='startDate'
            name='startDate'
            value={formik.values.startDate}
            onChange={formik.handleChange}
            error={formik.touched.startDate && Boolean(formik.errors.startDate)}
            helperText={formik.touched.startDate && formik.errors.startDate}
            onBlur={formik.handleBlur}
            fullWidth
            type='date'
            // value={"2019-07-12"}
            variant='outlined'
            InputProps={{
              color: "secondary",
              // disableUnderline: true,
            }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography>Odometer</Typography>
          <TextField
            id='odometer'
            name='odometer'
            value={formik.values.odometer}
            onChange={formik.handleChange}
            error={formik.touched.odometer && Boolean(formik.errors.odometer)}
            helperText={formik.touched.odometer && formik.errors.odometer}
            onBlur={formik.handleBlur}
            fullWidth
            variant='outlined'
            InputProps={{
              endAdornment: (
                <InputAdornment
                  disableTypography
                  classes={{ root: classes.inputAndemortRoot }}
                  position='end'
                >
                  Kms
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography>Volume</Typography>
          <TextField
            id='volume'
            name='volume'
            value={formik.values.volume}
            onChange={formik.handleChange}
            error={formik.touched.volume && Boolean(formik.errors.volume)}
            helperText={formik.touched.volume && formik.errors.volume}
            onBlur={formik.handleBlur}
            fullWidth
            variant='outlined'
            InputProps={{
              endAdornment: (
                <InputAdornment
                  disableTypography
                  classes={{ root: classes.inputAndemortRoot }}
                  position='end'
                >
                  Ltrs
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography>Fuel Type (optional)</Typography>
          <TextField
            id='fuelType'
            name='fuelType'
            value={formik.values.fuelType}
            onChange={formik.handleChange}
            error={formik.touched.fuelType && Boolean(formik.errors.fuelType)}
            helperText={formik.touched.fuelType && formik.errors.fuelType}
            onBlur={formik.handleBlur}
            fullWidth
            variant='outlined'
            select
            SelectProps={{
              IconComponent: ExpandMore,
              classes: { root: classes.selectRoot, icon: classes.iconStyle },
              // placeholder: "Select one",
              displayEmpty: true,
            }}
          >
            <MenuItem value='' disabled>
              Select one
            </MenuItem>
            {fuelType.map(type => {
              return (
                <MenuItem key={`${1}${type}`} value={type}>
                  {type}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditFuelForm;
