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
    return {
        props: {
            userPlandatas: json,
        }
    }
}



export default Page;