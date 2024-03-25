'use client'
import dynamic from 'next/dynamic';
import { YMaps, Map, Button, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import localFont from 'next/font/local';
import { motion } from 'framer-motion'
import Confetti from "react-confetti";

const wg = localFont({
  src: [
    {
      path: '../public/cirpnova-d.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-wg',
})

const CountDown = dynamic(() => import('./components/CountDown'), {
  ssr: false
})
export default function Home() {

  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [confetti, setConfetti] = useState(false)

  const Vote = async () => {
    try {
      setConfetti(true)
      const response = await fetch('https://sheetdb.io/api/v1/zu4i3u7qnij0h', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'ФИО': name,
              'Статус': status,
            }
          ]
        })
      });
      setTimeout(() => setConfetti(false), 5000);
      const data = await response.json();
      console.log(data); // Check response data
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
  <div className='font-[wg] text-center'>
    <main className='flex flex-col items-center justify-between relative '>
      <img src='/hero.jpg' alt='Hero' className='w-full'/>
    
      <img src='/stars.png' alt='stars' className=' absolute'/>
      <div className=' absolute top-0 left-8 w-[80%] text-white'>
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}  className='text-left relative'>
          <p className={`${wg.className} text-3xl mt-6 m-0 absolute top-0`}>Бекзат and Венера</p>
          <p className=' absolute top-16 text-lg'>Приглашаем на <br /> свадьбу <br />22.06.2024</p>
        </motion.div>
      </div>
      <CountDown />

    </main>

    <div className='flex flex-col  w-[80%] mx-auto mt-4 justify-between text-white h-[110%]'>
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className=' text-center  bg-[rgba(0,0,0,0.3)] p-3 rounded-lg text-2xl'>
          <h1>Құрметті</h1>
          <p className=' text-lg'>Ағайын-туыс, құда-жекжат, дос жарандар, ұлымыз бен келініміз өз бақытын тапты, сол бақытың куәсі болуға шақырамыз!</p>
          <p>22.06.2024 | 17:00 | сенбі</p>
        </motion.div>
    </div>

    <div className='relative flex justify-center mb-[340px] bg-mramor'>
        <motion.img initial={{ rotate: 0, x: -100, opacity: 0 }} whileInView={{ opacity: 1, rotate: 25, x: 0 }} transition={{ duration: 1 }} src='/3.JPEG' alt='Section' className='w-auto mx-auto mt-10   rounded-lg absolute rotate-[25deg] top-10 right-10 h-[200px]'/>
        <motion.img initial={{ rotate: 0, x: 100, opacity: 0 }} whileInView={{ opacity: 1, rotate: -25, x: 0  }} transition={{ duration: 1 }} src='/2.JPEG' alt='Section' className='w-auto mx-auto mt-10  rounded-lg absolute -rotate-[25deg] top-10 left-10 h-[200px]'/>
        <motion.img src='/1.JPEG' alt='Section' className='w-auto mx-auto mt-10  rounded-lg absolute h-[250px] '/>
    </div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className='w-[80%] mx-auto text-center relative mb-[200px] border-black border-[1px] '>
        <p className={`${wg.className} text-3xl mt-6 m-0 absolute top-0 right-10 font-extrabold`}>Бекзат and Венера</p>
        <p className=' absolute top-16'>Отау құру тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!</p>
    </motion.div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}  className='w-[80%] mx-auto mb-16'>
      <h3 className=' font-extrabold text-2xl'>Dress Code | Black Tie</h3>
      <div className=' flex justify-evenly w-[80%] mx-auto py-2'>
        <div className='h-[25px] w-[25px] rounded-full bg-[#dddccb]'></div>
        <div className='h-[25px] w-[25px] rounded-full bg-[#b8b0a0]'></div>
        <div className='h-[25px] w-[25px] rounded-full bg-[#96825f]'></div>
        <div className='h-[25px] w-[25px] rounded-full bg-[#181818]'></div>
      </div>
      <p>Біздің тойға сәйкес киім үлгісін таңдап, айтулы күннің dress code -ын ұстануыңызды сұраймыз!</p>
    </motion.div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}   className=' flex flex-col w-[80%] mx-auto mb-[100px] bg-[rgba(0,0,0,0.3)] p-4 rounded-lg relative overflow-hidden right-0'>
      { confetti &&  
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className=' absolute top-0'>
        <Confetti width={window.innerWidth} height={window.innerHeight}/>
      </motion.div>
      }
      <p className=' text-xl py-4'>Тойға қатысуыңызды <br /> растауыңызды сұраймыз!</p>
      <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" placeholder="ФИО" required onChange={(e) => setName(e.target.value)} />
      <div className=' flex flex-col gap-6 justify-between'>
        <div className='flex items-center'>
            <input id='default-radio-1' type='radio' value='ИӘ, КЕЛЕМІН' name='default-radio' className='w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300' onChange={(e) => setStatus(e.target.value)}/>
            <label for='default-radio-1' className='ms-2 text-xs font-medium  '>ИӘ, КЕЛЕМІН</label>
        </div>
        <div className='flex items-center'>
            <input id='default-radio-2' type='radio' value='ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН' name='default-radio' className='w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300' onChange={(e) => setStatus(e.target.value)}/>
            <label for='default-radio-2' className='ms-2 text-xs font-medium  '>ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН</label>
        </div>
      </div>
      <button type='submit' className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={Vote}>Растау</button>
    </motion.div>

    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}   className=' flex flex-col w-[80%] mx-auto mb-[100px] bg-[rgba(0,0,0,0.3)] p-4 rounded-lg relative overflow-hidden right-0 justify-center items-center'>
      <img src="/favicon.png" alt="2gis" className=' h-[100px] w-[100px]' onClick={(e) => {
            window.location.href = 'https://2gis.kz/astana/firm/70000001067098542?m=71.377079%2C51.1455%2F16&utm_source=bigMap&utm_medium=widget-source&utm_campaign=firmsonmap'
          }}/>
      <p className=' text-xl font-extrabold'>Астана қаласы</p>
      <p>Mereke Hall мейрамханасы</p>
      <p>Е-489 Көшесі, 7 <br />
Нұра ауданы, Астана</p>
    </motion.div>

    <YMaps query={{lang: 'ru_RU', apikey: '536168cc-8dbb-4923-a06f-9a6bd5a9cf15'}}>
      <Map defaultState={{ center: [51.14499045698973, 71.37709503819221], zoom: 19 }} width='100%' height='400px' >
        <Placemark geometry={[51.14499045698973, 71.3772]} options={{ fillColor: '#f00' }} />
        <Button
          options={{ maxWidth: 128 }}
          data={{ content: 'Заказать Такси' }}
          defaultState={{ selected: true }}
          onClick={(e) => {
            window.location.href = 'https://3.redirect.appmetrica.yandex.com/route?utm_source=yamaps&utm_medium=api&appmetrica_tracking_id=241755468559577482&ref=2334695&domain=ru&lang=ru&start-lat=&start-lon=&end-lat=51.14501&end-lon=71.377198'
          }}
          />
        <Button
          options={{ maxWidth: 400,  }}
          data={{ content: 'Показать в 2ГИС' }}
          defaultState={{ selected: true }}
          onClick={(e) => {
            window.location.href = 'https://2gis.kz/astana/firm/70000001067098542?m=71.377079%2C51.1455%2F16&utm_source=bigMap&utm_medium=widget-source&utm_campaign=firmsonmap'
          }}
        />
      </Map>
    </YMaps>
  </div>
  
  );
}
