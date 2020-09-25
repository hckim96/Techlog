import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const LS_JWT_TOKEN = "JWT_TOKEN"

export const Header = ({userId, isAuthenticated, logout}) => {

    return (
        <div className = "container-fluid pr-4 pl-4">
            <header className="blog-header py-3" style = {{borderBottom: "1px solid #e5e5e5"}}>
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                    </div>
                    <div className="col-4 text-center">
                        <Link to =  "/" className="blog-header-logo text-dark">Techlog</Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <div className="text-muted" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </div>
                        
                        {isAuthenticated &&
                            <div className = "row">
                                <Link className = "btn btn-sm btn-outline-secondary mr-2 ml-2 pt-2" to = "/write">
                                    Write Post
                                </Link>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {userId}
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right " aria-labelledby="dropdownMenuButton" style = {{background : "white"}}>
                                        <Link className="dropdown-item" onClick = {logout}to = "/">Log Out</Link>
                                    </div>
                                </div>
                            </div>
                        }
                        {!isAuthenticated &&
                            <div>
                            <Link to = "/signin" className="btn btn-sm btn-outline-secondary mr-2">Sign in</Link>
                            <Link to = "/signup" className="btn btn-sm btn-outline-secondary">Sign up</Link>
                            </div>
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}
