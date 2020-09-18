import axios from 'axios';

// const endpoints = {
//   small: 'https://future-test-omega.vercel.app/api/filltext?variant=small',
//   big: 'https://future-test-omega.vercel.app/api/filltext?variant=big',
// };

const endpoints = {
  small:
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
  big:
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
};

const fetchData = async (variant: ApiDataVariant) => {
  try {
    const response = await axios.get(endpoints[variant]);

    if (response.hasOwnProperty('data')) {
      if (response.data.hasOwnProperty('error')) {
        return [JSON.stringify(response.data.error), null];
      } else {
        return [null, response.data];
      }
    }
    return ['API not returned data', null];
  } catch (e) {
    console.warn(e);
    return [e.message, null];
  }
};

export default fetchData;
