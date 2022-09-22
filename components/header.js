import Link from "next/link"
import { useRouter } from "next/router"

export default function Header({ active }) {
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-700">
        <div className="container mx-auto">
          <header>
            <nav className="flex gap-10 text-white">
                <Link href="/create">
                  <a className="py-4 px-8 font-semibold">
                    Gictsystems
                  </a>            
                </Link>

                <Link href="/create">
                    <a className={`py-4 px-8 font-semibold ${ active === 'create' ? 'text-gray-700 bg-blue-300' : ''}`}>
                    Create
                    </a> 
                </Link>
                    
                <Link href="/list">
                    <a className={`py-4 px-8 font-semibold ${ active === 'list' ? 'text-gray-700 bg-blue-300' : ''}`}>
                    List
                    </a> 
                </Link>

              </nav>
            </header>
          </div>
      </div>
    </>
  )
}