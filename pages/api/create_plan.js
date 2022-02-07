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
    planState,
  } = req.body;

  if (!title || !tag || !place || !numberOfPeople || !budget || !openDate || !openTime || !closeDate || !closeTime || !deadlineDate || !deadlineTime || !create_at || !user || !planState) {
    res.status(400).send("Missing field(s)");
    return;
  }

  const iPeople = Number(numberOfPeople);
  const iBudget = Number(budget);

  const open_str = openDate + " " + openTime;
  const open=new Date(open_str);
  const close_str = closeDate + " " + closeTime;
  const close=new Date(close_str);
  const deadline_str = deadlineDate + " " + deadlineTime;
  const deadline=new Date(deadline_str);
  const create_at_date=new Date(create_at);

  const userplandatas = await req.db
    .collection("userplandatas")
    .insertOne({ 
      title,
      tag,
      place,
      numberOfPeople:iPeople,
      budget:iBudget,
      openTime:open,
      closeTime:close,
      deadlineTime:deadline,
      create_at:create_at_date,
      comment,
      userName:user.name, 
      userID:user._id,
      planState,
    })
    .then(({ ops }) => ops[0])
    .then(()=>{res.send("ok")});
  req.logIn(userplandatas, (err) => {
    if (err) throw err;
  });
});

export default handler;