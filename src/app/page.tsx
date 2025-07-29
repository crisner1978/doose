import { PageBuilder } from '@/components/page-builder'
import { getHomePage } from '@/lib/getHomePage'

export default async function HomePage() {
  const homePage = await getHomePage()

  if (!homePage?.pageBuilder) {
    return (
      <main className='flex flex-col overflow-hidden'>
        <div className='flex min-h-screen items-center justify-center'>
          <p className='text-primary-foreground'>No page content found</p>
        </div>
      </main>
    )
  }

  return (
    <main className='flex flex-col overflow-hidden'>
      <PageBuilder sections={homePage.pageBuilder} />
    </main>
  )
}
