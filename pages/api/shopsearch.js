import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {date,numberofpeople,tag,budget,purpose,genre}=req.query;

    let search={};
    
    if (!isNaN(budget) && budget){
        const budgetTag = { "tag.budget.max":{"$gte":Number(budget)} ,"tag.budget.min":{"$lte":Number(budget)}};
        search = Object.assign(search,budgetTag);
    }
   
    if(genre !== 'undefined' && genre){
        const genreTag = { "tag.genre": genre};
        search = Object.assign(search,genreTag);
    }

    if(purpose !== 'undefined' && purpose){
        const purposeTag = {"tag.purpose": purpose};
        search = Object.assign(search,purposeTag);
    }
    if(!isNaN(numberofpeople)){
        const purposeTag = {"tag.numberOfPeople": purpose};
        search = Object.assign(search,Number(numberofpeople));
    }

    let doc = await req.db.collection('shopdatas').find(search).toArray();
    
    res.json(doc);
});



export default handler;