import { FC } from 'react'

import AddComment from '@/components/Comments/AddComment'
import CommentItem from '@/components/Comments/CommentItem'

import { IComment } from '@/types/comment.interface'

import { useAuth } from '@/hooks/useAuth'

import styles from './Comments.module.scss'

interface CommentsProps {
  comments: IComment[]
  videoId: number
}

const Comments: FC<CommentsProps> = ({ comments, videoId }) => {
  const { user } = useAuth()

  return (
    <div className={styles.comments}>
      <h2>Комментарии</h2>
      <div className={styles.line} />
      {comments.length ? (
        <div className={styles.grid}>
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <p>Комментариев не найдено!</p>
      )}
      <div className={styles.bottomForm}>
        {user && <AddComment videoId={videoId} />}
      </div>
    </div>
  )
}

export default Comments
