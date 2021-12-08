import fetch from 'isomorphic-unfetch'
import style from '../styles/timeline.module.scss'
import Tag from "../components/timeline/tag";
import { Post } from '../components/timeline/post/post';
import { Button ,Card} from '@material-ui/core';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoneyIcon from '@material-ui/icons/Money';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StoreIcon from '@material-ui/icons/Store';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import {TextField_number} from "../components/timeline/textfield_number"
import {Autocomplete_text} from "../components/timeline/autocomplete_text"

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
    const [place,setplace]=useState()
    const [maxNumberOfPeople,setmaxNumberOfPeople]=useState();
    const [minNumberOfPeople,setminNumberOfPeople]=useState();
    const [numberOfPeople,setnumberOfPeople]=useState();
    const [budget,setbudget]=useState();
    const [genre,setgenre]=useState();
    const [purpose,setpurpose]=useState();
    function SelectPlace(event,value){
        setplace(value);
    }
    function SelectGenre(event,value){
        setgenre(value);
    }
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
    const SelectNumberOfPeople=async(e)=>{
        setNumberOfPeople(e.target.value);
    }
    const SelectBudget=async(e)=>{
        setbudget(e.target.value);
    }
      const ApplyConditions = useCallback(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/shopsearch?tag=${tag}&date=${openDate}&numberofpeople=${numberOfPeople}&budget=${budget}&purpose=${purpose}&genre=${genre}`);
            const shops_pre= await res.json()
            updateShops(shops_pre);
        }
          request()
        },[openDate,numberOfPeople,tag,budget,purpose,genre])
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

    return (
        <>
        <main>
            <div className= {style.timeline}>
                {shops.map((shopdata,i) => {
                    if(i%2==0){
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
                    <label htmlFor="tag" style={{width:"220px"}}>
                        <Tag setValue={setTags}/>
                    </label>
                </div>
                <div className={style.box}>
                    <div className={style.label}><MoneyIcon className={style.icon} />予算</div>
                    <TextField_number Select={SelectBudget} item={budget} id_str="budget" unit="円" size_w="220px" />
                </div>
                <div className={style.box}>
                    <div className={style.label}><LocationOnIcon className={style.icon} />場所</div>
                    <Autocomplete_text Select={SelectPlace} item={place} id_str="place" list={placeList} />
                </div>
                <div className={style.box}>
                    <div className={style.label}><StoreIcon className={style.icon} />目的</div>
                    <Autocomplete_text Select={SelectPurpose} item={purpose} id_str="purpose" list={purposeList} />
                </div>
                <div className={style.box}>
                    <div className={style.label}><RestaurantIcon className={style.icon} />ジャンル</div>
                    <Autocomplete_text Select={SelectGenre} item={genre} id_str="genre" list={genreList} />
                </div>
                <div className={style.box}>
                    <div className={style.label}><PeopleIcon className={style.icon} />人数</div>
                    <TextField_number Select={SelectNumberOfPeople} item={numberOfPeople} id_str="numberOfPeople" unit="人" size_w="220px" />
                </div>
                <Button className={style.button} onClick={ApplyConditions} variant="text">
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
                                place={shopdata.place}
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
                                place={shopdata.place}
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