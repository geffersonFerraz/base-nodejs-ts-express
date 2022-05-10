import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';

dotenv.config();

const server: Express = express();
const port: number = _.toNumber(process.env.PORT);

server.get('/', (req: Request, res: Response) => {
    res.send({ 'message': 'Express + TypeScript Server' });
});

export default server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
