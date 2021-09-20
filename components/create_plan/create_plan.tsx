import React, { useState, useEffect } from "react";
import { useStyles } from "./create_plan.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tag from "./components/tag";
import { useUser } from "../../lib/hooks";
import { InputAdornment, InputAdornmentProps, OutlinedInput } from "@material-ui/core";

export const Create_Plan = () => {
    const style = useStyles();
    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState("");
    const [tag, setTags] = useState([]);

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

    return(
        <div className={style.root}>
            <h2>Create Plan</h2>
            <form onSubmit={handleSubmit}>
                {errorMsg ? <p style={{color: "red"}}>{errorMsg}</p> : null}
                <div className={style.form}>
                    <TextField style={{width:"80%"}} size="small" variant="outlined" id="title" name="title" type="text" label="タイトル"/>
                </div>

                <div className={style.form}>
                    <Tag style={{width:"80%"}} size="small" variant="outlined" setValue={setTags}/>
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
                    <TextField style={{width:"100%"}} size="small" variant="outlined" multiline rows={5} id="comment" name="comment" type="text" label="コメント"/>
                </div>

                <div className={style.button}>
                    <Button variant="contained" type="submit">確定</Button>
                </div>
            </form>
        </div>
    );
};