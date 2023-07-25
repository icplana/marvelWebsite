import { Link } from "react-router-dom"


export const HomeLanding = () => {
  return (
    <div className="mt-5 ml-2">
        <h1 className="text-3xl mb-3">Welcome!</h1>

        <p className="mb-3 text-lg">If you are here probably you are interested in knowing more about Marvel.</p>

        <p className="mb-3">
            Marvel is a fantasy universe that is made known through comics and movies.
            There are currently more than 55,000 comics! (according to Marvel API).
            On this website you can search through all of them.
        </p>
    
        <p>Also you will be able to:</p>
        <ul>
            <li>
                <span className="font-bold">Filter by character.</span> If there is a character that you like you will be able to get a lot of information about him/her such as all the comics where him/her appears.
            </li>

            <li>
                    <span className="font-bold">Filter by comic.</span> If there is a comic that you like you will be able to get a lot of information such as the creator of the comic or the characters that appear in that comic.
            </li>

            <li>
                    <span className="font-bold">Filter by creator.</span> If there is a creator that you like you will be able to find information such as all the comics where she/he contributed.
            </li>

            <li>
                <span className="font-bold">Filter by events.</span> 
                If there is an event that you like you will be able to get information such as the creators that contributed or the characters that appear in that event.
                <Link to="/info/eventsinfo">More info about the events.</Link>
                
            </li>

            <li>
                <span className="font-bold">Filter by series.</span> 
                If there is a serie that you like you will be able to find information such as creators that contributed or characters that appear in that serie.
                <Link to="/info/seriesinfo">More info about the series.</Link>                 
            </li>

            <li>
                <span className="font-bold">Filter by stories</span> 
                If there is a story that you like you will be able to find information such as creators that contributed or characters that appear in that serie.
                <Link to="/info/storiesinfo">More info about the stories.</Link>  
            </li>
        </ul>
          
        



       
    </div>
  )
}
