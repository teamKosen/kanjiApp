import { NextPage } from "next";
import fetch from 'isomorphic-unfetch'
import {Shopplan} from "../components/shopplan/shopplan"
import React from "react";

export async function getStaticProps(context) {

    const res = await fetch(`http://localhost:3000/api/plansearch?tag=${""}&date=${""}&maxnumberofpeople=${""}&minnumberofpeople=${""}&sortcondition=${5}$sortswitch=${1}`);
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

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement?.removeChild(jssStyles);
        }
      }, []);
    return (
        <div>
            <Shopplan
                userplandatas={userplandatas}
            />
        </div>
    );
};

export default Page;