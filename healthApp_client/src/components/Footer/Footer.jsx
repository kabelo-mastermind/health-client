import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="py-10 bg-white sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <img className="w-auto h-9" src={logo}alt="Logo" />
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              We offer comprehensive healthcare services tailored to your needs. From routine check-ups to specialized treatments, our dedicated team is here to support your well-being.
            </p>
            <a href="#" title="Start Live Chat" className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start Live Chat
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Healthcare Services</p>
            <ul className="mt-6 space-y-5">
              <li>
                <a href="#" title="General Check-ups" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> General Check-ups </a>
              </li>
              <li>
                <a href="#" title="Specialist Consultations" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Specialist Consultations </a>
              </li>
              <li>
                <a href="#" title="Emergency Services" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Emergency Services </a>
              </li>
              <li>
                <a href="#" title="Telehealth" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Telehealth </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Help</p>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" title="Customer Support" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </a>
              </li>
              <li>
                <a href="#" title="Appointment Details" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Appointment Details </a>
              </li>
              <li>
                <a href="#" title="Terms & Conditions" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </a>
              </li>
              <li>
                <a href="#" title="Privacy Policy" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Resources</p>
            <ul className="mt-6 space-y-5">
              <li>
                <a href="#" title="Health eBooks" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Health eBooks </a>
              </li>
              <li>
                <a href="#" title="Healthcare Tutorials" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Healthcare Tutorials </a>
              </li>
              <li>
                <a href="#" title="Health Tips Blog" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Health Tips Blog </a>
              </li>
              <li>
                <a href="#" title="YouTube Health Channel" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> YouTube Health Channel </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-semibold text-gray-900">Extra Links</p>
            <ul className="mt-6 space-y-5">
              <li>
                <a href="#" title="General Health Info" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> General Health Info </a>
              </li>
              <li>
                <a href="#" title="Appointment Rescheduling" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Appointment Rescheduling </a>
              </li>
              <li>
                <a href="#" title="Billing Information" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Billing Information </a>
              </li>
              <li>
                <a href="#" title="Contact Us" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Contact Us </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">© Copyright 2024, All Rights Reserved by PrimeWell</p>

          <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
            <li>
              <a
                href="#"
                title="Twitter"
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.584-.99 4.01 4.01 0 0 1-1.77 2.21 7.97 7.97 0 0 0 2.293-.625 8.027 8.027 0 0 1-1.983 2.059z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Facebook"
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8.037v-1.54c0-.993.379-1.948 1.057-2.663.679-.715 1.562-1.057 2.577-1.057h1.907v-2.275h-2.457c-3.082 0-5.61 2.496-5.61 5.484v1.681h-2.692v2.275h2.692v6.293h2.717v-6.293h2.783l.348-2.275h-3.131z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="Instagram"
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.084 0 3.516.012 4.75.068 1.185.054 2.206.243 3.027.565a5.992 5.992 0 0 1 2.613 2.613c.323.821.51 1.842.564 3.027.056 1.234.068 1.665.068 4.75.068s3.516-.012 4.75-.068c1.185-.054 2.206-.243 3.027-.565a5.992 5.992 0 0 1 2.613-2.613c.323-.821.51-1.842.564-3.027.056-1.234.068-1.665.068-4.75s-.012-3.516-.068-4.75c-.054-1.185-.243-2.206-.565-3.027a5.992 5.992 0 0 1-2.613-2.613c-.821-.323-1.842-.51-3.027-.564-1.234-.056-1.665-.068-4.75-.068s-3.516.012-4.75.068c-1.185.054-2.206.243-3.027.565a5.992 5.992 0 0 1-2.613 2.613c-.323.821-.51 1.842-.564 3.027-.056 1.234-.068 1.665-.068 4.75s.012 3.516.068 4.75c.054 1.185.243 2.206.565 3.027a5.992 5.992 0 0 1 2.613 2.613c.821.323 1.842.51 3.027.564 1.234.056 1.665.068 4.75.068zM12 0c-3.095 0-3.476.012-4.696.068-1.2.056-2.256.231-3.154.593a7.6 7.6 0 0 0-3.372 2.794c-.693.743-1.175 1.644-1.43 2.635-.278 1.045-.397 2.15-.397 4.572s.119 3.527.397 4.572c.255.991.737 1.892 1.43 2.635a7.601 7.601 0 0 0 3.372 2.794c.898.362 1.954.537 3.154.593 1.22.056 1.601.068 4.696.068s3.476-.012 4.696-.068c1.2-.056 2.256-.231 3.154-.593a7.6 7.6 0 0 0 3.372-2.794c.693-.743 1.175-1.644 1.43-2.635.278-1.045.397-2.15.397-4.572s-.119-3.527-.397-4.572c-.255-.991-.737-1.892-1.43-2.635a7.601 7.601 0 0 0-3.372-2.794c-.898-.362-1.954-.537-3.154-.593-1.22-.056-1.601-.068-4.696-.068zM12 5.845a6.155 6.155 0 1 0 0 12.31 6.155 6.155 0 0 0 0-12.31zm0 10.43a4.275 4.275 0 1 1 0-8.55 4.275 4.275 0 0 1 0 8.55zm4.483-10.236a1.065 1.065 0 1 0-2.13 0 1.065 1.065 0 0 0 2.13 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                title="LinkedIn"
                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.511 2.511 0 1 0 0 5.022 2.511 2.511 0 0 0 0-5.022zm-.054 13.474h4.108v-8.318H4.926v8.318zm7.597-5.106v-1.142c0-2.736-1.473-4.245-3.64-4.245-1.677 0-2.929.558-3.48 1.634-.179.264-.223.626-.223.977v1.776h4.081v-1.023c.021-.088.028-.174.028-.261 0-.986-.616-1.497-1.664-1.497-.931 0-1.597.662-1.597 1.477v.934h3.339v5.204h3.503v-5.106zm7.574 5.106v-7.829c0-4.358-2.33-6.383-5.434-6.383-2.458 0-3.548 1.28-4.143 2.201v-1.893h-3.397c.045 1.58 0 8.318 0 8.318h3.397v-4.86c.546-.784 1.413-1.428 2.619-1.428 1.933 0 3.269 1.249 3.269 3.914v2.834h.034z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
