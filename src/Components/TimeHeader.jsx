import React, { useState, useEffect } from "react";

function TimeHeader() {
  const [time, setTime] = useState(getFormattedTime);
  const [location, setLocation] = useState("Detecting...");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const city = data.address?.city || data.address?.town || data.address?.village || "Unknown";
            const country = data.address?.country_code?.toUpperCase() || "Unknown";
            setLocation(`${city}, ${country}`);
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setTimezone(tz);
          } catch (error) {
            console.error("Reverse geocode error:", error);
            fallbackToIP();
          }
        },
        (error) => {
          console.error("Geolocation failed:", error.message);
          fallbackToIP();
        }
      );
    } else {
      console.warn("Geolocation not supported");
      fallbackToIP();
    }
  }, []);

  const fallbackToIP = async () => {
    try {
      const res = await fetch("https://ipapi.co/json");
      const data = await res.json();
      const city = data.city || "Unknown";
      const country = data.country_code || "XX";
      setLocation(`${city}, ${country}`);
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezone(tz);
    } catch (error) {
      console.error("IP fallback failed:", error);
      setLocation("Location unavailable");
    }
  };

  function getFormattedTime() {
    return new Date().toLocaleTimeString();
  }

  function updateTime() {
    setTime(getFormattedTime());
  }

  return (
    <div className="p-2 mb-4 rounded-lg mt-20 ">
      <div className="flex flex-row-reverse gap-4 items-center">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-white dark:text-white" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5" />
          </svg>
          <span className="ml-2 text-sm">{location} {timezone && `(${timezone})`}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-white dark:text-white" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"/>
          </svg>
          <span className="ml-2 text-sm">{time}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 text-gray-500 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
          </svg>
          <span className="ml-2 text-sm">Due date</span>
        </div>
      </div>
    </div>
  );
}

export default TimeHeader;
