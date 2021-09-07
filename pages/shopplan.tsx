
import { Userplan } from "../components/userplan/userplan";
import { NextPage } from "next";
import fetch from 'isomorphic-unfetch'
import {useStyles} from '../styles/shopplan.style'
import {Shopplan} from "../components/shopplan/shopplan"

export async function getStaticProps(context) {

    const res = await fetch("http://localhost:3000/api/userplandatas");
    const json = await res.json();

    

    return {
      props: {
        userplandatas: json,
      },
    };
}
type Props={
    userplandatas:JSON;
};


const Page:NextPage<Props> = (props) => {
    const {userplandatas}=props;
    const planlist=JSON.parse(JSON.stringify(userplandatas));
    const classes = useStyles();
    return (
        <>
            <div style={{paddingTop: "100px"}}>
                <p>絞り込み条件</ p>

                <div className={classes.line}>
                    <p className={classes.iteml}>タグ<input id="tag"></input></p>
                    <p className={classes.itemc}>人数<input id="numberOfPeople_min"></input>～<input id="numberOfPeople_max"></input></p>
                    <p className={classes.itemr}>場所<input id="place"></input></p>
                </div>
                <div className={classes.line}>
                    <p className={classes.iteml}>日付<input id="date"></input></p>
                    <p className={classes.itemr}>ソート<select>
                        <option>- - - - - - - -</option>
                        </select></p>
                </div>

                {planlist.map((plandata) => {

                return(
                    <div key={plandata.title}>
                        <Shopplan plan={plandata}/>
                    </div>
                )
                })}
                
            </div>
        </>
    );
};

export default Page;