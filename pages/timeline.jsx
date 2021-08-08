import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import { TextField } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

import { Post } from '../components/timeline/post/post';
import { Button , InputBase } from '@material-ui/core';
import { useState, useEffect, useCallback } from 'react';

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

    const [currentBudjet, setcurrentBudjet] = useState();
    const [currentNumberOfPeople, setcurrentNumberOfPeople] = useState();
    const [currentGenre, setcurrentGenre] = useState();
    const [currentPurpose, setcurrentPurpose] = useState();
    const [isOpenDrawer, setDrawerState] = useState(false);

    const budjetList = [1000,2000,3000,4000];
    const numberOfPeopleList = [2,4,6,8];
    const genreList = ["中華","和食","イタリアン","エスニック"];
    const purposeList = ["打ち上げ","会食","合コン","同窓会"];

    useEffect(() => {
        if (keyword === '') return
        const purpose = keyword;
        const request = async () => {
        //   const res = await fetch("http://localhost:3000/api/testshopdatas?purpose=" + purpose)
          const res = await fetch(`http://localhost:3000/api/testshopdatas?purpose=${purpose}`)
          const shopdatas= await res.json()
          updateShops(shopdatas);
        }
        request()
    }, [keyword])

    const selectCurrentBudjet = useCallback((budjet) => {
        setcurrentBudjet(budjet)
    },[]);

    const selectBudjetClear = useCallback(() => {
        setcurrentBudjet()
    },[]); 

    const selectCurrentNumberOfPeople = useCallback((numberOfPeople) => {
        setcurrentNumberOfPeople(numberOfPeople)
    },[]);

    const selectNumberOfPeopleClear = useCallback(() => {
        setcurrentNumberOfPeople()
    },[]);

    const selectCurrentGenre = useCallback((genre) => {
        setcurrentGenre(genre)
    },[]);

    const selectGenreClear = useCallback(() => {
        setcurrentGenre()
    },[]);   

    const selectCurrentPurpose = useCallback((purpose) => {
        setcurrentPurpose(purpose)
    },[]);

    const selectPurposeClear = useCallback(() => {
        setcurrentPurpose()
    },[]); 

    const searchTag = useCallback(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/tagsearch?budjet=${currentBudjet}&genre=${currentGenre}&numberOfPeople=${currentNumberOfPeople}&purpose=${currentPurpose}`);
            const shopdatas= await res.json()
            updateShops(shopdatas);
        }
          request()
          setDrawerState(false);
    },[currentBudjet,currentGenre,currentNumberOfPeople,currentPurpose]);

    const handleOpenDrawer = useCallback(
        () => {
            setDrawerState(true);
    },[]);

    const handleCloseDrawer = useCallback(
        () => {
            setDrawerState(false);
    },[]);

    const handlerOnSubmitSearch = useCallback(
        (e) => {
            e.preventDefault()
            const { currentTarget = {} } = e
            const fields = Array.from(currentTarget?.elements)
            const fieldQuery = fields.find((field) => field.name === 'query')
        
            const value = fieldQuery.value || ''
            setKeyword(value);
    },[]);    
    
    return (
        <div className= {style.timeline}>
            <h1>Dlink</h1>
            <div className={style.searchField}>
                <Drawer
                    anchor="top"
                    open={isOpenDrawer}
                    onClose={() => handleCloseDrawer(false)}
                >
                    <div className={style.drawerContentPosition}> 
                        <div>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" className={style.searchFieldInput}/>
                        </div>
                        <Button onClick={searchTag}>たぐけんさく</Button>
                        <div className={style.cardPosition}>
                            <div className={style.card}>
                                <h2>予算</h2>
                                <div>
                                    <ui className={style.lists}>
                                        {budjetList.map((budjet) => (
                                            <li key={budjet} >
                                                {
                                                    (budjet === currentBudjet) ? (
                                                        <div 
                                                            className={style.currentTag}
                                                            onClick={() => selectBudjetClear()}
                                                        >
                                                            ＃{budjet}円
                                                        </div>
                                                    ) : (  
                                                        <div 
                                                            className={style.anotherTag} 
                                                            onClick={() => selectCurrentBudjet(budjet)}
                                                        >
                                                            #{budjet}円
                                                        </div>
                                                    )
                                                }
                                            </li>   
                                        ))}
                                    </ui>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h2>人数</h2>
                                <div>
                                    <ui className={style.lists}>
                                        {numberOfPeopleList.map((numberOfPeople) => (
                                            <li key={numberOfPeople}>
                                                {
                                                    (numberOfPeople === currentNumberOfPeople) ? (
                                                        <div 
                                                            className={style.currentTag}
                                                            onClick={() => selectNumberOfPeopleClear()}
                                                        >
                                                            ＃{numberOfPeople}人
                                                        </div>
                                                    ) : (  
                                                        <div 
                                                            className={style.anotherTag} 
                                                            onClick={() => selectCurrentNumberOfPeople(numberOfPeople)}
                                                        >
                                                            #{numberOfPeople}人
                                                        </div>
                                                    )
                                                }
                                            </li>  
                                        ))}
                                    </ui>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h2>ジャンル</h2>
                                <div>
                                    <ui className={style.lists}>
                                        {genreList.map((genre) => (
                                            <li key={genre}>
                                                {
                                                    (genre === currentGenre) ? (
                                                        <div 
                                                            className={style.currentTag}
                                                            onClick={() => selectGenreClear()}
                                                        >
                                                            ＃{genre}
                                                        </div>
                                                    ) : (  
                                                        <div 
                                                            className={style.anotherTag} 
                                                            onClick={() => selectCurrentGenre(genre)}
                                                        >
                                                            #{genre}
                                                        </div>
                                                    )
                                                }
                                            </li>  
                                        ))}
                                    </ui>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h2>利用目的</h2>
                                <div>
                                    <ui className={style.lists}>
                                        {purposeList.map((purpose) => (
                                            <li key={purpose}>
                                                {
                                                    (purpose === currentPurpose) ? (
                                                        <div 
                                                            className={style.currentTag}
                                                            onClick={() => selectPurposeClear()}
                                                        >
                                                            ＃{purpose}
                                                        </div>
                                                    ) : (  
                                                        <div 
                                                            className={style.anotherTag} 
                                                            onClick={() => selectCurrentPurpose(purpose)}
                                                        >
                                                            #{purpose}
                                                        </div>
                                                    )
                                                }
                                            </li>
                                        ))}
                                    </ui>
                                </div>
                            </div>
                        </div>
                        <div className={style.drawerCloseButton} onClick={() => handleCloseDrawer(false)}>閉じる↑</div>
                    </div>
                </Drawer>
                <form onSubmit={handlerOnSubmitSearch}>
                    <InputBase 
                        type="search"
                        name="query"
                        className={style.searchFieldInput}
                        placeholder="キーワードを入力して下さい"
                    />
                    <Button onClick={handleOpenDrawer}>タグ検索</Button>
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