import React from 'react';
// import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWindows } from '@fortawesome/free-brands-svg-icons';
import playstore from '../assets/logo_play_store.png';
import appstore from '../assets/AppStore_Icon.png';

class Footer extends React.Component {
  render() {
    return (
      // <footer className="footer">
      //   <div className="footer-container">
      //     <div className="footer-section">
      //       <h3 className="footer-section-title">About</h3>
      //       <ul className="footer-section-list">
      //         <li><a href="#">About Us</a></li>
      //         <li><a href="#">Our Team</a></li>
      //         <li><a href="#">Contact Us</a></li>
      //       </ul>
      //     </div>
      //     <div className="footer-section">
      //       <h3 className="footer-section-title">Support</h3>
      //       <ul className="footer-section-list">
      //         <li><a href="#">FAQ</a></li>
      //         <li><a href="#">Help Center</a></li>
      //         <li><a href="#">Report a Bug</a></li>
      //       </ul>
      //     </div>
      //     <div className="footer-section">
      //       <h3 className="footer-section-title">Legal</h3>
      //       <ul className="footer-section-list">
      //         <li><a href="#">Terms of Service</a></li>
      //         <li><a href="#">Privacy Policy</a></li>
      //         <li><a href="#">Cookie Policy</a></li>
      //       </ul>
      //     </div>
      //     <div className="footer-section">
      //       <h3 className="footer-section-title">Social</h3>
      //       <div className="footer-social-icons">
      //         <a href="#" className="footer-social-icon">
      //           <FontAwesomeIcon icon={faFacebookF} />
      //         </a>
      //         <a href="#" className="footer-social-icon">
      //           <FontAwesomeIcon icon={faTwitter} />
      //         </a>
      //         <a href="#" className="footer-social-icon">
      //           <FontAwesomeIcon icon={faInstagram} />
      //         </a>
      //       </div>
      //     </div>
      //     <div className="footer-section">
      //       <h3 className="footer-section-title">Get Our Free Apps</h3>
      //       <div className="footer-app-links">
      //         <a href="#" className="footer-app-link">
      //           <img src={playstore} alt="Play Store" />
      //         </a>
      //         <a href="#" className="footer-app-link">
      //           <img src={appstore} alt="App Store" />
      //         </a>
      //       </div>
      //     </div>
      //     <div className="footer-section">
      //       <h3 className="footer-section-title">Subscribe to Our Newsletter</h3>
      //       <form className="footer-newsletter-form">
      //         <input type="email" placeholder="Enter your email" className="footer-newsletter-input" />
      //         <button type="submit" className="footer-newsletter-submit">Subscribe</button>
      //       </form>
      //     </div>
      //   </div>
      //   <div className="footer-bottom">
      //     &copy; 2023 Book Listing App. All rights reserved.
      //   </div>
      // </footer>
      // 
      
<footer className="bg-slate-800 rounded-t-lg dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
    <p class="text-center text-lg font-semibold text-white pt-3">Subscribe to newsletter</p>
    <form className="flex justify-center mt-5 mb-5">   
    <label for="simple-search" className="sr-only">Email</label>
    <div className="relative">     
        <input type="text" id="simple-search" className=" border w-64 lg:w-96  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" required/>
    </div>
    {/* <button type="submit" className="p-2.5 ml-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
        <span className="sr-only">Email</span>
        Submit
    </button> */}
    <a href="#_" className="px-4 py-2 ml-3 relative rounded group overflow-hidden font-medium bg-purple-50 text-gray-700 inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-500 group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white">Submit</span>
</a>
</form>
      <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white cursor-pointer">About</h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium ">
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
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Support</h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium">
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
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-400 dark:text-gray-400 font-medium">
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
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Get our apps</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline"><img src={appstore} className='h-10' alt="App Store" /></a>
                </li>
                <li className="mb-4">
                    <a href="#"  ><img className='h-7' src={playstore} alt="Play Store" /></a>
                </li>
              
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-slate-800 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Book Listing app™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white hover:scale-125 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white hover:scale-125 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white hover:scale-125 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span class="sr-only">Twitter page</span>
            </a>
            <a href="#" class="text-gray-400 hover:text-white hover:scale-125 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
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
