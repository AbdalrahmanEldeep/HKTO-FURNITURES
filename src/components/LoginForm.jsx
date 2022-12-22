import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
    font-size: 1.7rem;
    font-weight: 600;
`

export const LoginForm = () => {
  return (

    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full shadow-lg border border-primary rounded-md p-10 max-w-md space-y-8">
        <div className='text-center'>
        <Header>Login</Header>
        <p className="text-light font-semibold">
            Please login using account detail bellow
        </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true"/>
        <div className="flex flex-col gap-3 shadow-sm">
            <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none  border border-light px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
            </div>
            <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full appearance-none border border-light px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
            </div>
        </div>

        <div className="flex items-center text-light justify-between">
            <div className="flex items-center">
            <input id="remember-me"  name="remember-me" type="checkbox" className="h-4 w-4 rounded  text-indigo-600 focus:ring-indigo-500"/>
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
        </div>

        <div>
            <button type="submit"  className="group text-primary relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
            </span>
              Login
            </button>
        </div>
        </form>
    </div>
    </div>

  )
}
