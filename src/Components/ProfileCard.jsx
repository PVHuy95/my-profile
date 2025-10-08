import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
  FaSms,
  FaCopy,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";

export default function ProfileCard() {
  const phoneNumber = "0926999945";
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      timerRef.current = setTimeout(() => {
        setShowMenu(false);
      }, 3000);
    }
    return () => clearTimeout(timerRef.current);
  }, [showMenu]);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("📋 Phone number copied!", {
      position: "top-center",
      duration: 2000,
    });
    setShowMenu(false);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowMenu(false);
  };

  const handleSMS = () => {
    window.location.href = `sms:${phoneNumber}`;
    setShowMenu(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-700 via-rose-400 to-rose-100 p-4"
    >
      <Toaster />

      {/* Avatar */}
      <div className="flex flex-col items-center">
        <div className="p-[4px] rounded-full rainbow-border">
          <img
            src="/imgs/1.png"
            alt="Avatar"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
          />
        </div>

        <h1 className="mt-4 text-2xl font-semibold text-white">
          Phu Vinh Huy
        </h1>
        <p className="text-gray-500 text-sm">@HuyPV</p>
      </div>

      {/* Links */}
      <div className="mt-6 w-full max-w-xs space-y-3 relative">
        {/* Phone Button */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="flex items-center gap-3 justify-center w-full bg-white rounded-2xl shadow hover:bg-red-500 hover:text-white py-3 transition"
          >
            <FaPhoneAlt className="text-green-500 text-xl" />
            <span className="font-medium">Contact: 0926.9999.45</span>
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-md border border-gray-100 z-10 animate-fade-in">
              <button
                onClick={handleCall}
                className="flex items-center w-full gap-2 px-4 py-2 hover:bg-red-500 hover:text-white rounded-t-xl transition"
              >
                <FaPhoneAlt className="text-green-500" />
                <span>Call</span>
              </button>
              <button
                onClick={handleSMS}
                className="flex items-center w-full gap-2 px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <FaSms className="text-blue-500" />
                <span>Send SMS</span>
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center w-full gap-2 px-4 py-2 hover:bg-red-500 hover:text-white rounded-b-xl transition"
              >
                <FaCopy className="text-gray-600" />
                <span>Copy Number</span>
              </button>
            </div>
          )}
        </div>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/16KQQkS1Do/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 justify-center bg-white rounded-2xl shadow hover:bg-red-500 hover:text-white py-3 transition"
        >
          <FaFacebook className="text-blue-600 text-xl" />
          <span className="font-medium">Facebook</span>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@ptk20042019?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 justify-center bg-white rounded-2xl shadow hover:bg-red-500 hover:text-white py-3 transition"
        >
          <FaTiktok className="text-black text-xl" />
          <span className="font-medium">TikTok</span>
        </a>

        {/* Zalo */}
        <a
          href="https://zalo.me/0926999945"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 justify-center bg-white rounded-2xl shadow hover:bg-red-500 hover:text-white py-3 transition"
        >
          <SiZalo className="text-sky-500 text-xl" />
          <span className="font-medium">Zalo</span>
        </a>
      </div>
    </div>
  );
}
