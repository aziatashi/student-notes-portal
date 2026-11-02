"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bell, X } from "lucide-react";

interface Notification {
  id: string;
  message: string;
  date: Date;
  read: boolean;
}

interface RawNotification {
  id: string;
  message: string;
  date: string;
  read: boolean;
}

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    fetchNotifications();

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchNotifications = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch("/api/github-commits");

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data)

      const processedNotifications = data.map((item: RawNotification) => ({
        ...item,
        date: new Date(item.date),
        message: item.message,
      }));

      const notifyOnly = processedNotifications.filter(
        (note: RawNotification) => note.message.startsWith("notify:")
      );

      // console.log(notifyOnly)

      const k = localStorage.getItem("LastNotificationRead");

      if (k) {
        const lastReadDate = new Date(k);
        notifyOnly.forEach((notification: Notification) => {
          notification.read = notification.date <= lastReadDate;
        });
        const unreadCount = notifyOnly.reduce(
          (count: number, note: Notification) => count + (note.read ? 0 : 1),
          0
        );
        setNotifications(notifyOnly);
        setUnreadCount(unreadCount);
      } else {
        setNotifications(notifyOnly);
        setUnreadCount(notifyOnly.length);
      }

      // const unreadNotifications = notifyOnly.filter((note: Notification) => !note.read);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      const mockNotifications: Notification[] = [
        {
          id: "1",
          message: "Welcome to Notes-Aid!",
          date: new Date(),
          read: false,
        },
      ];

      setNotifications(mockNotifications);
      setUnreadCount(mockNotifications.length);
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = (): void => {
    setNotifications(notifications.map((note) => ({ ...note, read: true })));
    setUnreadCount(0);
    localStorage.setItem("LastNotificationRead", new Date().toISOString());
  };

  if (!mounted) {
    return null;
  }

  const handleBestCalc = () => {
    window.location.href = "https://redisitic.xyz";
  };

  return (
    <nav className="w-full py-4 px-6 border-b transition-colors duration-200 bg-base-300 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <h1 className="text-xl font-bold text-base-content ">
                Notes-Aid
              </h1>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-500 transition-colors duration-200"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5  text-base-content " />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>

            {showDropdown && (
               <div className="fixed top-16 left-1/2 -translate-x-1/2 md:-translate-x-0 w-11/12 max-w-sm z-50 md:absolute md:transform-none md:top-auto md:left-auto md:right-0 md:mt-2 md:w-80">
                <div className="bg-base-100 rounded-lg shadow-lg w-full flex flex-col">
                  <div className="p-3  border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-base-200  rounded-t-lg">
                    <h3 className="text-sm font-medium text-base-content ">
                      Notifications
                    </h3>
                    <div className="flex items-center space-x-3">
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllAsRead}
                          className="text-xs text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Mark all as read
                        </button>
                      )}
                      <button
                        onClick={() => setShowDropdown(false)}
                        className="rounded-full p-1 hover:bg-gray-500"
                      >
                        <X className="w-4 h-4 hover:text-gray-800" />
                      </button>
                    </div>
                  </div>

                  <div className="overflow-y-auto max-h-64">
                    {loading ? (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
                        Loading...
                      </div>
                    ) : notifications.length > 0 ? (
                      notifications.map((note) => (
                        <div
                          key={note.id}
                          className={`p-3  ${
                            note.read ? "bg-base-100 " : "bg-primary/20 border-2 border-base-300"
                          }`}
                        >
                          <p className="text-sm text-base-content">
                            {note.message.replace("notify:", "")}
                          </p>
                          <p className="text-xs text-base-content/60">
                            {note.date.toLocaleString()}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
                        No notifications
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="hidden" onClick={handleBestCalc}>Click this for the Best Calculator ever!!!</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
