/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { Box, Typography, useTheme } from '@material-ui/core';
import React from 'react';
type Props = {
  row: Data;
  tableCells: TableCell[];
};
export const RowDetails = ({ row, tableCells }: Props) => {
  const theme = useTheme();
  const styles = {
    detailsHeadline: css`
      flex-basis: 30%;
      flex-shrink: 0;
    `,
  };

  function DetailsItem({ label, value }: { label: string; value: string }) {
    return (
      <Box display="flex" alignItems="center" mt={1}>
        <Typography variant="h6" css={styles.detailsHeadline}>
          {label}
        </Typography>
        <Typography>{value}</Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Typography variant="h4">Details</Typography>
      {tableCells.map((tableCell, i) => {
        return (
          <DetailsItem
            label={tableCell.label as string}
            value={row[tableCell.id] as string}
            key={i}
          />
          //   <Box key={tableCell.id} display="flex" alignItems="center" mt={1}>
          //     <Typography variant="h6" css={styles.detailsHeadline}>
          //       {tableCell.label}
          //     </Typography>
          //     <Typography>{row[tableCell.id]}</Typography>
          //   </Box>
        );
      })}

      <DetailsItem label={'Street address'} value={row.address.streetAddress} />
      <DetailsItem label={'City'} value={row.address.city} />
      <DetailsItem label={'State'} value={row.address.state} />
      <DetailsItem label={'Zip'} value={row.address.zip} />

      <DetailsItem label={'description'} value={row.description} />
    </Box>
  );
};
