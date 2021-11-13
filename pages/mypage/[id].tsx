import { NextPage } from "next";

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/offerplanalldatas");
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
}

const Page:NextPage = () => {
    return (
        <div style={{paddingTop: "76px"}}>
            <h1>っっっっっっp</h1>
        </div>
    )
}

export default Page;