import { Poppins } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from 'postcss/lib/container'
import Mobile from '/public/Mobile.svg'
import Wave from '/public/Wave.svg'
import Note from '/public/Note2.svg'
import Content1 from '/public/Content1.svg'
import Content2 from '/public/Content2.svg'
import AddTask from '@/public/AddTask'
import TodoList from '@/public/TodoList'
import * as React from 'react';

export default function Home() {
  return (
    <body>
    <main>
      <div className='max-w-[1240px] mx-auto mt-20'> 
        <h1 className=''>Check your financial health</h1>
      </div>
      <div className='max-w-[1240px] mx-auto text-center mt-5'>
          <text className='text-main-bg-color text-2xl'>
          Use WeatherMeter to get a free report<br/>
          card for your finance within minutes!
        </text>
      </div>
      <div className='text-center max-w-[1240px] mx-auto'>
          <button className='mt-8'>Get Started</button>
      </div>
      <div className='flex ml-10'>
        <Content1 className="mt-20 m-auto"></Content1>
        <Mobile className="ml-20"></Mobile>
        <Content1 className="mt-20 m-auto"></Content1>
      </div>
      <div style={{
        marginLeft: 280
      }}className='absolute z-20 text-center'>
        <h2 className='mr-5'>How it works?</h2>
        <Note className="ml-5"></Note>
        <button className='mr-15'>Get Started</button>
        <div className='text-center gap-4'>
          <h3 className='text-4xl font-bold mt-5 text-main-bg-color'>To-Do List</h3>
          <AddTask />
        </div>
        <TodoList />
      </div>
      <div className="absolute z-10 ml-4 bottom-8 h-16">
         <Wave></Wave>
      </div>
    </main>
    </body>
    
  )
}
