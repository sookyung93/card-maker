import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileUpload from './components/image_file_upload/image_file_upload';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileUpload {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
