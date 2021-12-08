import { Post } from "./components/post";
import React, { useState, FunctionComponent,useCallback } from "react";
import { useUser } from "../../lib/hooks"
import Link from 'next/link';
import {useStyles} from './userplan.style'
import {Sidebar} from "./components/sidebar_search"
import {Card,Select,MenuItem,Switch} from '@material-ui/core'

type Props={
    userplandatas:JSON;
};


export const Userplan:FunctionComponent<Props> = (props) => {
    const {userplandatas}=props;
    const planlist_pre=JSON.parse(JSON.stringify(userplandatas));
    const [planlist,updatePlanlist]=useState(planlist_pre);
    const [user, { mutate }] = useUser();
    const classes = useStyles();
    const leftList=[];
    const rightList=[];
    const centerList=[];
    const [selectedSort,setSelectedSort]=useState(0);
    const [switchedSort,setSwitchedSort]=useState(1);
    const [openDate, setopenDate] = useState();
    const [maxNumberOfPeople,setmaxNumberOfPeople]=useState();
    const [minNumberOfPeople,setminNumberOfPeople]=useState();
    const [budget,setbudget]=useState();
    const [tag, setTags] = useState([]);
    const [genre,setgenre]=useState();
    const [purpose,setpurpose]=useState();
    const [place,setplace]=useState()
      const ApplyConditions = useCallback(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/plansearch?tag=${tag}&date=${openDate}&maxnumberofpeople=${maxNumberOfPeople}&minnumberofpeople=${minNumberOfPeople}&sortcondition=${selectedSort}&sortswitch=${switchedSort}&budget=${budget}`);
            const plandatas= await res.json()
            updatePlanlist(plandatas);
        }
          request()
        },[openDate,minNumberOfPeople,maxNumberOfPeople,tag,selectedSort,switchedSort,budget])
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
    const SelectBudget=async(e)=>{
        setbudget(e.target.value);
    }
    const SelectSort = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedSort(event.target.value as number);
    };
    const SwitchSort=()=>{
        if(switchedSort==1){
            setSwitchedSort(-1);
        }
        else if(switchedSort==-1){
            setSwitchedSort(1);
        }
        else{
            setSwitchedSort(1);
        }
    }
    return (
    <>
      <div style={{paddingTop: "100px",width:"1200px",marginLeft:"120px"}}>
          {user ? (
              <>
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
                <div className={classes.sort_field}>
                  <div className={classes.name}>プラン一覧</div>
                  <Select labelId="sortLabel" id="sort" variant="outlined" value={selectedSort} onChange={SelectSort} label="ソート" style={{width:"150px",height:"48px",fontSize:"18px",lineHeight:"48px"}}>
                        <MenuItem value={1} style={{fontSize:"18px"}}>
                            予算順
                        </MenuItem>
                        <MenuItem value={2} style={{fontSize:"18px"}}>
                            人数順
                        </MenuItem>
                        <MenuItem value={3} style={{fontSize:"18px"}}>
                            開催日時順
                        </MenuItem>
                        <MenuItem value={4} style={{fontSize:"18px"}}>
                            締め切り順
                        </MenuItem>
                        <MenuItem value={5} style={{fontSize:"18px"}}>
                            投稿日時順
                        </MenuItem>
                </Select><div className={classes.sort_switch} >昇順<Switch color="default" onChange={SwitchSort} />降順</div>
                </div>
                  {planlist.map((plandata,i)=>{
                    if(plandata.userID==user._id){
                        if(i%3==0){
                            leftList.push(plandata);
                        }
                        else if(i%3==1){
                            centerList.push(plandata);
                        }
                        else if(i%3==2){
                            rightList.push(plandata);
                        }
                        else{}
                    }
                    else{}
                })}
                <div className={classes.planLine}>
                {leftList.map((plandata) => {
                    return(
                        <Card key={plandata._id} className={classes.plan}>
                            <Link href={`/negotiation/${plandata._id}`}>
                                <a><Post plan={plandata}/></a>
                            </Link>
                        </Card>
                    )
                })}
              </div>
              <div  className={classes.planLine}>
                {centerList.map((plandata) => {
                    return(
                        <Card key={plandata._id} className={classes.plan}>
                            <Link href={`/negotiation/${plandata._id}`}>
                                <a><Post plan={plandata}/></a>
                            </Link>
                          </Card>
                    )
                })}
              </div>
              <div  className={classes.planLine}>
                {rightList.map((plandata) => {
                    return(
                        <Link key={plandata._id} href={`/negotiation/${plandata._id}`}><a>
                            <Card className={classes.plan}>
                                <Post plan={plandata}/>                        
                            </Card>
                        </a></Link>
                    )
                })}
              </div>
              </div>
              </>
          ):(
              <p>ログインしてください</p>
          )}
      </div>
  </>
);
};