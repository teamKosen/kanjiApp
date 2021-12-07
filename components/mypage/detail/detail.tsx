import React,{ FunctionComponent,useState,useCallback} from "react";
import { useStyles } from './detail.style';
import { useUser } from '../../../lib/hooks';
import { SideMenu } from './components/side-menu/side-menu';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Link from 'next/link';

type Props = {
    offerdatas: JSON;
};

export const Detail:FunctionComponent<Props> = (props) => {
    const { offerdatas } = props;
    const offerlist=JSON.parse(JSON.stringify(offerdatas));
    const [user, { mutate }] = useUser();

    const [ offerIndex,setOfferIndex] = useState(true);
    const [ currentOfferState, setCurrentOfferState] = useState<number>(2);
    const classes = useStyles();

    const handleOfferIndex = useCallback(() => {
        setOfferIndex(!offerIndex);
    },[offerIndex])

    const dayOfWeek:string[]=["日","月","火","水","木","金","土"];

    return (
        <div className={classes.detailForm}>
            <div className={classes.drawer}>
                <div className={classes.drawerContainer}>
                    <SideMenu 
                        handleOfferIndex={handleOfferIndex} 
                        setCurrentOfferState={setCurrentOfferState}
                        offerIndex = {offerIndex}
                    />
                </div>
            </div>
            <div className={classes.table}>
                {currentOfferState === 1 ? <h2>オファー中</h2> : ""}
                {currentOfferState === 2 ? <h2>交渉中</h2> : ""}
                {currentOfferState === 3 ? <h2>決定</h2> : ""}
                    <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>タイトル</TableCell>
                                        <TableCell>お客様</TableCell>
                                        <TableCell>日時</TableCell>
                                        <TableCell>人数</TableCell>
                                        <TableCell>予算</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {user ? (
                                        <>
                                            {offerlist.map((offerdata) => {
                                                const openTime:Date=new Date(offerdata.openTime);
                                                const closeTime:Date=new Date(offerdata.closeTime);
                                                return(
                                                    <>
                                                        {(offerdata.shopId === user._id) && (offerdata.offerState === currentOfferState) ? (
                                                            <TableRow key={offerdata._id}>
                                                                <TableCell>{offerdata.title}</TableCell>
                                                                <TableCell>
                                                                    <Link href={`/mypage/${offerdata._id}`}>
                                                                        <a>
                                                                            {offerdata.userName}
                                                                        </a>
                                                                    </Link>
                                                                </TableCell>
                                                                <TableCell>{openTime.getMonth()+1}月{openTime.getDate()}日({dayOfWeek[openTime.getDay()]}) {('00'+openTime.getHours()).slice(-2)}:{('00'+openTime.getMinutes()).slice(-2)}～{('00'+closeTime.getHours()).slice(-2)}:{('00'+closeTime.getMinutes()).slice(-2)}</TableCell>
                                                                <TableCell>{offerdata.numberOfPeople}</TableCell>
                                                                <TableCell>{offerdata.budget}</TableCell>             
                                                            </TableRow>
                                                        ):(
                                                            <></>
                                                        )}
                                                    </>
                                                )
                                            })}
                                        </>
                                    ):(
                                        <p>ログインしてください</p>
                                    )}
                                </TableBody>
                            </Table>
                    </TableContainer>
                </div>
        </div>
    )
}