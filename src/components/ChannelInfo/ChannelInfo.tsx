import { FC } from 'react'

import UserAvatar from '@/components/UserAvatar/UserAvatar'

import { IUser } from '@/types/user.interface'

import { formatViewsNumber } from '@/utils/formatViewsNumber'

import styles from './ChannelInfo.module.scss'

interface ChannelInfoProps {
  channel: IUser
  message?: string
}

const ChannelInfo: FC<ChannelInfoProps> = ({ channel, message }) => {
  return (
    <div className={styles['profile-info']}>
      {channel.avatarPath && <UserAvatar user={channel} />}
      <div>
        <div className={styles.name}>{channel.name}</div>
        <div className={styles['subscribers-count']}>
          {message ||
            formatViewsNumber(channel.subscribersCount) + ' подписчиков'}
        </div>
      </div>
    </div>
  )
}

export default ChannelInfo
