'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const getUrl = async () => {
      const resp = await fetch('https://pget.vercel.app/');
      const data = await resp.json();
      setUrl(data);
    };
    getUrl();
  }, []);

  return (
    <footer className="mt-auto w-full bg-gray-200/20 px-4 pt-4 pb-6 sm:p-2 md:px-12 md:pt-12 lg:px-24">
      <div className="flex items-center justify-around md:items-start lg:justify-normal">
        <div className="font-logo mr-0 mb-6 flex flex-col items-center space-y-4 space-x-4 pt-4 text-3xl text-black outline-none md:mb-0 lg:mr-auto dark:text-white">
          <Image
            src={'/image.png'}
            width={120}
            height={120}
            alt="Kaushik Verma Picture"
            className="border-opacity-30 w-16 self-center rounded-full border-2 border-solid border-gray-300 p-0.5 shadow-2xl lg:w-24"
            style={{ color: 'transparent' }}
          />

          <div className="mr-auto text-center text-base text-gray-400 outline-none lg:text-lg">
            Made by
            <span className="px-1 underline underline-offset-4">
              <Link target="blank" href={url}>
                Kaushik Verma
              </Link>
            </span>
            🧡
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row lg:gap-16">
          <div>
            <h4 className="mb-2 font-bold text-gray-600 uppercase dark:text-white">Navigation</h4>
            <ul className="list-none text-gray-600 dark:text-gray-500">
              <li className="mb-1 dark:text-gray-400">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-1 dark:text-gray-400">
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li className="mb-1 dark:text-gray-400">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="mb-1 dark:text-gray-400">
                <Link href="/subscription">Subscription</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-bold text-gray-600 uppercase dark:text-white">Legal</h4>
            <ul className="list-none text-gray-600 dark:text-gray-500">
              <li className="mb-1">
                <Link className="dark:text-gray-400" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link className="dark:text-gray-400" href="/terms">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-1">
                <Link className="dark:text-gray-400" href="/refund-policy">
                  Cancellation & Refund
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-bold text-gray-600 uppercase dark:text-white">About</h4>
            <ul className="list-none text-gray-600 dark:text-gray-500">
              <li className="mb-1">
                <Link className="dark:text-gray-400" href="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-2 text-center lg:flex lg:items-center lg:justify-between">
        <span className="w-full text-center text-sm text-gray-700 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <Link target="blank" className="underline dark:text-gray-400" href={url}>
            Kaushik Verma
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
