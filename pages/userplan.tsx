import { Userplan } from "../components/userplan/userplan";
import { NextPage } from "next";
import fetch from 'isomorphic-unfetch'
import { useUser } from "../lib/hooks"

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
    const [user, { mutate }] = useUser();

    return (
        <>
            <div style={{paddingTop: "100px"}}>
                {user ? (
                    <>
                        <p>{user.name}さんのプラン一覧</ p>

                        {planlist.map((plandata) => {
 
                        return(
                            <>
                            {plandata.userId===user._id ? (
                                <div key={plandata.title}>
                                <Userplan
                                    plan={plandata}
                                />
                                </div>):(
                                    <></>
                                )}   
                            </>
                            
                        )
                        })}
                    </>
                ):(
                    <p>ログインしてください</p>
                )}
            </div>
        </>
    );
};

export default Page;