import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

import { IUser } from '@/types/user.interface'

import styles from './UserAvatar.module.scss'

interface UserAvatarProps {
  user: IUser
  isWhite?: boolean
}

const UserAvatar: FC<UserAvatarProps> = ({ user, isWhite }) => {
  return (
    <Link href={`/c/${user.id}`}>
      <span className={cn(styles.avatar, { [styles.white]: isWhite })}>
        <Image
          width={45}
          height={45}
          src={user.avatarPath || ''}
          alt={user.name}
        />
        {user.isVerified && (
          <span className={styles.isVerified}>
            <IoIosCheckmarkCircle />
          </span>
        )}
      </span>
    </Link>
  )
}

export default UserAvatar
