import React from "react"
import TableRow from "./TableRow"
import "./TableBody.css"

export default function TableBody({ donations }){

    return(
        <tbody className="donation-table-body">
            {donations.map((donation) => {
               return <TableRow key={donation.donation.id} donation={donation} />
            })}
        </tbody>
    )
};