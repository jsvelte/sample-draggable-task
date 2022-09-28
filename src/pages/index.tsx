import type { NextPage } from 'next'
import Layout from '~/components/templates/Layout'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout metaTitle="Draggable Task">
      <div className="flex h-screen flex-col p-10"></div>
    </Layout>
  )
}

export default Index
