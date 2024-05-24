import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import QuizCard from '@/components/quizCard'
import { observer } from 'mobx-react-lite';



const inter = Inter({ subsets: ['latin'] })

export default observer(function Home() {
  return (
  <main className="min-h-screen flex flex-col content-between"> 

    <QuizCard className="w-10" question="2*2 = " options={['2', "4", "9"]} answer={"4"}/>

  </main>)
})
