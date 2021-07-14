import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import { TextField } from '@material-ui/core';

import { Post } from '../components/timeline/post/post';
import { Button , InputBase } from '@material-ui/core';
import { useState, useEffect } from 'react';

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
    const [keyword, setKeyword] = useState('');
    const [shops, updateShops] = useState(shopdatas);
    const shoplist = JSON.parse(JSON.stringify(shopdatas));

    useEffect(() => {
        if (keyword === '') return
    
        const purpose = keyword;
    
        const request = async () => {
          const res = await fetch("http://localhost:3000/api/testshopdatas?purpose="+purpose)
          const shopdatas= await res.json()
          console.log(shopdatas);
          updateShops(shopdatas);
        }
        request()
      }, [keyword])

    const handlerOnSubmitSearch = (e) => {
        e.preventDefault()
    
        const { currentTarget = {} } = e
        const fields = Array.from(currentTarget?.elements)
        const fieldQuery = fields.find((field) => field.name === 'query')
    
        const value = fieldQuery.value || ''
        setKeyword(value);
        console.log(keyword);
    }    
    
    return (
        <div className= {style.timeline}>
            <h1>Dlink</h1>
            <div className={style.searchField}>
                <form onSubmit={handlerOnSubmitSearch}>
                    <input
                        type="search"
                        name="query"
                        className={style.searchFieldInput}
                        placeholder="キーワードを入力して下さい"
                    />
                    <Button>Search</Button>
                </form>
            </div>
            {shops.map((shopdata) => (
                <div key={shopdata.name} className={style.post}>
                    <Post 
                        name={shopdata.name}
                        genre={shopdata.tag.genre}
                        purpose={shopdata.tag.purpose}
                    />
                </div>
            ))}
        </div>
    );
}

export default Timeline;