
import React, { useEffect, useRef } from 'react';

// Make sure QRCode is available on the window object from the CDN script
declare const QRCode: any;

interface DynamicQRCodeProps {
  brokerId: string;
}

const DynamicQRCode: React.FC<DynamicQRCodeProps> = ({ brokerId }) => {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const qrCodeInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (qrCodeRef.current) {
      if (!qrCodeInstanceRef.current) {
        // Initialize QRCode instance
        qrCodeInstanceRef.current = new QRCode(qrCodeRef.current, {
          text: 'https://shsmart.onelink.me/Odsh',
          width: 256,
          height: 256,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H,
        });
      }

      if (brokerId) {
        const url = `https://shsmart.onelink.me/Odsh?remNo=${encodeURIComponent(brokerId)}`;
        qrCodeInstanceRef.current.makeCode(url);
      } else {
        // Show a placeholder or default URL when brokerId is empty
        qrCodeInstanceRef.current.makeCode('https://shsmart.onelink.me/Odsh');
      }
    }
    // Cleanup function to clear the QR code on component unmount
    return () => {
        if (qrCodeInstanceRef.current && qrCodeRef.current) {
           // No standard clear method, so we clear the DOM content
           qrCodeRef.current.innerHTML = ''; 
           qrCodeInstanceRef.current = null;
        }
    };
  }, [brokerId]);

  return <div ref={qrCodeRef} className="w-full h-full flex items-center justify-center"></div>;
};

export default DynamicQRCode;
