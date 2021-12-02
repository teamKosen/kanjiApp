import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const {date,maxnumberofpeople,minnumberofpeople,tag,budget,purpose,genre}=req.query;

    let search={};

    // if(tag !== 'undefined' && tag){
    //     let tag_object_array=[];
    //     const tag_array=tag.split(',');
    //     {tag_array.map((tag_unit)=>{
    //         console.log(tag_unit);
    //         tag_object_array.push({"tag":tag_unit});
    //         console.log(tag_object_array);
    //     })}
    //     const tags={"$and":tag_object_array};
    //     search = Object.assign(search,tags);;
    // }
    
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
    
    if((isNaN(maxnumberofpeople) || !maxnumberofpeople) && (isNaN(minnumberofpeople) || !minnumberofpeople)){
    }
    else if(isNaN(maxnumberofpeople) || !maxnumberofpeople){
        const people={"tag.numberOfPeople":{"$gte":Number(minnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else if(isNaN(minnumberofpeople) || !minnumberofpeople){
        const people={"tag.numberOfPeople":{"$lte":Number(maxnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else if(minnumberofpeople<=maxnumberofpeople){
        const people={"tag.numberOfPeople":{"$gte":Number(minnumberofpeople),"$lte":Number(maxnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else{
        return;
    }

    // if(date !== 'undefined' && date){
    //     const start = new Date(String(date)+" "+"00:00");
    //     const end = new Date(String(date)+" "+"23:59");
    //     const time = {"openTime":{"$gte":start,"$lte":end}};
    //     search = Object.assign(search,time);
    // }

    let doc = await req.db.collection('shopdatas').find(search).toArray();
    
    res.json(doc);
});



export default handler;