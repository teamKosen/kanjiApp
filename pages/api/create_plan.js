import nextConnect from "next-connect";
import bcrypt from "bcryptjs";
import middleware from "../../middleware/database";
import { extractUser } from "../../lib/api-helpers";
import { type } from "os";

const handler = nextConnect();

handler.use(middleware); // see how we're reusing our middleware

// POST /api/create_plan
handler.post(async (req, res) => {
  const {
    title,
    tag,
    place,
    numberOfPeople,
    budget,
    openDate,
    openTime,
    closeDate,
    closeTime,
    deadlineDate,
    deadlineTime,
    create_at,
    comment,
    user,
  } = req.body;

  if (!title || !tag || !place || !numberOfPeople || !budget || !openDate || !openTime || !closeDate || !closeTime || !deadlineDate || !deadlineTime || !create_at || !user ) {
    res.status(400).send("Missing field(s)");
    return;
  }

  const iPeople = Number(numberOfPeople);
  const iBudget = Number(budget);

  const open = openDate + " " + openTime;
  const close = closeDate + " " + openTime;
  const deadline = deadlineDate + " " + deadlineTime;

  const userplandatas = await req.db
    .collection("userplandatas")
    .insertOne({ title, tag, place, numberOfPeople:iPeople, budget:iBudget, openTime:open, closeTime:close, deadlineTime:deadline, create_at, comment, userName:user.name, userID:user._id })
    .then(({ ops }) => ops[0]);
  req.logIn(userplandatas, (err) => {
    if (err) throw err;
  });
});

export default handler;