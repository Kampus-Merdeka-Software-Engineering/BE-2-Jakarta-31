import express  from 'express';
import { configureMiddleware } from './middleware/middleware.js';
import apiResponse  from './utils/apiResponse.js';
import usersRoute from './routes/users-routes.js';
import newsRoute from './routes/news-routes.js';

const app = express()
const port = 3000;

configureMiddleware(app);

app.use('/users', usersRoute);
app.use('/news', newsRoute);
app.get('/', (req, res) => {
  apiResponse(200,'Hello World!','Berhasil terhubung',res)
})


app.listen({port}, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})
