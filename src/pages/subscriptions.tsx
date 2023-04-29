import Layout from '@/components/Layout/Layout'
import Menu from '@/components/Menu/Menu'

import { NextPageAuth } from '@/providers/private-route.interface'

import { apiRtk } from '@/store/api/api'

const SubscriptionsPage: NextPageAuth = () => {
  const { data } = apiRtk.useGetProfileQuery(null)

  return (
    <Layout title='Мои подписки'>
      <Menu
        title='Мои подписки'
        items={
          data?.subscriptions.map(({ toChannel }) => ({
            image: toChannel.avatarPath,
            title: toChannel.name,
            link: `/c/${toChannel.id}`
          })) || []
        }
      />
    </Layout>
  )
}

SubscriptionsPage.isOnlyUser = true

export default SubscriptionsPage
