import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

import TopBar from '~/components/organisms/TopBar'
import SideBar from '~/components/organisms/Sidebar'

type Props = {
  children: ReactNode
  metaTitle: string
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>React Draggable Task</title>
      </Head>
      <div className="h-screen min-h-screen  min-w-full overflow-hidden bg-blue-100">
        <TopBar />
        <SideBar />
        <main className="pl-40 pt-16">{children}</main>
      </div>
    </>
  )
}

export default Layout
