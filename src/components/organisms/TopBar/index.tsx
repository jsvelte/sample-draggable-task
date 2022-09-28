import React, { FC } from 'react'
import { SearchIcon, AtSymbolIcon, BellIcon } from '@heroicons/react/outline'
import Image from 'next/image'

type Props = {}

const TopBar: FC<Props> = (props): JSX.Element => {
  return (
    <div
      className="fixed flex h-16 w-full items-center
        justify-between bg-gradient-to-r from-purple-400 to-blue-500 pl-40 pr-5"
    >
      <div className="flex items-center px-5">
        <SearchIcon className="h-5 w-5 text-white" />
        <input
          type="text"
          placeholder="Search for tasks ..."
          className=" border-0 bg-transparent text-lg text-white
                placeholder-gray-200 outline-none focus:ring-0"
        />
      </div>
      <div className="flex space-x-6">
        <AtSymbolIcon className="h-7 w-7 text-white" />
        <BellIcon className="h-7 w-7 text-white" />
        <div className="flex items-center text-white">
          <h3 className="mr-3 font-bold">Joshua G.</h3>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            src="https://avatars.githubusercontent.com/u/38458781?v=4"
            width={36}
            height={36}
            objectFit="cover"
            className=" rounded-full "
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar
