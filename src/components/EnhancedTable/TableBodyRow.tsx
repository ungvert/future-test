import { TableRow, TableCell, Checkbox } from '@material-ui/core';
import React from 'react';

type Props = {
  row: Data;
  tableCells: TableCell[];
};
export default function TableBodyRow({ row, tableCells }: Props) {
  // const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected: string[] = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };
  return (
    <TableRow
      hover
      // onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      // aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      // selected={isItemSelected}
    >
      {/* <TableCell >
        <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCell> */}

      {/* <TableCell
        component="th"
        // id={labelId}
        scope="row"
        // padding="none"
      >
        {row.id}
      </TableCell> */}
      {tableCells.map((tableCell) => (
        <TableCell
          key={tableCell.id}
          align={tableCell.numeric ? 'right' : 'left'}
          padding={tableCell.disablePadding ? 'none' : 'default'}
        >
          {row[tableCell.id]}
        </TableCell>
      ))}

      {/* <TableCell align="right">{row.id}</TableCell> */}
      {/* <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">{row.protein}</TableCell> */}
    </TableRow>
  );
}
