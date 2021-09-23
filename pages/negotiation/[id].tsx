import { NextPage } from "next";
import { Chat } from "../../components/chat/chat";


type Props = {
    userPlandatas: JSON;
}

const Page:NextPage<Props> = (props) => {
    const { userPlandatas } = props;
    return (
        <div style={{paddingTop: "76px"}}>
            <Chat userPlandatas={userPlandatas}/>
        </div>
    )
}

export const getStaticPaths = async () =>{
    const res = await fetch("http://localhost:3000/api/offerplan/offerplanalldatas");
    const json = await res.json();

    const offerplanId = json.map((offerplan) => ({
         params: { id: `${offerplan.userPlanId}` } 
    }))
    return {
        paths: offerplanId,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const { id } = context.params
    const res = await fetch("http://localhost:3000/api/offerplan/offerplandatas?userPlanId=" + id);
    const json = await res.json();
    return {
        props: {
            userPlandatas: json,
        }
    }
}



export default Page;