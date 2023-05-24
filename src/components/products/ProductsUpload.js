import React, { useState } from 'react'
import "../UI/ProductsUpload.css"

function ProductsUpload() {
    //form states
    var[productUploadId,setProductUploadId]=useState("");
    var[productUploadPrize,setProductUploadPrize] = useState("");
    var[productUploadName,setProductUploadName] = useState("");

    //button press Handler
    function uploadButtonHandler(event){
        event.preventDefault();
        if(productUploadId==="" || productUploadPrize==="" || productUploadName===""){
            alert("Enter all feilds properly");
        }else if(productUploadId<0 || productUploadPrize<0){
            alert("Enter value is incorrect reenter it")
            setProductUploadId("");
            setProductUploadPrize("");
        }else{
            var productUploadObj = {
                uploadId:productUploadId,
                uploadPrize:productUploadPrize,
                uploadName:productUploadName
            }
            //converting obj to string to upload it to localstorage
            var stringConvertedproductUploadObj = JSON.stringify(productUploadObj);
            //uploading it to localStorage
            localStorage.setItem(productUploadId,stringConvertedproductUploadObj);
            window.location.reload()
        }
    }

    return (
        <div className='products_upload_div'>
            <form className='products_upload_form'>
                <label>Product ID - </label>
                <input type="number" value={productUploadId} onChange={(e)=>{setProductUploadId(e.target.value)}}></input>

                <label>Selling Prize - </label>
                <input type="number" value={productUploadPrize} onChange={(e)=>{setProductUploadPrize(e.target.value)}}></input>

                <label>Product Name - </label>
                <input type="text" value={productUploadName} onChange={(e)=>{setProductUploadName(e.target.value)}}></input>
                
                <br></br>
                <button type='submit' className='products_upload_button' onClick={uploadButtonHandler}>Add Products</button>
            </form>
        </div>
    )
}

export default ProductsUpload