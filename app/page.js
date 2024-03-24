'use client'
import dynamic from 'next/dynamic';
import { YMaps, Map, Button, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import localFont from 'next/font/local';

const wg = localFont({
  src: [
    {
      path: '../public/WonderGardenScript-Regular.woff2',
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

  const [isConfetti, setIsConfetti] = useState(false)

  const Confetties = () => {
    setStatus('ИӘ, КЕЛЕМІН')
    setIsConfetti(true)
  }

  const Vote = async () => {
    try {
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

      const data = await response.json();
      console.log(data); // Check response data
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
  <div className='font-[wg] text-center'>
    <main className='flex flex-col items-center justify-between relative'>
      <img src='/hero.jpg' alt='Hero' className='w-full'/>
    
      <img src='/stars.png' alt='stars' className=' absolute'/>
      <div className='flex flex-col absolute top-0 w-[80%] justify-between h-[110%]'>
        <div className='text-left relative'>
          <p className={`${wg.className} text-[60px] m-0 absolute top-0`}>Бекзат and Венера</p>
          <p className=' absolute top-16'>Приглашаем на <br /> свадьбу <br />22.06.2024</p>
        </div>
        <CountDown />
        <div className=' text-center  bg-[rgba(255,255,255,0.3)] p-3 rounded-lg'>
          <h1 className='text-xl'>Құрметті</h1>
          <p className='text-sm'>ағайын-туыс, құда-жекжат, дос жарандар, ұлымыз бен келініміз өз бақытын тапты, сол бақытың куәсі болуға шақырамыз!</p>
          <p>22.06.2024 | 17:00 | сенбі</p>
        </div>
        
      </div>
    </main>

    <div className='relative flex justify-center mb-[400px]'>
        <img src='/3.jpeg' alt='Section' className='w-auto mx-auto mt-32 rounded-lg absolute rotate-[25deg] top-10 right-10 h-[200px]'/>
        <img src='/2.jpeg' alt='Section' className='w-auto mx-auto mt-32 rounded-lg absolute -rotate-[25deg] top-10 left-10 h-[200px]'/>
        <img src='/1.jpeg' alt='Section' className='w-auto mx-auto mt-32 rounded-lg absolute h-[250px] '/>
    </div>

    <div className='w-[80%] mx-auto text-center relative mb-[200px] border-white border-[1px] '>
        <p className={`${wg.className} text-[60px] m-0 absolute top-0 right-10`}>Бекзатпен Венеранын </p>
        <p className=' absolute top-16'>отау құру тоына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!</p>
    </div>

    <div className='w-[80%] mx-auto mb-16'>
      <h3 className=' font-extrabold text-2xl'>Dress Code | Black Tie</h3>
      <div className=' flex justify-evenly w-[80%] mx-auto py-2'>
        <div className='h-[25px] w-[25px] rounded-full bg-[#dddccb]'></div>
        <div className='h-[25px] w-[25px] rounded-full bg-[#b8b0a0]'></div>
        <div className='h-[25px] w-[25px] rounded-full bg-[#96825f]'></div>
        <div className='h-[25px] w-[25px] rounded-full bg-[#181818]'></div>
      </div>
      <p>Біздің тойға сәйкес киім үлгісін таңдап, айтулы күннің dress code -ын ұстануыңызды сұраймыз!</p>
    </div>


    <div className=' flex flex-col w-[80%] mx-auto mb-[100px] bg-[rgba(255,255,255,0.3)] p-4 rounded-lg'>
      <p className=' text-xl py-4'>Тойға қатысуыңызды <br /> растауыңызды сұраймыз!</p>
      <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-4" placeholder="ФИО" required onChange={(e) => setName(e.target.value)} />
      <div className=' flex flex-col gap-6 justify-between'>
        <div className='flex items-center'>
            <input id='default-radio-1' type='radio' value='ИӘ, КЕЛЕМІН' name='default-radio' className='w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300' onChange={(e) => setStatus(e.target.value)}/>
            <label for='default-radio-1' className='ms-2 text-xs font-medium text-white '>ИӘ, КЕЛЕМІН</label>
        </div>
        <div className='flex items-center'>
            <input id='default-radio-2' type='radio' value='ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН' name='default-radio' className='w-4 h-4 outline-none text-blue-600 bg-gray-100 border-gray-300' onChange={(e) => setStatus(e.target.value)}/>
            <label for='default-radio-2' className='ms-2 text-xs font-medium text-white '>ӨКІНІШКЕ ОРАЙ КЕЛЕ АЛМАЙМЫН</label>
        </div>
      </div>
      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={Vote}>Растау</button>
    </div>

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
      </Map>
    </YMaps>
  </div>
  
  );
}
