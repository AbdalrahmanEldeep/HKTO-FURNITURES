import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styled from 'styled-components'
import Logo from "../../public/assets/Logo.svg";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Products', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Shop', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

const Container = styled.div`
    margin: 0 auto;
`
const SearchIcon = styled.div`
   width: 42px;
   height: 42px;
   background-color: #FB2E86;
   border:1px solid #FB2E86;
   transition: all .4s ease;
   &:hover{
    background-color: transparent;
    color: #FB2E86;
   }
   border-radius: 5px;
   line-height: 40px;
   text-align: center;
   color: #fff;
   cursor: pointer;
`
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export  const  Header = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800 shadow">
        {({ open }) => (
        <>
        <Container className=' md:w-4/5 w-full  '>
          <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  gap-24 pl-20 flex-1  items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6  lg:block">
                  <div className="flex  space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-main hover:text-dark' : 'text-gray-300 hover: hover:text-main',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                 <SearchIcon>
                    <SearchRoundedIcon fontSize='medium'/>
                 </SearchIcon>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-main text-white' : 'text-gray-300 hover:bg-main hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Container>
        </>
      )}
    </Disclosure>
  )
}
