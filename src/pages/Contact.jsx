import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { contactInfo } from '../data';

export default function Contact() {
  return (
    <div className="min-h-screen  mx-auto pb-12 animate-fadeIn">

      <div className='w-full h-80 border-t-4 border-customPurple relative'>
       <p className="text-6xl text-customBlue font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
          Contact Us
        </p>
        <img src="/contactBanner.jpg" alt="society" className='w-full h-full object-cover object-[100%_50%]' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative mb-10">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block ">
            Contact Us
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange "></div>
        </div>

        {/* content */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaUser className="h-5 w-5 text-primary" />
                  <span className="ml-2">{contactInfo.name}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MdEmail className="h-5 w-5 text-primary" />
                  <span className="ml-2">{contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MdLocationOn className="h-5 w-5 text-primary flex-none" />
                  <span className="ml-2">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Become our member</h2>
              <form className="mt-6 space-y-6" action='https://formspree.io/f/xyzpwewl' method='POST'>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 