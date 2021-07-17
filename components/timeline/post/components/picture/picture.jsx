export const Picture = (props) => {
    const { shopid, pictures } = props;
    return (
        <div>
            {pictures.map((picture)=>(
                {picture}
            ))}
        </div>
    );
};