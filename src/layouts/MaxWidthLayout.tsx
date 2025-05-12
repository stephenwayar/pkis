import React from 'react'

type Props = { children: React.ReactNode }

export default function MaxWidthLayout({ children }: Props) {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-[80rem] xl:max-w-[90rem] mx-auto'>
        {children}
      </div>
    </div>
  )
}