import React from 'react';
import ImageGrid from './components/ImageGrid';
import ImageViewer from './components/ImageViewer';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
      <ImageViewer />
    </div>
  );
}

export default App;
