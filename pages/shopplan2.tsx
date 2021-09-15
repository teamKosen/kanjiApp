import { NextPage } from "next";
import fetch from 'isomorphic-unfetch'
import {Map} from "../components/timeline/post/components/map/map"
import React from 'react';
import {useStyles} from '../styles/shopplan2.style';



const Page:NextPage=() => {
  const sd:Date=new Date();
  console.log(sd);
  const ss:string=sd.toString();
  console.log(ss);
  const sd2:Date=new Date('2020-09-15 05:57');
  console.log(sd2);
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement?.removeChild(jssStyles);
        }
      }, []);
      const classes = useStyles();

    return (
        <div style={{paddingTop: "50px"}}>
            <Map />
        </div>
    );
};

export default Page;

// return (
//   <>
//       <div style={{paddingTop: "100px"}}>
//           {user ? (
//               <>
//                   <p>{user.name}さんのプラン一覧</ p>

//                   {planlist.map((plandata) => {

//                   return(
//                       <>
//                       {plandata.userId===user._id ? (
//                           <div key={plandata.title}>
//                           <Link href="./" >
//                               <a><Post plan={plandata}/></a>
//                           </Link>
//                           </div>):(
//                               <></>
//                           )}   
//                       </>
                      
//                   )
//                   })}
//               </>
//           ):(
//               <p>ログインしてください</p>
//           )}
//       </div>
//   </>
// );