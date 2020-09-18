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

  useEffect(() => {
    handleDatasetClick('small');
  }, []);

  return (
    <main>
      {!dataVariant && (
        <React.Fragment>
          <button onClick={() => handleDatasetClick('small')}>
            Small dataset
          </button>
          <button onClick={() => handleDatasetClick('big')}>Big dataset</button>
        </React.Fragment>
      )}
      {loading && <div>loading</div>}
      {error && <div>error:{error}</div>}
      {data && (
        <EnhancedTable
          data={data as Data[]}
          setData={setData as React.Dispatch<React.SetStateAction<Data[]>>}
        />
      )}
    </main>
  );
}

export default Main;
