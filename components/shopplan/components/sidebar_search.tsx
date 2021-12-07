import React,{FunctionComponent} from "react";
import { TextField, Button} from '@material-ui/core';
import {useStyles} from './sidebar_search.style'
import Tag from "./tag";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoneyIcon from '@material-ui/icons/Money';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StoreIcon from '@material-ui/icons/Store';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import {TextField_number} from "../../timeline/textfield_number"
import {Autocomplete_text} from "../../timeline/autocomplete_text"
import {TextField_date} from "../../timeline/textfield_date"

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
    SelectPlace(event: any, value: any):void;
    place:string;
    SelectPurpose(event: any, value: any):void;
    purpose:string;
    SelectGenre(event: any, value: any):void;
    genre:string;
};

export const Sidebar:FunctionComponent<Props> = (props) => {
    const {setTags,budget,SelectBudget,minNumberOfPeople,SelectMinNumberOfPeople,maxNumberOfPeople,SelectMaxNumberOfPeople,openDate,SelectOpenDate,ApplyConditions,SelectPlace,place,SelectPurpose,purpose,SelectGenre,genre}=props;
    const classes = useStyles();
    const purposeList:string[]=["打ち上げ","会食","合コン","同窓会"];
    const genreList:string[]=["中華","和食","イタリアン","エスニック"];
    const placeList:string[]=["博多","新飯塚","折尾","黒崎"];
    return(
        <>
            <div className={classes.box}>
                <div className={classes.label}><LocalOfferIcon className={classes.icon} />タグ</div>
                    <label htmlFor="tag" style={{width:"100%"}}>
                        <Tag setValue={setTags}/>
                    </label>
                </div>
                <div className={classes.box}>
                    <div className={classes.label}><MoneyIcon className={classes.icon} />予算</div>
                    <TextField_number Select={SelectBudget} item={budget} id_str="budget" unit="円" size_w="220px"/>
                </div>
                <div className={classes.box}>
                    <div className={classes.label}><LocationOnIcon className={classes.icon} />場所</div>
                    <Autocomplete_text Select={SelectPlace} item={place} id_str="place" list={placeList} />
                </div>
                <div className={classes.box}>
                    <div className={classes.label}><StoreIcon className={classes.icon} />目的</div>
                    <Autocomplete_text Select={SelectPurpose} item={purpose} id_str="purpose" list={purposeList} />
                </div>
                <div className={classes.box}>
                    <div className={classes.label}><RestaurantIcon className={classes.icon} />ジャンル</div>
                    <Autocomplete_text Select={SelectGenre} item={genre} id_str="genre" list={genreList} />
                </div>
                <div className={classes.box}>
                    <div className={classes.label}><PeopleIcon className={classes.icon} />人数</div>
                    <span className={classes.form}>
                        <TextField_number Select={SelectMinNumberOfPeople} item={minNumberOfPeople} id_str="minNumberOfPeople" unit="人" size_w="88px"/>
                        <span style={{fontWeight:"lighter",fontSize:"30px",margin:"0px 10px 0px 15px"}}>~</span>
                        <TextField_number Select={SelectMaxNumberOfPeople} item={maxNumberOfPeople} id_str="maxNumberOfPeople" unit="人" size_w="88px"/>
                    </span>
                </div>
                <div className={classes.box}>
                    <div className={classes.label}><DateRangeIcon className={classes.icon} />日付</div>
                    <label htmlFor="openDate">
                        <TextField_date Select={SelectOpenDate} item={openDate} />
                    </label>
                </div>
                <Button size="large" className={classes.button} onClick={ApplyConditions} variant="text">
                    <div className={classes.itemButton}><SearchIcon className={classes.icon_search} />検索する</div>
                </Button>
        </>
    )
}