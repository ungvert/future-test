import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { stableSort, getComparator } from '../../utils/tableSort';
import { EnhancedTableToolbar } from './TableToolbar';
import { EnhancedTableHead } from './TableHead';
import TableBodyRow from './TableBodyRow';
import { RowDetails } from './RowDetails';
import Box from '@material-ui/core/Box';

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
  setData: SetData;
};

export default function EnhancedTable({ data, setData }: TableProps) {
  const classes = useStyles();
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<SortableRows>('id');
  const [page, setPage] = useState(0);
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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableCells: TableCell[] = [
    {
      id: 'id',
      label: 'id',
      numeric: false,
      disablePadding: false,
      sortable: true,
      displayInTable: true,
      inputType: 'number',
    },
    {
      id: 'firstName',
      label: 'First name',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: true,
      inputType: 'text',
    },
    {
      id: 'lastName',
      label: 'Last name',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: true,
      inputType: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: true,
      inputType: 'email',
    },
    {
      id: 'phone',
      label: 'Phone',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: true,
      inputType: 'tel',
    },

    {
      id: 'addressStreetAddress',
      label: 'Street address',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: false,
      inputType: 'text',
    },
    {
      id: 'addressCity',
      label: 'City',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: false,
      inputType: 'text',
    },
    {
      id: 'addressState',
      label: 'State',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: false,
      inputType: 'text',
    },
    {
      id: 'addressZip',
      label: 'Zip',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: false,
      inputType: 'number',
    },

    {
      id: 'description',
      label: 'Description',
      numeric: false,
      disablePadding: true,
      sortable: true,
      displayInTable: false,
      inputType: 'text',
    },
  ];

  function applyFilterToRow(item: Data) {
    if (!filter) {
      return true;
    }

    const cellsToFilter = tableCells.filter((cell) => cell.displayInTable);
    return cellsToFilter.some(({ id }) => {
      return String(item[id]).toLowerCase().includes(filter);
    });
  }

  return (
    <Box className={classes.root} my={3}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          setFilter={setFilter}
          data={data}
          setData={setData}
          tableCells={tableCells}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              tableCells={tableCells}
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .filter(applyFilterToRow)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
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

      {selectedRow && <RowDetails row={selectedRow} tableCells={tableCells} />}
    </Box>
  );
}
