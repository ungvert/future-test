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
  //   dataItem: DataItem;
  setData: SetData;
  //   setActiveItem: React.Dispatch<React.SetStateAction<DataItem | null>>;
  tableCells: TableCell[];
};

export default function AddRowDialog({
  open,
  setOpen,
  data,
  //   dataItem,
  setData,
  tableCells,
}: //   setActiveItem,
Props) {
  const [newRowData, setNewRowData] = useState<Partial<Data> | null>(null);
  //   const isNewItem = !dataItem.id;

  //   const [name, setName] = useState(dataItem.name);
  //   const [type, setType] = useState(dataItem.type);
  //   const [color, setColor] = useState<string>(dataItem.color);

  //   const id = isNewItem ? uuidv4() : dataItem.id;

  const handleSubmit = () => {
    console.log('newRowData', newRowData);

    if (newRowData) {
      setData([newRowData as Data, ...data]);
    }

    setNewRowData(null);
    setOpen(false);
  };

  const handleClose = () => {
    //   setActiveItem(null);
    setOpen(false);
  };

  //   const handleDelete = () => {
  //     setData(data.filter((item) => item.id !== id));

  //     setActiveItem(null);
  //     setOpen(false);
  //   };

  //   const handleNameChange = (
  //     e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  //   ) => setName(e.target.value);

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
  return (
    <Box>
      <Button
        variant="contained"
        css={styles.toolbarButton}
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => setOpen(!open)}
      >
        Add
      </Button>
      {open && (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title">
            {/* {isNewItem ? 'Добавить' : 'Редактировать'} */}
            Add row
          </DialogTitle>
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

                  //   value={name}
                  // onChange={handleNameChange}
                />
              ))}
              {/* <TextField
            label="Name"
            variant="outlined"
            size="small"
            margin="dense"
            type="text"
            value={name}
            onChange={handleNameChange}
          />

          <TextField
            label="Type"
            variant="outlined"
            size="small"
            margin="dense"
            type="text"
            value={type}
            onChange={handleTypeChange}
          /> */}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}
