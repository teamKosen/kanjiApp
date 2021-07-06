import style from './post.module.scss'

export const Post = (props) => {
    const { name , genre, purpose} = props;
    return(
        <div>
            <h2>店名:{name}</h2>
            <div style={{display: 'flex'}}>
                <p>#{genre}</p>
                <p>#{purpose}</p>
            </div>
            <div className={style.imgPosition}>
                <img src="/asset/ebitiri.jpeg" className={style.imgSize} alt = "ebitiri"/>
                <img src="/asset/tenshinhan.jpeg" className={style.imgSize} alt = "tensinhan"/>
                <img src="/asset/seiro.jpeg" className={style.imgSize} alt = "seiro"/>  
            </div>
        </div>
        );
};