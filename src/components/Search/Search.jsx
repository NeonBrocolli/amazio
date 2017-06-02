import React from 'react';

const Search = () => {
  return (
    <div>
      <form onSubmit={(e) => props.showItem(e, this.state.item) }>
        <input onChange={(e) => props.showItem(e, this.state.item) type="text" className="form-control" }>
        <input type="Submit" value="Click me" />
      </form>
    </div>
  )
}

export default Search
