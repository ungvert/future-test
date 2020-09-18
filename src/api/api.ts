import axios from 'axios';

const endpoints = {
  small: 'https://future-test.ungvert.vercel.app/api/filltext?variant=small',
  big: 'https://future-test.ungvert.vercel.app/api/filltext?variant=big',
};

const fetchData = async (variant: ApiDataVariant) => {
  try {
    const response = await axios.get(endpoints[variant]);

    if (response.hasOwnProperty('data')) {
      if (response.data.hasOwnProperty('error')) {
        return [JSON.stringify(response.data.error), null];
      } else {
        return [null, prepareData(response.data)];
      }
    }
    return ['API not returned data', null];
  } catch (e) {
    console.warn(e);
    return [e.message, null];
  }
};

export default fetchData;

function prepareData(data: RawData[]): Data[] {
  return data.map((obj) => {
    return {
      id: obj.id,
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      phone: obj.phone,
      addressStreetAddress: obj.address.streetAddress,
      addressCity: obj.address.city,
      addressState: obj.address.state,
      addressZip: obj.address.zip,
      description: obj.description,
    };
  });
}
