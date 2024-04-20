import React from "react"
import './TableHeader.css'

export default function TableHeader(){

    return(
        <thead className="donation-table-head">
            <tr> 
                <th>First Name</th> 
                <th>Last Name</th> 
                <th>Date</th> 
                <th>Amount</th> 
            </tr>
        </thead>
    )
};