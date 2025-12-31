import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UploadInput from './components/UploadInput';
import Images from './components/Images';
import Button from './components/Button';
import jsPDF from 'jspdf'
import Wrapper from './components/Wrapper';

function App() {
  const [images, setImages] = useState([])

  const loadPdf = async (event) => {
    const files = Array.from(event.target.files);

    const readerPromises = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    });

    const readerData = await Promise.all(readerPromises);
    setImages([...images, ...readerData]);
  };

  const removeImage = (index) => {
    setImages(prevImages =>
      prevImages.filter((_, i) => i !== index)
    );
  }

  const convertToPdf = () => {
    const doc = new jsPDF();
    let imagesProcessed = 0;
    const pageWidth = doc.internal.pageSize.getWidth() - 20;
    images.forEach((file, index) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      img.src = file;
      img.onload = () => {
        const scaleFactor = pageWidth / img.width;
        const imageHeight = img.height * scaleFactor;
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        const imageData = canvas.toDataURL('image/jpeg');
        if (index === 0) {
          doc.addImage(imageData, 'JPEG', 10, 10, pageWidth, imageHeight);
        } else {
          doc.addPage();
          doc.addImage(imageData, 'JPEG', 10, 10, pageWidth, imageHeight);
        }
        imagesProcessed++;
        if (imagesProcessed === images.length) {
          doc.save('converted.pdf');
          // pdfDownloadLink.innerHTML = `<a href="${doc.output('bloburl')}">Download PDF</a>`;
        }
      };
    });
  };

  return (
    <>
      <Wrapper>
        <UploadInput onChange={loadPdf} />
      </Wrapper>
      <Images images={images} removeImage={removeImage} />
      {!!images.length && <Button onClick={convertToPdf} />}
    </>
  )
}

export default App
