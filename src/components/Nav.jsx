import styled from 'styled-components'
import React from 'react'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import { Drop } from './Drop';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const Container = styled.header`
  width: 80%;
  margin: 0 auto;
`
const Info = styled.div`
    display: flex;
    flex: 1;
    gap: 30px;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
`
const Links = styled.ul`
    display: flex;
    flex: 1;
    gap: 30px;
    cursor: pointer;
`
const drop__1 = [
    {
        id: 1,
        name: 'English',
    },
    {
        id: 2,
        name: 'Arabic',
    }
]
const drop__2 = [
    {
        id: 1,
        name: 'USA',
    },
    {
        id: 2,
        name: 'EG',
    }
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Nav = () => {
  return (
    <Disclosure as="nav" className="bg-main">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex flex-row-reverse h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex  items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-between">    
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <Links className='justify-center items-center'>
                        <li><Drop data={drop__1}/></li>
                        <li><Drop data={drop__2}/></li>
                        <li className='flex  gap-2 text-white'>
                          <Link to="/login">
                            Login
                            <PersonRoundedIcon fontSize='small'/>
                         </Link>
                        </li>
                        <li className='flex  gap-2 text-white'>
                            Wishlist
                            <FavoriteRoundedIcon fontSize='small'/>
                        </li>
                    </Links>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
              <div className=' sm:flex-2 w-full  lg:flex-1 md:flex hidden'>
                    <Info>
                        <div className="email flex gap-3 items-center text-sm">
                            <EmailRoundedIcon fontSize='small'/>
                            Black-Wolf@gmail.com
                        </div>
                        <div className="phone flex text-ex md:text-sm  gap-3 items-center ">
                            <PhoneInTalkRoundedIcon fontSize='small'/>
                            Black-Wolf@gmail.com
                        </div>
                    </Info>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
                <Links className='flex-col items-start justify-start md:justify-center md:items-center md:flex-row'>
                    <li><Drop data={drop__1}/></li>
                    <li><Drop data={drop__2}/></li>
                    <li className='md:py-0 md:pl-0 flex gap-2 text-white py-6 pl-6'>
                      <Link to="/login">
                        Login
                        <PersonRoundedIcon fontSize='small'/>
                      </Link>
                    </li>
                    <li className='md:py-0 md:pl-0 flex  gap-2 text-white pl-6 py-5  '>
                        Wishlist
                        <FavoriteRoundedIcon fontSize='small'/>
                    </li>
                </Links>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

