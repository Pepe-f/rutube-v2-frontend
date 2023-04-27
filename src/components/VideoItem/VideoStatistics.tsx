import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'

import { formatViewsNumber } from '@/utils/formatViewsNumber'

import styles from './VideoItem.module.scss'

interface VideoStatisticsProps {
  views: number
  createdAt?: string
}

dayjs.extend(relativeTime)

const VideoStatistics: FC<VideoStatisticsProps> = ({ views, createdAt }) => {
  return (
    <div className={styles['number-info']}>
      <div className={styles.views}>{formatViewsNumber(views)} просмотров</div>
      {!!createdAt && (
        <>
          <div className='mx-2'>.</div>
          <div className={styles.date}>
            {dayjs(new Date(createdAt)).fromNow()}
          </div>
        </>
      )}
    </div>
  )
}

export default VideoStatistics
