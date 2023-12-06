import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';

const configureMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(session({
    secret: 'T34mP31',
    resave: false,
    saveUninitialized: false
  }));
};

const checkAuth = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };

  export  {checkAuth,configureMiddleware};