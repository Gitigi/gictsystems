import { useState } from "react"

import Layout from "../components/layout"

export default function Home() {
  const [ info, setInfo ] = useState({})
  const [ loading, setLoading ] = useState(false)

  const handleInput = (e) => {
    setInfo(s => ({...s, [e.target.name]: e.target.value}))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    }
    const response = await fetch('/api/submit', options)

    setLoading(false);
    
    if(!response.ok) {
      let error = await response.json()
      alert(`Failed ${error.Message}`)
      return
    }
    const data = await response.json()
    alert('Successfull')
  }
  
  return (
    <>
      <Layout active='create'>
        <div className="container mx-auto flex justify-center">
          <form onSubmit={onSubmit} className='py-10 flex flex-col gap-4'>
            <div>
              <label className="text-gray-700 inline-block w-32 text-left">Full Name</label>
              <input name='fullnames' type='text'
                required
                onChange={handleInput}
                className="ml-4 py-2 w-96 border rounded-md border-solid border-gray-400 focus:border-gray-700" />
            </div>
            <div>
              <label className="text-gray-700 inline-block w-32 text-left">Email</label>
              <input name='email' type='email'
                required
                onChange={handleInput}
                className="ml-4 py-2 w-96 border rounded-md border-solid border-gray-400" />
            </div>
            <div>
              <label className="text-gray-700 inline-block w-32 text-left">Phone Number</label>
              <input name='phone' type='text'
                required
                min={10}
                onChange={handleInput}
                className="ml-4 py-2 w-96 border rounded-md border-solid border-gray-400" />
            </div>
            <div>
              <label className="text-gray-700 inline-block w-32 text-left">Address</label>
              <input name='address' type='text'
                required
                min={4}
                onChange={handleInput}
                className="ml-4 py-2 w-96 border rounded-md border-solid border-gray-400" />
            </div>
            <div className="flex justify-center">
              <input disabled={loading} type='submit' value='Submit'
                className=" py-2 px-6 border rounded-md border-solid border-gray-400 bg-gray-700 text-white hover:text-gray-700 hover:bg-white" />
            </div>
          </form>
        </div>
      </Layout>
      
    </>
  )
}
