import { ObjectId } from 'mongodb';
import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { id } = req.query;

    let doc = await req.db.collection('offerplandatas').findOne({_id: ObjectId(`${id}`)});
    res.json(doc);
});

handler.post(async (req,res) => {
    const { id,offerState } = req.body;

    const updateOfferState = await req.db.collection('offerplandatas').updateOne({_id: ObjectId(`${id}`)},{$set: {offerState:offerState}},{upsert: true})

    res.json({message: 'ok'});
})

export default handler;