import React,{FunctionComponent, useState, useCallback } from "react";
import { TextField, Button} from '@material-ui/core';
import {useStyles} from './sidebar_search.style'
import Tag from "./tag";
import Autocomplete from '@mui/material/Autocomplete';

type Props={
    setTags:React.Dispatch<React.SetStateAction<any[]>>,
    budget:number,
    SelectBudget: (e: any) => Promise<void>,
    minNumberOfPeople:number,
    SelectMinNumberOfPeople:(e: any) => Promise<void>,
    maxNumberOfPeople:number,
    SelectMaxNumberOfPeople:(e: any) => Promise<void>,
    openDate:string,
    SelectOpenDate:(e: any) => Promise<void>,
    ApplyConditions: () => void,
};

export const Sidebar:FunctionComponent<Props> = (props) => {
    const {setTags,budget,SelectBudget,minNumberOfPeople,SelectMinNumberOfPeople,maxNumberOfPeople,SelectMaxNumberOfPeople,openDate,SelectOpenDate,ApplyConditions}=props;
    const classes = useStyles();
    const purposelist:string[]=["打ち上げ","会食","合コン","同窓会"];
    const genrelist:string[]=["中華","和食","イタリアン","エスニック"];
    const placelist:string[]=["博多","新飯塚","折尾","黒崎"];
    return(
        <>
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
                    <Autocomplete disablePortal id="place" style={{width:"90%"}} options={placelist} renderInput={(params) => <TextField {...params} />} />
                </div>
                <div className={classes.box}>
                    <p>目的</p>
                    <Autocomplete disablePortal id="purpose" style={{width:"90%"}} options={purposelist} renderInput={(params) => <TextField {...params} />} />
                </div>
                <div className={classes.box}>
                    <p>ジャンル</p>
                    <Autocomplete disablePortal id="genre" style={{width:"90%"}} options={genrelist} renderInput={(params) => <TextField {...params} />} />
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
        </>
    )
}