import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");



  const handleSubmit = e => {
    e.preventDefault();
    props.search(searchInput);
    (const resetSearch = () => {
      this.setState({
        itemvalues;[{};]
  })

}

  }

  };

return (
  <form className="search">
    <input
      id="text-input"
      value={searchValue}
      // onChange={handleSearchInputChanges}
      type="text"
    />
    <input
      type="submit"
      value="SEARCH"
      onSubmit={handleSubmit} />
  </form>
);
}

export default Search;

// import React, { useState } from "react";


// const Search = (props) => {
//     const [searchValue, setSearchValue] = useState("");

//     const handleSearchInputChanges = (e) => {
//         setSearchValue(e.target.value);
//     }

//     const resetInputField = () => {
//         setSearchValue("")
//     }

//     const callSearchFunction = (e) => {
//         e.preventDefault();
//         props.search(searchValue);
//         resetInputField();
//     }

//     return (

//     );
// }

// export default Search;