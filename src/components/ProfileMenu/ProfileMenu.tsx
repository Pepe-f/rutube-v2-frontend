import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { apiRtk } from '@/store/api/api'

import styles from './ProfileMenu.module.scss'

const ProfileMenu: FC = () => {
  const { user } = useAuth()

  const { data, isLoading } = apiRtk.useGetProfileQuery(null, {
    skip: !user
  })

  if (isLoading) {
    return null
  }

  return <div>{data?.name}</div>
}

export default ProfileMenu
