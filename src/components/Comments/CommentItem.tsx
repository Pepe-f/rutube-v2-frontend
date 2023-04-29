import { FC } from 'react'

import ChannelInfo from '@/components/ChannelInfo/ChannelInfo'

import { IComment } from '@/types/comment.interface'

import styles from './Comments.module.scss'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
  return (
    <div className={styles.commentItem}>
      <ChannelInfo channel={comment.user} message={comment.message} />
    </div>
  )
}

export default CommentItem
