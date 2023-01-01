'use client'

import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment } from 'react'
import { Container } from './Container'

function NavItem({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="text-warm-gray-500 hover:text-warm-gray-900 text-base font-medium"
    >
      {children}
    </Link>
  )
}

function NavItems() {
  return (
    <>
      <NavItem href="/bars">Bars</NavItem>
      {/* <NavItem href="/makers">Makers</NavItem>
      <NavItem href="/origins">Origins</NavItem>
      <NavItem href="/favorites">Favorites</NavItem>
      <NavItem href="/patreon">Patreon</NavItem> */}
    </>
  )
}

export function Header() {
  return (
    <Popover as="header" className="relative">
      <Container
        as="nav"
        aria-label="Global"
        className="relative flex h-6 items-center justify-between"
      >
        <div className="flex flex-1 items-center">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="#">The Chocolate Bar Project</Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="focus-ring-inset bg-warm-gray-50 text-warm-gray-400 hover:bg-warm-gray-100 inline-flex items-center justify-center rounded-md  focus:outline-none focus:ring-2 focus:ring-teal-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  className="h-3 w-3"
                  style={{ width: 24, height: 24 }}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <NavItems />
        </div>
      </Container>

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
          className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-2 pt-1">
              <div>The Chocolate Bar Project</div>
              <div className="-mr-2 -mt-1">
                <Popover.Button className="text-warm-gray-400 hover:bg-warm-gray-100 inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-2 w-2" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="flex flex-col p-2">
              <NavItems />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
