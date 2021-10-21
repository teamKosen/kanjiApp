import {useStyles} from './shopplan.style'
import {Post} from "./components/post"
import React,{FunctionComponent, useState, useCallback } from "react";
import Link from 'next/link';
import Tag from "./components/tag";
import { Card, CardContent,FormControl,InputLabel,Select,MenuItem,TextField, Button , InputAdornment, InputAdornmentProps, OutlinedInput } from '@material-ui/core';

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
    // const SelectSort=async(e)=>{
    //     setSelectedSort(e.target.value);
    // }
    const SelectSort = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedSort(event.target.value as number);
    };
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
                    <TextField id="numberOfPeople_max" InputProps={{ inputProps: { min: 1} }} onInput={SelectMaxNumberOfPeople} value={maxNumberOfPeople} style={{width:"11%"}} size="small" variant="outlined" name="numberOfPeople" type="Number" label="最大人数"/></span>
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
            {/* </form> */}
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