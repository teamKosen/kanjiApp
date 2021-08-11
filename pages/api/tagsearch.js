import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { budjet,genre,numberOfPeople,purpose } = req.query;

    const budjetTag = { "tag.budjet.max": Number(budjet)};
    const genreTag = { "tag.genre": genre};
    const purposeTag = {"tag.purpose": purpose};
    const numberOfPeopleTag = {"tag.numberOfPeople": Number(numberOfPeople)};

    let search = {};

    if (!isNaN(budjet)){
        search = Object.assign(search,budjetTag);
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
    //     "tag.budjet.max": Number(budjet),
    //     "tag.genre": genre,
    //     "tag.purpose": purpose,
    //     "tag.numberOfPeople": Number(numberOfPeople)
    // };

    let doc = await req.db.collection('shopdatas').find(search).toArray();
    
    res.json(doc);
});

export default handler;