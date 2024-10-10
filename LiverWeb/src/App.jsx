import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import Input from './components/Input'

function App() {

  const { register, handleSubmit, formState: { error } } = useForm()

  async function submitValues(data) {

    console.log(data)

    const PREDICT_URL = 'http://localhost:3000/disease/predict-disease'
    const res = await fetch(PREDICT_URL, {

      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen'>

        <div>
          <h2 className='text-blue-800 text-2xl'>Predict Liver Disease</h2>
        </div>

        <form onSubmit={handleSubmit(submitValues)} className='flex justify-center items-center flex-col border-2 border-blue-500 rounded-lg mt-4 w-[55%] gap-7 p-10'>

          <div className='flex items-center justify-center gap-6'>

            <Input
              placeHolder={'Enter Total_Bilirubin'}
              register={register}
              name="Total_Bilirubin"
              required={{
                value: true,
                message: 'Total Bilirubin is required'
              }}
            />

            <Input
              placeHolder={'Enter Direct Bilirubin'}
              register={register}
              name='Direct_Bilirubin'
              required={{
                required: true,
                message: 'Direct Bilirubin is required'
              }}
            />

          </div>

          <div className='flex items-center justify-center gap-6'>

            <Input
              placeHolder={'Enter Alkaline Phosphotase'}
              register={register}
              name='Alkaline_Phosphotase'
              required={{
                required: true,
                message: 'Alkaline Phosphotase is required'
              }}
            />

            <Input
              placeHolder={'Enter Alamine Aminotransferase'}
              register={register}
              name='Alamine_Aminotransferase'
              required={{
                required: true,
                message: 'Alamine Aminotransferase is required'
              }} />

          </div>

          <div className='flex items-center justify-center gap-6'>

            <Input
              placeHolder={'Enter Aspartate Aminotransferase'}
              register={register}
              name='Aspartate_Aminotransferase'
              required={{
                required: true,
                message: 'Aspartate Aminotransferase is required'
              }} />

            <Input
              placeHolder={'Enter Total_Protiens'}
              register={register}
              name='Total_Protiens'
              required={
                {
                  required: true,
                  message: 'Total Protiens is required'
                }} />
          </div>

          <div className='flex items-center justify-center gap-6'>

            <Input
              placeHolder={'Enter Albumin'}
              register={register}
              name='Albumin'
              required={
                {
                  required: true,
                  message: 'Albumin is required'
                }} />

            <Input
              placeHolder={'Enter Albumin and Globulin Ratio'}
              register={register}
              name='Albumin_and_Globulin_Ratio'
              required={
                {
                  required: true,
                  message: 'Albumin and Globulin Ratio is required'
                }} />
          </div>

          <div>
            <button type='submit' className='border-blue-800 border-2 bg-blue-800 p-1 rounded-lg w-40 text-white  hover:text-blue-800 hover:bg-white'>Predict</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
