import express, { Request, Response, Application } from 'express';
import http from 'http';
import cluster from 'cluster';
import { cpus } from 'os';
import process from 'process';

const numCPUS = cpus().length;

if (cluster.isMaster) {
    console.log(`Primary ${process.pid} is running`);

    for (let i = 0; i < numCPUS; i++){
        cluster.fork();
    }
}else{
    
    const app: Application = express()
    
    let reqNum = 0;
    
    app.get("/", (req: Request, res: Response) => {
        console.log(process.pid, " ------ ", reqNum)
        res.json({ "app": "running", "requestNum": ++reqNum , numCPUS, "usage":process.cpuUsage()})
    });
    
    const server = http.createServer(app);
    
    server.listen("5050", () => console.log("App running on localhost:5050"));
    
}
