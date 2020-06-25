import React from "react";

import { Button } from "@material-ui/core";
import { TableRow, TableCell } from "@material-ui/core";

const Event: React.FC = () => {
  return (
    <TableRow>
      <TableCell>
        <input type="checkbox" />
      </TableCell>
      <TableCell>1</TableCell>
      <TableCell>課題</TableCell>
      <TableCell>P77</TableCell>
      <TableCell>
        <Button type="button" color="secondary" variant="contained">
          削除
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Event;
