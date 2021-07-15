/* import style from './plan.module.scss'; */

export const Plan = (props) => {
    const {plan}=props;
    return (
        <div /* className={style.userComment} */>
            <h2 /* className={style.title} */>プラン</h2>
            <div /* className={style.comment} */>
            {plan.map((plandata) => {
                const tags=[];
                return <div /* key={shopdata.name} className={style.post} */>
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
                        <p>{tagdata}</p>
                    ))
                    }
                </div>
            })}
            </div>
        </div>
    );
};