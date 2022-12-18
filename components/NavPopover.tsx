'use client'

import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

const navigation = [
  { name: 'Changelog', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'News', href: '#' },
]

export function NavPopover() {
  return (
    <Popover as="header" className="relative">
      <div className="bg-warm-gray-50">
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 xl:px-8"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between lg:w-auto">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset bg-warm-gray-50 text-warm-gray-400 hover:bg-warm-gray-100 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-10 lg:ml-10 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-warm-gray-500 hover:text-warm-gray-900 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <a
              href="#"
              className="bg-warm-gray-100 text-warm-gray-900 hover:bg-warm-gray-200 rounded-md border border-transparent py-2 px-6 text-base font-medium"
            >
              Login
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="text-warm-gray-400 hover:bg-warm-gray-100 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-warm-gray-900 hover:bg-warm-gray-50 block rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block w-full rounded-md border border-transparent bg-teal-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-teal-600"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
