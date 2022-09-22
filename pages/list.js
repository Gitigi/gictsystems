import { useEffect, useState } from "react"
import Header from "../components/header"
export default function Items() {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal

    fetch('/api/items').then( async (response) => {
      setItems(await response.json());
    }).catch(e => {
      if( e.name == 'AbortError') {}
      throw e;
    })

    return () => {
      controller.abort()
    }
  }, [])
  
  return (
    <>
      <Header active='list' />
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="px-2 py-4 text-2xl font-bold uppercase text-gray-700">Items</h2>
        <ul className="w-full md:w-1/2 divide-y">
          {items.map(item => <li key={item.ID} className='py-4 px-2 flex justify-between'>
            <span>{ item.Message }</span>
            <button className="py-2 px-4 border rounded-md bg-green-200 text-gray-700">Edit</button>
          </li>)}
        </ul>
      </div>
    </>
  )
}
