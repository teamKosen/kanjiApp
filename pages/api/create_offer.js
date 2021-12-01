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
    budget,
    numberOfPeople,
    tag,
    place,
    userPlanId,
    comment,
    offerState,
    openDate,
    openTime,
    closeDate,
    closeTime,
    create_at,
    update_at,
    user
  } = req.body;

  if ( !title || !budget || !numberOfPeople || !tag || !place || !userPlanId || !offerState || !openDate || !openTime || !closeDate || !closeTime || !create_at || !update_at || !user ) {
    res.status(400).send("Missing field(s)");
    return;
  }

  const iBudget = Number(budget);
  const iPeople = Number(numberOfPeople);

  const open_str       = openDate + " " + openTime;
  const open           = new Date(open_str);
  const close_str      = closeDate + " " + closeTime;
  const close          = new Date(close_str);
  const create_at_date = new Date(create_at);
  const update_at_date = new Date(update_at);

  const offerplandatas = await req.db
    .collection("offerplandatas")
    .insertOne({title, budget:iBudget, numberOfPeople:iPeople, tag, shopname:user.name, place, shopId:user._id, tel:"test", URL:"test", shopEmail:"test", userPlanId:userPlanId, comment, offerState:offerState, openTime:open, closeTime:close, create_at:create_at_date, update_at:update_at_date })
    .then(({ ops }) => ops[0]);
  req.logIn(offerplandatas, (err) => {
    if (err) throw err;
  });
});

export default handler;