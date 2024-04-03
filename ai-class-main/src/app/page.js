"use client"
import axios from "axios";


export default function Home() {

  async function note(event) {
    event.preventDefault();
    
    const name = event.target.name.value;
    const age = event.target.age.value;
    const topic = event.target.topic.value;

    const response = await axios.post("api/create-story", {
      name: name,
      age: age,
      topic: topic
    })
    console.log(response)
    
  }

  return (
    <form onSubmit={note} className="flex flex-col">
      <input className="border-slate-500" type="text" name="name" placeholder="what's your name?" />
      <input className="border-slate-500" type="number" name="age" placeholder="how old are you?" />
      <input className="border-slate-500" type="text" name="topic" placeholder="what's it about?" />
      <button type="submit">Send</button>
    </form>
  );
}
