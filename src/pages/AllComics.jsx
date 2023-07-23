import { useEffect, useRef, useState } from "react"
import { ComicPreview } from "../components/ComicPreview"
import { baseUrl, publicKey } from "../helpers/APIdata"




export const AllComics = () => {

    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(20)
    const [comics, setComics] = useState([])
    

    const showPerPage = useRef()
    
    useEffect(() => {
    
    
      fetch( `${ baseUrl }v1/public/comics?limit=${ limit }&offset=${ offset }&apikey=${ publicKey }` )
        .then( resp => resp.json() )
        .then( data => {
            setComics(data.data);
            
            console.log(data)
        })
   }, [ offset, limit ])
    
   
  return (      
      <div>

        <p>Actualmente hay un total de { comics.total } comics</p>

        <div className="flex flex-wrap gap-2 justify-center">
            {
                comics.results?.map( comic => {
                    return(
                        <ComicPreview key={ comic.id } comic={ comic } />
                    )
                })
            }
        </div>
        



        <div>Show per page: 
            <select ref={ showPerPage } onChange={() => setLimit(showPerPage.current.value) } >
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
                <option value="80">80</option>
                <option value="100">100</option>
            </select>
            <button onClick={ () => setOffset( offset + limit )}>Siguiente</button>
            <button onClick={ () => setOffset( offset - limit )}>anterior</button>
        </div>
    </div>
  )
}