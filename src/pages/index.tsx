import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { DotsVerticalIcon, PlusCircleIcon } from '@heroicons/react/outline'

import Layout from '~/components/templates/Layout'
import CardItem from '~/components/organisms/CardItem'
import BoardData from '~/shared/jsons/board-data.json'
import BoardHeader from '~/components/organisms/BoardHeader'

function createGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const Index: NextPage = (): JSX.Element => {
  const [ready, setReady] = useState(false)
  const [boardData, setBoardData] = useState(BoardData)
  const [showForm, setShowForm] = useState(false)
  const [selectedBoard, setSelectedBoard] = useState(0)

  useEffect(() => {
    if (process.browser) {
      setReady(true)
    }
  }, [])

  const onDragEnd = (re: any) => {
    if (!re.destination) return
    let newBoardData = boardData
    var dragItem = newBoardData[parseInt(re.source.droppableId)].items[re.source.index]
    newBoardData[parseInt(re.source.droppableId)].items.splice(re.source.index, 1)
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    )
    setBoardData(newBoardData)
  }

  const onTextAreaKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      //Enter
      const val = e.target.value
      if (val.length === 0) {
        setShowForm(false)
      } else {
        const boardId = e.target.attributes['data-id'].value
        const item: any = {
          id: createGuidId(),
          title: val,
          priority: 0,
          chat: 0,
          attachment: 0,
          assignees: []
        }
        let newBoardData = boardData
        newBoardData[boardId].items.push(item)
        setBoardData(newBoardData)
        setShowForm(false)
        e.target.value = ''
      }
    }
  }

  return (
    <Layout metaTitle="Draggable Task">
      <div className="flex h-screen flex-col p-10">
        {/* Board Header */}
        <BoardHeader />

        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="my-5 grid grid-cols-4 gap-5">
              {boardData.map((board, bIndex) => {
                return (
                  <div key={board.name}>
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          <div
                            className={`relative flex flex-col
                            overflow-hidden rounded-md bg-gray-100 shadow-md
                            ${snapshot.isDraggingOver && 'bg-green-100'}`}
                          >
                            <span
                              className="absolute inset-x-0 top-0 h-1 w-full
                          bg-gradient-to-r from-pink-700 to-red-200"
                            ></span>
                            <h4 className=" mb-2 flex items-center justify-between p-3">
                              <span className="text-2xl text-gray-600">{board.name}</span>
                              <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
                            </h4>

                            <div
                              className="h-auto overflow-y-auto overflow-x-hidden"
                              style={{ maxHeight: 'calc(100vh - 290px)' }}
                            >
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  return (
                                    <CardItem
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className="m-3"
                                    />
                                  )
                                })}
                              {provided.placeholder}
                            </div>

                            {showForm && selectedBoard === bIndex ? (
                              <div className="p-3">
                                <textarea
                                  className="w-full rounded border-gray-300 focus:ring-purple-400"
                                  rows={3}
                                  placeholder="Task info"
                                  data-id={bIndex}
                                  onKeyDown={(e) => onTextAreaKeyPress(e)}
                                />
                              </div>
                            ) : (
                              <button
                                className="my-3 flex items-center justify-center space-x-2 text-lg"
                                onClick={() => {
                                  setSelectedBoard(bIndex)
                                  setShowForm(true)
                                }}
                              >
                                <span>Add task</span>
                                <PlusCircleIcon className="h-5 w-5 text-gray-500" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </div>
                )
              })}
            </div>
          </DragDropContext>
        )}
      </div>
    </Layout>
  )
}

export default Index
