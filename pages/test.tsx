import { Signin } from "../components/signin/signin";
import { Create_Plan } from "../components/create_plan/create_plan"
import { NextPage } from "next";


const Page:NextPage = () => {
    return (
        <div style={{paddingTop: "50px"}}>
            <Signin/>
            <Create_Plan/>
        </div>
    );
};

export default Page;
