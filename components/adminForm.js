import React from 'react'
import Image from "next/image";
import MyIcon from '@/images/myIcon';


export default function AdminForm() {
    return (

        <div className="bg-slate-100 h-[100vh]  ">
            <div className="flex justify-center items-center min-h-[100vh] font-practicain font-normal">
                <div className="bg-white w-[627px] h-[809px] rounded-2xl shadow-2xl pt-5 px-14 ">


                    <p class="normal-case text-center">זמני תפילות </p>

                    <div className='border-solid border-2 border-bg-slate-200 rounded-lg mt-4 py-4'>
                        <p class="normal-case text-center">ליל שבת  </p>

                        <div className='grid grid-cols-2 gap-4 justify-items-center mt-4 '>

                            <div className='grid justify-items-end' >
                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900 text-right"> קבלת שבת </label>

                                <input className='w-32 rounded ' type="time" id="appt" name="appt" />

                            </div>
                            <div className='grid justify-items-end' >


                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900 text-right"> מחנה </label>

                                <input className='w-32 rounded' type="time" id="appt" name="appt" />



                            </div>

                        </div>

                    </div>
                    <div className='border-solid border-2 border-bg-slate-200 rounded-lg mt-4 py-4 '>
                        <p class="normal-case text-center">יום שבת  </p>

                        <div className='grid grid-cols-3 gap-4 justify-items-center mt-4 '>

                            <div className='grid justify-items-end' >

                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900 text-right"> ערבית </label>

                                <input className='w-32 rounded' type="time" id="appt" name="appt" />



                            </div>
                            <div className='grid justify-items-end' >


                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900 text-right"> מחנה </label>
                                <input className='w-32 rounded' type="time" id="appt" name="appt" />



                            </div>
                            <div className='grid justify-items-end' >


                                <label for="email" className="block text-sm font-medium leading-6 text-gray-900 text-right"> שחרית </label>
                                <input className='w-32 rounded' type="time" id="appt" name="appt" />



                            </div>


                        </div>

                    </div>
                    <div className='border-solid border-2 border-bg-slate-200 rounded-lg mt-4 py-4'>
                        <p class="normal-case text-center">שיעורים   </p>

                        <div className='flex justify-end  mt-4 mx-4 overflow-x-auto w-[480px] bg-scroll'>
                            <button className="w-26 rounded-md bg-[#F9B530] px-3.5 py-2.5 text-sm font-semibold 
                             text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 
                             flex flex-col-reverse justify-end items-center "> <span className="font-bold mr-1">הוסף שיעור </span>    <MyIcon color="rgb(255 255 255)" /></button>
                                       
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}
