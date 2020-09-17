import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

const endpoints = {
  small:
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
  big:
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
};

export default (req: NowRequest, res: NowResponse) => {
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

  axios
    .get(endpoints[variant as 'small' | 'big'])
    .then((axiosResult) => res.json(axiosResult))
    .catch((err) => res.json(err));
  // axios
  // .get(endpoints['small'])
  // .then((result) => {
  //   setApiData(result);
  // })
  // .catch((err) => {
  //   console.error(err);
  // })
  // res.json({
  //   body: req.body,
  //   query: req.query,
  //   cookies: req.cookies,
  // });
};
