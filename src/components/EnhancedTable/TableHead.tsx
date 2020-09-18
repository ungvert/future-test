import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

interface EnhancedTableProps {
  tableCells: TableCell[];
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: SortableRows
  ) => void;
  // onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    tableCells,
    classes,
    // onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property: SortableRows) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="none"> */}
        {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          /> */}
        {/* </TableCell> */}
        {tableCells
          .filter((cell) => cell.displayInTable)
          .map((tableCell) => (
            <TableCell
              key={tableCell.id}
              align={tableCell.numeric ? 'right' : 'left'}
              padding={tableCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === tableCell.id ? order : false}
            >
              {tableCell.sortable ? (
                <TableSortLabel
                  active={orderBy === tableCell.id}
                  direction={orderBy === tableCell.id ? order : 'asc'}
                  onClick={createSortHandler(tableCell.id as SortableRows)}
                >
                  {tableCell.label}
                  {orderBy === tableCell.id ? (
                    <span className={classes.visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              ) : (
                tableCell.label
              )}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}
