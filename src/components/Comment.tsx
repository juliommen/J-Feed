import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string,
  onDeleteComment: (i: number)=> void,
  index: number
}

export function Comment({content, onDeleteComment, index} : CommentProps){
  const [likes, setLikes] = useState(0)
  
  function handleDelete(){
    onDeleteComment(index)
  }

  function handleLike() {
    setLikes( state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/juliommen.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Júlio Mendonça</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-11-01 08:13:30'>
                Publicado há 1h
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDelete}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLike}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}