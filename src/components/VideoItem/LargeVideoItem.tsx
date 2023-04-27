import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import UserAvatar from '@/components/UserAvatar/UserAvatar'
import VideoDuration from '@/components/VideoItem/VideoDuration'
import VideoStatistics from '@/components/VideoItem/VideoStatistics'

import { IVideo } from '@/types/video.interface'

import styles from './VideoItem.module.scss'

const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
  return (
    <div className={cn(styles['video-item'], styles['large-item'])}>
      <div className={styles.thumbnail}>
        {video.thumbnailPath && (
          <Image
            src={video.thumbnailPath}
            alt={video.name}
            fill
            className={styles['bg-image']}
            priority
          />
        )}
        <VideoDuration isBottom duration={video.duration} />
        <div className={styles.information}>
          <Link href={`/v/${video.id}`} className={styles.name}>
            {video.name}
          </Link>
          {video.user?.avatarPath && <UserAvatar user={video.user} isWhite />}
          <div className={styles.author}>{video.user?.name}</div>
          <VideoStatistics views={video.views} createdAt={video.createdAt} />
        </div>
      </div>
    </div>
  )
}

export default LargeVideoItem
