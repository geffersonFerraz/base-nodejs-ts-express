import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import _ from 'lodash';


dotenv.config({path: process.env.NODE_ENV === "test" ? "./test/.env-test" : ".env"});

const server: Express = express();
const port: number = _.toNumber(process.env.PORT);
server.use(express.json()) 
server.get('/', (req: Request, res: Response) => {
    res.send({ 'message': 'Express + TypeScript Server' });
});


server.get('/endpointOne', (req: Request, res: Response) => {
    const param = req.headers['parametro-header'];
    res.send({ 'message': param });
});

server.get('/endpointTwo', (req: Request, res: Response) => {
    const param = req.query['parametro-query'];
    res.send({ 'message': param });
});

server.get('/endpointThree', (req: Request, res: Response) => {
    const param = req.body
    res.send({ 'message': param });
});

export default server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
