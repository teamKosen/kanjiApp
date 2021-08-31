import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import passport from './passport';
import session from './session';

const client = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('kanji');
  return next();
}

const middleware = nextConnect();

middleware
.use(database)
.use(session)
.use(passport.initialize())
.use(passport.session());

export default middleware;