import { TextureRounded } from '@material-ui/icons';
import nextConnect from 'next-connect';
import { isDoStatement } from 'typescript';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);


handler.get(async (req, res) => {
    const {date,maxnumberofpeople,minnumberofpeople,tag,sortcondition}=req.query;

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
    }
    else if(isNaN(maxnumberofpeople) || !maxnumberofpeople){
        const people={"numberOfPeople":{"$gte":Number(minnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else if(isNaN(minnumberofpeople) || !minnumberofpeople){
        const people={"numberOfPeople":{"$lte":Number(maxnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else if(minnumberofpeople<=maxnumberofpeople){
        const people={"numberOfPeople":{"$gte":Number(minnumberofpeople),"$lte":Number(maxnumberofpeople)}};
        search = Object.assign(search,people);
    }
    else{
        return;
    }

    if(date !== 'undefined' && date){
        const start = new Date(String(date)+" "+"00:00");
        const end = new Date(String(date)+" "+"23:59");
        const time = {"openTime":{"$gte":start,"$lte":end}};
        search = Object.assign(search,time);
    }

    let sort={};
    switch(Number(sortcondition)){
        case 1:
            sort={"budget":-1};
            break;
        case 2:
            sort={"budget":1}
            break;
        case 3:
            sort={"numberOfPeople":-1};
            break;
        case 4:
            sort={"numberOfPeople":1}
            break;
        case 5:
            sort={"openTime":1};
            break;
        case 6:
            sort={"openTime":-1}
            break;
        case 7:
            sort={"deadlineTime":1};
            break;
        case 8:
            sort={"deadlineTime":-1}
            break;
        case 9:
            sort={"create_at":1};
            break;
        case 10:
            sort={"create_at":-1}
            break;
        default:

    }
    let doc = await req.db.collection('userplandatas').find(search).sort(sort).toArray();
    
    res.json(doc);
});

export default handler;