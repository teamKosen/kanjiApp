import {useStyles} from './shopplan.style'
import React,{FunctionComponent, useState, useCallback } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@material-ui/core';
import { CreateOfferModal } from "./components/create-offer-modal/create-offer-modal"
import {Sidebar} from "./components/sidebar_search"

type Props={
    userplandatas:JSON;
};

export const Shopplan:FunctionComponent<Props> = (props) => {

    const {userplandatas}=props;
    const planlist_pre=JSON.parse(JSON.stringify(userplandatas));
    const [planlist,updatePlanlist]=useState(planlist_pre);

    const classes = useStyles();
    const [openDate, setopenDate] = useState();
    const [maxNumberOfPeople,setmaxNumberOfPeople]=useState();
    const [minNumberOfPeople,setminNumberOfPeople]=useState();
    const [budget,setbudget]=useState();
    const [tag, setTags] = useState([]);
    const [selectedSort,setSelectedSort]=useState(0);
    const [isOpenCreatePlan, setIsOpenCreatePlan] = useState(false);
    const [selectPlandata, setSelectPlandata] = useState();
    const [genre,setgenre]=useState();
    const [purpose,setpurpose]=useState();
    const [place,setplace]=useState()

    const placelist:string[]=["博多","新飯塚","折尾","黒崎"];//{placelist[Math.floor(Math.random()*placelist.length)]}
    const offer_pre:boolean[]=[];
    let leng:number=0;
    while(leng<planlist.length){
        leng++;
        offer_pre.push(true);
    }
    const [offerState,setOfferState]=useState(offer_pre);
    const [offerIndex,setOfferIndex]=useState(0);

    const ApplyConditions = useCallback(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/plansearch?tag=${tag}&date=${openDate}&maxnumberofpeople=${maxNumberOfPeople}&minnumberofpeople=${minNumberOfPeople}&sortcondition=${selectedSort}&budget=${budget}`);
            const plandatas= await res.json()
            updatePlanlist(plandatas);
        }
          request()
        },[openDate,minNumberOfPeople,maxNumberOfPeople,tag,selectedSort,budget])
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
    const handleCreatePlanOpen = () => {
        setIsOpenCreatePlan(true);
    }
    const OfferStateSwitch=(index:number)=>{
        const osp=offerState.map((x,i)=>i===index ? false :x);
        setOfferState(osp);
    }
    const SelectOfferIndex=(i:number)=>{
        setOfferIndex(i);
    }
    const handleCreatePlanClose = () => {
        setIsOpenCreatePlan(false);
    }
    const SelectBudget=async(e)=>{
        setbudget(e.target.value);
    }
    const today:Date=new Date('2021-09-17 14:38:29');
    const dayOfWeek:string[]=["日","月","火","水","木","金","土"];

    return (
        <div style={{paddingTop:"100px",width:"1440px",marginLeft:"120px",}}>
            <div className={classes.sidebar}>
                <Sidebar
                    setTags={setTags}
                    budget={budget}
                    SelectBudget={SelectBudget}
                    minNumberOfPeople={minNumberOfPeople}
                    SelectMinNumberOfPeople={SelectMinNumberOfPeople}
                    maxNumberOfPeople={maxNumberOfPeople}
                    SelectMaxNumberOfPeople={SelectMaxNumberOfPeople}
                    openDate={openDate}
                    SelectOpenDate={SelectOpenDate}
                    ApplyConditions={ApplyConditions}
                    SelectPlace={SelectPlace}
                    place={place}
                    SelectPurpose={SelectPurpose}
                    purpose={purpose}
                    SelectGenre={SelectGenre}
                    genre={genre}
                 />
            </div>
            <div className={classes.table}>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tablecell}>プラン名</TableCell>
                                <TableCell className={classes.tablecell}>締切時間</TableCell>
                                <TableCell className={classes.tablecell}>場所</TableCell>
                                <TableCell className={classes.tablecell}>人数</TableCell>
                                <TableCell className={classes.tablecell}>日時</TableCell>
                                <TableCell className={classes.tablecell}>予算</TableCell>
                                <TableCell className={classes.tablecell}>オファー</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {planlist.map((plandata,index)=>{
                                const deadline:Date=new Date(plandata.deadlineTime);
                                const limit:number=Math.floor((deadline.getTime()-today.getTime())/1000);
                                const openTime:Date=new Date(plandata.openTime);
                                const closeTime:Date=new Date(plandata.closeTime);
                                return(
                                    <TableRow key={plandata._id}>
                                                <TableCell className={classes.tablecell}>{plandata.title}</TableCell>
                                                {/* <TableCell className={classes.tablecell}><Link href={`/negotiation/${plandata._id}`} ><a>{plandata.title}</a></Link></TableCell> */}
                                                <TableCell padding="none">
                                                {limit>=604800?(<span className={classes.deadlineDay} >あと{Math.floor(limit/604800)}週間</span>):
                                                limit>=86400?(<span className={classes.deadlineDay}>あと{Math.floor(limit/86400)}日</span>):
                                                limit>=3600?(<span className={classes.deadlineHour}>あと{Math.floor(limit/3600)}時間</span>):
                                                limit>=60?(<span  className={classes.deadlineHour}>あと{Math.floor(limit/60)}分</span>):
                                                limit>0?(<span  className={classes.deadlineHour}>あと{limit}秒</span>):
                                                (<span></span>)}
                                                </TableCell>
                                                <TableCell className={classes.tablecell} padding="none">{plandata.place}</TableCell>
                                                <TableCell className={classes.tablecell} padding="none">{plandata.numberOfPeople}人</TableCell>
                                                <TableCell className={classes.tablecell} padding="none">{openTime.getMonth()+1}月{openTime.getDate()}日({dayOfWeek[openTime.getDay()]}) {('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}</TableCell>
                                                <TableCell className={classes.tablecell} padding="none">{plandata.budget}円</TableCell>
                                                <TableCell className={classes.tablecell} padding="none">{offerState[index]==true ?<Button　className={classes.button_wait} onClick={()=>{SelectOfferIndex(index);handleCreatePlanOpen();setSelectPlandata(plandata);}}>オファーする</Button>:<Button className={classes.button_comp} disabled>オファー済み</Button>}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <CreateOfferModal
                handleCreatePlanClose={handleCreatePlanClose} 
                handleCreatePlanOpen={handleCreatePlanOpen} 
                isOpenCreatePlan={isOpenCreatePlan}
                plandata={selectPlandata}
                offerStateSwitch={OfferStateSwitch}
                index={offerIndex}
            />

        </div>
    );
};