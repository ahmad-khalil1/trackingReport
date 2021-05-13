import { TableBody, TableCell, TableRow } from "@material-ui/core";
import { Fragment } from "react";
import DataRow from "../UI/dataTableUI/DataRow";
import CostPresentation from "./dataTableCells/CostPresentation";
import DataTableActionCell from "./dataTableCells/DataTableActionCell";
import VehiclePresention from "./dataTableCells/VehiclePresention";

const getRowsDateGrouped = rowsArray => {
  const array = [...rowsArray];
  // transform vehicle date to match the human readble
  //could issue a bug (after first sorting the main array date is transofmed to string and canno't re sorting again )
  // const transformedArray = array.map(item => {
  //   const temp = item;
  //   if (typeof temp.date !== "string") {
  //     // temp.date = temp.date.toDateString();
  //   }
  //   return temp;
  // });
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
    <>
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
                      <TableCell
                        component='th'
                        key={labelId}
                        scope='row'
                        // padding='none'
                      >
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
                        <DataTableActionCell
                          id={row.id}
                          onDeleteHandler={props.handleDelete}
                        />
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
                <TableCell
                  component='th'
                  id={labelId}
                  scope='row'
                  // padding='none'
                >
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
                  <DataTableActionCell
                    id={row.id}
                    onDeleteHandler={props.handleDelete}
                  />
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
    </>
  );
};
export default FuelHistryTableBody;
