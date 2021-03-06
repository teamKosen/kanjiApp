import { TextField, Button,InputAdornment, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import {useStyles} from './create-offer-modal.style'
import React, { useState, useEffect, FunctionComponent } from 'react'
import Tag from "./components/tag";

import { useUser } from "../../../../lib/hooks";

type Props = {
    handleCreatePlanOpen: () => void;
    handleCreatePlanClose: () => void;
    isOpenCreatePlan: boolean;
    plandata;
    offerStateSwitch: (index: number) => void;
    index:number;
}

export const CreateOfferModal:FunctionComponent<Props> = (props) => {
    const { handleCreatePlanOpen, handleCreatePlanClose, isOpenCreatePlan, plandata,offerStateSwitch,index } = props;
    const style = useStyles();

    const [user, { mutate }] = useUser();
    const [errorMsg, setErrorMsg] = useState("");
    const [tag, setTags] = useState([]);

    const handleSubmit = async (e) => {
        const today = new Date();
        e.preventDefault();
        const body = {
            title: e.currentTarget.title.value,
            budget: e.currentTarget.budget.value,
            numberOfPeople: e.currentTarget.numberOfPeople.value,
            tag: tag,
            place: e.currentTarget.place.value,
            userPlanId: plandata._id,
            userName: plandata.userName,
            comment: e.currentTarget.comment.value,
            offerState: 1,
            openDate: e.currentTarget.openDate.value,
            openTime: e.currentTarget.openTime.value,
            closeDate: e.currentTarget.closeDate.value,
            closeTime: e.currentTarget.closeTime.value,
            create_at: today,
            update_at: today,
            user: user,
        };
        const res = await fetch("api/create_offer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        setErrorMsg(await res.text());
    }

    useEffect(()=>{
        if(errorMsg == "ok"){
            offerStateSwitch(index);
            handleCreatePlanClose();
        }
    }, [errorMsg]);

    return (
        <div>
            <Dialog
                open={isOpenCreatePlan}
                onClose={handleCreatePlanClose}
            >
                <DialogTitle id="alert-dialog-title">{"???????????????????????????"}</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        {errorMsg != "ok" ? <p style={{color: "red"}}>{errorMsg}</p> : null}
                        <div className={style.form}>
                            <TextField style={{width:"80%"}} size="small" variant="outlined" id="title" name="title" type="text" label="????????????" defaultValue={plandata?.title} />
                        </div>

                        <div className={style.form}>
                            <Tag style={{width:"80%"}} size="small" variant="outlined" setValue={setTags} tag={plandata?.tag}/>
                        </div>

                        <div className={style.form}>
                            <TextField size="small" variant="outlined" id="place" name="place" type="text" label="??????" defaultValue={plandata?.place}/>
                        </div> 

                        <div className={style.form}>
                            <TextField size="small" variant="outlined" id="numberOfPeople" name="numberOfPeople" type="Number" label="??????" defaultValue={plandata?.numberOfPeople} InputProps={{endAdornment:<InputAdornment position="end">???</InputAdornment>}}/>
                            <TextField size="small" variant="outlined" id="budget" name="budget" type="Number" label="??????" defaultValue = {plandata?.budget} InputProps={{endAdornment:<InputAdornment position="end">???</InputAdornment>}}/>
                        </div>
                        
                        <div className={style.form}>
                            <div style={{paddingBottom:"5px"}}>????????????</div>
                            <TextField label="??????" size="small" variant="outlined" id="openDate" name="openDate" type="date" defaultValue={plandata?.openTime.substring(0,10)} InputLabelProps={{shrink: true}}/>
                            <TextField label="??????" size="small" variant="outlined" id="openTime" name="openTime" type="time" defaultValue={plandata?.openTime.substring(11,16)} InputLabelProps={{shrink: true}}/>
                        </div>
                        
                        <div className={style.form}>
                            <div style={{paddingBottom:"5px"}}>????????????</div>
                            <TextField label="??????" size="small" variant="outlined" id="closeDate" name="closeDate" type="date" defaultValue={plandata?.closeTime.substring(0,10)} InputLabelProps={{shrink: true}}/>
                            <TextField label="??????" size="small" variant="outlined" id="closeTime" name="closeTime" type="time" defaultValue={plandata?.closeTime.substring(11,16)} InputLabelProps={{shrink: true}}/>
                        </div>
                        
                        <div className={style.form}>
                            <TextField style={{width:"100%"}} size="small" variant="outlined" multiline rows={5} id="comment" name="comment" type="text" label="????????????"/>
                        </div>

                        <div className={style.button}>
                            <Button onClick={handleCreatePlanClose}>?????????</Button>
                            <Button
                                variant="contained"
                                type="submit"
                                color="secondary"
                            >??????</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}