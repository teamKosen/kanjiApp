import { NextPage } from "next";
import { ObjectId } from 'mongodb';

type Props = {
    offerplandetail: {
        _id: ObjectId;
        budjet: number;
        shopname: string;
        place: string;
        shopId: string;
        tel: string;
        URL: string;
        shopEmail: string;
    }
}

const Page:NextPage<Props> = (props) => {
    const { offerplandetail } = props;
    return (
        <div style={{paddingTop: "76px"}}>
            <h1>{offerplandetail.shopname}</h1>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/offerplan/offerplanalldatas");
    const json = await res.json();

    const offerIds = json.map((offer) => ({
        params: { id: `${offer._id}`}
    }))

    return {
        paths: offerIds,
        fallback: true,
    }
}

export const getStaticProps = async (path) => {
    const { id } = path.params;
    const res = await fetch("http://localhost:3000/api/offerplan/offerplandetail?id=" + id);
    const json = await res.json();
    return {
        props: {
            offerplandetail: json,
        }
    }
}


export default Page;