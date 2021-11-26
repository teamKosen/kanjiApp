import { NextPage } from "next";
import { Chat } from "../../components/chat/chat";


type Props = {
    userPlandatas: JSON;
    userPlandatas_detail: JSON;
}

const Page:NextPage<Props> = (props) => {
    const { userPlandatas , userPlandatas_detail} = props;
    return (
        <div style={{paddingTop: "76px"}}>
            <Chat userPlandatas={userPlandatas} userPlandatas_detail={userPlandatas_detail}/>
        </div>
    )
}

export const getStaticPaths = async () =>{
    // const res = await fetch("http://localhost:3000/api/offerplan/offerplanalldatas");
    const res = await fetch("http://localhost:3000/api/userplandatas");
    const json = await res.json();

    const userplanId = json.map((userplan) => ({
         params: { id: `${userplan._id}` } 
    }))
    return {
        paths: userplanId,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const { id } = context.params
    const res = await fetch("http://localhost:3000/api/offerplan/offerplandatas?userPlanId=" + id);
    const json = await res.json();
    //追記
    const res_up = await fetch("http://localhost:3000/api/userplandatas_kanji?userPlanId=" + id);
    const json_up = await res_up.json();

    return {
        props: {
            userPlandatas: json,
            userPlandatas_detail: json_up,
        }
    }
}



export default Page;