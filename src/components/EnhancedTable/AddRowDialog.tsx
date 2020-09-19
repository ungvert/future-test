/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: Data[];
  setData: SetData;
  tableCells: TableCell[];
};

export default function AddRowDialog({
  open,
  setOpen,
  data,
  setData,
  tableCells,
}: Props) {
  const [newRowData, setNewRowData] = useState<Partial<Data> | null>(null);
  const theme = useTheme();

  const handleSubmit = () => {
    if (newRowData) {
      setData([newRowData as Data, ...data]);
    }

    setNewRowData(null);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ids: keyof Data
  ) => {
    if (!newRowData) {
      setNewRowData({
        [ids as keyof Data]: e.target.value,
      });
    } else {
      setNewRowData({
        ...newRowData,
        [ids as keyof Data]: e.target.value,
      });
    }
  };

  function everyInputIsFilled() {
    return newRowData
      ? tableCells.every(({ id }) => {
          if (id in newRowData && newRowData[id] !== null) {
            return true;
          }
          return false;
        })
      : false;
  }

  const styles = {
    title: css`
      margin-right: ${theme.spacing(4)}px;
    `,
    toolbarButton: css`
      margin: ${theme.spacing(1)}px;
      margin-left: ${theme.spacing(4)}px;
      flex-shrink: 0;
    `,
  };

  return (
    <Box>
      <Button
        variant="contained"
        css={styles.toolbarButton}
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => setOpen(!open)}
      >
        Add row
      </Button>
      {open && (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title">Add row</DialogTitle>
          <DialogContent dividers>
            <Box>
              {tableCells.map((tableCell, i) => (
                <TextField
                  key={tableCell.id}
                  label={tableCell.label}
                  type={tableCell.inputType}
                  variant="outlined"
                  size="small"
                  margin="dense"
                  fullWidth
                  onChange={(e) => handleChange(e, tableCell.id)}
                />
              ))}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              color="primary"
              disabled={!everyInputIsFilled()}
            >
              Add row
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}
