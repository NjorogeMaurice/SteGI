import React from 'react';
import Impact1 from '../images/Impact1.png';
import Impact2 from '../images/Impact2.png';
import '../index.css';
import logo from '../images/logo.png';
import MainPic from '../images/MainPic.png';
import WarhfLogo from '../images/warhflogo.jpg'

const Home = () => {
    return (
        <>
          <div className="mx-4"> 
       
       <div className="container h-full w-full mx-auto flex flex-col bg-white">
         
       
<div class="bg-white min-h-screen">
    <div class="container  mx-auto px-6 py-20 md:px-12 lg:px-20">
        <div class="mt-12 mx-auto  -space-y-4 items-center md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div class="relative z-10">
                <div class="">
                <img className="w-full rounded-md" src={MainPic} alt="header" />
                </div>
            </div>

            <div class="relative ">
                <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16 bg-blue-500 text-white">
               <p>Teenage pregnancy is of global concern, but most is of key issue in poorer and marginalized communities in Kenya. This is much contributed by the fact that girls in rural underserved communities face considerable challenges that includes less education resulting from low economic status, girls with pressure of being married off during early stages following cultural practices, hence being denied the right to make decisions about their sexual and reproductive health, girls at risk sexual abuse among others. Teenage girls have freedom to make their own decisions about their bodies in matters of reproductive live and more about their futures. They should also be able to understand the effects of teenage pregnancy, and have access to appropriate healthcare services and comprehensive sexuality education.
Save the teenage girl initiative (STeGI) is one of the initiatives under the big umbrella of ‘Women Access to Rural Health Foundation’ (WARHF).
</p>
                </div>
            </div>
        </div>
    </div>
</div>

         <section class="py-20 w-full bg-white">
           <div class="flex flex-col mx-auto space-y-12 max-w-7xl xl:px-12">
           <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">Mandate of STeGI</h2>
               <div id="about_initiative" class="grid gap-12 lg:grid-cols-2">
               <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 ">
    <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      <div class="py-1">
        <div class="p-4">
          <h2 class="font-bold mb-2 md:mt-4 text-2xl text-gray-800 tracking-normal">Advocating for attention as regards to teenage pregnancy </h2>
          
          <p class="text-sm text-left text-gray-700 px-2 mr-1">Safe the Teenage Girl Initiative (STeGI) seek to seek to build an evidence base on teenage pregnancy for action, develop policy and programme support tools, build capacity and support counties address teenage pregnancy effectively, with intention of reaching out the girls especially who live in underserved rural communities.
This is a because increased risk of unintended teenage pregnancies tends to be higher more so to the vulnerable girls including those with less education due to low economic status, girls with pressure of being married off during early stages following cultural practices, girls at risk of sexual abuse among others.
</p>
          
        </div>
      </div>
    </div>
                </div>
                <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 ">
    <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      <div class="py-1">
        <div class="p-4">
          <h2 class="font-bold mb-2 md:mt-4 text-2xl text-gray-800 tracking-normal">Career guidance and curbing drugs and substance abuse by teenage girls</h2>
          
          <p class="text-sm text-left text-gray-700 px-2 mr-1">Safe the Teenage Girl Initiative (STeGI) seek to have models intended to enhance career guidance to the teenage girls and youths in general with intentions to have right investments in their future lives, by ensuring that they receive the education they deserve. The model is as well will seek to find solutions on drug and substance abuse. The key thematic areas of the model will be;
          <div class="grid md:gap-12 md:grid-cols-2">
          <div class="p-1 text-left rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 ">
          1.Training/capacity building<br></br>
          2,Guidance on goals and dreams for the future as well as labour market<br></br>
          3.Research and advocacy<br></br>
          4.Incubation of teenage talents<br></br>
          5.Solutions to mental illnesses
            </div>
            <div class="p-1 text-left rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 ">
          6.Innovations<br></br>
          7.Commercialization of incubated teenage talents<br></br>
          8.Solutions to drugs and substance abuse<br></br>
          9.Stress management skills, a key to living a balanced life
            </div>

          </div>
            </p>
          
        </div>
      </div>
    </div>
                </div>
                </div>
       <div id='vision' className='w-full mx-4'>
       <h2 class="w-full text-3xl my-8 font-bold text-center sm:text-4xl md:text-5xl">Vision</h2>
       <p>
       To become a global university female students’ advocacy organization for advocating for teenage girls wellbeing and girls’ equality to health, sex-education, and economic empowerment.
       </p>
       </div>



       <div id='impacts' className='w-full mx-4'>
       <h2 class="w-full text-3xl my-8 font-bold text-center sm:text-4xl md:text-5xl">Impacts Of DPEEIK To
       The Community.</h2>
       <div class="flex flex-col mb-8 animated fadeIn sm:flex-row mx-4">
            
           <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
               <img class="rounded-lg shadow-xl" src={Impact1} alt=""/>
               </div>
           <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
               <p class="mt-5 text-lg text-gray-700 text md:text-left">Teenage girls receive sanitary towels from “save the teenage girl initiative” under WARHF at Kangari Catholic Church in Murang’a county. </p>
           </div>
       </div>
       <div class="flex flex-col mb-8 animated fadeIn sm:flex-row mx-4">
       <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
               <img class="rounded-lg shadow-xl" src={Impact2} alt=""/>
               </div>
           <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
               <p class="mt-5 text-lg text-gray-700 text md:text-left">Teenage girls being addressed by “save the teenage girl initiative” members under WARHF on carrier pathways and substance abuse at Kangari catholic church in Murang’a county</p>
           </div>
       </div>
       </div>



   </div>
</section>
       </div>
       
       <div className="flex flex-wrap -mx-3 my-5">
         <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
           <p className="text-sm text-slate-500 py-1">
             STeGI is an initiative under <a href="https://warhf.org/" className="text-slate-700 hover:text-blue-600" target="_blank" rel="noopener noreferrer">WARHF</a>. All rights reserved
           </p>
         </div>
       </div>
     </div>
        </>

    );
  };

export default Home;
