import { TextField, Button,InputAdornment, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import {useStyles} from './create-offer-modal.style'
import React, { useState, useEffect, FunctionComponent, useCallback } from 'react'
import { red } from '@material-ui/core/colors'
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
            budget: e.currentTarget.budget.value,
            numberOfPeople: e.currentTarget.numberOfPeople.value,
            tag: tag,
            place: e.currentTarget.place.value,
            userPlanId: plandata._id,
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

    console.log(plandata?.openTime.substring(11,16));

    return (
        <div>
            <Dialog
                open={isOpenCreatePlan}
                onClose={handleCreatePlanClose}
            >
                <DialogTitle id="alert-dialog-title">{"幹事にオファーする"}</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        {errorMsg != "ok" ? <p style={{color: "red"}}>{errorMsg}</p> : null}
<<<<<<< HEAD
                        <div className={style.form}>
                            <TextField style={{width:"80%"}} size="small" variant="outlined" id="title" name="title" type="text" label="タイトル" value={plandata?.title} />
=======
                        {/* タグ */}
                        <div className={style.formtitle}>
                            <div>タグを設定してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
>>>>>>> オファー作成モーダルのデザイン調整
                        </div>
                        <div className={style.form}>
                            <Tag style={{width:"80%"}} size="small" variant="outlined" setValue={setTags}/>
                        </div>
                        
                        {/* 場所 */}
                        <div className={style.formtitle}>
                            <div>お店の場所を入力してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
                        </div>
                        <div className={style.form}>
                            <TextField size="small" variant="outlined" id="place" name="place" type="text" label="場所" value={plandata?.place}/>
                        </div> 

                        {/* 人数/予算 */}
                        <div className={style.formtitle}>
                            <div>人数/予算を入力してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
                        </div>
                        <div className={style.form}>
                            <TextField size="small" variant="outlined" id="numberOfPeople" name="numberOfPeople" type="Number" label="人数" value={plandata?.numberOfPeople} InputProps={{endAdornment:<InputAdornment position="end">人</InputAdornment>}}/>
                            <TextField size="small" variant="outlined" id="budget" name="budget" type="Number" label="予算" value = {plandata?.budget} InputProps={{endAdornment:<InputAdornment position="end">円</InputAdornment>}}/>
                        </div>
                        
                        {/* 開始時間 */}
                        <div className={style.formtitle}>
                            <div>開催日時を設定してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
                        </div>
                        <div className={style.form}>
<<<<<<< HEAD
                            <div style={{paddingBottom:"5px"}}>開催日時</div>
                            <TextField label="日付" size="small" variant="outlined" id="openDate" name="openDate" type="date" defaultValue={plandata?.openTime.substring(0,10)} InputLabelProps={{shrink: true}}/>
                            <TextField label="時間" size="small" variant="outlined" id="openTime" name="openTime" type="time" defaultValue={plandata?.openTime.substring(11,16)} InputLabelProps={{shrink: true}}/>
=======
                            {/*<div style={{paddingBottom:"5px"}}>開催日時</div>*/}
                            <TextField label="日付" size="small" variant="outlined" id="openDate" name="openDate" type="date" InputLabelProps={{shrink: true}}/>
                            <TextField label="時間" size="small" variant="outlined" id="openTime" name="openTime" type="time" InputLabelProps={{shrink: true}}/>
>>>>>>> オファー作成モーダルのデザイン調整
                        </div>
                        
                        {/* 終了日時 */}
                        <div className={style.formtitle}>
                            <div>終了日時を設定してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
                        </div>
                        <div className={style.form}>
<<<<<<< HEAD
                            <div style={{paddingBottom:"5px"}}>終了日時</div>
                            <TextField label="日付" size="small" variant="outlined" id="closeDate" name="closeDate" type="date" defaultValue={plandata?.closeTime.substring(0,10)} InputLabelProps={{shrink: true}}/>
                            <TextField label="時間" size="small" variant="outlined" id="closeTime" name="closeTime" type="time" defaultValue={plandata?.closeTime.substring(11,16)} InputLabelProps={{shrink: true}}/>
=======
                            {/*<div style={{paddingBottom:"5px"}}>終了日時</div>*/}
                            <TextField label="日付" size="small" variant="outlined" id="closeDate" name="closeDate" type="date" InputLabelProps={{shrink: true}}/>
                            <TextField label="時間" size="small" variant="outlined" id="closeTime" name="closeTime" type="time" InputLabelProps={{shrink: true}}/>
>>>>>>> オファー作成モーダルのデザイン調整
                        </div>
                        
                        {/* コメント */}
                        <div className={style.formtitle}>
                            <div>コメントを設定してください</div>
                        </div>
                        <div className={style.form}>
                            <TextField style={{width:"100%"}} size="small" variant="outlined" multiline rows={5} id="comment" name="comment" type="text" label="コメント"/>
                        </div>

                        <div className={style.button}>
                            <Button onClick={handleCreatePlanClose}>←戻る</Button>
                            <Button
                                variant="contained"
                                type="submit"
                                color="secondary"
                            >確定</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}