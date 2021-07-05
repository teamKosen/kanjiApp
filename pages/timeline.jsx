import fetch from 'isomorphic-unfetch'

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/shopdatas");
    const json = await res.json();
    return {
      props: {
        shopdatas: json,
      },
    };
}

const Timeline = ({shopdatas}) => {
    console.log(shopdatas);
    const shoplist = JSON.parse(JSON.stringify(shopdatas));
    console.log(shoplist);
    return (
        <div>
            <h1>店一覧</h1>
            {/* <div>{shoplist[0]}</div> */}
            {shoplist.map((shopdata) => (
                <div key={shopdata.name}>
                    <h2>店名:{shopdata.name}</h2>
                    <div style={{display: 'flex'}}>
                        <p>#{shopdata.tag.genre}</p>
                        <p>#{shopdata.tag.purpose}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline;