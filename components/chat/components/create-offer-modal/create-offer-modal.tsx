import { TextField, Button,InputAdornment, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import {useStyles} from './create-offer-modal.style'
import React, { useState, useEffect,FunctionComponent, useCallback } from 'react'
import { red } from '@material-ui/core/colors'

type Props = {
    handleCreatePlanOpen: () => void;
    handleCreatePlanClose: () => void;
    isOpenCreatePlan: boolean;
}

export const CreateOfferModal:FunctionComponent<Props> = (props) => {
    const { handleCreatePlanClose, isOpenCreatePlan} = props;
    const style = useStyles();
    return (
        <div>
            <Dialog
                open={isOpenCreatePlan}
                onClose={handleCreatePlanClose}
            >
                <DialogTitle id="alert-dialog-title">{"幹事にオファーする"}</DialogTitle>
                <DialogContent>
                    <form>
                        {/* {errorMsg ? <p style={{color: "red"}}>{errorMsg}</p> : null} */}
                        <div className={style.formtitle}>
                            <div>お店の名前を入力してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
                        </div>
                        <div className={style.form}>
                            <TextField style={{width:"100%"}} size="small" variant="outlined" id="shopname" name="shopname" type="text" label="お店の名前"/>
                        </div>
                        <div className={style.formtitle}>
                            <div>お店の場所を入力してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
                        </div>
                        <div className={style.form}>
                            <TextField style={{width:"100%"}} size="small" variant="outlined" id="place" name="place" type="text" label="場所"/>
                        </div> 
                        <div className={style.formtitle}>
                            <div>人数/予算を入力してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
                        </div>
                        <div className={style.form}>
                            <TextField size="small" variant="outlined" id="numberOfPeople" name="numberOfPeople" type="Number" label="人数" InputProps={{endAdornment:<InputAdornment position="end">人</InputAdornment>}}/>
                        </div>
                        <div className={style.form}>
                            <TextField size="small" variant="outlined" id="budget" name="budget" type="Number" label="予算" InputProps={{endAdornment:<InputAdornment position="end">円</InputAdornment>}}/>
                        </div>
                        <div className={style.formtitle}>
                            <div>開催日時/終了日時を入力してください</div>
                            <div className={style.formtitleAnnotation}><span style={{color: "red"}}>*</span>必須</div>
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
                        <div className={style.formtitle}>
                            <div>{"連作先を入力してください(任意)"}</div>
                        </div>
                        <div className={style.form}>
                            <TextField style={{width:"100%"}} size="small" variant="outlined" id="tel" name="tel" type="tel" label="tel"/>
                        </div> 

                        <div className={style.form}>
                            <TextField style={{width:"100%"}} size="small" variant="outlined" id="URL" name="URL" type="text" label="URL"/>
                        </div> 
                        <div className={style.formtitle}>
                            <div>{"コメント欄(割引やクーポンの詳細など)"}</div>
                        </div>
                        <div className={style.form}>
                            <TextField style={{width:"100%"}} size="small" variant="outlined" multiline rows={5} id="comment" name="comment" type="text" label="コメント"/>
                        </div>
                        <div className={style.button}>
                            <Button onClick={handleCreatePlanClose}>←戻る</Button>
                            <Button variant="contained" type="submit" color="secondary">確定</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}