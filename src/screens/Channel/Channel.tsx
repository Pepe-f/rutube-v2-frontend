import { FC } from 'react'

import Catalog from '@/components/Catalog/Catalog'
import ChannelInfo from '@/components/ChannelInfo/ChannelInfo'
import Layout from '@/components/Layout/Layout'
import SubscribeButton from '@/components/UI/SubscribeButton/SubscribeButton'

import { IUser } from '@/types/user.interface'

export interface IChannel {
  channel: IUser
}

const Channel: FC<IChannel> = ({ channel }) => {
  return (
    <Layout title={channel.name}>
      <div className='mb-10 w-1/3'>
        <div className='flex items-center gap-10'>
          <ChannelInfo channel={channel} />
          <SubscribeButton channelIdForSubscribe={channel.id} />
        </div>
        <article className='text-gray-500 mt-3'>{channel.description}</article>
      </div>
      <Catalog newVideos={channel.videos || []} />
    </Layout>
  )
}

export default Channel
