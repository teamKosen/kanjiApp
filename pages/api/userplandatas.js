import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    const { userPlanId } = req.query;
    let doc = await req.db.collection('userplandatas').find().toArray();
    res.json(doc);
});

export default handler;