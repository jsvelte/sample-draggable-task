import Head from "next/head"
import type { NextPage } from "next"

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Draggable Task</title>
      </Head>
      <div className="flex h-screen min-h-screen items-center justify-center bg-indigo-100">
        <h1 className="text-2xl font-bold text-indigo-500 text-center">
          {" "}
          Sample Draggable Task
        </h1>
      </div>
    </>
  )
}

export default Index
