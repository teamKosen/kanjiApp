import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import { TextField } from '@material-ui/core';

import { Post } from '../components/timeline/post/post';

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();
    const res_pict = await fetch("http://localhost:3000/api/picturedatas");
    const json_pict = await res_pict.json();

    return {
      props: {
        shopdatas: json,
        picturedatas: json_pict,
      },
    };
}

const Timeline = ({shopdatas, picturedatas}) => {
    
    const shoplist = JSON.parse(JSON.stringify(shopdatas));
    const picturelist = JSON.parse(JSON.stringify(picturedatas));
    
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
                const pict = picturelist.filter(v=>v.shopId==shopdata._id);
                return(
                <div key={shopdata.name} className={style.post}>
                    <Post
                        name={shopdata.name}
                        genre={shopdata.tag.genre}
                        purpose={shopdata.tag.purpose}
                        pictures={pict}
                    />
                </div>
                );
            })}
        </div>
    );
}

export default Timeline;