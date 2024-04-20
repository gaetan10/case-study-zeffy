import React from "react"
import TableHeader from "./TableHeader"
import TableBody from "./TableBody"
import "./Table.css"

export default function Table({ donations, previousPage, currentPage, nextPage }){

    return(
        <div className="table-component">
            <table className="donation-table">
                <TableHeader />
                <TableBody donations={donations} />
            </table>
            <div className="pagination-buttons"> 
                <p>{`Page ${currentPage}`}</p>                   
                <button onClick={previousPage} disabled={currentPage === 1}>Prev</button>
                <button onClick={nextPage} disabled={currentPage === 5}>Next</button>
            </div>  
        </div>
    )
};