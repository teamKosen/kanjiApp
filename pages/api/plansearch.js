import nextConnect from 'next-connect';
import { isDoStatement } from 'typescript';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);


handler.get(async (req, res) => {
    const {date}=req.query;
    if(!date){
        return;
    }
    const start = new Date(String(date)+" "+"00:00");
    const end = new Date(String(date)+" "+"23:59");
    const search = {"openTime":{"$gte":start,"$lte":end}};
    let doc = await req.db.collection('userplandatas').find(search).toArray();
    
    res.json(doc);
});

export default handler;