import React from 'react'

const SearchSuggestion = (props) => {
  return (
    <div>
        <div className=" md:text-lg opacity-70 text-sm italic mb-3 ">
          <p> showing results for : {props.prevSearch}</p>
        </div>
    </div>
  )
}

export default SearchSuggestion
