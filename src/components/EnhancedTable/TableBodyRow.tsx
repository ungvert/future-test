import { TableRow, TableCell, Checkbox } from '@material-ui/core';
import { Rowing } from '@material-ui/icons';
import React from 'react';

type Props = {
  row: Data;
  tableCells: TableCell[];
  selectedRow: Data | null;
  setSelectedRow: React.Dispatch<React.SetStateAction<Data | null>>;
};
export default function TableBodyRow({
  row,
  tableCells,
  selectedRow,
  setSelectedRow,
}: Props) {
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

  function handleClick(
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: Data
  ) {
    setSelectedRow(row === selectedRow ? null : row);
  }
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row)}
      role="checkbox"
      // aria-checked={isItemSelected}
      tabIndex={-1}
      selected={row === selectedRow}
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
          key={tableCell.label}
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
