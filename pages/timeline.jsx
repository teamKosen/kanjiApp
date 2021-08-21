import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import Drawer from '@material-ui/core/Drawer';

import { DrawerContent } from '../components/timeline/drawer-content/drawer-content.tsx';
import { Post } from '../components/timeline/post/post';
import { Button , InputBase } from '@material-ui/core';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

export async function getStaticProps(context) {

    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();

    const res_pict = await fetch("http://localhost:3000/api/picturedatas");
    const json_pict = await res_pict.json();

    const res_pln= await fetch("http://localhost:3000/api/plandatas");
    const json_pln=await res_pln.json();
    const res_cmnt = await fetch("http://localhost:3000/api/commentdatas");
    const json_cmnt = await res_cmnt.json();

    return {
      props: {
        shopdatas: json,
        picturedatas: json_pict,
        plandatas: json_pln,
        commentdatas:json_cmnt,
      },
    };
}

const Timeline = ({shopdatas,plandatas,commentdatas,picturedatas}) => {

    const router = useRouter();
    const [keyword, setKeyword] = useState('');
    const [shops, updateShops] = useState(shopdatas);
    
    const planlist= JSON.parse(JSON.stringify(plandatas));
    const commentlist=JSON.parse(JSON.stringify(commentdatas));
    const picturelist = JSON.parse(JSON.stringify(picturedatas));

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
        const request = async () => {
            const res = await fetch(router.query.apiUrl);
            const shopdatas= await res.json()
            updateShops(shopdatas);
        }
          request()
          setDrawerState(false);
    },[router.query.apiUrl])

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
        setcurrentBudjet(undefined)
    },[]); 

    const selectCurrentNumberOfPeople = useCallback((numberOfPeople) => {
        setcurrentNumberOfPeople(numberOfPeople)
    },[]);

    const selectNumberOfPeopleClear = useCallback(() => {
        setcurrentNumberOfPeople(undefined)
    },[]);

    const selectCurrentGenre = useCallback((genre) => {
        setcurrentGenre(genre)
    },[]);

    const selectGenreClear = useCallback(() => {
        setcurrentGenre(undefined)
    },[]);   

    const selectCurrentPurpose = useCallback((purpose) => {
        setcurrentPurpose(purpose)
    },[]);

    const selectPurposeClear = useCallback(() => {
        setcurrentPurpose(undefined)
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
        <>
        <main>
            <div className= {style.timeline}>
                <div className={style.searchField}>
                    <Drawer
                        anchor="top"
                        open={isOpenDrawer}
                        onClose={() => handleCloseDrawer(false)}
                    >
                        <DrawerContent
                            searchTag={searchTag}
                            budjetList={budjetList}
                            currentBudjet={currentBudjet}
                            selectBudjetClear={selectBudjetClear}
                            selectCurrentBudjet={selectCurrentBudjet}
                            numberOfPeopleList={numberOfPeopleList}
                            currentNumberOfPeople={currentNumberOfPeople}
                            selectNumberOfPeopleClear={selectNumberOfPeopleClear}
                            selectCurrentNumberOfPeople={selectCurrentNumberOfPeople}
                            genreList={genreList}
                            currentGenre={currentGenre}
                            selectGenreClear={selectGenreClear}
                            selectCurrentGenre={selectCurrentGenre}
                            purposeList={purposeList}
                            currentPurpose={currentPurpose}
                            selectPurposeClear={selectPurposeClear}
                            selectCurrentPurpose={selectCurrentPurpose}
                            handleCloseDrawer={handleCloseDrawer}
                        />
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

                {shops.map((shopdata) => {

                    const pln=planlist.filter(v=>v.shopID==shopdata._id);
                    const cmnt=commentlist.filter(v=>v.shopID==shopdata._id);
                    const pict = picturelist.filter(v=>v.shopId==shopdata._id);
                    
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
                            pictures={pict}
                        />
                    </div>
                    })}

            </div>
        </main>
        </>
    );
}

export default Timeline;