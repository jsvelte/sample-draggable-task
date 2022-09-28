import React, { FC } from 'react'
import {
  UserGroupIcon,
  ServerIcon,
  CalendarIcon,
  ChartSquareBarIcon,
  CogIcon
} from '@heroicons/react/outline'

type Props = {}

const SideBar: FC<Props> = (props): JSX.Element => {
  return (
    <div className="fixed inset-y-0 left-0 w-40 bg-white">
      <h1
        className="flex h-16 items-center justify-center
            bg-purple-600 text-2xl font-bold text-white"
      >
        hussle
      </h1>

      <ul className="flex h-full flex-col text-lg">
        <li
          className="flex flex-col items-center justify-center
                py-7 text-gray-500"
        >
          <UserGroupIcon className="h-7 w-7" />
          Manage
        </li>
        <li
          className="flex flex-col items-center justify-center
                border-l-4 border-purple-500 py-7 font-bold
                text-purple-500"
        >
          <ServerIcon className="h-7 w-7 text-purple-500" />
          Boards
        </li>
        <li
          className="flex flex-col items-center justify-center
                py-7 text-gray-500"
        >
          <CalendarIcon className="h-7 w-7" />
          Schedule
        </li>
        <li
          className="flex flex-col items-center justify-center
                py-7 text-gray-500"
        >
          <ChartSquareBarIcon className="h-7 w-7" />
          Report
        </li>

        <li
          className="mt-auto mb-16 flex flex-col
                items-center justify-center py-7 text-gray-500"
        >
          <CogIcon className="h-7 w-7" />
          Settings
        </li>
      </ul>
    </div>
  )
}

export default SideBar
