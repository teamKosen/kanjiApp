import {useStyles} from './shopplan.style'
import {Post} from "./components/post"
import React,{FunctionComponent, useState, useCallback } from "react";
import Link from 'next/link';
import Tag from "./components/tag";
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Card, CardContent,FormControl,InputLabel,Select,MenuItem,TextField, Button , InputAdornment, InputAdornmentProps, OutlinedInput } from '@material-ui/core';

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
      const ApplyConditions = useCallback(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/plansearch?tag=${tag}&date=${openDate}&maxnumberofpeople=${maxNumberOfPeople}&minnumberofpeople=${minNumberOfPeople}&sortcondition=${selectedSort}`);
            const plandatas= await res.json()
            updatePlanlist(plandatas);
        }
          request()
        },[openDate,minNumberOfPeople,maxNumberOfPeople,tag,selectedSort])
    const SelectOpenDate=async(e)=>{
        setopenDate(e.target.value);
    }
    const SelectMaxNumberOfPeople=async(e)=>{
        setmaxNumberOfPeople(e.target.value);
    }
    const SelectMinNumberOfPeople=async(e)=>{
        setminNumberOfPeople(e.target.value);
    }
    const SelectSort = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedSort(event.target.value as number);
    };
    const SelectBudget=async(e)=>{
        setbudget(e.target.value);
    }
    // function createDate(
    //     planName:string,
    //     deadlineLimit:number,
    //     place:string,
    //     numberOfPeople:number,
    //     date:Date,
    //     budget:number,
    //     offerState:number,
    // ){
    //     return{planName,deadlineLimit,place,numberOfPeople,date,budget,offerState}
    // }
    const today:Date=new Date('2021-09-17 14:56:29');
    const dayOfWeek:string[]=["日","月","火","水","木","金","土"];
    return (
        <div style={{paddingTop:"60px",width:"80%",marginRight:"auto",marginLeft:"auto",}}>
            <div style={{marginRight:"auto",marginLeft:"auto",}}>
            <p className={classes.tops}>絞り込み条件</ p>
            <div className={classes.line}>
                <label htmlFor="tag" className={classes.form}>
                    <Tag setValue={setTags}/>
                </label>
            </div>
            <div className={classes.line}>
                <span className={classes.form}>
                    <TextField id="numberOfPeople_min" InputProps={{ inputProps: { min: 1} }} onInput={SelectMinNumberOfPeople} value={minNumberOfPeople} style={{width:"11%"}} size="small" variant="outlined" name="numberOfPeople" type="Number" label="最低人数" />
                    <TextField id="numberOfPeople_max" InputProps={{ inputProps: { min: 1} }} onInput={SelectMaxNumberOfPeople} value={maxNumberOfPeople} style={{width:"11%"}} size="small" variant="outlined" name="numberOfPeople" type="Number" label="最大人数"/>
                </span>
                <span className={classes.form}>
                    <TextField id="place" type="text" label="場所" style={{width:"26%"}} size="small" variant="outlined" />
                </span>
            </div>
            <div className={classes.line}>
                <span className={classes.form}>
                <label htmlFor="openDate">
                    <TextField id="opendate" name="opendate" type="date" value={openDate} onInput={SelectOpenDate} label="日付" size="small" variant="outlined" InputLabelProps={{shrink: true}}/>
                </label>
                </span>
            </div>
            <div className={classes.line2}>
                <span className={classes.form2}>
                <InputLabel id="sortLabel">ソート条件</InputLabel>
                <Select labelId="sortLabel" id="sort"  value={selectedSort} onChange={SelectSort} label="ソート" style={{width:"20%"}}>
                        <MenuItem value={1}>
                            予算が高い順
                        </MenuItem>
                        <MenuItem　value={2}>
                            予算が低い順
                        </MenuItem>
                        <MenuItem value={3}>
                            人数が多い順
                        </MenuItem>
                        <MenuItem　value={4}>
                            人数が少ない順
                        </MenuItem>
                        <MenuItem value={5}>
                            開催日時が近い順
                        </MenuItem>
                        <MenuItem　value={6}>
                            開催日時が遠い順
                        </MenuItem>
                        <MenuItem value={7}>
                            〆切が近い順
                        </MenuItem>
                        <MenuItem　value={8}>
                            〆切が遠い順
                        </MenuItem>
                        <MenuItem value={9}>
                            投稿日時が早い順
                        </MenuItem>
                        <MenuItem　value={10}>
                            投稿日時が遅い順
                        </MenuItem>
                </Select>
                </span>
                <span className={classes.button}>
                    <Button size="large" className={classes.itemButton} onClick={ApplyConditions} variant="contained" >適用</Button>
                </span>
            </div>
            <div>
                 <br/> 
            </div>
            </div>
            <div className={classes.sidebar}>
                <div className={classes.box}>
                    <p>タグ</p>
                    <label htmlFor="tag" style={{width:"100%"}}>
                        <Tag setValue={setTags}/>
                    </label>
                </div>
                <div className={classes.box}>
                    <p>予算</p>
                    <TextField id="budget" InputProps={{ inputProps: { min: 1} }} onInput={SelectBudget} value={budget} style={{width:"90%"}} size="small" variant="outlined" name="budget" type="Number"/>
                </div>
                <div className={classes.box}>
                    <p>場所</p>
                    <TextField id="budget" InputProps={{ inputProps: { min: 1} }} style={{width:"90%"}} size="small" variant="outlined" name="budget" />
                </div>
                <div className={classes.box}>
                    <p>目的</p>
                    <TextField id="budget" InputProps={{ inputProps: { min: 1} }} style={{width:"90%"}} size="small" variant="outlined" name="budget" />
                </div>
                <div className={classes.box}>
                    <p>ジャンル</p>
                    <TextField id="budget" InputProps={{ inputProps: { min: 1} }} style={{width:"90%"}} size="small" variant="outlined" name="budget" />
                </div>
                <div className={classes.box}>
                    <p>人数</p>
                    <span className={classes.form}>
                        <TextField id="numberOfPeople_min" InputProps={{ inputProps: { min: 1} }} onInput={SelectMinNumberOfPeople} value={minNumberOfPeople} style={{width:"30%"}} size="small" variant="outlined" name="numberOfPeople" type="Number"/>
                        <span style={{fontWeight:"normal",fontSize:"30px"}}>~</span>
                        <TextField id="numberOfPeople_max" InputProps={{ inputProps: { min: 1} }} onInput={SelectMaxNumberOfPeople} value={maxNumberOfPeople} style={{width:"30%"}} size="small" variant="outlined" name="numberOfPeople" type="Number"/>
                    </span>
                </div>
                <div className={classes.box}>
                    <p>日付</p>
                    <label htmlFor="openDate">
                        <TextField id="opendate" name="opendate" type="date" value={openDate} onInput={SelectOpenDate} label="日付" size="small" variant="outlined" InputLabelProps={{shrink: true}}/>
                    </label>
                </div>
                <span className={classes.button}>
                    <Button size="large" className={classes.itemButton} onClick={ApplyConditions} variant="contained" >適用</Button>
                </span>
            </div>
            <div className={classes.table}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>プラン名</TableCell>
                                <TableCell>締切時間</TableCell>
                                <TableCell>場所</TableCell>
                                <TableCell>人数</TableCell>
                                <TableCell>日時</TableCell>
                                <TableCell>予算</TableCell>
                                <TableCell>オファー</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {planlist.map((plandata)=>{
                                const deadline:Date=new Date(plandata.deadlineTime);
                                const limit:number=Math.floor((deadline.getTime()-today.getTime())/1000);
                                const openTime:Date=new Date(plandata.openTime);
                                const closeTime:Date=new Date(plandata.closeTime);
                                return(
                                    <TableRow key={plandata._id}>
                                                <TableCell><Link href={`/negotiation/${plandata._id}`} ><a>{plandata.title}</a></Link></TableCell>
                                                <TableCell>
                                                {limit>=604800?(<span className={classes.deadlineDay}>あと{Math.floor(limit/604800)}週間</span>):
                                                limit>=86400?(<span className={classes.deadlineDay}>あと{Math.floor(limit/86400)}日</span>):
                                                limit>=3600?(<span className={classes.deadlineHour}>あと{Math.floor(limit/3600)}時間</span>):
                                                limit>=60?(<span  className={classes.deadlineHour}>あと{Math.floor(limit/60)}分</span>):
                                                limit>0?(<span  className={classes.deadlineHour}>あと{limit}秒</span>):
                                                (<span></span>)}
                                                </TableCell>
                                                <TableCell>博多駅</TableCell>
                                                <TableCell>{plandata.numberOfPeople}人</TableCell>
                                                <TableCell>{openTime.getMonth()+1}月{openTime.getDate()}日({dayOfWeek[openTime.getDay()]}) {('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}</TableCell>
                                                <TableCell>{plandata.budget}円</TableCell>
                                                <TableCell>オファーする</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={classes.plan}>
                    {planlist.map((plandata) => {             
                        return(
                            <Card key={plandata._id} className={classes.planContent}>
                                <Link href={`/negotiation/${plandata._id}`} >
                                    <a><CardContent><Post plan={plandata}/></CardContent></a>
                                </Link>
                            </Card>
                        )
                    })}
            </div>
        </div>
        
    );
};