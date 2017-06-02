import React from 'react';

const Catalogue = (props) => {
  return (
    <div>
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
            <tr>
              <td>Item Name 1</td>
              <td>Price 1</td>
              <td>Description 1</td>
              <td>SKU 1</td>
              <td>
                  <a href="">Add</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                  <a href="">Delete</a>
              </td>
            </tr>
            <tr>
              <td>Item Name 2</td>
              <td>Price 2</td>
              <td>Description 2</td>
              <td>SKU 2</td>
              <td>
                  <a href="">Add</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                  <a href="">Delete</a>
              </td>
            </tr>
            <tr>
              <td>Item Name 3</td>
              <td>Price 3</td>
              <td>Description 3</td>
              <td>SKU 3</td>
              <td>
                  <a href="">Add</a>&nbsp;&nbsp;|&nbsp;&nbsp; 
                  <a href="">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Catalogue;