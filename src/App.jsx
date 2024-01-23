import { HomeIcon, MoonIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import {useState } from 'react'
import Cards from './components/Cards'


function App() {

  const [darkMode, setDarkMode] = useState(false)
  const htmlElement = document.querySelector("html")

  const setMode =  () => {
    setDarkMode(!darkMode)
    darkMode ? htmlElement.classList.remove('dark') : htmlElement.classList.add('dark')
  }

  return (
    <>
  
      <nav className="w-full h-14 hidden text-primary dark:text-white bg-white lg:flex p-4 justify-between fixed z-10  dark:bg-gray-800">
        <div className="h-auto w-auto">
          <p className="text-xl">Platzi Travel</p>
        </div>
        <div className="flex space-x-8 ">
          <a className="font-bold text-base" href="#home">Inicio</a>
          <a className="font-bold text-base" href="#redomendados">Recomendados</a>
          <a className="font-bold text-base" href="#rentas_destacadas">Rentas</a>
          <a className="font-bold text-base" href="#faqs">FAQS</a>
          <a className="font-bold text-base" href="#sobre_nosotros">Sobre nosotros</a>
        </div>
        <div className="flex space-x-4">
          <a href="#"><MagnifyingGlassIcon className="h-8 w-8 " /></a>
          <button onClick={setMode}> <MoonIcon className="h-8 w-8 " /> </button>
          <a href="#"><UserIcon className="h-8 w-8 " /></a>

        </div>
      </nav>
     
      <section className="w-full h-screen">
        <div className="w-full h-3/4" id="home">
          <div className="w-full h-full">
            <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start 
            lg:pt-48 lg:justify-start  ">
              <input className="outline-none p-3 rounded-full shadow-sm transition duration-300 
              focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden" placeholder="San Francisco" type="search" />
              <div className="hidden h-auto lg:w-2/5 lg:flex pb-6">
                <p className="text-4xl ml-16 font-bold ">Encuentra más ubicaciones como esta</p>
              </div>
              <button className="w-48 rounded-full bg-white text-xl font-semibold p-4 text-primary shadow-sm 
              transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 
              hover:scale-110 lg:ml-16">
                Explorar
              </button>
            </div>
            <div className="w-full lg:h-full lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
              <img className="lg:hidden" src="/sanFrancisco.jpg" />
            </div>
          </div>
        </div>
        <div className="w-full h-auto" id="redomendados">
          <p className="text-3xl pl-2 font-semibold dark:text-white text-primary">Recomendados</p>
          <div className="w-auto h-72 items-center mt-6 overflow-x-auto 
          overscroll-x-contain flex space-x-6 overflow-y-hidden">
           <Cards />
          </div>

        </div>
        <div className="px-2 h-auto w-full" id="rentas_destacadas">
        <p className="text-3xl dark:text-white text-primary font-semibold pb-6 mt-6">
          Rentas Destacadas
        </p>
        <div className="sm:flex w-full h-auto sm:flex-col space-y-6 lg:space-y-0 sm:items-center sm:justify-center lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-4"
        >
          <div className="w-full h-96 bg-chicago bg-cover rounded-xl lg:col-span-3 lg:bg-center lg:row-span-1 lg:mt-0">
            <p className="CardTitle">Chicago</p>
            <p className="text-lg  pl-8 text-white mr-24">
              2 habitaciones, baño y cocina
            </p>
          </div>
          <div className="w-full h-96 bg-LA bg-cover rounded-xl lg:row-start-2 lg:row-end-4 lg:h-full">
            <p className="CardTitle">Los Angeles</p>
            <p className="text-lg pl-8 text-white mr-24">
              4 habitaciones, 3 baños, cocina y piscina privada
            </p>
          </div>
          <div className="w-full h-96 bg-miami bg-cover rounded-xl lg:col-span-2 lg:row-span-1">
            <p className="CardTitle">Miami</p>
            <p className="text-lg pl-8 text-white mr-24">
              2 habitaciones, baño, cocina y una asombrosa vista
            </p>
          </div>
          <div className="w-full h-96 bg-bali bg-cover rounded-xl  lg:col-start-2 lg:col-end-4">
            <p className="CardTitle">Bali</p>
            <p className="text-lg pl-8 text-white mr-24">
              2 habitaciones, 2 baños, cocina y piscina privada
            </p>
          </div>
        </div>
      </div>
        <div className="w-full h-auto dark:text-white" id="faqs" >
          <div className="w-full h-full px-6 flex flex-col spce-y-4" >
            <p className="text-3xl text-primary dark:text-white font-semibold mt-6">FAQS</p>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white pt-4">Reservas de Hotel</p>
              <p className="text-base pt-2">Cancelación gratuita hasta 48 horas antes de la llegada.</p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white pt-4">Suscripción a Servicios en Línea</p>
              <p className="text-base pt-2">Puedes cancelar en cualquier momento, pero no se realizarán reembolsos por el tiempo no utilizado.</p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white  pt-4">Clases de Fitness o Actividades Recreativas</p>
              <p className="text-base pt-2">Cargo completo si se cancela dentro de las 24 horas previas a la clase o en caso de no presentarse.</p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white  pt-4">Compra de Productos en Línea</p>
              <p className="text-base pt-2">Puedes cancelar tu pedido antes de que haya sido enviado para recibir un reembolso completo.</p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white  pt-4">Eventos Especiales (Conciertos, Conferencias, etc.)</p>
              <p className="text-base pt-2">No se realizarán reembolsos, pero puedes transferir tu boleto a otra persona.</p>
            </div>
          </div>
        </div>
        <footer id="sobre_nosotros" className="w-full h-auto bg-gray-50 p-6 space-y-2 dark:bg-gray-800 dark:text-white">
          <p className="text-lg">Acerca de</p>
          <p className="text-sm text-gray-300">Inversionistas</p>
          <p className="text-sm text-gray-300">Empleos</p>
          <p className="text-sm text-gray-300">Acerca de</p>
          <p className="text-sm text-gray-300">Términos y condiciones</p>
          <p className="text-sm text-gray-300">Plazi travel, Inc.</p>
        </footer>
        
      </section>
      <div className="w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex space-x-8 items-center justify-center lg:hidden dark:bg-gray-700" id="tab_bar">
        <a href="#home"><HomeIcon className="h-8 w-8 text-gray-200 hover:text-primary " /></a>
        <a href="#rentas_destacadas"><MagnifyingGlassIcon className="h-8 w-8 text-gray-200 hover:text-primary" /></a>
        <a href="#redomendados"><HeartIcon className="h-8 w-8 text-gray-200 hover:text-primary" /></a>
        <a href="#rentas_destacadas"><UserIcon className="h-8 w-8 text-gray-200 hover:text-primary" /></a>
        <button onClick={setMode}><MoonIcon className="h-8 w-8 text-gray-200 hover:text-primary" /></button>
      </div>
      
    </>
  )
}

export default App
