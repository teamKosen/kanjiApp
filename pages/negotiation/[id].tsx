import { NextPage } from "next";
import { Chat } from "../../components/chat/chat";

const Page:NextPage = () => {

    return (
        <div style={{paddingTop: "76px"}}>
            <Chat />
        </div>
    )
}

export const getStaticPaths = async () =>{
    const res = await fetch("http://localhost:3000/api/offerplan/offerplandatas");
    const json = await res.json();

    const offerplanId = json.map((offerplan) => ({
         params: { id: `${offerplan._id}` } 
    }))
    console.log(offerplanId);
    return {
        paths: offerplanId,
        fallback: false
    }
}

export default Page;