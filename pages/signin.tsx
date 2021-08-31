import { Signin } from "../components/signin/signin";
import { NextPage } from "next";

const Page:NextPage = () => {
    return (
        <div style={{paddingTop: "50px"}}>
            <Signin />
        </div>
    );
};

export default Page;