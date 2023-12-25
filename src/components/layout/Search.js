import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const Search = () => {

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault()

        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate('/home')
        }
    }

    return (
        <MDBInputGroup onSubmit={searchHandler} >
      <MDBInput label='Search' onChange={(e) => setKeyword(e.target.value)} id="search_field" />
      <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn>
    </MDBInputGroup>

        /* <form onSubmit={searchHandler} >
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Course Name ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
        </form> */
    )
}

export default Search
