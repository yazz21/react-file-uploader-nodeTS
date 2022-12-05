import axios from 'axios';
import React, { Fragment, useState } from 'react'
import Message from './Message';
import Progress from './Progress';

export const Button = () => {
    const [file, setFile] = useState('');
    const [uploadedFile, setUploadedFile] = useState<any>();
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    async function onGetData(e: any) {
    
        e.preventDefault();
            const formData = new FormData();
            formData.append('file', file);
            console.log(formData);
            
            try {
                const res = await axios.get('http://localhost:5000/api/file/getone/:' + formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: progressEvent => {
                        if (progressEvent.total != undefined) 
                            return setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total).toString()));
                        
                    }
                });
    
    
                // Clear percentage
                setTimeout(() => setUploadPercentage(0), 10000);
    
                const {fileName, filePath} = res.data;
    
                setUploadedFile({fileName, filePath});
    
                setMessage('File Uploaded');
            } catch (err : any) {
                if (err.response.status === 500) {
                    setMessage('There was a problem with the server');
                } else {
                    setMessage(err.response.data.msg);
                }
                setUploadPercentage(0);
            }
    }

    function onChange(e : any) {
        setFile(e.target.value);
    }

  return (
    <Fragment>
        <form onSubmit={onGetData}>
            <Progress percentage={uploadPercentage}/>
            <input type='text' value='Upload' className='' onChange={onChange} />
        </form>
    </Fragment>
  )
}

export default Button

