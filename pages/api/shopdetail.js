import { ObjectId } from 'mongodb';
import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { id } = req.query;

    let doc = await req.db.collection('shopdatas').findOne({_id: ObjectId(`${id}`)});
    // let doc = await req.db.collection('shopdatas').find({}).toArray();
    console.log(doc);
    res.json(doc);
});

export default handler;