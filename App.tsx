import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';
import ControlPanel from './components/ControlPanel';
import FlyerPreview from './components/FlyerPreview';
import PreviewModal from './components/PreviewModal';

const App: React.FC = () => {
  const [brokerId, setBrokerId] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const flyerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fontUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap';
    fetch(fontUrl)
      .then(response => response.text())
      .then(cssText => {
        const style = document.createElement('style');
        style.textContent = cssText;
        document.head.appendChild(style);
      })
      .catch(e => console.error('Failed to load font CSS:', e));
  }, []);

  const handleGeneratePng = useCallback(() => {
    if (!flyerRef.current || !brokerId.trim()) {
      return;
    }

    setIsGenerating(true);

    htmlToImage.toPng(flyerRef.current, { 
        cacheBust: true,
        pixelRatio: 3.51, // A4 @ 300 DPI is ~2480x3508px. Preview is 707x1000, so ratio is ~3.51
     })
      .then((dataUrl) => {
        setPreviewImage(dataUrl);
      })
      .catch((err) => {
        console.error('oops, something went wrong!', err);
        alert('Đã có lỗi xảy ra khi tạo ảnh. Vui lòng thử lại.');
      })
      .finally(() => {
        setIsGenerating(false);
      });
  }, [brokerId]);
  
  const handleDownload = () => {
    if (!previewImage) return;
    const link = document.createElement('a');
    link.download = `SHS_Flyer_${brokerId}.png`;
    link.href = previewImage;
    link.click();
    setPreviewImage(null); // Close modal after download starts
  };

  const handleCloseModal = () => {
    setPreviewImage(null);
  };


  const handleReset = () => {
    setBrokerId('');
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row">
        <ControlPanel
          brokerId={brokerId}
          setBrokerId={setBrokerId}
          onGenerate={handleGeneratePng}
          onReset={handleReset}
          isGenerating={isGenerating}
        />
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-800/50">
           <h1 className="text-2xl font-bold text-center text-white mb-4 lg:hidden">Xem trước Tờ rơi</h1>
            <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg overflow-hidden" style={{ aspectRatio: '1 / 1.414' }}>
                <FlyerPreview
                    ref={flyerRef}
                    brokerId={brokerId}
                />
            </div>
        </main>
      </div>
      {previewImage && (
        <PreviewModal 
          imageUrl={previewImage}
          onClose={handleCloseModal}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
};

export default App;