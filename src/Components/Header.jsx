'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  FilmIcon,
  SparklesIcon,
  FaceSmileIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Action', description: 'High-octane scenes, stunts, and adrenaline-packed adventures.', href: '#', icon: HeartIcon },
  { name: 'Comedy', description: 'Laugh-out-loud stories and hilarious characters.', href: '#', icon: FilmIcon },
  { name: 'Romance', description: 'Heartwarming tales of love, passion, and relationships.', href: '#', icon: SparklesIcon },
  { name: 'Fantasy', description: 'Magical worlds, epic quests, and mythical creatures.', href: '#', icon: FaceSmileIcon },
  { name: 'Documentary', description: 'Real stories, real people — explore the world through film.', href: '#', icon: GlobeAltIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div>
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link to="/" className="text-sm font-semibold text-white">
              Home
            </Link>
            <Link to='/top-rated' className="text-sm font-semibold text-white">
              Top Movie
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to='/login' className="text-sm font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-900 p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to="/" className="block rounded-lg py-2 px-3 text-base font-semibold text-white hover:bg-gray-800">
                    Home
                  </Link>
                  <Link to="/top-rated" className="block rounded-lg py-2 px-3 text-base font-semibold text-white hover:bg-gray-800">
                    Top Movie
                  </Link>
                </div>
                <div className="py-6">
                  <Link to="/login" className="block rounded-lg py-2.5 px-3 text-base font-semibold text-white hover:bg-gray-800">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </div>
  )
}