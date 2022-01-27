import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    // const search = {"tag.purpose": "打ち上げ","tag.genre": "和食"};

    // let doc = await req.db.collection('shopdatas').find(search).toArray();
    let doc = await req.db.collection('shopdatas_demo').find({}).toArray();
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