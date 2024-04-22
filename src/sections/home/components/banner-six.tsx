import { EServiceT, services } from '@/sections/e-service/config-service'
import { Button, Link, Typography } from '@mui/material'
import { validate } from 'numeral'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'

export default function BannerSix() {
  return (
    <>
      <div className="grid justify-items-center py-[30px]">
        <Typography
          variant="h3"
          className="text-[36px] font-bold text-[#00713b] "
          letterSpacing={3}
          sx={{
            textShadow:
              '-.5px -.5px 0 #00713b, .5px -.5px 0 #00713b, -.5px .5px 0 #00713b, .5px .5px 0 #00713b;',
          }}
        >
        </Typography>
        <Typography variant="body1">
          
          ยินดีต้อนรับสู่เว็บไซต์เบอร์ดี เบอร์สวย เบอร์มงคล ซิมเบอร์สวย ซิมเบอร์มงคล ทำนายเบอร์โทรศัพท์ ซิมการ์ดเบอร์โทรศัพท์มือถือ
        </Typography>
    
      </div> 
    
      
      <div className=' h-screen bg-blue-200
              flex justify-center items-center w-3/4 h-1/6 absolute top-50 right-0'>
                
              <label className=''>
                ค้นหาเบอร์
                <input type='text' className='h-10 w-8'/> 
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>
                <input type='text' className='h-10 w-8'/>

              </label>
              
           </div>
           <div className=' h-screen bg-teal-600
               w-1/5 h-100 absolute insert-y-0 left-0'>

                









              </div>
              
       
           <div className=' h-screen bg-white
              flex justify-center items-center'>
                
           
           

           </div>
           
   
    </>
  )
}
