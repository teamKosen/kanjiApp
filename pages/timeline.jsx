import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import Drawer from '@material-ui/core/Drawer';
import Tag from "../components/timeline/tag";
import { DrawerContent } from '../components/timeline/drawer-content/drawer-content.tsx';
import { Post } from '../components/timeline/post/post';
import { Button , InputBase,Card,TextField } from '@material-ui/core';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Autocomplete from '@mui/material/Autocomplete';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoneyIcon from '@material-ui/icons/Money';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StoreIcon from '@material-ui/icons/Store';
//import { Money,LocationOn,Store,Restaurant,People,DateRange } from '@material-ui/icons';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DateRangeIcon from '@material-ui/icons/DateRange';

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
    var i=0;
    const leftShops=[];
    const rightShops=[];
    const planlist= JSON.parse(JSON.stringify(plandatas));
    const commentlist=JSON.parse(JSON.stringify(commentdatas));
    const picturelist = JSON.parse(JSON.stringify(picturedatas));

    const [currentbudget, setcurrentbudget] = useState();
    const [currentNumberOfPeople, setcurrentNumberOfPeople] = useState();
    const [currentGenre, setcurrentGenre] = useState();
    const [currentPurpose, setcurrentPurpose] = useState();
    const [isOpenDrawer, setDrawerState] = useState(false);

    const budgetList = [1000,2000,3000,4000];
    const numberOfPeopleList = [2,4,6,8];
    const genreList = ["中華","和食","イタリアン","エスニック"];
    const purposeList = ["打ち上げ","会食","合コン","同窓会"];
    const placeList=["博多","新飯塚","折尾","黒崎"];
    const [tag, setTags] = useState([]);
    const [openDate, setopenDate] = useState();
    const [maxNumberOfPeople,setmaxNumberOfPeople]=useState();
    const [minNumberOfPeople,setminNumberOfPeople]=useState();
    const [budget,setbudget]=useState();
    const [genre,setgenre]=useState();
    const [purpose,setpurpose]=useState();
    // const SelectGenre=async(e)=>{
    //     setgenre(e.target.value);
    // }
    function SelectGenre(event,value){
        setgenre(value);
    }
    // const SelectPurpose=async(e)=>{
    //     setpurpose(e.target.value);
    // }
    function SelectPurpose(event,value){
        setpurpose(value);
    }
    const SelectOpenDate=async(e)=>{
        setopenDate(e.target.value);
    }
    const SelectMaxNumberOfPeople=async(e)=>{
        setmaxNumberOfPeople(e.target.value);
    }
    const SelectMinNumberOfPeople=async(e)=>{
        setminNumberOfPeople(e.target.value);
    }
    const SelectBudget=async(e)=>{
        setbudget(e.target.value);
    }
      const ApplyConditions = useCallback(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/shopsearch?tag=${tag}&date=${openDate}&maxnumberofpeople=${maxNumberOfPeople}&minnumberofpeople=${minNumberOfPeople}&budget=${budget}&purpose=${purpose}&genre=${genre}`);
            const shops_pre= await res.json()
            updateShops(shops_pre);
        }
          request()
        },[openDate,minNumberOfPeople,maxNumberOfPeople,tag,budget,purpose,genre])
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
          const res = await fetch(`http://localhost:3000/api/testshopdatas?purpose=${purpose}`)
          const shopdatas= await res.json()
          updateShops(shopdatas);
        }
        request()
    }, [keyword])

    const selectCurrentbudget = useCallback((budget) => {
        setcurrentbudget(budget)
    },[]);

    const selectbudgetClear = useCallback(() => {
        setcurrentbudget(undefined)
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
            const res = await fetch(`http://localhost:3000/api/tagsearch?budget=${currentbudget}&genre=${currentGenre}&numberOfPeople=${currentNumberOfPeople}&purpose=${currentPurpose}`);
            const shopdatas= await res.json()
            updateShops(shopdatas);
        }
          request()
          setDrawerState(false);
    },[currentbudget,currentGenre,currentNumberOfPeople,currentPurpose]);

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
                {shops.map((shopdata) => {
                    i++;
                    if(i%2==1){
                        leftShops.push(shopdata);
                    }
                    else{
                        rightShops.push(shopdata);
                        i=0;
                    }
                })}
                <div className={style.sidebar}>
                <div className={style.box}>
                    <div className={style.label}><LocalOfferIcon className={style.icon} />タグ</div>
                    <label htmlFor="tag" style={{width:"90%"}}>
                        <Tag setValue={setTags}/>
                    </label>
                </div>
                <div className={style.box}>
                    <div className={style.label}><MoneyIcon className={style.icon} />予算</div>
                    <TextField id="budget" InputProps={{ inputProps: { min: 1} }} onInput={SelectBudget} value={budget} style={{width:"90%",height:"45px",marginLeft:"5px"}} size="small" variant="outlined" name="budget" type="Number"/>
                </div>
                <div className={style.box}>
                    <div className={style.label}><LocationOnIcon className={style.icon} />場所</div>
                    <Autocomplete disablePortal id="place" style={{width:"90%",height:"45px",paddingTop:"10px",marginLeft:"5px"}} options={placeList} renderInput={(params) => <TextField {...params} />} />
                </div>
                <div className={style.box}>
                    <div className={style.label}><StoreIcon className={style.icon} />目的</div>
                    <Autocomplete disablePortal id="purpose" onInputChange={SelectPurpose} value={purpose} style={{width:"90%",height:"45px",paddingTop:"10px",marginLeft:"5px"}} options={purposeList} renderInput={(params) => <TextField {...params} />} />
                </div>
                <div className={style.box}>
                    <div className={style.label}><RestaurantIcon className={style.icon} />ジャンル</div>
                    <Autocomplete disablePortal id="genre" style={{width:"90%",height:"45px",paddingTop:"10px",marginLeft:"5px"}} onInputChange={SelectGenre} value={genre} options={genreList} renderInput={(params) => <TextField {...params} />} />
                </div>
                <div className={style.box}>
                    <div className={style.label}><PeopleIcon className={style.icon} />人数</div>
                    <span className={style.form}>
                        <TextField id="numberOfPeople_min" InputProps={{ inputProps: { min: 1} }} onInput={SelectMinNumberOfPeople} value={minNumberOfPeople} style={{width:"30%"}} size="small" variant="outlined" name="numberOfPeople" type="Number"/>
                        <span style={{fontWeight:"100",fontSize:"30px"}}>~</span>
                        <TextField id="numberOfPeople_max" InputProps={{ inputProps: { min: 1} }} onInput={SelectMaxNumberOfPeople} value={maxNumberOfPeople} style={{width:"30%"}} size="small" variant="outlined" name="numberOfPeople" type="Number"/>
                    </span>
                </div>
                {/* <div className={style.box}>
                    <div className={style.label}><DateRangeIcon className={style.icon} />日付</div>
                    <label htmlFor="openDate">
                        <TextField id="opendate" name="opendate" type="date" value={openDate} onInput={SelectOpenDate} label="日付" size="small" variant="outlined" InputLabelProps={{shrink: true}}/>
                    </label>
                </div> */}
                <Button size="large" className={style.button} onClick={ApplyConditions} variant="text">
                    <div className={style.itemButton}><SearchIcon className={style.icon_search} />検索する</div>
                </Button>
            </div>
                <div className={style.post}>
                    <div className={style.postLine}>
                        {leftShops.map((shopdata) => {

                            const pln=planlist.filter(v=>v.shopID==shopdata._id);
                            const cmnt=commentlist.filter(v=>v.shopID==shopdata._id);
                            const pict = picturelist.filter(v=>v.shopId==shopdata._id);
                            
                            return <Card key={shopdata.name} className={style.unitPost}>
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
                            </Card>
                        })}
                    </div>
                    <div className={style.postLine}>
                        {rightShops.map((shopdata) => {
                            const pln=planlist.filter(v=>v.shopID==shopdata._id);
                            const cmnt=commentlist.filter(v=>v.shopID==shopdata._id);
                            const pict = picturelist.filter(v=>v.shopId==shopdata._id);

                            return <Card key={shopdata.name} className={style.unitPost}>
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
                            </Card>
                        })}
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default Timeline;