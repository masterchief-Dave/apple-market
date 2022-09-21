
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from 'sanity'

const query = groq`*[_type == "category"] {
_id,
  ...
}`

type Data = {
  status: string,
  categories: Category[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch(query)
 
  res.status(200).json({
    status:'success',
    categories: categories
  })
}

/*
 const sage = [{_id: 'string',
  _createdAt: 'string',
  _updatedAt: 'string',
  _rev: 'string',
  _type: 'string',
  title: 'string'}]

*/
