import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={style.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/AmauriBlanco.png"
            />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Amauri Blanco</strong>
                            <time
                                title="11 de Maio às 8:00"
                                dateTime="2022-05-11 08:00:00"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
