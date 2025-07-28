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
            const city =
              data.address?.city ||
              data.address?.town ||
              data.address?.village ||
              "Unknown";
            const country = data.address?.country_code?.toUpperCase() || "Unknown";
            setLocation(`${city}, ${country}`);
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            setTimezone(tz);
          } catch (error) {
            fallbackToIP();
          }
        },
        () => {
          fallbackToIP();
        }
      );
    } else {
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
  <div className="p-2 mb-4 rounded-lg mt-20 w-full">
    <div className="flex items-center justify-between flex-wrap gap-4">
      
      {/* === Left Icons === */}
      <div className="flex gap-4">
          <svg
            className="w-6 h-6 text-pink-400 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"
            />
          </svg>
          <div className="flex gap-4">
          <svg class="w-6 h-6 text-stone-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"/>
        </svg>

        <div className="flex gap-4">
        <svg class="w-6 h-6 text-violet-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.041 13.862A4.999 4.999 0 0 1 17 17.831V21M7 3v3.169a5 5 0 0 0 1.891 3.916M17 3v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 7 17.831V21M7 5h10M7.399 8h9.252M8 16h8.652M7 19h10"/>
      </svg>
        </div>

        <div className="flex gap-4">
        <svg class="w-6 h-6 text-rose-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z"/>
        </svg>
        </div>

        <div className="flex gap-4">
       <svg class="w-6 h-6 text-cyan-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"/>
      </svg>
       </div>

       <div className="flex gap-4">
        <svg class="w-6 h-6 text-lime-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"/>
      </svg>

        </div>

        </div>
      </div>

      {/* === Time Info Section === */}
      <div className="flex flex-wrap gap-4 items-center min-w-0">

        {/* Location */}
        <div className="flex items-center min-w-0 max-w-xs">
          <svg
            className="w-6 h-6 text-white dark:text-white flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"
            />
          </svg>
          <span className="ml-2 text-sm break-words" title={`${location} ${timezone}`}>
            {location} {timezone && `(${timezone})`}
          </span>
        </div>

        {/* Time */}
        <div className="flex items-center min-w-0">
          <svg
            className="w-6 h-6 text-white dark:text-white flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"
            />
          </svg>
          <span className="ml-2 text-sm">{time}</span>
        </div>

        {/* Due Date */}
        <div className="flex items-center min-w-0">
          <svg
            className="w-6 h-6 text-gray-500 dark:text-white flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-2 text-sm">Due date</span>
        </div>

      </div>
    </div>
  </div>
);
}

export default TimeHeader;
