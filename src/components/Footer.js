
import React from 'react';
import './Custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import playstore from '../assets/logo_play_store.png';
import appstore from '../assets/AppStore_Icon.png';
import{BsFacebook,BsInstagram,BsTwitter,BsGithub} from "react-icons/bs"

class Footer extends React.Component {
  render() {
    return (

   
<footer className="bg-slate-800 rounded-t-lg ">
    <div className="mx-auto w-full max-w-screen-xl">
    <p class="text-center text-lg font-semibold text-white pt-3">Subscribe to newsletter</p>
    <form className="flex justify-center mt-5 mb-5 ml-2 mr-2">   
    <label for="simple-search" className="sr-only">Email</label>
    <div className="relative">     
        <input type="text" id="simple-search" className=" border w-64 lg:w-96  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  bg-gray-200  " placeholder="Email address" required/>
    </div>

    <a href="#_" className="px-4 py-2 ml-3 relative rounded group overflow-hidden font-medium bg-purple-50 text-gray-700 inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-500 group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white">Submit</span>
</a>
</form>
      <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase cursor-pointer">About</h2>
            <ul className="text-gray-400  font-medium ">
                <li className="mb-4">
                    <a href="#" className=" hover:text-gray-200">About us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className=" hover:text-gray-200">Our team</a>
                </li>
                <li className="mb-4">
                    <a href="#" className=" hover:text-gray-200">Contact us</a>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Support</h2>
            <ul className="text-gray-400 dfont-medium">
                <li className="mb-4">
                    <a href="#" className="hover:text-gray-200">FAQ</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:text-gray-200">Help Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:text-gray-200">Report a Bug</a>
                </li>
               
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
            <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:text-gray-200">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:text-gray-200">Terms and Service</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:text-gray-200">Cookie Policy</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Get our apps</h2>
            <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline"><img src={appstore} className='h-10' alt="App Store" /></a>
                </li>
                <li className="mb-4">
                    <a href="#"  ><img className='h-7' src={playstore} alt="Play Store" /></a>
                </li>
              
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-slate-800 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200  sm:text-center">© 2023 Book Listing app™. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white hover:scale-125 ">
                <BsFacebook/>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white hover:scale-125 ">
                <BsInstagram/>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white hover:scale-125 ">
                <BsTwitter/>
                <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white hover:scale-125 ">
               <BsGithub/>
                <span class="sr-only">GitHub account</span>
            </a>
           

        </div>
      </div>
    </div>
</footer>

    );
  }
}

export default Footer;
