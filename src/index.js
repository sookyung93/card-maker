import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileUpload from './components/image_file_upload/image_file_upload';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileUpload {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
