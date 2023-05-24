import React, { useEffect, useState } from 'react'
import "../UI/ProductsShow.css"

function ProductsShow() {
    var [totalPrizeOfItems, setTotalPrizeOfItems] = useState(0)
    var [productsOBJ, setProductsOBJ] = useState([]);
    //it stores all the users data fetched in for loop in array
    var alldataArr = []
    function automatic(){
        //fetching all users data one time 
        var fetchedLocalStorageKeys = Object.keys(localStorage);
        //looping through keys arrays and fetching products data
        for (var key of fetchedLocalStorageKeys) {
            var fetchedLocalStorageData = localStorage.getItem(key);
            //converting it to strings to object back 
            var fetchedLocalStorageDataConvertedObj = JSON.parse(fetchedLocalStorageData);
            alldataArr.push(fetchedLocalStorageDataConvertedObj)
        }
        setProductsOBJ(alldataArr)
    }
    automatic()

    //delete functanality
    function deleteButtonHandler(e, id) {
        console.log(id)
        // console.log(e.target.parentNode.parentNode.remove())
    }

    return (<div>
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
                {productsOBJ?.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td>{data.uploadName}</td>
                            <td>{data.uploadPrize}</td>
                            <td>{data.uploadId}</td>
                            <td><button onClick={(e) => { deleteButtonHandler(e, data.uploadId) }}>Delete</button></td>
                        </tr>
                    )
                })}
                <tr>
                    <td colSpan={4}>Total Price ----- {totalPrizeOfItems}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default ProductsShow