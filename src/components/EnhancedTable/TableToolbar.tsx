/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Toolbar, TextField, InputAdornment } from '@material-ui/core';
import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import debounce from 'lodash/debounce';
import AddRowDialog from './AddRowDialog';

type EnhancedTableToolbarProps = {
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  data: Data[];
  setData: SetData;
  tableCells: TableCell[];
};

export const EnhancedTableToolbar = ({
  setFilter,
  data,
  setData,
  tableCells,
}: EnhancedTableToolbarProps) => {
  const [open, setOpen] = React.useState(false);
  const debouncedSetFilter = debounce((text: string) => setFilter(text), 200);

  return (
    <Toolbar>
      <TextField
        label="Filter"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FilterListIcon />
            </InputAdornment>
          ),
        }}
        onChange={(event) => debouncedSetFilter(event.target.value)}
      />

      <AddRowDialog
        open={open}
        setOpen={setOpen}
        data={data}
        setData={setData}
        tableCells={tableCells}
      />
    </Toolbar>
  );
};
