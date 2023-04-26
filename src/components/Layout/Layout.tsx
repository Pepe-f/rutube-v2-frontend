import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

import styles from './Layout.module.scss'

interface LayoutProps {
  title: string
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.content}>
          <Header />
          <div className={styles.wrapper}>{children}</div>
        </section>
      </main>
    </>
  )
}

export default Layout
