import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    const { purpose } = req.query;
    // const search = {"tag.purpose": "打ち上げ","tag.genre": "和食"};

    // let doc = await req.db.collection('shopdatas').find(search).toArray();
    let doc = await req.db.collection('shopdatas').find({"tag.purpose": purpose}).toArray();
    console.log(doc);
    res.json(doc);
});

export default handler;