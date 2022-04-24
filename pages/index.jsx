import Head from 'next/head'
import styles from '../styles/home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="grid grid-cols-2 place-content-center gap-4">
        <div className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500">
          <Link href="/party-registration">
            <div className="flex items-center space-x-3">
              <h1 className="text-center text-sm font-semibold text-slate-900 group-hover:text-white">
                Party Registration
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-red-500 hover:ring-red-500">
          <Link href="/voter-registration">
            <div className="flex items-center space-x-3">
              <h1 className="text-center text-sm font-semibold text-slate-900 group-hover:text-white">
                Voter Registration
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
