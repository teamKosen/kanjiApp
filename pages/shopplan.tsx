import { NextPage } from "next";
import fetch from 'isomorphic-unfetch'
import {Shopplan} from "../components/shopplan/shopplan"
import React from 'react';

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
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement?.removeChild(jssStyles);
        }
      }, []);
    return (
        <div style={{paddingTop: "50px"}}>
            <Shopplan
                userplandatas={userplandatas}
            />
        </div>
    );
};

export default Page;