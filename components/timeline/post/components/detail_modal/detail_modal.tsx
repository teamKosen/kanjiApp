import { Card,TextField, Button,InputAdornment, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import {useStyles} from './detail_modal.style'
import React, {FunctionComponent } from 'react'
import { Picture } from './components/picture/picture'
import { useUser } from "../../../../../lib/hooks"
import {Post} from "./components/post"
import LocationIcon from '@material-ui/icons/LocationOn';

type Props = {
    ShopId:string;
    handleDetailClose: () => void;
    isOpenDetail: boolean;
    name:string;
    place:string;
    tag_genre:string;
    tag_purpose:string;
    pictures:any;
    userplan:JSON;
    adress:string;
    open:string[];
    seatTypes:string[];
    payments:string[];
    park:number;
    phoneNumber:string;
}

export const DetailModal:FunctionComponent<Props> = (props) => {
    const {ShopId,handleDetailClose, isOpenDetail,name,place,tag_genre,tag_purpose,pictures,userplan,adress,open,seatTypes,payments,park,phoneNumber} = props;
    const [user, { mutate }] = useUser();
    const planlist=JSON.parse(JSON.stringify(userplan));
    const leftList=[];
    const rightList=[];
    var i:number=0;
    const shop_detail:string[]=["お店","住所","営業時間","座席タイプ・数","支払方法","駐車場","電話番号"];
    const shop_unit:any[]=[name,adress,open,seatTypes,payments,park,phoneNumber];
    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={isOpenDetail}
                onClose={handleDetailClose}
                maxWidth={"lg"}
            >
                <DialogContent style={{width:"1000px"}}>
                    <div className={classes.mL200}>
                        <div className={classes.title}>{name}</div>
                        <div className={classes.place}>
                            <div><LocationIcon className={classes.icon}/>{place}</div>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <div className={classes.tagChip}>#{tag_genre[0]}</div>
                            <div className={classes.tagChip}>#{tag_purpose[0]}</div>
                        </div>
                        <div className={classes.imgPosition}>
                            <Picture
                                pictures={pictures}
                            />
                        </div>
                        </div>
                    <div className={classes.history}>プラン履歴</div>
                    <div className={classes.mL200}>
                        {planlist.map((plandata)=>{
                            if(ShopId==plandata.shopId && plandata.offerState==4){
                                i++;
                                if(i%2==1){
                                    leftList.push(plandata);
                                }
                                else if(i%2==0){
                                    rightList.push(plandata);
                                    i=0;
                                }
                                else{}
                            }else{}
                        })}
                        <div className={classes.planLine}>
                        {leftList ? (
                            leftList.map((plan)=>{
                                return(
                                    <Card key={plan} className={classes.planCard}>
                                        <Post plan={plan}/>
                                    </Card>
                                )
                            })
                        ):(<></>)
                        }
                        </div>
                        <div className={classes.planLine}>
                        {rightList ? (
                            rightList.map((plan)=>{
                                return(
                                    <Card key={plan} className={classes.planCard}>
                                        <Post plan={plan}/>
                                    </Card>
                                )
                            })
                        ):(<></>)
                        }
                        </div>
                    </div>
                    <div className={classes.history}>店舗情報</div>
                    <table className={classes.mL200}>
                        {shop_detail.map((detail_head,i)=>{
                            return(<tr key={detail_head}><div className={classes.div_boeder}><td className={classes.tableHead}><div>{detail_head}</div></td><td className={classes.tableUnit}>{typeof(shop_unit[i])=='object' ? (shop_unit[i].map((unit)=>{return(<div key={unit}>{unit}</div>)})):(<div>{shop_unit[i]}</div>)}</td></div></tr>)
                        })
                        }
                        <tr><div style={{marginBottom:"20px",borderTop:"2px solid #FFD700"}}></div></tr>
                    </table>
                    <div ></div>
                </DialogContent>
            </Dialog>
        </div>
    );
}