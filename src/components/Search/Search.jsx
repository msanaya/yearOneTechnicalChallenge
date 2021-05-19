import React, { useState } from "react";


const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = e => {
    setSearchInput(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchInput(e.target.value)
    props.search(searchInput);
    const resetSearch = () => {
      this.setState({
        itemvalues: [{}]
      })
    };
    // resetSearch();
  }

  //  const handleSubmit = e => {
  //   e.preventDefault();
  //   props.search(searchInput);
  //   const resetSearch = () => {
  //     this.setState({
  //       itemvalues: [{}]
  //     })};
  //   resetSearch();
  // }




  return (
    <form className="search">
      <input
        id="text-input"
        value={searchInput}
        onChange={handleChange}
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


// c

//     return (

//     );
// }

// export default Search;