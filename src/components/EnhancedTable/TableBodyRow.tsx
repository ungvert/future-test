import { TableRow, TableCell } from '@material-ui/core';
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
      tabIndex={-1}
      selected={row === selectedRow}
    >
      {tableCells
        .filter((cell) => cell.displayInTable)
        .map((tableCell) => (
          <TableCell
            key={tableCell.label}
            align={tableCell.numeric ? 'right' : 'left'}
            padding={tableCell.disablePadding ? 'none' : 'default'}
          >
            {row[tableCell.id]}
          </TableCell>
        ))}
    </TableRow>
  );
}
