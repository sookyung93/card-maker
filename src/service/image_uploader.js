class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'ihygi1ga');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dkfwobnvf/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
