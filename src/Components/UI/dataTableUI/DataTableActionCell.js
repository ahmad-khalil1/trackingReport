import { IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const DataTableActionCell = props => {
  return (
    <>
      <IconButton color='inherit'>
        <Edit />
      </IconButton>
      <IconButton color='inherit'>
        <Delete />
      </IconButton>
    </>
  );
};

export default DataTableActionCell;
