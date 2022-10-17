/*
 File Name: Movies.js
 Description: THe compenent us used for displaying movies list
 Author: Abhay
*/

import React,{useEffect, useState} from 'react'
import API from '../../API'

function Movies() {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() => {
        API.get("/movie/movieslist").then((resp) => { setMovies(resp.data.rows)}).catch((error) => { console.log("Error in Fetching Data")})
    }
    //console.log(movies)
  return (
    <div>
        <table>
            <tr>
                <th>Movie Name</th>
                <th>Release Data</th>
                <th>Rating</th>
            </tr>
            {movies.map((data,index) => (
                <tr>
                    <td key={data.name}>{data.name}</td>
                    <td key={data.release_date}>{data.release_date}</td>
                    <td key={data.rating}>{data.rating}</td>
                </tr>
            ))}
            </table>
    </div>
  )
}

export default Movies