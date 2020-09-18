/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import {
  makeStyles,
  Theme,
  createStyles,
  lighten,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  TextField,
  InputAdornment,
  Button,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';
import debounce from 'lodash/debounce';
import AddRowDialog from './AddRowDialog';
const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
  })
);

type EnhancedTableToolbarProps = {
  numSelected: number;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  data: Data[];
  setData: SetData;
  tableCells: TableCell[];
};

export const EnhancedTableToolbar = ({
  numSelected,
  setFilter,
  data,
  setData,
  tableCells,
}: EnhancedTableToolbarProps) => {
  const theme = useTheme();
  const styles = {
    title: css`
      /* flex: 1 0.5 0; */
      margin-right: ${theme.spacing(4)}px;
    `,
    toolbarButton: css`
      margin: ${theme.spacing(1)}px;
      margin-left: ${theme.spacing(4)}px;
      flex-shrink: 0;
    `,
  };

  const [open, setOpen] = React.useState(false);

  const classes = useToolbarStyles();

  const debouncedSetFilter = debounce((text: string) => setFilter(text), 200);

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          // className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          // className={classes.title}
          css={styles.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Data
        </Typography>
      )}

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
