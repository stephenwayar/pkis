"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/svgs/SCEF 1.svg'
import { Icon } from "@iconify/react/dist/iconify.js"
import MaxWidthLayout from '@/layouts/MaxWidthLayout'

export default function Footer() {
  return (
    <footer className="bg-[#0B2F5B] text-white py-12">
      <MaxWidthLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-10 max-w-[20rem]">
            <div>
              <Image
                src={logo}
                alt="SCEF Logo"
                width={220}
                height={100}
                className="w-auto h-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Icon icon="mdi:map-marker" className="text-white text-xl mt-1" />
                <p>54, Falolu Street, Surulere, Lagos</p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon icon="mdi:phone" className="text-white text-xl" />
                <p>+234-907-962-1110</p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon icon="mdi:phone" className="text-white text-xl" />
                <p>+234-810-976-5897</p>
              </div>

              <div className="flex items-center space-x-3">
                <Icon icon="mdi:email" className="text-white text-xl" />
                <p>nesa.africa@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link href="/mission" className="hover:text-gray-300 transition-colors">Mission</Link></li>
              <li><Link href="/vision" className="hover:text-gray-300 transition-colors">Vision</Link></li>
              <li><Link href="/get-involved" className="hover:text-gray-300 transition-colors">Get involved</Link></li>
            </ul>
          </div>

          {/* Award Category 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Award Category</h3>
            <ul className="space-y-4">
              <li><Link href="/nominate" className="hover:text-gray-300 transition-colors">Nominate your Champion</Link></li>
              <li><Link href="/timelines" className="hover:text-gray-300 transition-colors">Award Timelines</Link></li>
              <li><Link href="/sponsorship" className="hover:text-gray-300 transition-colors">Sponsorship</Link></li>
            </ul>
          </div>

          {/* Award Category 2 and Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Award Category</h3>
              <ul className="space-y-4">
                <li><Link href="/nominate" className="hover:text-gray-300 transition-colors">Nominate your Champion</Link></li>
                <li><Link href="/timelines" className="hover:text-gray-300 transition-colors">Award Timelines</Link></li>
                <li><Link href="/sponsorship" className="hover:text-gray-300 transition-colors">Sponsorship</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Input your Email address"
                  className="p-3 text-gray-800 bg-white flex-grow rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#333] text-white p-3 rounded-r-md hover:bg-gray-700 transition-colors"
                >
                  <Icon icon="mdi:arrow-right" className="text-xl" />
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-300">
                Stay in the loop with the latest updates! Subscribe to our newsletter for exclusive insights, exciting announcements, and all things NESA 2024. Don&apos;t miss a beat.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">SCEF©2024</p>

          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms and Condition</Link>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
              <Icon icon="mdi:linkedin" className="text-xl" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
              <Icon icon="mdi:facebook" className="text-xl" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
              <Icon icon="mdi:twitter" className="text-xl" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
              <Icon icon="mdi:instagram" className="text-xl" />
            </Link>
            <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
              <Icon icon="mdi:youtube" className="text-xl" />
            </Link>
          </div>
        </div>
      </MaxWidthLayout>
    </footer>
  )
}