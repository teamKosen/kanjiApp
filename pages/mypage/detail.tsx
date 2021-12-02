import { NextPage } from "next";
import { Detail } from "../../components/mypage/detail/detail";

type Props = {
    offerdatas: JSON;
};

export async function getStaticProps() {
    
    const res = await fetch("http://localhost:3000/api/offerplan/offerplanalldatas");
    const json = await res.json();

    return {
      props: {
        offerdatas: json,
      },
    };
}

const Page:NextPage<Props> = (props) => {
    const { offerdatas } = props;

    return (
        <div style={{paddingTop: "76px"}}>
            <Detail offerdatas={offerdatas}/>
        </div>
    )
}

export default Page;