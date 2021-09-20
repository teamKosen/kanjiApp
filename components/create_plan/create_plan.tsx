import React, { useState, useEffect } from "react";
import { useStyles } from "./create_plan.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tag from "./components/tag";
import { useUser } from "../../lib/hooks";

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
        console.log(user);
        console.log(mutate);
        const res = await fetch("api/create_plan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        setErrorMsg(await res.text());
    }

    return(
        <div>
            <h2>Create Plan</h2>
            <form onSubmit={handleSubmit}>
                {errorMsg ? <p style={{color: "red"}}>{errorMsg}</p> : null}
                プランタイトル:
                <label htmlFor="title" className={style.root}>
                    <TextField id="title" name="title" type="text" placeholder="Plan Title"/>
                </label>

                <br/>

                タグ:
                <label htmlFor="tag" className={style.root}>
                    <Tag setValue={setTags}/>
                </label>
                
                <br/>
                
                場所:
                <label htmlFor="place" className={style.root}>
                    <TextField id="place" name="place" type="text" placeholder="Place"/>
                </label>
                
                <br/>
                
                人数:
                <label htmlFor="numberOfPeople" className={style.root}>
                    <TextField id="numberOfPeople" name="numberOfPeople" type="Number" placeholder="Number of People"/>
                </label>
                予算:
                <label htmlFor="budget" className={style.root}>
                    <TextField id="budget" name="budget" type="Number" placeholder="Budget"/>
                </label>
                
                <br/>
                
                開催日時:
                <label htmlFor="openDate" className={style.root}>
                    <TextField id="openDate" name="openDate" type="date" placeholder="Open Date"/>
                </label>
                <label htmlFor="openTime" className={style.root}>
                    <TextField id="openTime" name="openTime" type="time" placeholder="Open Time"/>
                </label>
                
                <br/>
                
                終了日時:
                <label htmlFor="closeDate" className={style.root}>
                    <TextField id="closeDate" name="closeDate" type="date" placeholder="Close Date"/>
                </label>
                <label htmlFor="closeTime" className={style.root}>
                    <TextField id="closeTime" name="closeTime" type="time" placeholder="Close Time"/>
                </label>
                
                <br/>
                
                締切日時:
                <label htmlFor="deadlineDate" className={style.root}>
                    <TextField id="deadlineDate" name="deadlineDate" type="date" placeholder="Deadline Date"/>
                </label>
                <label htmlFor="deadlineTime" className={style.root}>
                    <TextField id="deadlineTime" name="deadlineTime" type="time" placeholder="Deadline Time"/>
                </label>
                
                <br/>
                
                コメント:
                <label htmlFor="comment" className={style.root}>
                    <TextField id="comment" name="comment" type="text" placeholder="Comment"/>
                </label>
                
                <br/>
                
                <Button type="submit">確定</Button>
            </form>
        </div>
    );
};