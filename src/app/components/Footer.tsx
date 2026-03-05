import Link from 'next/link';
import logo from '../assets/InteliEQLogo.png'
import Image from 'next/image';

export default function Footer() {


  return (
    <footer className="bg-brand-black px-4 py-12 mt-16">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo.src}
            alt="InteliEQ Logo"
            width={250}
            height={250}
          />
        </Link>

        <div className="flex flex-col items-start ">
          <div className="flex flex-row items-center space-x-2 text-brand-orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <span className="text-brand-white">Syracuse, NY</span>
          </div>

          {/* <div className="flex flex-row items-center space-x-2 text-brand-orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <span className="text-brand-white">Email</span>
          </div> */}

          <div className="flex flex-row items-center space-x-2 text-brand-orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <span className="text-brand-white">+1 (888)-808-4468</span>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col text-center text-sm text-brand-white space-y-2">
        <p>Made By Women in Computing at Cornell</p>
        <p>© {new Date().getFullYear()} InteliEQ. All rights reserved.</p>
      </div>
    </footer>

  );
}