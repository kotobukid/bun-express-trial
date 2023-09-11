import Express, {Request, Response, Router} from "express";


const router: Router = Express.Router()

router.get('/favicon.ico', (req: Request, res: Response): void => {
    res.status(404);
    res.send('404 not found');
});

router.get('/', (req: Request, res: Response): void => {
    res.send("hello express on Bun.")
});

const app: Express = Express();

app.use('/', router);
const port: number = 3000;

app.listen(port, "127.0.0.1", 100, (): void => {
    console.log(`start listening on port ${port}`);
});