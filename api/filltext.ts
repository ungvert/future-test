import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

const endpoints = {
  small:
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
  big:
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
};
type Variant = 'small' | 'big';

const fetchData = async (variant: Variant) => {
  try {
    const response = await axios.get(endpoints[variant]);
    return [null, response];
  } catch (e) {
    return [e, null];
  }
};

export default async (req: NowRequest, res: NowResponse) => {
  const { variant } = req.query;

  if (!((variant as string) in endpoints)) {
    res
      .status(400)
      .send(
        new Error(
          `Variant ${variant} not found. Correct variants: ${Object.keys(
            endpoints
          )}`
        )
      );
    return;
  }

  const [error, axiosResponse] = await fetchData(variant as Variant);

  if (error) {
    res.status(500).send(error);
  } else {
    if (axiosResponse.hasOwnProperty('data')) {
      res.json({ ...axiosResponse.data });
    } else {
      res.status(500).send(new Error('API responded without data'));
    }
  }
};
