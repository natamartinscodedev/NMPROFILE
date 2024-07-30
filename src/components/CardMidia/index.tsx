import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface typeContect {
  link: string,
  icon: any,
}

const index = ({ link, icon }: typeContect) => {
  return (
    <Link href={link} target='__blanck' className='card_midia'>
      <div>{icon}</div>
    </Link>
  )
}

export default index