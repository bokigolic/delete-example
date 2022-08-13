import { useState } from "react";
const DeleteExample = () => {
  const preset = [
    {
      id: 1,
      name: "Tom Cruise",
      movie: "Top Gun"
    },
    {
      id: 2,
      name: "Matt Damon",
      movie: "Good Will Hunting"
    },
    {
      id: 3,
      name: "Will Smith",
      movie: "Pirates of the Caribbean",
    },
    {
      id: 4,
      name: "Samuel L. Jackson",
      movie: "Shaft"
    },
    {
      id: 5,
      name: "Marlon Brando",
      movie: "Apocalypse Now"
    },
    {
      id: 6,
      name: "Robert De Niro",
      movie: "Intern",
    }
  ]

  const [movies, setMovies] = useState(preset)

  const deleteMovie = (idMovie)=>{
    console.log("delete movie", idMovie)
  }

  return (
    <form>
      <div>
        <h1>Delete example</h1>
        <div>
          {
            movies.map((x) =>{
              return(
                <div>{x.name }
                {x.movie}

                <button onClick={(e)=>{deleteMovie(x.id)}}>Delete</button>
                </div>
                
              )
            })
          }
        </div>



      </div>
    </form>
  )

}

export default DeleteExample;