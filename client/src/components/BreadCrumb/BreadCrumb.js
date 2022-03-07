import React from "react";
import './breadCrumb.css';
import { Link } from 'react-router-dom';

function BreadCrumb({page}){
    return (
        <div className="breadCrumb">
            <h4> <Link to="/">Home</Link> / {page}</h4>
            <h1>{page}</h1>
        </div>
    )
}

export default BreadCrumb;