import React, { FC } from 'react'
import { clxs } from '~/helpers/classNames'

import { links } from '~/shared/jsons/SidebarLinks'

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
        {links.map(({ name, Icon }, i) => (
          <li
            key={i}
            className={clxs(
              'flex flex-col items-center justify-center py-7 text-gray-500',
              name === 'Boards' ? 'border-l-4 border-purple-500 text-purple-500' : '',
              name === 'Settings' ? 'mt-auto mb-16' : ''
            )}
          >
            <Icon className="h-7 w-7" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
