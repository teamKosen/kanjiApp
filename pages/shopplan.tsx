
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

    return (
        <div style={{paddingTop: "50px"}}>
            <Shopplan
                userplandatas={userplandatas}
            />
        </div>
    );
};

export default Page;