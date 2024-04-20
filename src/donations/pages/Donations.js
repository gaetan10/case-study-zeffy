import React, { useEffect, useState } from "react"
import Table from "../../shared/components/table/Table"
import './Donations.css'

export default function Donations() {
    const [donations, setDonations] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const donationsPerPage = 20;

    useEffect(() => {
        const fetchingDonations = async() => {
            try {    
                const responseData = await fetch(`http://localhost:4000/api/donations?page=${currentPage}&perPage=${donationsPerPage}`, {method:'GET'});

                if(!responseData.ok){
                    const err = new Error ('Something went wrong when fetching donations.');
                    err.status = 500;
                    throw err;
                };

                const response = await responseData.json();
                setDonations(response.donations)
                
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        };
        fetchingDonations();  
    },[currentPage,donationsPerPage]); 

    function nextPage(){
        setCurrentPage(prev => prev + 1 )
    }; 

    function previousPage(){
        setCurrentPage(prev => prev - 1)
    }; 
    
    return(
        <div className="donations-content">
            <div className="title">
                <h1>My Donations</h1>
            </div>
            {loading && <p>Fetching donations..</p>}
            {error && <p>{error.message}</p>}
            {!loading && !error && donations.length === 0 && <p>No donations yet</p>}
            {!loading && !error && donations.length > 0 && (
                <div className="table">
                    <Table 
                        donations={donations}
                        previousPage={previousPage}
                        currentPage={currentPage}
                        nextPage={nextPage}/>  
                </div>
            )}
        </div>
    )
};