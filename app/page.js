import localFont from "next/font/local";
import Image from "next/image";
import Link from 'next/link'

const poppinsBlack = localFont({
  src: "./fonts/Poppins-Black.ttf", // use relative path from *page.js*
  variable: "--font-poppins-black",
  display: "swap",
});

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="bg-purple-100 flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppinsBlack.className} font-sans`}>
            The best URL shortener in the market.  
            
          </p>
          <p className="px-16 text-center">
            Linkly makes sharing links easier, faster, and cleaner.  
            Say goodbye to long, messy URLs — simplify your web presence.  
            It's free, fast, and requires no signup. 
            Trusted by developers, creators, and marketers alike.
          </p>
          <div className='flex gap-3 justify-center'>
              <Link href='/shorten'><button className='bg-purple-500 rounded-xl font-bold p-3 shadow-xl py-1'>Try Now</button></Link>
              <Link href='/'><button className='bg-purple-500 rounded-xl font-bold p-3 shadow-xl py-1'>Github</button></Link>
            </div>

        </div>
        <div className="bg-red-300 flex justify-start relative">
          <Image
            src="/vector.jpg"
            fill
            alt="Vector image"
          />
        </div>
      </section>
    </main>
  );
}
