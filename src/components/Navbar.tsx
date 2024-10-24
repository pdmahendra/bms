import { Link, useLocation } from "react-router-dom";
import { Ref, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import bell from "../assets/test/bell.png";
import { createRouteMatcher } from "@/utils/routeMatcher";
import axios from "@/utils/middleware";
import { API } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { Avatar } from "@mui/material";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import Tooltip from "@mui/material/Tooltip";
import { Calender } from "../components/Calender";

const isExcludedRoute = createRouteMatcher([
  "/login",
  "/register",
  "/forgot",
  "/reset-password",
  "/help",
  "/helpdetail",
  "/settings",
  "/dashboard(.*)",
]);

const Navbar = observer(() => {
  const navigate = useNavigate();
  const {
    root: { auth },
  } = useStore();
  const [search, setSearch] = useState("");
  // console.log(search);

  useEffect(() => {
    if (search.trim() !== "") {
      navigate(`/search?city=Dublin&title=${search}`);
    }
  }, [search]);

  // (event: any) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     navigate(`/search?city=Dublin&title=${search}`);
  //     setSearch("");
  //   }
  // };
  const isAuthenticated = auth.isAuthenticated;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sidebarRef, () => setIsNavOpen(false));

  const [isFocused, setIsFocused] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const location = useLocation();
  const showNavbar = !isExcludedRoute(location);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(notificationRef, () => setNotificationOpen(false));

  const [profileOpen, setProfileOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(accountRef, () => setProfileOpen(false));

  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(calendarRef, () => setCalendarOpen(false));

  return (
    showNavbar && (
      <>
        <div className="h-[10vh]" />
        <div className="fixed top-0 bg-white/20 backdrop-blur-lg lg:px-[5%] xl:px-[7%] px-[8vw] flex flex-col md:flex-row items-left justify-between align-left 2xl:text-[1.5rem] w-screen z-20 gap-8">
          <nav className="flex gap-8">
            <div
              className="HAMBURGER-ICON space-y-2 flex flex-col justify-center cursor-pointer"
              onClick={() => setIsNavOpen((prev: boolean) => !prev)}
            >
              <span className="block h-1 w-8 bg-black"></span>
              <span className="block h-1 w-8 bg-black"></span>
              <span className="block h-1 w-8 bg-black"></span>
            </div>

            <div
              className={
                isNavOpen
                  ? "showMenuNav transition-all duration-100"
                  : "hideMenuNav"
              }
              ref={sidebarRef}
            >
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8 w-full justify-between flex"
                onClick={() => setIsNavOpen(false)}
              >
                <img
                  src="/logo-nobg.png"
                  alt="logo"
                  className="max-h-[10vh] max-w-[40vw]"
                  loading="lazy"
                />
                <div
                  className="HAMBURGER-ICON space-y-2 flex flex-col justify-center cursor-pointer "
                  onClick={() => setIsNavOpen((prev: boolean) => !prev)}
                >
                  <span className="block h-1 w-8 bg-black"></span>
                  <span className="block h-1 w-8 bg-black"></span>
                  <span className="block h-1 w-8 bg-black"></span>
                </div>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-[250px] font-medium  transition-all duration-300">
                <a href="/" className="top-0 left-0 absolute py-8 px-[10%]"></a>
                <div className="px-[10%] mt-[35%] 2xl:mt-[15vh] text-[20px] text-black ">
                  {!isAuthenticated && (
                    <li className="underline px-4 py-2 hover:bg-gray-100">
                      <Link to="/login">Sign up/Log in</Link>
                    </li>
                  )}
                  {isAuthenticated && (
                    <div>
                      <li className="mt-4 px-4 py-2 hover:bg-gray-100">
                        <Link
                          to="/mytickets"
                          className="flex justify-between"
                          onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                          <div>My Tickets</div>
                        </Link>
                      </li>
                      {/* <li className="my-6">
                        <Link
                          to="/"
                          className="flex justify-between"
                          onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                          <div>Following</div>
                        </Link>
                      </li> */}
                      {/* <li className="my-6">
                        <Link
                          to="/dashboard"
                          className="flex justify-between"
                          onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                          <div>My Rep Portal</div>
                        </Link>
                      </li> */}
                      <li className="my-6 px-4 py-2 hover:bg-gray-100">
                        <Link
                          to="https://organizer-dashboard-bms.vercel.app/"
                          className="flex justify-between"
                          onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                          <div>Organizer Dashboard</div>
                        </Link>
                      </li>
                    </div>
                  )}

                  <li className="my-6 px-4 py-2 hover:bg-gray-100">
                    <div className="flex justify-between items-center ">
                      <button
                        className={`flex justify-between w-full transition-all duration-300

                        }`}
                        onClick={() => setIsDropOpen((prev) => !prev)}
                      >
                        Help & Support
                      </button>
                      <div
                        className={`${
                          isDropOpen
                            ? ""
                            : "-rotate-90 transition-all duration-200"
                        }`}
                      >
                        <svg
                          width="17"
                          height="10"
                          viewBox="0 0 17 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.531 1.53062L9.03104 9.03062C8.96139 9.10036 8.87867 9.15567 8.78762 9.19342C8.69657 9.23116 8.59898 9.25059 8.50042 9.25059C8.40186 9.25059 8.30426 9.23116 8.21321 9.19342C8.12216 9.15567 8.03945 9.10036 7.96979 9.03062L0.469792 1.53062C0.329062 1.38989 0.25 1.19902 0.25 0.999997C0.25 0.800974 0.329062 0.610103 0.469792 0.469372C0.610523 0.328642 0.801394 0.24958 1.00042 0.24958C1.19944 0.24958 1.39031 0.328642 1.53104 0.469372L8.50042 7.43968L15.4698 0.469372C15.5395 0.399689 15.6222 0.344414 15.7132 0.306702C15.8043 0.26899 15.9019 0.24958 16.0004 0.24958C16.099 0.24958 16.1965 0.26899 16.2876 0.306702C16.3786 0.344414 16.4614 0.399689 16.531 0.469372C16.6007 0.539055 16.656 0.62178 16.6937 0.712825C16.7314 0.80387 16.7508 0.901451 16.7508 0.999997C16.7508 1.09854 16.7314 1.19612 16.6937 1.28717C16.656 1.37821 16.6007 1.46094 16.531 1.53062Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`w-full overflow-hidden transition-all duration-200 ${
                        isDropOpen ? "max-h-28" : "max-h-0"
                      }`}
                    >
                      <Link
                        to="/help"
                        className="block px-4 py-2 mt-4 hover:bg-gray-100 text-[1.1rem]"
                        onClick={() => setIsNavOpen(false)}
                      >
                        Help Center
                      </Link>
                      <Link
                        to="/contactus"
                        className="block px-4 py-2 hover:bg-gray-100 text-[1.1rem]"
                        onClick={() => setIsNavOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </li>

                  <li className=" my-6 px-4 py-2 hover:bg-gray-100">
                    <Link
                      to="/terms"
                      className="flex justify-between "
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <div>Terms & Conditions</div>
                    </Link>{" "}
                  </li>
                  <li className="my-6 px-4 py-2 hover:bg-gray-100">
                    <Link
                      to="/privacy"
                      className="flex justify-between"
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      <div>Privacy Policy</div>
                    </Link>
                  </li>

                  {isAuthenticated && (
                    <button
                      className="block w-full text-left hover:bg-gray-100 px-4 py-2 "
                      onClick={() => {
                        auth.logout();
                      }}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </ul>
            </div>

            <Link to="/" className="">
              <img
                src="/logo-nobg.png"
                alt="logo"
                className="max-h-[10vh] max-w-[40vw]"
                loading="lazy"
              />
            </Link>
            {isAuthenticated && (
              <div className="flex justify-center items-center ml-10 md:hidden ">
                <ProfileDropdown
                  ref={accountRef}
                  open={profileOpen}
                  onOpenChange={(v) => {
                    if (notificationOpen) setNotificationOpen(false);
                    if (calendarOpen) setCalendarOpen(false);
                    setProfileOpen(v);
                  }}
                />
              </div>
            )}
          </nav>

          <div className="hidden md:flex items-center text-center md:w-full relative">
            <input
              type="text"
              className="w-full px-4 py-3 pl-[20px] text-gray-700 bg-[#FBFBFF] shadow-lg bg-opacity-50 border-1 border-white outline-none rounded-3xl"
              onFocus={handleFocus}
              // onKeyDown={handleSubmit}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {!isFocused && (
              <span className="absolute left-6  flex h-full items-center gap-2 pointer-events-none text-[#00000099]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1239 16.7413L12.4039 12.0213C13.5382 10.6596 14.1038 8.91303 13.9831 7.14495C13.8624 5.37687 13.0647 3.72338 11.7559 2.52846C10.4472 1.33354 8.72813 0.689183 6.95639 0.72944C5.18465 0.769697 3.49663 1.49147 2.2435 2.7446C0.990368 3.99773 0.268599 5.68574 0.228341 7.45748C0.188084 9.22922 0.832438 10.9483 2.02736 12.257C3.22228 13.5658 4.87577 14.3635 6.64385 14.4842C8.41193 14.6049 10.1585 14.0393 11.5202 12.905L16.2402 17.625L17.1239 16.7413ZM1.49891 7.62501C1.49891 6.51249 1.82881 5.42496 2.4469 4.49993C3.06498 3.5749 3.94348 2.85393 4.97132 2.42819C5.99915 2.00245 7.13015 1.89105 8.2213 2.10809C9.31244 2.32514 10.3147 2.86087 11.1014 3.64754C11.8881 4.43421 12.4238 5.43649 12.6408 6.52763C12.8579 7.61877 12.7465 8.74977 12.3207 9.77761C11.895 10.8054 11.174 11.6839 10.249 12.302C9.32397 12.9201 8.23643 13.25 7.12391 13.25C5.63258 13.2484 4.2028 12.6552 3.14826 11.6007C2.09373 10.5461 1.50057 9.11635 1.49891 7.62501Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
                {"         "}
                Search for event
              </span>
            )}
          </div>

          <ul className="DESKTOP-MENU hidden lg:flex font-medium justify-center gap-6 text-center">
            <div className="flex items-center text-center ">
              <Link
                to="https://organizer-dashboard-bms.vercel.app/"
                className="w-full whitespace-nowrap px-4 py-2 rounded-xl hover:bg-gray-100 bg-white shadow-md"
              >
                Host an Event
              </Link>
            </div>
            {!isAuthenticated && (
              <div className="flex items-center text-center">
                <Link
                  to="/login"
                  className="w-full whitespace-nowrap  px-4 py-2 rounded-xl hover:bg-gray-100 bg-white shadow-md"
                >
                  Login
                </Link>
              </div>
            )}
            {isAuthenticated && (
              <div className="flex items-center text-center" ref={calendarRef}>
                <MyCalendarDropdown
                  open={calendarOpen}
                  onOpenChange={(v) => {
                    if (notificationOpen) setNotificationOpen(false);
                    if (profileOpen) setProfileOpen(false);
                    setCalendarOpen(v);
                  }}
                />
              </div>
            )}
            {isAuthenticated && (
              <div className="flex justify-center gap-8 items-center min-w-[6vw]">
                <div className="cursor-pointer" ref={notificationRef}>
                  <NotificationsDropdown
                    open={notificationOpen}
                    onOpenChange={(v) => {
                      setNotificationOpen(v);
                      if (profileOpen) setProfileOpen((_) => false);
                      if (calendarOpen) setCalendarOpen((_) => false);
                    }}
                  />
                </div>
                <div>
                  <ProfileDropdown
                    ref={accountRef}
                    open={profileOpen}
                    onOpenChange={(v) => {
                      if (notificationOpen) setNotificationOpen(false);
                      if (calendarOpen) setCalendarOpen(false);
                      setProfileOpen(v);
                    }}
                  />
                </div>
              </div>
            )}
          </ul>

          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 24rem;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;

      }
      @media (max-width: 768px){
  .showMenuNav {
    width: 100%;
  }
}
    `}</style>
        </div>
      </>
    )
  );
});
// import checkMarkIcon from "./checkmark.svg";
// import warningIcon from "./warning.svg";
// import infoIcon from "./info.svg"; // Add these icons

interface NavbarDropdownProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  ref?: Ref<HTMLDivElement>;
}

type Notification = {
  _id: string;
  title: string;
  description: string;
  icon: string;
  isRead: boolean;
};

function NotificationsDropdown({ open, onOpenChange }: NavbarDropdownProps) {
  const [activeTab, setActiveTab] = useState("Unread");
  const [unreadNotifications, setUnreadNotifications] = useState<
    Notification[]
  >([]);
  const [readNotifications, setReadNotifications] = useState<Notification[]>(
    []
  );

  // console.log(readNotifications);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "https://api.kafsco.com/api/v1/notifications/fetch"
      );
      const fetchedNotifications = response.data.data;

      const unread = fetchedNotifications.filter(
        (notification: any) => !notification.isRead
      );
      const read = fetchedNotifications.filter(
        (notification: any) => notification.isRead
      );

      setUnreadNotifications(unread);
      setReadNotifications(read);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const markNotificationsAsRead = async () => {
    if (unreadNotifications.length > 0) {
      try {
        const notificationIds = unreadNotifications.map(
          (notification) => notification._id
        );
        await axios.patch("https://api.kafsco.com/api/v1/notifications/read", {
          notificationIds,
        });
        setUnreadNotifications([]);
      } catch (error) {
        console.error("Error marking notifications as read:", error);
      }
    }
  };

  useEffect(() => {
    markNotificationsAsRead();
  }, [onOpenChange]);

  const toggleDropdown = () => {
    if (open) {
      markNotificationsAsRead();
    } else {
      fetchNotifications();
    }
    onOpenChange(!open);
  };

  const filteredNotifications =
    activeTab === "Unread" ? unreadNotifications : readNotifications;

  return (
    <div className="relative flex items-center">
      <button onClick={toggleDropdown}>
        <Tooltip title="NOTIFICATIONS" arrow>
          <img src={bell} alt="Notifications" loading="lazy" />
        </Tooltip>
      </button>
      {open && (
        <div className="absolute right-0 mt-4 w-80 bg-white rounded-3xl shadow-lg z-20 top-8">
          <div className="py-4 bg-gray-100 text-xl">Notifications</div>
          <div className="border-b px-2 flex gap-x-6 bg-gray-100">
            <button
              onClick={() => setActiveTab("Unread")}
              className={`px-4 py-2 rounded-t-md focus:outline-none text-sm ${
                activeTab === "Unread" ? "border-b-4 border-black rounded" : ""
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setActiveTab("All")}
              className={`px-4 py-2 rounded-t-md focus:outline-none text-sm ${
                activeTab === "All" ? "border-b-4 border-black rounded" : ""
              }`}
            >
              All
            </button>
          </div>

          <div className="py-2 h-[40vh] overflow-y-auto">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification, index) => (
                <div key={index} className="flex items-start space-x-2 mb-5">
                  <div className="text-left flex">
                    <div className="flex items-start p-1 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="pl-2">
                      <h6 className="font-semibold text-lg">
                        {notification.title}
                      </h6>
                      <p className="text-xs text-gray-600 mr-4">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-28">No Unread Notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const fetchProfile = async () => {
  const response = await axios.get(API.users.profile);
  return response.data.data;
};

function ProfileDropdown({ open, onOpenChange, ref }: NavbarDropdownProps) {
  const {
    root: { auth },
  } = useStore();

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });
  const toggleDropdown = () => onOpenChange(!open);

  return (
    <div className="relative flex items-center">
      <button onClick={toggleDropdown}>
        <Tooltip title="PROFILE" arrow>
          <Avatar src={data?.displayPic} sx={{ height: 32, width: 32 }} />
        </Tooltip>
      </button>
      {open && (
        <div
          ref={ref}
          className="absolute flex flex-col items-center -right-12 top-8 mt-2 w-80 bg-white rounded-md shadow-lg z-20"
        >
          {/* Your profile/settings content here */}

          <Avatar src={data?.displayPic} sx={{ width: 82, height: 82 }} />
          {data && data.fname && data.lname && (
            <span className="py-2 mb-6">
              {data.fname} {data.lname}
            </span>
          )}
          {/* <a
            href="/payment"
            className="block w-full px-4 py-2 hover:bg-gray-100"
          >
            Payment Method
          </a> */}
          <a
            href="/settings"
            className="block w-full text-center py-2 hover:bg-gray-100"
          >
            Account Settings
          </a>
          <button
            className="block px-4 w-full py-2 text-center hover:bg-gray-100"
            onClick={() => {
              auth.logout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function MyCalendarDropdown({ open, onOpenChange }: NavbarDropdownProps) {
  const toggleDropdown = () => onOpenChange(!open);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full flex justify-between items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl hover:bg-gray-100 bg-white shadow-md"
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.25 1.5H12.375V0.875C12.375 0.70924 12.3092 0.550268 12.1919 0.433058C12.0747 0.315848 11.9158 0.25 11.75 0.25C11.5842 0.25 11.4253 0.315848 11.3081 0.433058C11.1908 0.550268 11.125 0.70924 11.125 0.875V1.5H4.875V0.875C4.875 0.70924 4.80915 0.550268 4.69194 0.433058C4.57473 0.315848 4.41576 0.25 4.25 0.25C4.08424 0.25 3.92527 0.315848 3.80806 0.433058C3.69085 0.550268 3.625 0.70924 3.625 0.875V1.5H1.75C1.41848 1.5 1.10054 1.6317 0.866116 1.86612C0.631696 2.10054 0.5 2.41848 0.5 2.75V15.25C0.5 15.5815 0.631696 15.8995 0.866116 16.1339C1.10054 16.3683 1.41848 16.5 1.75 16.5H14.25C14.5815 16.5 14.8995 16.3683 15.1339 16.1339C15.3683 15.8995 15.5 15.5815 15.5 15.25V2.75C15.5 2.41848 15.3683 2.10054 15.1339 1.86612C14.8995 1.6317 14.5815 1.5 14.25 1.5ZM3.625 2.75V3.375C3.625 3.54076 3.69085 3.69973 3.80806 3.81694C3.92527 3.93415 4.08424 4 4.25 4C4.41576 4 4.57473 3.93415 4.69194 3.81694C4.80915 3.69973 4.875 3.54076 4.875 3.375V2.75H11.125V3.375C11.125 3.54076 11.1908 3.69973 11.3081 3.81694C11.4253 3.93415 11.5842 4 11.75 4C11.9158 4 12.0747 3.93415 12.1919 3.81694C12.3092 3.69973 12.375 3.54076 12.375 3.375V2.75H14.25V5.25H1.75V2.75H3.625ZM14.25 15.25H1.75V6.5H14.25V15.25Z"
            fill="black"
          />
        </svg>
        <div className="flex items-center">My Calendar</div>
      </button>

      {open && (
        <div className="absolute flex flex-col items-center -right-24 mt-2 bg-white rounded-xl shadow-lg z-20">
          <Calender />
        </div>
      )}
    </div>
  );
}

export default Navbar;
