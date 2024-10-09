import { useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {


  const [value, setValue] = useState('')

  function handleOnChange(field, value) {

    switch (field) {
        case 'name':
            setName(value)
            break

        case 'password':
            setPassword(value)
            break

        case 'mobile':
            setMobile(value)
            break
    }
}

  return (
    <>
      <div className='flex justify-center items-center w-[80vw], h-screen'>

        <form className='flex justify-center items-center'>

          <Input placeHolder={'Enter Bucket Name'} onChange={(value) => { handleOnChange(value) }} />
        </form>
      </div>
    </>
  )
}

export default App
