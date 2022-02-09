import nextConnect from 'next-connect';
import { convertCompilerOptionsFromJson, isConstructorDeclaration } from 'typescript';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {date,numberofpeople,tag,budget,purpose,genre}=req.query;

    let search={};
    let sort={};
    
    if (!isNaN(budget) && budget){
        const budgetTag = { "tag.budget.max":{"$gte":Number(budget)} ,"tag.budget.min":{"$lte":Number(budget)}};
        search = Object.assign(search,budgetTag);
    }
   
    if(genre !== 'undefined' && genre){
        const genreTag = { "tag.genre": {"$in":[genre]}};
        search = Object.assign(search,genreTag);
    }

    if(purpose !== 'undefined' && purpose){
        const purposeTag = {"tag.purpose": {"$in":[purpose]}};
        search = Object.assign(search,purposeTag);
    }
    if(!isNaN(numberofpeople)){
        const numberofpeopleTag = {"tag.numberOfPeople.max": {"$gte":Number(numberofpeople)},"tag.numberOfPeople.min":{"$lte":Number(numberofpeople)}};
        search = Object.assign(search,Number(numberofpeopleTag));
    }

    if(tag !=='undefined' && tag){
        const planTag={"plantag.tag":tag};
        search = Object.assign(search,planTag);
        sort = {"plantag.tag":1,"plantag.number":-1};
    }
    console.log("search");
    console.log(search);
    console.log("sort");
    console.log(sort);
    let doc = await req.db.collection('shopdatas').find(search).sort(sort).toArray();
    
    res.json(doc);
});



export default handler;