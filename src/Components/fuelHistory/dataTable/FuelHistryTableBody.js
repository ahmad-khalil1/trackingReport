import { TableBody, TableCell, TableRow } from "@material-ui/core";
import { Fragment } from "react";
import DataRow from "../../UI/dataTableUI/DataRow";
import CostPresentation from "../dataTableCells/CostPresentation";
import DataTableActionCell from "../dataTableCells/DataTableActionCell";
import VehiclePresention from "../dataTableCells/VehiclePresention";

const getRowsDateGrouped = rowsArray => {
  const array = [...rowsArray];
  // group the vehicle withing the same date
  const groupBy = (array, key) => {
    return array.reduce((result, currentItem) => {
      (result[currentItem[key].toDateString()] =
        result[currentItem[key].toDateString()] || []).push(currentItem);
      return result;
    }, {});
  };

  const groupedArray = groupBy(array, "date");
  // return an array of object contain the date and its rows
  return Object.keys(groupedArray).map(date => {
    return {
      date,
      rows: groupedArray[date],
    };
  });
};

const FuelHistryTableBody = props => {
  return (
    <Fragment>
      <TableBody>
        {props.isSortedByDate &&
          getRowsDateGrouped(props.rows).map((dayRow, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <Fragment key={labelId}>
                <DataRow date={dayRow.date} />
                {dayRow.rows.map((row, index) => {
                  const labelId = `table-row${index}`;
                  return (
                    <TableRow hover key={row.name}>
                      <TableCell component='th' key={labelId} scope='row'>
                        <VehiclePresention
                          name={row.name}
                          image={row.image}
                          status={row.status}
                        />
                      </TableCell>
                      <TableCell align='left'>{row.time}</TableCell>
                      <TableCell align='left'>{row.totalKm}</TableCell>
                      <TableCell align='left'>{row.volume}</TableCell>
                      <TableCell align='left'>
                        <CostPresentation cost={row.cost} />
                      </TableCell>
                      <TableCell align='center'>
                        <DataTableActionCell id={row.id} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </Fragment>
            );
          })}
        {!props.isSortedByDate &&
          props.rows.map((row, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <TableRow hover key={row.name}>
                <TableCell component='th' id={labelId} scope='row'>
                  <VehiclePresention
                    name={row.name}
                    image={row.image}
                    status={row.status}
                  />
                </TableCell>
                <TableCell align='left'>{row.time}</TableCell>
                <TableCell align='left'>{row.totalKm}</TableCell>
                <TableCell align='left'>{row.volume}</TableCell>
                <TableCell align='left'>
                  <CostPresentation cost={row.cost} />
                </TableCell>
                <TableCell align='center'>
                  <DataTableActionCell id={row.id} />
                </TableCell>
              </TableRow>
            );
          })}
        {props.emptyRows > 0 && (
          <TableRow>
            <TableCell colSpan={10} />
          </TableRow>
        )}
      </TableBody>
    </Fragment>
  );
};
export default FuelHistryTableBody;
