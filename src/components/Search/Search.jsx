import React from 'react';

const Search = (props) => {
  return (
		<div>
			<div className="row">
				<div className="col-lg-6">
					<div className="input-group">
							<input onChange={(e) => props.handleSearchChange(e.target.value)} type="text" className="form-control" placeholder="Search for..." />
					</div>
				</div>
			</div>
		</div>
  )
}

export default Search;
