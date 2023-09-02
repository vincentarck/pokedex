import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className='ml-auto mr-auto flex h-16 justify-between px-[0.875rem] py-[0.625rem]'>
        <Link className='-ml-px inline-flex flex-col items-end' href={'/'}>
          <Image alt='Pokemon logo' width={150} loading={"lazy"} height={150} src={"/assets/logo.webp"} className='h-auto w-20 lg:w-[154px]' />
        </Link>
      </div>
    </header>
  )
}
