import style from './plan.module.scss';

export const Plan = (props) => {
    const {plan}=props;
    return (
        <div className={style.detail_plan}>
            <h2 className={style.title}>プラン</h2>
            <div className={style.plan}>
            {plan.map((plandata) => {
                const tags=[];
                return <div key={plandata.name} className={style.post}>
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
                            /* for(let step =0;0<value.length;step++){
                                tag.push("#"+value[step]+unit+"　");
                            } */
                            tag.push("#"+value+unit+"　");
                        }
                        return tag;
                    }(tags,plandata.tag))}
                    {tags.map((tagdata)=>(
                        <p>{tagdata}</p>
                    ))
                    }
                </div>
            })}
            </div>
        </div>
    );
};