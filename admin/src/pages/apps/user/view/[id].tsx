import React from 'react'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'
import axios from 'axios'

import type { InvoiceType } from 'src/types/apps/invoiceTypes'
import UserViewPage from 'src/views/apps/user/view/UserViewPage'

const UserView = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <UserViewPage id={id} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/apps/users/list')
  const userDate: InvoiceType[] = await res.data.allData

  const paths = userDate.map((item: InvoiceType) => ({
    params: { id: `${item.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      id: params?.id
    }
  }
}

export default UserView
