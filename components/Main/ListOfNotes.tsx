import EachNote from "./EachNote"

export default function ListOfNotes() {

  // const data = await fetch("http://localhost:3000/api/hello/data");
  // console.log(data)
  // const res  = await data.json();
  const res  = [
    {
      "url": "rr8ila2s57",
      "title": "ocean of stars"
    },
    {
      "url": "v3u1la07iqc",
      "title": "like Thorfinn"
    },
    {
      "url": "f2io9nf39ie",
      "title": "My clan"
    },
    {
      "url": "werggfasdfs",
      "title": "Gotei 13"
    },
    {
      "url": "f24gt3vt62f",
      "title": "Class 1-A"
    },
    {
      "url": "90m90j292e2",
      "title": "Strawhat"
    }
  ]

  // <ListOfNotes title={"oceans"} url={"rr8ila2s57"}/>
	return (
    <div className="space-y-2">
    	<p className="text-">Notes</p>
    	<div className="grid gap-2 grid-cols-fluid w-full bg-orange-">
	      {
	        res.map((note: any)=>(
	          <EachNote title={note.title} url={note.url}/>
	        ))
	      }
	    </div>
    </div>
	)
}