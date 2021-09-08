import nextConnect from "next-connect";
import bcrypt from "bcryptjs";
import middleware from "../../middleware/database";
import { extractUser } from "../../lib/api-helpers";

const handler = nextConnect();

handler.use(middleware); // see how we're reusing our middleware

// POST /api/create_plan
handler.post(async (req, res) => {
  const {
    title,
    tag,
    place,
    people,
    buget,
    open_date,
    deadline,
    comment,
  } = req.body;

  if (!title || !tag || !place || !people || !buget || !open_date || !deadline || !comment) {
    res.status(400).send("Missing field(s)");
    return;
  }

  const userplandatas = await req.db
    .collection("userplandatas")
    .insertOne({ title, tag, place, people, buget, open_date, deadline, comment })
    .then(({ ops }) => ops[0]);
  req.logIn(userplandatas, (err) => {
    if (err) throw err;
  });
});

export default handler;