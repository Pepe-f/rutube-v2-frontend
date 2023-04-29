import dayjs from 'dayjs'
import { FC } from 'react'
import { HiCalendar } from 'react-icons/hi'
import { IoMdEye } from 'react-icons/io'
import { RiHeart2Fill } from 'react-icons/ri'

import ChannelInfo from '@/components/ChannelInfo/ChannelInfo'
import SubscribeButton from '@/components/UI/SubscribeButton/SubscribeButton'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

import { formatViewsNumber } from '@/utils/formatViewsNumber'

import styles from './VideoDetail.module.scss'

interface VideoDetailProps {
  video: IVideo
  channel: IUser
}

const VideoDetail: FC<VideoDetailProps> = ({ channel, video }) => {
  const [updateLike, { isLoading: isLikeLoading }] =
    videoApi.useUpdateLikesMutation()

  return (
    <div className={styles.detail}>
      <div>
        <ChannelInfo channel={channel} />
        <h1>{video.name}</h1>
        <article className={styles.article}>{video.description}</article>
      </div>
      <div className='pt-2'>
        <div className={styles['wrapper-button']}>
          {video.user?.id && (
            <SubscribeButton channelIdForSubscribe={video.user.id} />
          )}
          <button
            className={styles.likeButton}
            disabled={isLikeLoading}
            onClick={() => updateLike(video.id)}
          >
            <RiHeart2Fill />
            Лайк
          </button>
        </div>
        <div className={styles['number-info']}>
          <div>
            <IoMdEye />
            <span> {formatViewsNumber(video.views)} views</span>
          </div>
          <div>
            <RiHeart2Fill />
            <span> {formatViewsNumber(video.likes)} likes</span>
          </div>
          <div>
            <HiCalendar />
            <span> {dayjs(new Date(video.createdAt)).fromNow()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
