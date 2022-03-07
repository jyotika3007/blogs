import React from "react";
import './breadCrumb.css';

function BreadCrumb({page}){
    return (
        <div className="breadCrumb">
            <h4>Home / {page}</h4>
            <h1>{page}</h1>
        </div>
    )
}

export default BreadCrumb;