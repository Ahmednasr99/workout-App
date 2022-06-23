import React from "react";

function Search({setChampions , champions, allChampions}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => { 
          if (!e.target.value) return setChampions(allChampions);
          let search = champions.filter((element) => {
            return element.name?.includes(e.target.value)
          })
          if (search.length > 0) setChampions(search)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;