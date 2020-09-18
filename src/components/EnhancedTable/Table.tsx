import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { stableSort, getComparator } from '../../utils/tableSort';
import { EnhancedTableToolbar } from './TableToolbar';
import { EnhancedTableHead } from './TableHead';
import TableBodyRow from './TableBodyRow';
import { RowDetails } from './RowDetails';

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

type TableProps = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
};

export default function EnhancedTable({ data, setData }: TableProps) {
  const classes = useStyles();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<SortableRows>('id');
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [filter, setFilter] = useState<string | null>(null);
  const [selectedRow, setSelectedRow] = useState<Data | null>(null);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: SortableRows
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n) => n.id);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const tableCells: TableCell[] = [
    {
      id: 'id',
      label: 'id',
      numeric: false,
      disablePadding: false,
      sortable: true,
    },
    {
      id: 'firstName',
      label: 'First name',
      numeric: false,
      disablePadding: true,
      sortable: true,
    },
    {
      id: 'lastName',
      label: 'Last name',
      numeric: false,
      disablePadding: true,
      sortable: true,
    },
    {
      id: 'email',
      label: 'Email',
      numeric: false,
      disablePadding: true,
      sortable: true,
    },
    {
      id: 'phone',
      label: 'Phone',
      numeric: false,
      disablePadding: true,
      sortable: true,
    },
  ];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          setFilter={setFilter}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              tableCells={tableCells}
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .filter((item) =>
                  filter
                    ? item.firstName.toLowerCase().includes(filter as string)
                    : true
                )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  // const isItemSelected = isSelected(row.name);
                  // const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableBodyRow
                      key={index}
                      row={row}
                      tableCells={tableCells}
                      selectedRow={selectedRow}
                      setSelectedRow={setSelectedRow}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>

      {/* {selectedRow && <div>{JSON.stringify(selectedRow)}</div>} */}
      {selectedRow && <RowDetails row={selectedRow} tableCells={tableCells} />}
    </div>
  );
}
