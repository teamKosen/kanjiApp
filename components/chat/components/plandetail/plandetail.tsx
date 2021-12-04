import { useStyles } from "./plandetail.style";
import React, { FunctionComponent,useState } from 'react'
import { Card, CardContent, CardActions, Button,Typography,CardMedia } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Tag from "../../../create_plan/components/tag";
import { useUser } from "../../../../lib/hooks";
import { InputAdornment } from "@material-ui/core";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoneyIcon from '@material-ui/icons/Money';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DateRangeIcon from '@material-ui/icons/DateRange';


type Props = {
    userPlandatas_detail: JSON;
}


export const PlanDetail:FunctionComponent<Props> = (props) => {
    const {userPlandatas_detail} = props;
    const [userPlandetaillist, setUserPlandetaillist] = useState(JSON.parse(JSON.stringify(userPlandatas_detail)));

    const style = useStyles();
    const [errorMsg, setErrorMsg] = useState("");
    const [tag, setTags] = useState([]);
    const [power, setPower] = useState(false);
    const [user, { mutate }] = useUser();

    const handleSubmit = async (e) => {
        const today = new Date();
        e.preventDefault();
        const body = {
            title: e.currentTarget.title.value,
            tag: tag,
            place: e.currentTarget.place.value,
            numberOfPeople: e.currentTarget.numberOfPeople.value,
            budget: e.currentTarget.budget.value,
            openDate: e.currentTarget.openDate.value,
            openTime: e.currentTarget.openTime.value,
            closeDate: e.currentTarget.closeDate.value,
            closeTime: e.currentTarget.closeTime.value,
            deadlineDate: e.currentTarget.deadlineDate.value,
            deadlineTime: e.currentTarget.deadlineTime.value,
            create_at: today,
            comment: e.currentTarget.comment.value,
            user: user,
        };
        const res = await fetch("api/create_plan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        setErrorMsg(await res.text());
    }

    if (power == false) {

        return (
            <div>
                <div>
                    
                    {userPlandetaillist.map((userPlandetaildata) => {
                        var date_open = new Date(userPlandetaildata.openTime)
                        var date_close = new Date(userPlandetaildata.closeTime)
                        var date_deadline = new Date(userPlandetaildata.deadlineTime)

                        return (
                            <form key={userPlandetaildata._id}>
                                {errorMsg ? <p style={{color: "red"}}>{errorMsg}</p> : null}

                                <div className={style.form}>
                                    <div className={style.label}>
                                        <LocalOfferIcon className={style.icon} />
                                        タグ
                                    </div>
                                    <div className={style.tagbox}>
                                        {userPlandetaildata.tag.map((tags)=>{
                                            return<span key={tags}　className={style.tag}>#{tags}</span>
                                        })}
                                    </div>
                                    {/* <TextField className={style.boxdesign} inputProps={{style: {fontSize: 14} }}  size="small" variant="outlined" type="text" value={userPlandetaildata.tag}/> */}
                                </div>

                                <div className={style.form}>
                                    <div className={style.label}>
                                        <MoneyIcon className={style.icon} />
                                        予算
                                    </div>
                                    <TextField className={style.boxdesign} inputProps={{style: {fontSize: 14} }} size="small" variant="outlined" id="budget" name="budget" type="Number" value={userPlandetaildata.budget} InputProps={{endAdornment:<InputAdornment position="end">円</InputAdornment>}}/>
                                </div> 

                                <div className={style.form}>
                                    <div className={style.label}>
                                        <LocationOnIcon className={style.icon} />
                                        場所
                                    </div>
                                    <TextField className={style.boxdesign} inputProps={{style: {fontSize: 14} }} size="small" variant="outlined" id="place" name="place" type="text" value={userPlandetaildata.place}/>
                                </div> 

                                <div className={style.form}>
                                    <div className={style.label}>
                                        <PeopleIcon className={style.icon} />
                                        人数
                                    </div>
                                    <TextField　className={style.boxdesign} inputProps={{style: {fontSize: 14} }} size="small" variant="outlined" id="numberOfPeople" name="numberOfPeople" type="Number"  value={userPlandetaildata.numberOfPeople}　InputProps={{endAdornment:<InputAdornment position="end">人</InputAdornment>}}/>
                                </div>

                                <div className={style.form}>
                                    <div className={style.label}>
                                        <AccessTimeIcon className={style.icon} />
                                        開催日時
                                    </div>
                                    <TextField className={style.boxdesigndate} size="small" variant="outlined" id="openDate" name="openDate" type="text"  value={date_open.toLocaleDateString()} inputProps={{style: {fontSize: 14} }} InputProps={{endAdornment:<InputAdornment position="end"><DateRangeIcon className={style.dateicon} /></InputAdornment>}}/>
                                    <TextField className={style.boxdesigntime} size="small" variant="outlined" id="openTime" name="openTime" type="text"  value={date_open.getHours() +":" + ("0" + date_open.getMinutes()).slice(-2)} inputProps={{style: {fontSize: 14} }} InputProps={{endAdornment:<InputAdornment position="end"><AccessTimeIcon className={style.dateicon} /></InputAdornment>}}/>
                                </div>
                                
                                <div className={style.form}>
                                    <div className={style.label}>
                                        <AccessTimeIcon className={style.icon} />
                                        終了日時
                                    </div>
                                    <TextField className={style.boxdesigndate} size="small" variant="outlined" id="closeDate" name="closeDate" type="text"  value={date_close.toLocaleDateString()} inputProps={{style: {fontSize: 14} }} InputProps={{endAdornment:<InputAdornment position="end"><DateRangeIcon className={style.dateicon} /></InputAdornment>}}/>
                                    <TextField className={style.boxdesigntime} size="small" variant="outlined" id="closeTime" name="closeTime" type="text"  value={date_close.getHours() +":" + ("0" + date_close.getMinutes()).slice(-2)} inputProps={{style: {fontSize: 14} }} InputProps={{endAdornment:<InputAdornment position="end"><AccessTimeIcon className={style.dateicon} /></InputAdornment>}}/>
                                </div>
                                
                                <div className={style.form}>
                                    <div className={style.label}>
                                        <AccessTimeIcon className={style.icon} />
                                        オファー受付締切日時
                                    </div>
                                    <TextField className={style.boxdesigndate} size="small" variant="outlined" id="deadlineDate" name="deadlineDate" type="text"  value={date_deadline.toLocaleDateString()} inputProps={{style: {fontSize: 14} }} InputProps={{endAdornment:<InputAdornment position="end"><DateRangeIcon className={style.dateicon} /></InputAdornment>}}/>
                                    <TextField className={style.boxdesigntime} size="small" variant="outlined" id="deadlineTime" name="deadlineTime" type="text"  value={date_deadline.getHours() +":" + ("0" + date_deadline.getMinutes()).slice(-2)} inputProps={{style: {fontSize: 14} }} InputProps={{endAdornment:<InputAdornment position="end"><AccessTimeIcon className={style.dateicon} /></InputAdornment>}}/>
                                </div>
                                
                                <div className={style.form}>
                                    <div className={style.label}>
                                        　コメント
                                    </div>
                                    <TextField className={style.boxdesigncomment} size="small" variant="outlined" multiline rows={5} id="comment" name="comment" type="text" value={userPlandetaildata.comment}/>
                                </div>

                                <div>
                                    <Button className={style.button} onClick={() => setPower(prevState => !prevState)} type="submit">プランを編集する</Button>
                                </div>

                            </form>

                            
                    
                        )
                    } )}
                    
                </div>
            </div>
        );
    } else {

        return (
            <div>
                <div>
                    <h2>Chenge detail</h2>
                    
                    {userPlandetaillist.map((userPlandetaildata) => {
                        var date_open = new Date(userPlandetaildata.openTime)
                        var date_close = new Date(userPlandetaildata.closeTime)
                        var date_deadline = new Date(userPlandetaildata.deadlineTime)

                        return (
                            <form onSubmit={handleSubmit} key={userPlandetaildata._id}>
                                {errorMsg ? <p style={{color: "red"}}>{errorMsg}</p> : null}
                                <div className={style.form}>
                                    <TextField size="small" variant="outlined" id="title" name="title" type="text" label="タイトル"/>
                                </div>
                
                                <div className={style.form}>
                                    <Tag size="small" variant="outlined" setValue={setTags}/>
                                </div>
                
                                <div className={style.form}>
                                    <TextField size="small" variant="outlined" id="place" name="place" type="text" label="場所"/>
                                </div> 
                
                                <div className={style.form}>
                                    <TextField size="small" variant="outlined" id="numberOfPeople" name="numberOfPeople" type="Number" label="人数" InputProps={{endAdornment:<InputAdornment position="end">人</InputAdornment>}}/>
                                    <TextField size="small" variant="outlined" id="budget" name="budget" type="Number" label="予算" InputProps={{endAdornment:<InputAdornment position="end">円</InputAdornment>}}/>
                                </div>
                                
                                <div className={style.form}>
                                    <div style={{paddingBottom:"5px"}}>開催日時</div>
                                    <TextField label="日付" size="small" variant="outlined" id="openDate" name="openDate" type="date" InputLabelProps={{shrink: true}}/>
                                    <TextField label="時間" size="small" variant="outlined" id="openTime" name="openTime" type="time" InputLabelProps={{shrink: true}}/>
                                </div>
                                
                                <div className={style.form}>
                                    <div style={{paddingBottom:"5px"}}>終了日時</div>
                                    <TextField label="日付" size="small" variant="outlined" id="closeDate" name="closeDate" type="date" InputLabelProps={{shrink: true}}/>
                                    <TextField label="時間" size="small" variant="outlined" id="closeTime" name="closeTime" type="time" InputLabelProps={{shrink: true}}/>
                                </div>
                                
                                <div className={style.form}>
                                    <div style={{paddingBottom:"5px"}}>締切日時</div>
                                    <TextField label="日付" size="small" variant="outlined" id="deadlineDate" name="deadlineDate" type="date" InputLabelProps={{shrink: true}}/>
                                    <TextField label="時間" size="small" variant="outlined" id="deadlineTime" name="deadlineTime" type="time" InputLabelProps={{shrink: true}}/>
                                </div>
                                
                                <div className={style.form}>
                                    <TextField size="small" variant="outlined" multiline rows={5} id="comment" name="comment" type="text" label="コメント"/>
                                </div>
                
                                <div className={style.button}>
                                    <Button variant="contained" type="submit">確定</Button>
                                    <Button onClick={() => setPower(prevState => !prevState)} variant="contained" type="submit">編集</Button>
                                </div>
                            </form>
                            
                    
                        )
                    } )}
                    
                </div>
            </div>
        );
    }
};