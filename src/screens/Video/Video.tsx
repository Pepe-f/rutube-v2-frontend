import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import Comments from '@/components/Comments/Comments'
import Layout from '@/components/Layout/Layout'
import VideoDetail from '@/components/VideoDetail/VideoDetail'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

import styles from './Video.module.scss'

interface IVideoPage {
  video: IVideo
}

const Video: FC = () => {
  const { query } = useRouter()

  const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
    Number(query.id),
    {
      skip: !query?.id
    }
  )

  const [updateViews] = videoApi.useUpdateVideoMutation()

  useEffect(() => {
    if (query.id) {
      updateViews(Number(query.id))
    }
  }, [query.id])

  return (
    <Layout title={video.name}>
      <div className={styles.layout}>
        <VideoPlayer videoPath={video.videoPath} />
        <Comments videoId={video.id} comments={video.comments || []} />
      </div>
      <div className={cn(styles.layout, 'mt-7')}>
        <VideoDetail video={video} channel={video.user || ({} as IUser)} />
        <div></div>
      </div>
    </Layout>
  )
}

export default Video
