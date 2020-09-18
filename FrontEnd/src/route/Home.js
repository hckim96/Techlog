import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Header } from '../component/Header'

const API_URL = "/v1/api";
const LS_JWT_TOKEN = "JWT_TOKEN";
export const Home = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId,setUserId] = useState("");
    useEffect(() => {
        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);
        axios.get(API_URL + "/isAuthenticated", {headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
        .then(res => {
            setIsAuthenticated(true);
        })
        .catch(res => console.log("catch -> " + res));
    }, []);

    const toggleIsAuthenticated = () => {
        setIsAuthenticated(!isAuthenticated);
    }
    return (
        <div>
            <Header isAuthenticated = {isAuthenticated} toggleIsAuthenticated = {toggleIsAuthenticated}></Header>
            {isAuthenticated ? "authenticated" : "not authenticated"}
            <button onClick = {() => {
                        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);
                        if (jwtToken != null) {
                            axios.get(API_URL + "/user/test", {headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
                                .then(res => console.log("/user/test then -> " + res))
                                .catch(res => console.log("/user/test catch -> " + res));
                        }
        }}>/v1/api/user/test</button>
            <button onClick = {() => {
                        const jwtToken = localStorage.getItem(LS_JWT_TOKEN);
                        if (jwtToken != null) {
                            axios.get(API_URL + "/admin/test", {headers:{"X-AUTH-TOKEN": `${jwtToken}`}})
                                .then(res => console.log("/admin/test then -> " + res))
                                .catch(res => console.log("/admin/test catch -> " + res));
                        }
        }}>/v1/api/admin/test</button>

        </div>
    )
}
