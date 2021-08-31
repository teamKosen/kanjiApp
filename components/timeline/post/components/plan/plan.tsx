import { FunctionComponent } from 'react';
import {useStyles} from './plan.style.ts';

type Props={
    plan:any;
};

export const Plan:FunctionComponent<Props> = (props) => {
    const {plan}=props;
    const classes = useStyles();
    return (
        <div className={classes.detail_plan}>
            <h2 className={classes.title}>プラン</h2>
            <div className={classes.plan}>
            {plan.map((plandata) => {
                const tags=[];
                return <div key={plandata.name} className={classes.post}>
                    <h3><u>{plandata.name}</u></h3>
                    {(function(tag,pl_tag){
                        tag=[];
                        let unit="";
                        for (const [key, value] of Object.entries(pl_tag)){
                            if(key=="numberOfPeople"){
                                unit="人"
                            }
                            else if(key=="budjet"){
                                unit="円"
                            }
                            else{
                                unit=""
                            }
                            tag.push("#"+value+unit+"　");
                        }
                        return tag;
                    }(tags,plandata.tag))}
                    {tags.map((tagdata)=>(
                        <p key={tagdata}>{tagdata}</p>
                    ))
                    }
                </div>
            })}
            </div>
        </div>
    );
};