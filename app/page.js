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
      <section className="grid grid-cols-2 h-[70vh]">
        <div className="bg-[#6c5b8b] flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppinsBlack.className} font-sans`}>
            The best URL shortener in the market.  
            
          </p>
          <p className="px-16 text-center text-cyan-200">
            Linkly makes sharing links easier, faster, and cleaner.  
            Say goodbye to long, messy URLs — simplify your web presence.  
            It's free, fast, and requires no signup. 
            Trusted by developers, creators, and marketers alike.
          </p>
          <div className='flex gap-3 justify-center'>
              <Link href='/shorten'><button className=' bg-[#2a172c] text-white rounded-xl font-bold p-3 shadow-xl py-1'>Try Now</button></Link>
              <Link href='/github'><button className='bg-[#2a172c] text-white rounded-xl font-bold p-3 shadow-xl py-1'>Github</button></Link>
            </div>

        </div>
        <div className="bg-[#6c5b8b] flex justify-start relative">
          <Image
            src="/vector.png"
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Vector image"
          />
        </div>
      </section>
    </main>
  );
}
