import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import { TextField } from '@material-ui/core';

import { Post } from '../components/timeline/post/post';

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();
    const res_pln=await await fetch("http://localhost:3000/api/plandatas");
    const json_pln=await res_pln.json();

    return {
      props: {
        shopdatas: json,
        plandatas: json_pln
      },
    };
}

const Timeline = ({shopdatas,plandatas}) => {
    
    const shoplist = JSON.parse(JSON.stringify(shopdatas));
    const planlist= JSON.parse(JSON.stringify(plandatas));
    
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
            {shoplist.map((shopdata) => {
                const pln=planlist.filter(v=>v.shopID==shopdata._id);

                return <div key={shopdata.name} className={style.post}>
                    <Post 
                        name={shopdata.name}
                        genre={shopdata.tag.genre}
                        purpose={shopdata.tag.purpose}
                        plan={pln}
                    />
                </div>
}           )}
        </div>
    );
}

export default Timeline;