import React from 'react'

export default function SearchPosts(props) {

    return (
        <div className="searchForm">
            <input
                type="text"
                name="search"
                value={props.searchEntry}
                placeholder="Search for a Post"
                onKeyPress={props.onKeyPress}
                onChange={e => props.handleChange(e)} />
            <button type="submit" onClick={e => props.handleSubmit(e)}>
                Search
            </button>
        </div>
    );
}