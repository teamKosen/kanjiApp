import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    //const [user, { mutate }] = useUser();
    //const budgetTag = { "userID": String(user._id)};
    var ObjectId = require('mongodb').ObjectID;
    const { userPlanId } = req.query;
    let doc = await req.db.collection('userplandatas').find({"_id":ObjectId(userPlanId)}).toArray();
    res.json(doc);
});

// handler.post(async (req, res) => {
//     let data = req.body;
//     data = JSON.parse(data);
//     data.date = new Date(data.date);
//     let doc = await req.db.collection('daily').updateOne({date: new Date(data.date)}, {$set:data}, {upsert: true})
//     res.json({message: 'ok'});
// })

export default handler;