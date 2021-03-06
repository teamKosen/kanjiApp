import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import passport from "../../middleware/passport";
import { extractUser } from "../../lib/api-helpers";
import { extractCurrentUser } from "../../lib/api-currentUser-helper";

const handler = nextConnect();

handler.use(middleware);

handler.post(passport.authenticate("local"), (req, res) => {
  // return our user object
  // res.json({ user: extractUser(req.user) });
  res.json({ user: extractCurrentUser(req.user) });
});

handler.delete((req, res) => {
    req.logOut();
    res.status(204).end();
});

export default handler;