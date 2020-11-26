import React from 'react'
import PropTypes from 'prop-types'


function BestSellers(props){
    return(
        <div>
            <h3>Book Title: {props.title}</h3>
            <p>Author: {props.author}</p>
            <p>Weeks on list: {props.weeks}</p>
            <p>Cover {props.cover}</p>
        </div>
    )
}

BestSellers.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    weeks: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired
}

export default BestSellers;