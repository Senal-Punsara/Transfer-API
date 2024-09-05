import express from 'express';
import routes from './routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.SERVER_PORT || 8000


app.use(express.json());

app.use('/api', routes);

app.use('/',(req,res)=>{
    res.json("This is simple TransferService API");
})

app.listen(port, () => {
  console.log(`TransferService API is running on http://localhost:${port}`);
});
