import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import { TextField } from '@material-ui/core';

import { Post } from '../components/timeline/post/post';

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();
    const res_cmnt = await fetch("http://localhost:3000/api/commentdatas");
    const json_cmnt = await res_cmnt.json();
    /* const res_plan = await fetch("http://localhost:3000/api/plandatas");
    const json_plan = await res_plan.json(); */

    return {
      props: {
        shopdatas: json,
        commentdatas:json_cmnt,
      },
    };
}

const Timeline = ({shopdatas,commentdatas}) => {
    
    const shoplist = JSON.parse(JSON.stringify(shopdatas));
    const commentlist=JSON.parse(JSON.stringify(commentdatas));
    
    return (
        <div className= {style.timeline}>
            <h1>Dlink</h1>
            <div className={style.searchField}>
                <TextField
                    id="outlined-full-width"
                    label="Search"
                    className={style.searchFieldInput}
                    placeholder="検索条件を入力してください"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    type="text"
                />
            </div>
            {shoplist.map((shopdata) =>{ 
                /* const cmnt=commentlist.find((v)=>v._id==shopdata._id); */
                const cmnt=commentlist.filter(v=>v.shopID==shopdata._id);
                return  <div key={shopdata.name} className={style.post}>
                    {/* あ{cmnt[1].comment} */}
                            <Post 
                                name={shopdata.name}
                                genre={shopdata.tag.genre}
                                purpose={shopdata.tag.purpose}
                                comment={cmnt}
                            />
                       </div>
                 })}
        </div>
    );
}

export default Timeline;