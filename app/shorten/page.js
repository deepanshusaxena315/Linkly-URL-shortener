"use client"
import React ,{useState} from 'react'
import Link from 'next/link'


const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generatedLinks, setGeneratedLinks] = useState([])

    const generate = (params) => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
};

      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setGeneratedLinks(prev => [...prev, `${process.env.NEXT_PUBLIC_HOST}/${result.shorturl || shorturl}`])
          seturl("")   
          setshorturl("")
          console.log(result)
          alert(result.message)
        })
  .catch((error) => console.error(error));
    }
    
  return (
    <div className='mx-auto max-w-lg bg-purple-200 my-16 p-6 rounded-lg'>
      <h1 className='text-2xl font-bold'>Generate your short URLs</h1>
      <div className='flex flex-col gap-4'>
        <input type="text" 
        placeholder='Enter your URL' 
        value={url}
        onChange={e =>seturl(e.target.value)}
        className='px-2 py-2 bg-white focus:outline-purple-600 rounded-md'/>
        <input type="text" 
        placeholder='Enter your preferred short URL text'
        value={shorturl}
        onChange = {e=>setshorturl(e.target.value)}
        className='px-2 py-2 bg-white focus:outline-purple-600 rounded-md' />
        
        <button onClick={generate} className='bg-purple-500 rounded-xl font-bold p-3 shadow-xl py-1'>Generate</button>
      </div>
      {generatedLinks.length > 0 && (
        <div>
          <span className='font-bold text-lg'>Your Links</span>
          <ul>
            {generatedLinks.map((link, index) => (
              <li key={index}><Link target="_blank" href={link}>{link}</Link></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Shorten
