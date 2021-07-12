import {
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import TextField from "../../UI/dataTableUI/FormTextField";
import { useFormik } from "formik";
import { withFormik } from "formik";
import * as yup from "yup";
import propTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { rowEditingActions } from "../../../store/rowEditingSlice";
// import { rowActions } from "../../../store/rowSlice";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  getCurrentEditRowID,
  gitCurrentEditRow,
} from "../../../store/selectors";
import { editRow, resetEditRow } from "../../../store/actions";
import React from "react";

const vehiclesArray = [
  "Toyota auris",
  "Daihatsu xenia",
  "Toyota auriss",
  "Toyota avanzas",
  "Toyota avanza",
  "Toyota prius",
];

const fuelType = [80, 92, 95];

const styles = theme => {
  return {
    formRoot: { marginBottom: "1rem" },
    selectRoot: { color: theme.palette.text.secondary },
    iconStyle: { color: theme.palette.text.primary },
    inputAndemortRoot: { color: "rgba(11,11,13,0.5)" },
  };
};

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

const getDateForm = date => {
  const month =
    date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;

  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

  return `${date.getFullYear()}-${month}-${day}`;
};

class EditFuelForm extends React.Component {
  render() {
    const {
      /////////props comes from with styles
      classes,
      //////// props conming from formik
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;

    return (
      <form
        id='EditFuelForm'
        onSubmit={handleSubmit}
        classes={classes.formRoot}
      >
        <Grid style={{ marginBottom: "10px" }}>
          <Typography>Vehicle</Typography>
          <TextField
            id='vehicles'
            name='vehicles'
            value={values.vehicles}
            onChange={handleChange}
            error={touched.vehicles && Boolean(errors.vehicles)}
            helperText={touched.vehicles && errors.vehicles}
            onBlur={handleBlur}
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
              value={values.startDate}
              onChange={handleChange}
              error={touched.startDate && Boolean(errors.startDate)}
              helperText={touched.startDate && errors.startDate}
              onBlur={handleBlur}
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
              value={values.odometer}
              onChange={handleChange}
              error={touched.odometer && Boolean(errors.odometer)}
              helperText={touched.odometer && errors.odometer}
              onBlur={handleBlur}
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
              value={values.volume}
              onChange={handleChange}
              error={touched.volume && Boolean(errors.volume)}
              helperText={touched.volume && errors.volume}
              onBlur={handleBlur}
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
              value={values.fuelType}
              onChange={handleChange}
              error={touched.fuelType && Boolean(errors.fuelType)}
              helperText={touched.fuelType && errors.fuelType}
              onBlur={handleBlur}
              fullWidth
              variant='outlined'
              select
              SelectProps={{
                IconComponent: ExpandMore,
                classes: { root: classes.selectRoot, icon: classes.iconStyle },
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
  }
}
const mapStateToProps = state => {
  return {
    currentRowID: getCurrentEditRowID(state),
    currentEditRow: gitCurrentEditRow(state),
  };
};

const handleSubmision = (values, { props }) => {
  // alert(JSON.stringify(values, null, 2));
  props.editRow({
    editedRowID: props.currentRowID,
    editedRow: {
      name: values.vehicles,
      date: new Date(values.startDate),
      totalKm: `${values.odometer} km`,
      volume: `${values.volume} L`,
    },
  });
  props.resetEditRow();
};
const formikConfig = {
  mapPropsToValues: props => ({
    vehicles: props.currentEditRow.name,
    startDate: getDateForm(props.currentEditRow.date),
    odometer: Number(props.currentEditRow.totalKm.split(" ")[0]),
    volume: Number(props.currentEditRow.volume.split(" ")[0]),
    fuelType: "",
  }),
  validationSchema: validationSchema,
  handleSubmit: handleSubmision,
};

EditFuelForm.propTypes = {
  classes: propTypes.object.isRequired,
};

export default compose(
  connect(mapStateToProps, {
    editRow,
    resetEditRow,
  }),
  withStyles(styles),
  withFormik(formikConfig)
)(EditFuelForm);
