import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
