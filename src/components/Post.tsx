import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'

interface Author {
  avatarUrl: string,
  name: string,
  role: string
}

interface Content {
  type: string,
  text: string,
  link?:string
}

interface PostProps {
  post: {
    author: Author,
    content: Content[],
    publishedAt: Date
  }
}

export function Post({post:{author,content,publishedAt}}: PostProps){
  const [comments, setComments] = useState<string[]>([])
  const [comment, setComment] = useState("")
  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale:ptBR, addSuffix:true})

  function handleCreateNewComment(e: FormEvent){
    e.preventDefault()
    if (comment !== "") {
      setComments( state => [...state, comment])
      setComment('')
    }
  }

  function handleCommentInput(e: any){
    e.currentTarget.setCustomValidity("")
    const commentInput = e.currentTarget.value
    setComment(commentInput)
  }

  function deleteComment(i : number) {
    setComments( state => [...state.splice(i,1)])
  }

  function handleInvalid(e: any){
    e.currentTarget.setCustomValidity("Este campo é obrigatório")
  }

  let isInputEmpty = comment.length===0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line: any, i:any) => {
          if (line.type === 'p') {
            return (<p key={i + publishedAt}>{line.text}</p>)
          } else if (line.type === 'a') {
            return (
              <p key={i + publishedAt}>
                <a href={line.link} target="_blank">
                {line.text}
                </a>
              </p>
            )
          } else {
            return (
              <p key={i + publishedAt} className={styles.hashtags}>
                <a href={line.link}>
                {line.text}
                </a>
              </p>
            )
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe seu comentário' 
          value={comment} 
          onChange={handleCommentInput} 
          required
          onInvalid={handleInvalid}
        > 
        </textarea>
        <footer>
          <button type="submit" disabled={isInputEmpty}>Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment,i) => <Comment key={i} content={comment} onDeleteComment={deleteComment} index={i}/>)}
      </div>
    </article>
  )
}