import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import { TextField } from '@material-ui/core';

import { Post } from '../components/timeline/post/post';

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();

    const res_pln=await await fetch("http://localhost:3000/api/plandatas");
    const json_pln=await res_pln.json();
    const res_cmnt = await fetch("http://localhost:3000/api/commentdatas");
    const json_cmnt = await res_cmnt.json();


    return {
      props: {
        shopdatas: json,
        plandatas: json_pln,
        commentdatas:json_cmnt,
      },
    };
}

const Timeline = ({shopdatas,plandatas,commentdatas}) => {
    
    const shoplist = JSON.parse(JSON.stringify(shopdatas));
    const planlist= JSON.parse(JSON.stringify(plandatas));
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
            {shoplist.map((shopdata) => {
                const pln=planlist.filter(v=>v.shopID==shopdata._id);
                const cmnt=commentlist.filter(v=>v.shopID==shopdata._id);

                return <div key={shopdata.name} className={style.post}>
                    <Post 
                        name={shopdata.name}
                        genre={shopdata.tag.genre}
                        purpose={shopdata.tag.purpose}
                        open={shopdata.open}
                        park={shopdata.park}
                        payments={shopdata.payment}
                        seatTypes={shopdata.seatType}
                        notSmokingSeat={shopdata.notSmokingSeat}
                        phoneNumber={shopdata.phoneNumber}
                        adress={shopdata.adress}
                        menu={shopdata.menu}
                        plan={pln}
                        comment={cmnt}

                    />
                </div>
}           )}

        </div>
    );
}

export default Timeline;