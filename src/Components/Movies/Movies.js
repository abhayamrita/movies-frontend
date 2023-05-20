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
    <div className="table-responsive">
        <table className="table table-borderless table-centered table-custom align-middle table-nowrap mb-0">
            <thead className='text-muted table-light'>
                <tr>
                    <th>Movie Name</th>
                    <th>Release Data</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((data,index) => (
                    <tr key={index}>
                        <td key={data.name}>{data.name}</td>
                        <td key={data.release_date}>{data.release_date}</td>
                        <td key={data.rating}>{data.rating}</td>
                    </tr>
                ))}
            </tbody>
            </table>
    </div>
  )
}

export default Movies