import style from './user-comment.module.scss';

export const UserComment = (props) => {
    const {comment}=props;
    return (
        <div className={style.userComment}>
            <h2 className={style.title}>利用者のコメント</h2>
            <div className={style.comment}>
            {comment.map((commentdata) =>{ 
                /* const cmnt=commentlist.find((v)=>v._id==shopdata._id); */
                return  <div key={commentdata.name}>
                    <h3><u >{commentdata.name}さんのコメント</u></h3>
                    <p>{commentdata.comment}</p>
                </div>
                 })}
                {/* <div>
                    <h3>{comment}</h3>
                    <p>刺身めっちゃ美味しかったです！多分また来ます</p>
                </div>
                <div>
                    <h3>七氏さんのコメント</h3>
                    <p>焼き鳥美味しかったです！機会があればまた来ます。サービスはいまいちでした</p>
                </div> */}
            </div>
        </div>
    );
};