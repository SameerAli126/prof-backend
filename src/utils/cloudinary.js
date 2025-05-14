import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //upload the file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {public_id: "w3css/img_lights", resource_type: "auto"}, function (error, result) {})

        //file is uploaded successfully
        console.log("file uploaded successfully on cloudinary", response.url)
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath) //remove the file from local
        return null;
    }
}

cloudinary.v2.uploader.upload("https://www.w3schools.com/w3css/img_lights.jpg",
    {
        public_id: "w3css/img_lights"
    },
    function (error, result) {console.log(result)}
    )
