import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import "../../src/App.css";
import ReactStars from 'react-stars'

const Filter = (setSearchValue,setRating) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={setSearchValue.value}
				onChange={(event) => setSearchValue.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
    
    <ReactStars  count={5}
    onChange={setRating}
    size={24}
    isHalf={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
/>
		</div>
    
	);
};

export default Filter;

