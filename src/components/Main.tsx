import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import fetchData from '../api/api';
import EnhancedTable from './EnhancedTable/Table';

function Main() {
  const [dataVariant, setDataVariant] = useState<ApiDataVariant | null>(null);

  const [data, setData] = useState<Data[] | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleDatasetClick(variant: ApiDataVariant) {
    setDataVariant(variant);
    setData(null);
    setLoading(true);

    const [responseError, responseData] = await fetchData(variant);
    if (responseError) {
      setError(responseError);
    } else {
      setData(responseData);
    }

    setLoading(false);
  }

  return (
    <Container component="main">
      {
        <Box my={4}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => handleDatasetClick('small')}
              variant={dataVariant === 'small' ? 'contained' : 'outlined'}
            >
              Fetch small dataset
            </Button>
            <Button
              onClick={() => handleDatasetClick('big')}
              variant={dataVariant === 'big' ? 'contained' : 'outlined'}
            >
              Fetch big dataset
            </Button>
          </ButtonGroup>
        </Box>
      }
      {loading && (
        <Box display="flex" my={4}>
          <CircularProgress />
        </Box>
      )}

      {error && <div>error:{error}</div>}
      {data && (
        <EnhancedTable data={data as Data[]} setData={setData as SetData} />
      )}
    </Container>
  );
}

export default Main;
