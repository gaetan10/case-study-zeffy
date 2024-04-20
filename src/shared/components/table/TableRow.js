import React from "react";

import { dateFormatter } from "../../utils/dateUtils";
import { dollarFormatter } from "../../utils/currencyUtils";

export default function TableRow({donation}){

    return(
        <tr>
            <td>{donation.donation.firstName}</td>
            <td>{donation.donation.lastName}</td>
            <td>{dateFormatter(donation.donation.createdAtUtc)}</td>
            <td>{dollarFormatter(donation.donation.amount)}</td>
        </tr>
    )
};