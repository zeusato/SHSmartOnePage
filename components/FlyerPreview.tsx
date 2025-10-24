import React, { forwardRef } from 'react';
import DynamicQRCode from './DynamicQRCode';
import { BulletIcon } from './icons';

interface FlyerPreviewProps {
  brokerId: string;
}

const FlyerPreview = forwardRef<HTMLDivElement, FlyerPreviewProps>(({
  brokerId
}, ref) => {

  const features = [
    "Giao diện tinh gọn",
    "Màn hình đặt lệnh đa chế độ",
    "Quản lý danh mục thông minh",
    "Bộ lệnh điều kiện mới",
    "Bổ sung nhiều tính năng nâng cao",
  ];

  return (
    <div ref={ref} className="w-full h-full bg-gray-50 overflow-hidden text-black relative font-sans">
        {/* Logo */}
        <img src="assets/Logo.png" alt="Logo" className="absolute top-2 left-20 w-16 h-16 object-contain scale-[3.5] z-20" />
        {/* Background Effects */}
        <div className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-200 rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <img src="assets/Silk.png" alt="Silk Background" className="absolute bottom-0 right-0 w-64 h-64 object-contain opacity-70 scale-[2] z-0" />

        <div className="w-full h-full flex flex-col p-[2cm] relative z-10">
            {/* Header */}
            <header className="text-center pt-1">
                <h1 className="mt-0 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FA9528] to-[#F76F08] tracking-tight leading-[1.2] md:leading-[1.15]">
                    HỆ THỐNG GIAO DỊCH MỚI CỦA SHS
                </h1>
                <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
                    Trải nghiệm <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA9528] to-[#F76F08]">Web Trading 2.0</strong> và Ứng dụng <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#FA9528] to-[#F76F08]">SHSmart</strong>
                </p>
            </header>

            {/* Mockups Section */}
            <section className="relative flex-1 flex items-center justify-center my-0 scale-90">
                <img src="assets/Mockup.png" alt="Mockup" className="w-full h-full object-contain" />
            </section>
            
            {/* Features and QR Section */}
            <section className="flex items-end justify-center mt-4">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4 whitespace-nowrap">Điểm nhấn tính năng</h2>
                    <ul className="grid grid-cols-1 gap-y-3">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1 flex-shrink-0"><BulletIcon /></span>
                                <span className="text-gray-800 text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-6 mt-4">
                    <div className="text-center">
                        <div className="w-40 h-40 mx-auto bg-white p-2 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                            <DynamicQRCode brokerId={brokerId} />
                        </div>
                        <p className="mt-2 font-semibold text-gray-800 text-sm">Mở tài khoản ngay {brokerId}</p>
                    </div>
                    <div className="text-center">
                        <div className="w-40 h-40 mx-auto bg-white p-2 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
                            <img src="assets/QR moi.png" alt="Static QR Code" className="w-full h-full object-contain rounded-sm" />
                        </div>
                        <p className="mt-2 font-semibold text-gray-800 text-sm">Tải app / Truy cập web</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-16 text-center text-xs text-black">
                <p><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA9528] to-[#F76F08]">SHS • Saigon – Hanoi Securities</span> • Dịch vụ tận tâm, công nghệ dẫn lối</p>
            </footer>
        </div>
    </div>
  );
});

export default FlyerPreview;
