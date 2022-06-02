import Head from 'next/head'
import styles from '../styles/home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-start">
      <h1 className="text-4xl font-semibold m-20">QLDB Voting Admin Panel</h1>
      <div className="grid grid-cols-3 place-content-center gap-4 mt-20">
        <div className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500">
          <Link href="/candidate-registration">
            <div className="flex items-center space-x-3">
              <button>
              <h1 className="text-center text-sm font-semibold text-slate-900 group-hover:text-white">
                Candidate Registration
              </h1>
              </button>
            </div>
          </Link>
        </div>
      <div className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-amber-500 hover:ring-amber-500">
          <Link href="/create-election">
            <div className="flex items-center space-x-3">
              <button>
              <h1 className="text-center text-sm font-semibold text-slate-900 group-hover:text-white">
                Create Election  
              </h1>
              </button>
            </div>
          </Link>
        </div>
        <div className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-red-500 hover:ring-red-500">
          <Link href="/voter-registration">
            <div className="flex items-center space-x-3">
              <button>
              <h1 className="text-center text-sm font-semibold text-slate-900 group-hover:text-white">
                Voter Registration
                
              </h1>
              </button>
            </div>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Home
