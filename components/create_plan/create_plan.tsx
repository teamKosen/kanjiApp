import React, { useState, useEffect, FunctionComponent } from "react";
import { useRouter } from 'next/router'
import { useStyles } from "./create_plan.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tag from "./components/tag";
import { useUser } from "../../lib/hooks";
import { InputAdornment } from "@material-ui/core";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoneyIcon from '@material-ui/icons/Money';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export const Create_Plan:FunctionComponent = () => {
    const style = useStyles();
    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState("");
    const [tag, setTags] = useState([]);
    const router = useRouter()

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
            planState: 1,
        };
        const res = await fetch("api/create_plan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        setErrorMsg(await res.text());

    }

    useEffect(()=>{
        if(errorMsg == "ok"){
            router.push('/userplan');  
        }
    }, [errorMsg]);

    return(
        <div className={style.root}>
            <h1>プラン作成</h1>
            <form onSubmit={handleSubmit}>
                {errorMsg ? <p style={{color: "red"}}>{errorMsg}</p> : null}
                <div className={style.form}>
                    <div className={style.label}>タイトル</div>
                    <div className={style.indispensable}>必須</div>
                    <TextField className={style.boxdesign}  size="small" variant="outlined" id="title" name="title" type="text" InputProps={{placeholder: "未入力"}}/>
                </div>

                <div className={style.form}>
                    <LocalOfferIcon className={style.icon} />
                    <div className={style.label}>タグ</div>
                    <div className={style.indispensable}>必須</div>
                    <Tag className={style.boxdesign} size="small" variant="outlined" setValue={setTags}/>
                </div>

                <div className={style.form}>
                    <MoneyIcon className={style.icon} />
                    <div className={style.label}>予算</div>
                    <div className={style.indispensable}>必須</div>
                    <TextField className={style.boxdesign}　size="small" variant="outlined" id="budget" name="budget" type="Number" InputProps={{placeholder: "未入力", endAdornment:<InputAdornment position="end">円</InputAdornment>}}/>
                </div> 

                <div className={style.form}>
                    <LocationOnIcon className={style.icon} />
                    <div className={style.label}>場所</div>
                    <div className={style.indispensable}>必須</div>
                    <TextField　className={style.boxdesign} size="small" variant="outlined" id="place" name="place" type="text" InputProps={{placeholder: "未入力"}}/>
                </div> 

                <div className={style.form}>
                    <PeopleIcon className={style.icon} />
                    <div className={style.label}>人数</div>
                    <div className={style.indispensable}>必須</div>
                    <TextField　className={style.boxdesign} size="small" variant="outlined" id="numberOfPeople" name="numberOfPeople" type="Number" InputProps={{placeholder: "未入力", endAdornment:<InputAdornment position="end">人</InputAdornment>}}/>
                </div>
                
                <div className={style.form}>
                    <AccessTimeIcon className={style.icon} />
                    <div className={style.label}>開催日時</div>
                    <div className={style.indispensable}>必須</div>
                    <TextField className={style.boxdesigndate} label="日付" size="small" variant="outlined" id="openDate" name="openDate" type="date" InputLabelProps={{shrink: true}}/>
                    <TextField className={style.boxdesigntime} label="時間" size="small" variant="outlined" id="openTime" name="openTime" type="time" InputLabelProps={{shrink: true}}/>
                </div>
                
                <div className={style.form}>
                    <AccessTimeIcon className={style.icon} />
                    <div className={style.label}>終了日時</div>
                    <div className={style.indispensable}>必須</div>
                    <TextField className={style.boxdesigndate} label="日付" size="small" variant="outlined" id="closeDate" name="closeDate" type="date" InputLabelProps={{shrink: true}}/>
                    <TextField className={style.boxdesigntime} label="時間" size="small" variant="outlined" id="closeTime" name="closeTime" type="time" InputLabelProps={{shrink: true}}/>
                </div>
                
                <div className={style.form}>
                    <AccessTimeIcon className={style.icon} />
                    <div className={style.label}>締切日時</div>
                    <div className={style.indispensable}>必須</div>
                    <TextField className={style.boxdesigndate} label="日付" size="small" variant="outlined" id="deadlineDate" name="deadlineDate" type="date" InputLabelProps={{shrink: true}}/>
                    <TextField className={style.boxdesigntime} label="時間" size="small" variant="outlined" id="deadlineTime" name="deadlineTime" type="time" InputLabelProps={{shrink: true}}/>
                </div>
                
                <div className={style.form}>
                    <div className={style.label}>コメント</div>
                    <TextField className={style.boxdesigncomment} size="small" variant="outlined" multiline rows={5} id="comment" name="comment" type="text" InputProps={{placeholder: "未入力"}}/>
                </div>

                <div>
                    <Button className={style.button} type="submit">プランを作成する</Button>
                </div>
            </form>
       </div>
    ); 
};