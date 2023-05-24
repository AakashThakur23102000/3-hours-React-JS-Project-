import React, { useState } from 'react'

function ShowingProducts() {
    var totalPrizeOfItems = 0;
    var [state,setState] = useState(false) 
    function callingDataFromLocalStorage(all_users_data){
        //fetching all users data one time 
        var fetchedLocalStorageKeys = Object.keys(localStorage);
        //looping through keys arrays and fetching products data
        var usrs_data = fetchedLocalStorageKeys.map((key)=>{
            return JSON.parse(localStorage.getItem(key))
        });
        return(usrs_data);    
    }
    var all_users_data = callingDataFromLocalStorage(all_users_data)
    // updating totalPrizeOfItems data 
    all_users_data.forEach((data)=>{
        totalPrizeOfItems = totalPrizeOfItems + parseInt(data.uploadPrize)
    })


    function deleteButtonHandler(e,id,price){
        localStorage.removeItem(id);
        totalPrizeOfItems = totalPrizeOfItems - price;
        e.target.parentElement.parentElement.remove()
        window.location.reload()
    }
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th colSpan={4}>Products</th>
                </tr>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product ID</th>
                    <th>Button</th>
                </tr>
            </thead>
            <tbody>
                {all_users_data?.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.uploadName}</td>
                            <td>{data.uploadPrize}</td>
                            <td>{data.uploadId}</td>
                            <td><button onClick={(e) => { deleteButtonHandler(e, data.uploadId, data.uploadPrize)}}>Delete</button></td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={4}>Total Price ----- {totalPrizeOfItems}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ShowingProducts