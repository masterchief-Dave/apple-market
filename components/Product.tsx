import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'

interface Props {
  product: Product
}

export const Product = ({ product }: Props) => {
  console.log(product.image)
  // const productImage = product.image
  // console.log(productImage)
  return (
    <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383c] md:w-[400px] md:p-10'>
      <div className='relative h-64 w-full md:h-72'>
        <Image src={urlFor(product.image).width(200).url()} alt='product' layout='fill' objectFit='contain' />
      </div>
    </div>
  )
}
{/* <img src={urlFor(person.image).width(200).url()} /> */ }

/*
{urlFor(product.image[0]).url()}

*/