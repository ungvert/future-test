/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Box, Typography } from '@material-ui/core';

type Props = {
  row: Data;
  tableCells: TableCell[];
};

export const RowDetails = ({ row, tableCells }: Props) => {
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
        );
      })}
    </Box>
  );
};
