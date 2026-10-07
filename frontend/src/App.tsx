import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {


    const images = [
      'https://images.pexels.com/photos/4489319/pexels-photo-4489319.jpeg?_gl=1*x54lbn*_ga*NjE0OTE3ODQxLjE3Njg0ODM2ODE.*_ga_8JE65Q40S6*czE3OTEwOTgzNTEkbzMzJGcxJHQxNzkxMDk4MzUzJGo1OCRsMCRoMA..',
      'https://images.pexels.com/photos/39618613/pexels-photo-39618613.jpeg?_gl=1*36fn6e*_ga*NjE0OTE3ODQxLjE3Njg0ODM2ODE.*_ga_8JE65Q40S6*czE3OTEwOTgzNTEkbzMzJGcxJHQxNzkxMDk4MzgwJGozMSRsMCRoMA..',
      'https://images.pexels.com/photos/39904271/pexels-photo-39904271.jpeg?_gl=1*dl4xc3*_ga*NjE0OTE3ODQxLjE3Njg0ODM2ODE.*_ga_8JE65Q40S6*czE3OTEwOTgzNTEkbzMzJGcxJHQxNzkxMDk4Mzk1JGoxNiRsMCRoMA..'
    ]
//     const [carouselStart, setCarousel] = useState(0)
//     const nextSlide = () =>{
//       setCarousel((prev) => 
// prev === images.length - 1 ? 0 : prev + 1
//       )
//     }
//     const prevSlide = () => {
//       setCarousel((prev) => 
//         prev === 0 ? images.length -1 : prev - 1
//     )
//     }


const[carouselStart, setCarousel] = useState(0)
 const nextSlide = () => {
  setCarousel((prev) => 
    prev === images.length -1 ? 0 : prev + 1 
)
 }
const prevSlide = () => {
   setCarousel((prev) => 
prev === 0 ? images.length-1 : prev - 1)
}

 


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:8000/api/user', formData)
      console.log(response.data)
      alert('user successfully created')
      setFormData({
        name: "",
        email: "",
        password: ""
      })
    }
    catch(error){
      console.log(error)
    }
  }

      

  return (
    <>

    <div>
      <img 
      style={{
        width: '200px',
        margin: '10px',
        maxWidth: '200px'
       }}
      src={images[carouselStart]} alt="" />

        <button onClick={prevSlide}>
          Previous
        </button>

        <button onClick={nextSlide}>
          Next
        </button>
    </div>
      <div className='flex justify-center min-h-screen item-center'>
        <h1>hello crud</h1>
      <form action="" onSubmit={handleSubmit} >
       <input 
       style={{
        width: '200px',
        margin: '10px'
       }}
       className='w-[200px]'
        type="text" 
       name="name"
       placeholder='enter name'
       value={formData.name}
       onChange={handleChange} />
       <br />
        <input type="email" 
       name="email"
       placeholder='enter email'
       value={formData.email}
       onChange={handleChange} />
<br />
 <input type="password" 
       name="password"
       placeholder='enter password'
       value={formData.password}
       onChange={handleChange} />
       <br />
       <button onClick={handleSubmit}>submit</button>
      </form>
      </div>


      <div>

      </div>
    </>

  )

}

export default App
