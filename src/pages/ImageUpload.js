import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleUpload = () => {
    if (image) {
      const formData = new FormData();
      formData.append('myimg', image);

      axios.post('http://127.0.0.1:8000/mupload_image/', formData)
        .then((response) => {
          // Handle the response data here
          console.log('Image upload response:', response.data);
          alert('success')
        })
        .catch((error) => {
          // Handle any errors
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default ImageUpload;
