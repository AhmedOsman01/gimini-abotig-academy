import React, { useEffect, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa'

const techs = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={60} /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={60} /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={60} /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400" size={60} /> },
  { name: 'Python', icon: <FaPython className="text-blue-700" size={60} /> },
]

const CarouselHome = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % techs.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full py-10">
      <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-8 transition-all duration-500">
        {techs[current].icon}
        <span className="mt-4 text-2xl font-bold text-gray-700">{techs[current].name}</span>
      </div>
      <div className="flex mt-4 space-x-2">
        {techs.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default CarouselHome