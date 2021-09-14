import React, { useState, useEffect } from "react";
import { useStyles } from "./create_plan.style";
import TextFeild from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useUser } from "../../lib/hooks";

export const Create_Plan = () => {
    const style = useStyles();
    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            title: e.currentTarget.title.value,
            tag: e.currentTarget.tag.value,
            place: e.currentTarget.place.value,
            people: e.currentTarget.people.value,
            budget: e.currentTarget.budget.value,
            open_date: e.currentTarget.open_date.value,
            deadline: e.currentTarget.deadline.value,
            comment: e.currentTarget.comment.value,
        };
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
                <label htmlFor="title" className={style.root}>
                    <TextFeild id="title" name="title" type="text" placeholder="Plan Title"/>
                </label>
                <br/>
                <label htmlFor="tag" className={style.root}>
                    <TextFeild id="tag" name="tag" type="text" placeholder="Tag"/>
                </label>
                <br/>
                <label htmlFor="place" className={style.root}>
                    <TextFeild id="place" name="place" type="text" placeholder="Place"/>
                </label>
                <br/>
                <label htmlFor="people" className={style.root}>
                    <TextFeild id="people" name="people" type="Number" placeholder="People"/>
                </label>
                <label htmlFor="budget" className={style.root}>
                    <TextFeild id="budget" name="budget" type="Number" placeholder="Budget"/>
                </label>
                <br/>
                <label htmlFor="open_date" className={style.root}>
                    <TextFeild id="open_date" name="open_date" type="date" placeholder="Open Date"/>
                </label>
                <br/>
                <label htmlFor="deadline" className={style.root}>
                    <TextFeild id="deadline" name="deadline" type="date" placeholder="Deadline"/>
                </label>
                <br/>
                <label htmlFor="comment" className={style.root}>
                    <TextFeild id="comment" name="comment" type="text" placeholder="Comment"/>
                </label>
                <br/>
                <Button type="submit">confirm</Button>
            </form>
        </div>
    );
};