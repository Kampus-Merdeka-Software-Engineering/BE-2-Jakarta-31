import express  from 'express';
import { configureMiddleware } from './middleware/middleware.js';
import usersRoute from './routes/userRoutes.js';
import subsRoute from './routes/subsRoutes.js';
import criticRoutes from './routes/criticsRoutes.js'

const app = express()
const port = 3000;

configureMiddleware(app);

app.use('/users', usersRoute);
app.use('/subscribe', subsRoute);
app.use('/kritik', criticRoutes)
app.get('/', (req, res) => {
  res.redirect('https://kampus-merdeka-software-engineering.github.io/FE-2-Jakarta-31/')
})

app.listen({port}, () => {
  console.log(`Example app listening on port: http://localhost:${port}`)
})
