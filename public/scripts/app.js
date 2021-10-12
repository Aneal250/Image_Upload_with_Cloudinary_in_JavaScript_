
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dxf8iwykj/upload';
const CLOUDINARY_UPLOAD_PRESET = 'lrnfzvyi';

let ImgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', (event) => {
 
    let file = event.target.files[0];
    console.log(file);

    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    console.log(formData);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res){
        console.log(res);
        ImgPreview = res.data.secure_url
        console.log(ImgPreview);
    }).catch(function(err){
        console.log(err);
    });

});