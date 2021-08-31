import { Signup } from "../components/signup/signup";
import { NextPage } from "next";

const Page:NextPage = () => {
    return (
        <div style={{paddingTop: "50px"}}>
            <Signup />
        </div>
    );
};

export default Page;