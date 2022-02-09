import { Card,TextField, Button,InputAdornment, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import {useStyles} from './detail_modal.style'
import React, {FunctionComponent } from 'react'
import { Picture } from '../picture/picture'
import { useUser } from "../../../../../lib/hooks"
import {Post} from "./components/post"

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
    const style = useStyles();
    const [user, { mutate }] = useUser();
    const planlist=JSON.parse(JSON.stringify(userplan));
    const leftList=[];
    const rightList=[];
    var i:number=0;
    const shop_detail:string[]=["お店","住所","営業時間","座席タイプ・数","支払方法","駐車場","電話番号"];
    const shop_unit=[name,adress,open,seatTypes,payments,park,phoneNumber];
    const classes = useStyles();

    return (
        <div style={{width:"1000px"}}>
            <Dialog
                open={isOpenDetail}
                onClose={handleDetailClose}
                className={classes.popup}
            >
                <DialogContent>
                    <div>{name}</div>
                    <div>{place}</div>
                    <div>
                        <div>{tag_genre}</div>
                        <div>{tag_purpose}</div>
                    </div>
                    <div>
                            <Picture
                                pictures={pictures}
                            />
                    </div>

                    <div>プラン履歴</div>
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
                    {leftList ? (
                        leftList.map((plan)=>{
                            return(
                                <Card key={plan}>
                                    <Post plan={plan}/>
                                </Card>
                            )
                        })
                    ):(<></>)
                    }
                    {rightList ? (
                        rightList.map((plan)=>{
                            return(
                                <Card key={plan}>
                                    <Post plan={plan}/>
                                </Card>
                            )
                        })
                    ):(<></>)
                    }
                    <div>店舗情報</div>
                    <table>
                        {shop_detail.map((detail_head,i)=>{
                            return(<tr key={detail_head}><td>{detail_head}</td><td>{shop_unit[i]}</td></tr>)
                            //<tr><div>{detail_head}</div><div>{shop_unit[i]}</div></tr>
                        })
                        }
                    </table>
                </DialogContent>
            </Dialog>
        </div>
    );
}