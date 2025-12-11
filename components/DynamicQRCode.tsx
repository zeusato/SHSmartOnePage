
import React, { useEffect, useRef } from 'react';

// Make sure QRCode is available on the window object from the CDN script
declare const QRCode: any;

interface DynamicQRCodeProps {
  brokerId: string;
}

const DynamicQRCode: React.FC<DynamicQRCodeProps> = ({ brokerId }) => {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const qrCodeInstanceRef = useRef<any>(null);

  // Base URL template - user input will replace "MG001"
  const BASE_URL_TEMPLATE = 'https://shsmart.onelink.me/Odsh?af_xp=referral&pid=User_invite&deep_link_value=invite&deep_link_sub1=MG001&af_dp=shone%3A%2F%2Fdeeplink.ftl.shs';

  useEffect(() => {
    if (qrCodeRef.current) {
      if (!qrCodeInstanceRef.current) {
        // Initialize QRCode instance
        qrCodeInstanceRef.current = new QRCode(qrCodeRef.current, {
          text: BASE_URL_TEMPLATE,
          width: 256,
          height: 256,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H,
        });
      }

      if (brokerId) {
        // Replace MG001 with the user's input
        const url = BASE_URL_TEMPLATE.replace('MG001', encodeURIComponent(brokerId));
        qrCodeInstanceRef.current.makeCode(url);
      } else {
        // Show the default template URL when brokerId is empty
        qrCodeInstanceRef.current.makeCode(BASE_URL_TEMPLATE);
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
