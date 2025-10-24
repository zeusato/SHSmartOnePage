import React, { useMemo } from 'react';
import { GenerateIcon, ResetIcon, LogoIcon } from './icons';

interface ControlPanelProps {
  brokerId: string;
  setBrokerId: (id: string) => void;
  onGenerate: () => void;
  onReset: () => void;
  isGenerating: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  brokerId,
  setBrokerId,
  onGenerate,
  onReset,
  isGenerating,
}) => {
  const isValid = useMemo(() => {
    return /^[A-Za-z0-9_-]{1,20}$/.test(brokerId);
  }, [brokerId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z0-9_-]{0,20}$/.test(value)) {
      setBrokerId(value);
    }
  };

  return (
    <aside className="w-full lg:w-96 bg-gray-900 p-6 lg:h-screen lg:overflow-y-auto flex-shrink-0 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-700">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
            <LogoIcon />
        </div>
        <div>
            <h1 className="text-xl font-bold text-white">Gen Tờ Rơi SHS 2.0</h1>
            <p className="text-sm text-gray-400">Tạo tờ rơi quảng bá nhanh chóng</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="brokerId" className="block text-sm font-medium text-gray-300 mb-2">
            1. Nhập Mã môi giới
          </label>
          <input
            type="text"
            id="brokerId"
            value={brokerId}
            onChange={handleInputChange}
            placeholder="VD: 12345AB"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          {!isValid && brokerId.length > 0 && <p className="text-red-400 text-xs mt-1">Mã không hợp lệ (A-Z, a-z, 0-9, -, _), tối đa 20 ký tự.</p>}
          {brokerId.length === 0 && <p className="text-yellow-400 text-xs mt-1">Nhập mã để tạo QR Code.</p>}
        </div>


        <div>
            <h2 className="block text-sm font-medium text-gray-300 mb-2">2. Tạo tờ rơi</h2>
             <div className="flex flex-col space-y-3">
                 <button
                    onClick={onGenerate}
                    disabled={!isValid || isGenerating}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                >
                    {isGenerating ? (
                        <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang tạo...
                        </>
                    ) : (
                        <>
                        <GenerateIcon />
                        Xem trước & Tải về
                        </>
                    )}
                </button>
                <button
                    onClick={onReset}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-gray-200 font-medium rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500"
                >
                    <ResetIcon />
                    Reset
                </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">Ảnh xuất ra có định dạng PNG, kích thước A4 @ 300 DPI.</p>
        </div>
      </div>
    </aside>
  );
};



export default ControlPanel;