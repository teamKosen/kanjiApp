import { ObjectId } from 'mongodb';
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    const { userPlanId } = req.query;
    let doc = await req.db.collection('userplandatas').find().toArray();
    res.json(doc);
});

handler.post(async (req, res) => {
    const { id, planState } = req.body;

    const updatePlanState = await req.db.collection('userplandatas').updateOne({_id: ObjectId(`${id}`)},{$set: {planState:planState}},{upsert: true})

    res.json({message: 'ok'});
})

export default handler;