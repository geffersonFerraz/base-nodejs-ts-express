import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';


dotenv.config({path: process.env.NODE_ENV === "test" ? "./test/.env-test" : ".env"});

const server: Express = express();
const port: number = _.toNumber(process.env.PORT);

server.get('/', (req: Request, res: Response) => {
    res.send({ 'message': 'Express + TypeScript Server' });
});

export default server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
