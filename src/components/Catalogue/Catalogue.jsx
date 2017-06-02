import React from 'react';
import Search from './../Search/Search'

const Catalogue = (props) => {

  return (
    <div>
      <Search handleSearchChange={props.handleSearchChange} />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>SKU</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.filterItems.map(e => {
              return (
                <tr key={e.SKU}>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>{e.description}</td>
                  <td>{e.SKU}</td>
                  <td>
                      <a href="">Add</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                      <a href="">Delete</a>
                  </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Catalogue;
