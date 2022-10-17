/*
 File Name: API.js
 Description: THe file is used for define the backend APi(Node js)
 Author: Abhay
*/

import axios from 'axios'
export default axios.create({
    baseURL:"http://localhost:3002",
    headers:{

    }
})