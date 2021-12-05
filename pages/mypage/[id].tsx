import { NextPage } from "next";
import { ObjectId } from 'mongodb';

import { OfferProcessKanji } from '../../components/mypage/offer-process-kanji/offer-process-kanji';
import { OfferProcessShop } from "../../components/mypage/offer-process-shop/offer-process-shop";
import { useUser } from '../../lib/hooks';

type Props = {
    offerplandetail: {
        _id: ObjectId;
        budget: number;
        numberOfPeople: number;
        shopname: string;
        place: string;
        shopId: string;
        tel: string;
        URL: string;
        shopEmail: string;
        comment: string;
        offerState: number;
        openTime: string;
        closeTime: string;
    }
}

const Page:NextPage<Props> = (props) => {
    const { offerplandetail } = props;
    const [user, { mutate }] = useUser();

    return (
        <div style={{paddingTop: "76px"}}>
            { user ? (
                user.userType === "幹事" ? (
                    <OfferProcessKanji offerplandetail={offerplandetail}/>
                ) : (
                    <OfferProcessShop offerplandetail={offerplandetail}/>
                )
            ):(
                <div>ログインしてください</div>
            )}
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