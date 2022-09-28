import Head from 'next/head'
import type { NextPage } from 'next'
import Layout from '~/components/templates/Layout'

const Index: NextPage = () => {
  return (
    <Layout metaTitle="Draggable Task">
      <h1>This is the task</h1>
    </Layout>
  )
}

export default Index
