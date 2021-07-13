import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import { TextField } from '@material-ui/core';

import { Post } from '../components/timeline/post/post';

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();

    return {
      props: {
        shopdatas: json,
      },
    };
}

const Timeline = ({shopdatas}) => {
    
    const shoplist = JSON.parse(JSON.stringify(shopdatas));
    
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
            {shoplist.map((shopdata) => (
                <div key={shopdata.name} className={style.post}>
                    <Post 
                        name={shopdata.name}
                        genre={shopdata.tag.genre}
                        purpose={shopdata.tag.purpose}
                        park={shopdata.park}
                        payments={shopdata.payment}
                        seatTypes={shopdata.seatType}
                        notSmokingSeat={shopdata.notSmokingSeat}
                        phoneNumber={shopdata.phoneNumber}
                        adress={shopdata.adress}
                    />
                </div>
            ))}
        </div>
    );
}

export default Timeline;