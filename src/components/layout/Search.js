import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault()

        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate('/')
        }
    }

    return (
        <form onSubmit={searchHandler} >
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Course Name ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Search
