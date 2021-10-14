
const Shopdetail = ({shopdata}) => {
    return (
        <div style={{paddingTop: "100px"}}>
            <div>{shopdata.name}</div>
            <h1></h1>
        </div>
    );
};

export const getStaticPaths = async () =>{
    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();

    const shopdatasId = json.map((shopdata) => ({
         params: { id: `${shopdata._id}` } 
    }))
    console.log(shopdatasId);
    return {
        paths: shopdatasId,
        fallback: false
    }
}

export const getStaticProps = async context => {
    const { id } = context.params
    const res = await fetch("http://localhost:3000/api/shopdetail?id=" + id);
    const json = await res.json();
    return {
      props: {
        shopdata: json,
      },
    };
}


export default Shopdetail;