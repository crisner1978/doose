import { client } from '@/sanity/lib/client'
import { homePageQuery } from '@/sanity/lib/queries'
import { HomePageQueryResult } from '@/sanity/types'

export async function getHomePage() {
  const homePage = await client.fetch<HomePageQueryResult>(homePageQuery)
  return homePage
}
