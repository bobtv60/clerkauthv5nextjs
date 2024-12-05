import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

export default async function Navbar() {
    const { userId } = await auth();
    return (
    <div className='bg-cyan-950 rounded-b-x1'>
      <ul className='flex justify-between py-4 px-6'>
        <div>
            <Link href='/'>
                <li>Home</li>
            </Link>
        </div>
        <div className='flex items-center'>
            <Link href='/client'>
                <li>Client Page</li>
            </Link>
        </div>
        <div className='flex gap-6 items-center'>
            {!userId ? (
                <>
                <Link href='/sign-in'>
                    <li>Login</li>
                </Link>
                <Link href='/sign-up'>
                    <li>Sign Up</li>
                </Link>
                </>
            ): (
                <>
                <Link href='/profile'>
                    <li>Profile</li>
                </Link>
                <li className='flex items-center'>
                    <UserButton />
                </li>
                </>
            )}
            
        </div>
      </ul>
    </div>
  )
}
