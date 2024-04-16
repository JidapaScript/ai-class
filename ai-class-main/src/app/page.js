"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {

  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)



  async function note(event) {
    event.preventDefault();
    setIsLoading(true);


    const name = event.target.name.value;
    const animal = event.target.animal.value;
    const personality = event.target.personality.value;

    const response = await axios.post("/api/create-image", {
      name,
      animal,
      personality
    })
    // console.log(response.data.answer)
    setAnswer(response.data.answer)
    setIsLoading(false);

  }

  return (
    <div>
      <form onSubmit={note} className="flex flex-col">

        <input className="border-slate-500" type="text" name="name" placeholder="What's your name?" />

        <input className="border-slate-500" type="text" name="animal" placeholder="What's your spirit animal?" />

        <input className="border-slate-500" type="text" maxLength="25" name="personality" placeholder="How would your friend describe you?" />

        <button type="submit" disabled={isLoading}>{isLoading ? 'Loading' : 'Submit'}</button>

      </form>
      <p className="p-4">{isLoading ? 'Loading...' : ''}</p>
      <p className="p-4">{answer}</p>
      { answer && <img src={answer} className="w-full" />}
    </div>
  );
}