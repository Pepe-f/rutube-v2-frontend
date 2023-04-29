import { FC } from 'react'

import Catalog from '@/components/Catalog/Catalog'
import Layout from '@/components/Layout/Layout'
import Loader from '@/components/UI/Loader/Loader'

import { apiRtk } from '@/store/api/api'
import { videoApi } from '@/store/api/video.api'

const Studio: FC = () => {
  const { data, isLoading } = apiRtk.useGetProfileQuery(null)
  const [removeVideo] = videoApi.useDeleteVideoMutation()

  const videos = data?.videos

  return (
    <Layout title='Rutube 2.0 Studio'>
      <div>
        {isLoading ? (
          <Loader count={5} />
        ) : videos?.length ? (
          <Catalog
            newVideos={videos}
            removeHandler={removeVideo}
            isUpdateLink
          />
        ) : (
          <p>Видео не найдено!</p>
        )}
      </div>
    </Layout>
  )
}

export default Studio
