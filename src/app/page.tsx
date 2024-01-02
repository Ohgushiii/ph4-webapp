import Loading from '@/components/common/loading'
import Top from './features/top/top'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const Home = async () => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <>
    {session ?
      <Top />
      :
      // <Loading />
      redirect('/auth/login')
    }
    </>
  )
}

export default Home
