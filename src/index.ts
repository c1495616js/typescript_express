import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi There!</h1>
    </div>
  `)
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});