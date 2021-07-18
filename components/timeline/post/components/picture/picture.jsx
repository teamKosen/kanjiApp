import style from './picture.module.scss'

export const Picture = (props) => {
    const { pictures } = props;
    return (
        <div className={style.imgPosition}>
            {pictures.map((picture)=>(
                <img src={picture.picturePath} className={style.imgSize}/>
            ))}
        </div>
    );
};