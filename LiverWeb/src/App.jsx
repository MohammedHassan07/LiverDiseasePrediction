import './App.css'

function App() {

  function handleOnChange(e) {
    console.log(e.target.value)
   }

  return (
    <>
      <div className='flex justify-center items-center w-[80vw], h-screen'>

        <form className='flex justify-center items-center'>

          <div>
            <input type="text" onChange={handleOnChange} />
          </div>
        </form>
      </div>
    </>
  )
}

export default App
