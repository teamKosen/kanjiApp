import nextConnect from "next-connect";
import bcrypt from "bcryptjs";
import middleware from "../../middleware/database";
import { extractUser } from "../../lib/api-helpers";
import { type } from "os";

const handler = nextConnect();

handler.use(middleware); // see how we're reusing our middleware

// POST /api/shopregister
handler.post(async (req, res) => {
  const {
    email,
    name,
    userType,
    password,
    shopName,
    adress,
    place,
    weekdayOpen,
    weekdayClose,
    weekendOpen,
    weekendClose,
    counter,
    table,
    zasiki,
    cash,
    card,
    emoney,
    park,
    phoneNumber,
    budgetMin,
    budgetMax,
    numberOfPeopleMin,
    numberOfPeopleMax,
    genre,
    purpose,
    introduction,
  } = req.body;

  if (!email || !name || !userType || !password || !shopName || !place ) {
    res.status(400).send("Missing field(s)");
    return;
  }
  // check if shop existed
  if ((await req.db.collection("shopdatas").countDocuments({ adress })) > 0) {
    res.status(403).send("The shop has already been used.");
  }

  const open = [];
  open.push('月～木 ' + weekdayOpen + '～' +weekdayClose);
  open.push('金～日 ' + weekendOpen + '～' +weekendClose);

  const seatType = [];
  seatType.push('カウンター' + '/' + counter + '席');
  seatType.push('テーブル' + '/' + table + '席');
  seatType.push('座敷' + '/' + zasiki + '席');

  const payment = [];
  if ( cash == true) {
    payment.push("現金");
  }
  if ( card == true) {
    payment.push("カード");
  }
  if ( emoney == true) {
    payment.push("電子マネー");
  }

  const tag = { budget: { min: budgetMin, max: budgetMax}, numberOfPeople:{min: numberOfPeopleMin, max: numberOfPeopleMax}, genre: genre, purpose: purpose };

  const plantag =[];
  const shopdata = await req.db
    .collection("shopdatas")
    .insertOne({ name:shopName, open, park, payment, seatType, phoneNumber, place, adress, tag, introduction, plantag })
    .then(({ ops }) => ops[0]);
  req.logIn(shopdata, (err) => {
    if (err) throw err;
    res.status(201).json({
      user: extractUser(req),
    });
  });
});

export default handler;