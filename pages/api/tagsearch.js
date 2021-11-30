import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { budget,genre,numberOfPeople,purpose } = req.query;

    const budgetTag = { "tag.budget.max": Number(budget)};
    const genreTag = { "tag.genre": genre};
    const purposeTag = {"tag.purpose": purpose};
    const numberOfPeopleTag = {"tag.numberOfPeople": Number(numberOfPeople)};
    let search = {};

    if (!isNaN(budget)){
        search = Object.assign(search,budgetTag);
    }

    if(genre !== 'undefined'){
        search = Object.assign(search,genreTag);
    }

    if(purpose !== 'undefined'){
        search = Object.assign(search,purposeTag);
    }

    if (!isNaN(numberOfPeople)){
        search = Object.assign(search,numberOfPeopleTag);
    }
//------最終的にこんなのを生成
    // const search = {
    //     "tag.budget.max": Number(budget),
    //     "tag.genre": genre,
    //     "tag.purpose": purpose,
    //     "tag.numberOfPeople": Number(numberOfPeople)
    // };
    console.log(search);
    let doc = await req.db.collection('shopdatas').find(search).toArray();
    
    res.json(doc);
});

export default handler;