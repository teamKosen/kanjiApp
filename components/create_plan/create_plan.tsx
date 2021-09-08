import React, { useState, useEffect } from "react";
import { useUser } from "../../lib/hooks";

export const Create_Plan = () => {
    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            title: e.currentTarget.title.value,
            tag: e.currentTarget.tag.value,
            place: e.currentTarget.place.value,
            people: e.currentTarget.people.value,
            buget: e.currentTarget.buget.value,
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
                <label htmlFor="title">
                    <input
                        id="title"
                        name="title"
                        type="title"
                        placeholder="Plan Title"
                    />
                </label>
                <label htmlFor="tag">
                    <input
                        id="tag"
                        name="tag"
                        type="tag"
                        placeholder="Tag"
                    />
                </label>
                <label htmlFor="place">
                    <input
                        id="place"
                        name="place"
                        type="place"
                        placeholder="Place"
                    />
                </label>
                <label htmlFor="people">
                    <input
                        id="people"
                        name="people"
                        type="people"
                        placeholder="People"
                    />
                </label>
                <label htmlFor="buget">
                    <input
                        id="buget"
                        name="buget"
                        type="buget"
                        placeholder="Buget"
                    />
                </label>
                <label htmlFor="open_date">
                    <input
                        id="open_date"
                        name="open_date"
                        type="open_date"
                        placeholder="Open Date"
                    />
                </label>
                <label htmlFor="deadline">
                    <input
                        id="deadline"
                        name="deadline"
                        type="deadline"
                        placeholder="Deadline"
                    />
                </label>
                <label htmlFor="comment">
                    <input
                        id="comment"
                        name="comment"
                        type="comment"
                        placeholder="Comment"
                    />
                </label>
                <button type="submit">confirm</button>
            </form>
        </div>
    );
};