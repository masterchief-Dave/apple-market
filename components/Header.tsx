import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'

export const Header = () => {
  const session = false

  const signIn = () => { }

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'>
          <section className='relative w-5 cursor-pointer opacity-75 hover:opacity-100 h-10'>
            <Image src='https://apple-redesign-yt.vercel.app/_next/image?url=https%3A%2F%2Frb.gy%2Fvsvv2o&w=1080&q=75' layout='fill' objectFit='contain' />
          </section>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="" className="headerLink">Product</a>
        <a href="" className="headerLink">Explore</a>
        <a href="" className="headerLink">Support</a>
        <a href="" className="headerLink">Business</a>
      </div>
      <div className='flex gap-x-4 items-center justify-center md:w-1/5'>
        <SearchIcon className='headerIcon' />
        <Link href='/checkout'>
          <div className='relative cursor-pointer'>
            <span className=' absolute  -right-1 -top-1 z-50 h-4 w-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px]'>5</span>
            <ShoppingBagIcon className='headerIcon' />
          </div>
        </Link>

        {session ? (
          <Image src='' width={34} height={34} className='cursor-pointer rounded-full' />
        ) : <UserIcon className='headerIcon' onClick={() => signIn()} />}
      </div>
    </header>
  )
}
