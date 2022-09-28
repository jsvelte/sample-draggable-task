import type { NextPage } from 'next'

import Layout from '~/components/templates/Layout'
import BoardHeader from '~/components/organisms/BoardHeader'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout metaTitle="Draggable Task">
      <div className="flex h-screen flex-col p-10">
        {/* Board Header */}
        <BoardHeader />
      </div>
    </Layout>
  )
}

export default Index
