import { TextureRounded } from '@material-ui/icons';
import nextConnect from 'next-connect';
import { isDoStatement } from 'typescript';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);


handler.get(async (req, res) => {
    const {date,maxnumberofpeople,minnumberofpeople,tag}=req.query;
    // if(!date && maxnumberofpeople && minnumberofpeople){
    //     console.log('null_back');
    //     return;
    // }
    // if(date == 'undefined' && isNaN(maxnumberofpeople) && isNaN(minnumberofpeople)){
    //     console.log('undefined_back');
    //     return;
    // }
    console.log(date);
    console.log(maxnumberofpeople);
    console.log(minnumberofpeople);
    console.log(tag);
    let search={};

    if(tag !== 'undefined' && tag){
        let tag_object_array=[];
        const tag_array=tag.split(',');
        {tag_array.map((tag_unit)=>{
            console.log(tag_unit);
            tag_object_array.push({"tag":tag_unit});
            console.log(tag_object_array);
        })}
        const tags={"$and":tag_object_array};
        search = Object.assign(search,tags);;
    }
    
    if((isNaN(maxnumberofpeople) || !maxnumberofpeople) && (isNaN(minnumberofpeople) || !minnumberofpeople)){
        console.log('isNaN1');
    }
    else if(isNaN(maxnumberofpeople) || !maxnumberofpeople){
        console.log('isNaN2');
        const people={"numberOfPeople":{"$gte":Number(minnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else if(isNaN(minnumberofpeople) || !minnumberofpeople){
        console.log('isNaN3');
        const people={"numberOfPeople":{"$lte":Number(maxnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else if(minnumberofpeople<=maxnumberofpeople){
        console.log('isNaN4');
        const people={"numberOfPeople":{"$gte":Number(minnumberofpeople),"$lte":Number(maxnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else{
        console.log('isNaN5');
        return;
    }

    // if(isNaN(maxnumberofpeople) && isNaN(minnumberofpeople)){
    //     console.log('isNaN1');
    // }
    // else if(!isNaN(maxnumberofpeople) && isNaN(minnumberofpeople) && maxnumberofpeople){
    //     console.log('isNaN2');
    //     const people={"numberOfPeople":{"$lte":Number(maxnumberofpeople)}};
    //     search = Object.assign(search,people);
    // }
    // else if(isNaN(maxnumberofpeople) && !isNaN(minnumberofpeople) && minnumberofpeople){
    //     console.log('isNaN3');
    //     const people={"numberOfPeople":{"$gte":Number(minnumberofpeople)}};
    //     search = Object.assign(search,people);
    // }
    // else if(maxnumberofpeople && minnumberofpeople && maxnumberofpeople>=minnumberofpeople){
    //     console.log('isNaN4');
    //     const people={"numberOfPeople":{"$gte":Number(minnumberofpeople),"$lte":Number(maxnumberofpeople)}};
    //     search = Object.assign(search,people);
    // }
    // else if(maxnumberofpeople && minnumberofpeople){
    //     console.log('isNaN5');
    //     console.log('reverse');
    //     return;
    // }
    // else if(maxnumberofpeople && !minnumberofpeople){
    //     console.log('isNaN6');
    //     const people={"numberOfPeople":{"$lte":Number(maxnumberofpeople)}};
    //     search = Object.assign(search,people);
    // }
    // else if(minnumberofpeople && !maxnumberofpeople){
    //     console.log('isNaN7');
    //     const people={"numberOfPeople":{"$gte":Number(minnumberofpeople)}};
    //     search = Object.assign(search,people);
    // }
    // else{
    //     console.log('isNaN8');
    // }

    if(date !== 'undefined' && date){
        const start = new Date(String(date)+" "+"00:00");
        const end = new Date(String(date)+" "+"23:59");
        const time = {"openTime":{"$gte":start,"$lte":end}};
        search = Object.assign(search,time);
    }
    console.log(search);
    let doc = await req.db.collection('userplandatas').find(search).toArray();
    
    res.json(doc);
});

export default handler;