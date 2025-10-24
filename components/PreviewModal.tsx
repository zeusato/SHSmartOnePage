import React from 'react';
import { DownloadIcon, CloseIcon } from './icons';

interface PreviewModalProps {
  imageUrl: string;
  onClose: () => void;
  onDownload: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ imageUrl, onClose, onDownload }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-full flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Xem trước ảnh</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500">
            <CloseIcon />
          </button>
        </div>
        <div className="p-4 flex-1 overflow-auto">
          <img src={imageUrl} alt="Flyer Preview" className="w-full h-auto object-contain max-h-[70vh] rounded-md" />
        </div>
        <div className="p-4 border-t border-gray-700 flex flex-wrap justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500">
            Đóng
          </button>
          <button onClick={onDownload} className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500">
            <DownloadIcon />
            Tải về PNG
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PreviewModal;
