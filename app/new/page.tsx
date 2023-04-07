"use client"

// import axios, { AxiosRequestConfig } from "axios"

// import ShortUniqueId from "short-unique-id";
// Instantiate

// Random UUID
// document.write(uid());

// Sequential UUID
// document.write(uid.seq());
import Container from '@/components/Main/Container'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
// import React from 'react'

export default function Page() {
  
  const router = useRouter();

  const [ title, setTitle ] = useState("")
  const [ error, setError ] = useState("")
  const [ message, setMessage ] = useState("")

  const onChangeTitle = ()=>{
    setTitle(title)
  }

  async function saveNote() {
    // const formDetails = { title, content:"" }
    // console.log(`body: ${JSON.stringify(formDetails)}`)
    const response = await fetch("/api/createNote", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    // console.log(`from <response::{api/notes}/> ${JSON.stringify(response)}`)
    const d = await response.json();
    // if (!d.ok) console.log(`d: ${JSON.stringify(d)}`)
    await router.push("/");
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (title) {
      try {
        await saveNote()
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("No title is given!");
      return;
    }
  }

  return (
    <Container>
      <div className="w-full h-full flex flex-col">
        <div className="flex">
          <Link href={"/"}>
            <div className="flex px-2 py-1 rounded-full hover:bg-blue-200 text-blue-500hover:text-blue-600 items-center space-x-2">
              <i className="icon icon-ic_fluent_arrow_left_20_regular flex text-lg"></i>
              <p className="">Home</p>
            </div>
          </Link>
        </div>
        <div className="w-full h-full p-4 bg-rose- flex items-center justify-center">
          <div className="md:w-7/12 lg:w-5/12 h- space-y-4 mx-auto bg-amber- p-4 rounded-lg border border-gray-200 shadow-">
            <h1 className="font-medium text-base">Create new note</h1>
            <form onSubmit={handleSubmit}>
            {/* <form> */}
              {
                error ? (<div className="p-2 bg-rose-200 text-rose-500 rounded-md">
                          {error}
                        </div>) : null
              }
              {
                message ? (<div className="p-2 bg-blue-200 text-blue-500 rounded-md">
                          {message}
                        </div>) : null
              }
              <div className="flex flex-col space-y-10">
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="title" className="text-sm">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title" className="bg-transparent border border-gray-200 p-1 rounded-lg focus:outline-none ring ring-transparent focus:ring-violet-500/50 focus:border-transparent"/>
                  </div>
                </div>
                <div>
                  <button type="submit" className="px-2 py-1 rounded-full hover:bg-green-200 text-green-500 hover:text-green-600 border-2 border-green-300 hover:border-transparent">
                    <i className="icon icon- flex text-lg"></i>
                    <p className="">Create</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
}
