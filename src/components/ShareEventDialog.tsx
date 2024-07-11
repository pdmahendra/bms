import { useRef } from "react";
import { IconProps } from "./Icons";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

interface ShareEventDialogProps {
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
  imageUrl?: string;
  link?: string;
  children: React.ReactNode;
}

export const ShareEventDialog = ({
  open,
  onOpenChange,
  link,
  imageUrl,
  children,
}: ShareEventDialogProps) => {
  const MAX_LINK_LENGTH = 30;
  const origin = window.location.origin;
  const fullLink = `${origin}${link}`;
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const copyLink = () => {
    navigator.clipboard.writeText(fullLink || "");
    copyButtonRef.current!!.textContent = "Copied";
    setTimeout(() => {
      if (!copyButtonRef.current) return;
      copyButtonRef.current.textContent = "Copy";
    }, 500);
  };

  const shareLink = () => {
    navigator.share({
      url: fullLink,
    });
  };

  const truncateLink = (url: string) => {
    if (url.length <= MAX_LINK_LENGTH) return url;
    return `${url.slice(0, MAX_LINK_LENGTH)}...`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showClose
        showBackground={false}
        className="max-w-lg p-0 rounded-xl"
      >
        <div className="rounded-xl w-full bg-[#D9D9D9] flex flex-col items-center p-8">
          <img
            src={imageUrl}
            alt="event image"
            className="w-full h-[14rem] object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col items-center gap-8  bg-white rounded-xl w-full p-8">
          <p className="font-[600] text-xl md:text-3xl text-center text-balance">
            Share this with your social <br />
            Community
          </p>
          <div className="flex gap-2 md:gap-10">
            {communities.map((community) => (
              <p
                className="flex flex-col gap-2 items-center cursor-pointer"
                key={community.title}
                onClick={shareLink}
              >
                <community.icon />
                <span className="text-xs">{community.title}</span>
              </p>
            ))}
          </div>
          <div className="w-full mt-6">
            <p className="relative w-full bg-[#DADADA52] p-4 rounded-2xl">
              <span className="absolute -top-5 left-2 text-xs text-[#8D8D8D]">
                {" "}
                or copy link
              </span>
              {truncateLink(fullLink)}
              <button
                ref={copyButtonRef}
                className="absolute right-0 top-0 text-black font-medium rounded-2xl py-4 px-2 transition-all duration-300"
                onClick={copyLink}
              >
                Copy
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const communities = [
  {
    title: "Whatsapp",
    icon: (props: IconProps) => (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_1594_23271)">
          <path
            d="M0.5 40L3.32712 29.7338C1.57927 26.7205 0.662369 23.308 0.67192 19.8194C0.67192 8.88783 9.61174 0 20.5859 0C25.9155 0 30.9202 2.06274 34.6738 5.80799C38.4369 9.55323 40.5095 14.5342 40.5 19.8289C40.5 30.7605 31.5601 39.6483 20.5764 39.6483H20.5668C17.2335 39.6483 13.9575 38.8118 11.0444 37.2338L0.5 40ZM11.5506 33.6502L12.1523 34.0114C14.6929 35.5133 17.606 36.3023 20.5764 36.3118H20.5859C29.7072 36.3118 37.138 28.9259 37.138 19.8384C37.138 15.4373 35.4188 11.3023 32.2956 8.18441C29.1724 5.06654 25.0081 3.35551 20.5859 3.35551C11.4647 3.34601 4.0339 10.7319 4.0339 19.8194C4.0339 22.9278 4.90305 25.9601 6.56494 28.5837L6.95654 29.211L5.2851 35.2852L11.5506 33.6502Z"
            fill="white"
          />
          <path
            d="M1.19727 39.3061L3.92888 29.3916C2.23833 26.4924 1.35008 23.1939 1.35008 19.8289C1.35963 9.27756 9.98427 0.693909 20.586 0.693909C25.734 0.693909 30.5573 2.69011 34.1867 6.30228C37.8162 9.91444 39.8123 14.7243 39.8123 19.8384C39.8123 30.3897 31.1781 38.9734 20.586 38.9734H20.5764C17.3577 38.9734 14.1963 38.1654 11.3883 36.6445L1.19727 39.3061Z"
            fill="url(#paint0_linear_1594_23271)"
          />
          <path
            d="M0.5 40L3.32712 29.7338C1.57927 26.7205 0.662369 23.308 0.67192 19.8194C0.67192 8.88783 9.61174 0 20.5859 0C25.9155 0 30.9202 2.06274 34.6738 5.80799C38.4369 9.55323 40.5095 14.5342 40.5 19.8289C40.5 30.7605 31.5601 39.6483 20.5764 39.6483H20.5668C17.2335 39.6483 13.9575 38.8118 11.0444 37.2338L0.5 40ZM11.5506 33.6502L12.1523 34.0114C14.6929 35.5133 17.606 36.3023 20.5764 36.3118H20.5859C29.7072 36.3118 37.138 28.9259 37.138 19.8384C37.138 15.4373 35.4188 11.3023 32.2956 8.18441C29.1724 5.06654 25.0081 3.35551 20.5859 3.35551C11.4647 3.34601 4.0339 10.7319 4.0339 19.8194C4.0339 22.9278 4.90305 25.9601 6.56494 28.5837L6.95654 29.211L5.2851 35.2852L11.5506 33.6502Z"
            fill="url(#paint1_linear_1594_23271)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6102 11.5304C15.2377 10.7034 14.8461 10.6844 14.4927 10.6749C14.2062 10.6654 13.8719 10.6654 13.5376 10.6654C13.2033 10.6654 12.6684 10.789 12.21 11.2833C11.7515 11.7776 10.4717 12.9753 10.4717 15.4183C10.4717 17.8517 12.2577 20.2091 12.5061 20.5418C12.7544 20.8745 15.954 26.0361 21.0065 28.0228C25.209 29.6768 26.0686 29.3441 26.976 29.2586C27.8833 29.173 29.9177 28.0608 30.3379 26.9011C30.7486 25.7415 30.7486 24.7529 30.6245 24.5437C30.5003 24.3346 30.166 24.211 29.6694 23.9639C29.1727 23.7167 26.7276 22.519 26.2692 22.3479C25.8107 22.1863 25.4764 22.1008 25.1517 22.5951C24.8174 23.0894 23.8623 24.2015 23.5758 24.5342C23.2892 24.8669 22.9932 24.905 22.4965 24.6578C21.9998 24.4107 20.3953 23.8878 18.4946 22.1958C17.0142 20.884 16.0113 19.2586 15.7248 18.7643C15.4382 18.27 15.6961 18.0038 15.9445 17.7567C16.1641 17.538 16.4411 17.1768 16.6894 16.8916C16.9378 16.6065 17.0237 16.3973 17.1861 16.0646C17.3485 15.7319 17.2721 15.4468 17.1479 15.1996C17.0237 14.962 16.0495 12.5095 15.6102 11.5304Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1594_23271"
            x1="20.5038"
            y1="39.3042"
            x2="20.5038"
            y2="0.692558"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#20B038" />
            <stop offset="1" stopColor="#60D66A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1594_23271"
            x1="20.5039"
            y1="39.9962"
            x2="20.5039"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9F9F9" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <clipPath id="clip0_1594_23271">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Facebook",
    icon: (props: IconProps) => (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M28.6895 22.2136L29.726 15.3883H23.242V10.9612C23.242 9.09345 24.1461 7.27184 27.0502 7.27184H30V1.46117C30 1.46117 27.3242 1 24.7671 1C19.4247 1 15.9361 4.26966 15.9361 10.1864V15.3883H10V22.2136H15.9361V38.7141C17.1279 38.9032 18.347 39 19.589 39C20.8311 39 22.0502 38.9032 23.242 38.7141V22.2136H28.6895Z"
          fill="#1877F2"
        />
      </svg>
    ),
  },
  {
    title: "Twitter",
    icon: (props: IconProps) => (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M35.595 11.9679C35.6105 12.3199 35.6105 12.6559 35.6105 13.0079C35.6259 23.68 27.7851 36 13.4464 36C9.2173 36 5.06539 34.736 1.5 32.368C2.11738 32.448 2.73477 32.48 3.35215 32.48C6.85581 32.48 10.2669 31.264 13.0297 29.008C9.69578 28.944 6.7632 26.688 5.74452 23.392C6.91755 23.632 8.12145 23.584 9.26361 23.248C5.63647 22.512 3.02803 19.1999 3.01259 15.3439C3.01259 15.3119 3.01259 15.2799 3.01259 15.2479C4.09301 15.8719 5.31235 16.2239 6.54712 16.2559C3.13607 13.8879 2.07108 9.16791 4.13932 5.4719C8.10601 10.5279 13.9403 13.5839 20.2067 13.9199C19.5739 11.1199 20.4383 8.17591 22.4602 6.1919C25.5934 3.13589 30.5325 3.2959 33.4959 6.54391C35.2401 6.1919 36.9224 5.5199 38.4504 4.5759C37.8639 6.44791 36.6446 8.03191 35.024 9.03991C36.5674 8.84791 38.08 8.41591 39.5 7.77591C38.4504 9.40792 37.1231 10.8159 35.595 11.9679Z"
          fill="#1D9BF0"
        />
      </svg>
    ),
  },
  {
    title: "Instagram",
    icon: (props: IconProps) => (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_1594_23280)">
          <path
            d="M31.125 0H9.875C4.69733 0 0.5 4.19733 0.5 9.375V30.625C0.5 35.8027 4.69733 40 9.875 40H31.125C36.3027 40 40.5 35.8027 40.5 30.625V9.375C40.5 4.19733 36.3027 0 31.125 0Z"
            fill="url(#paint0_radial_1594_23280)"
          />
          <path
            d="M31.125 0H9.875C4.69733 0 0.5 4.19733 0.5 9.375V30.625C0.5 35.8027 4.69733 40 9.875 40H31.125C36.3027 40 40.5 35.8027 40.5 30.625V9.375C40.5 4.19733 36.3027 0 31.125 0Z"
            fill="url(#paint1_radial_1594_23280)"
          />
          <path
            d="M20.5014 4.375C16.258 4.375 15.7253 4.39359 14.0588 4.46938C12.3953 4.54563 11.2598 4.80891 10.2664 5.19531C9.23859 5.59438 8.36688 6.12828 7.49844 6.99703C6.62922 7.86562 6.09531 8.73734 5.695 9.76469C5.3075 10.7584 5.04391 11.8944 4.96906 13.557C4.89453 15.2238 4.875 15.7566 4.875 20.0002C4.875 24.2438 4.89375 24.7747 4.96938 26.4412C5.04594 28.1047 5.30922 29.2402 5.69531 30.2336C6.09469 31.2614 6.62859 32.1331 7.49734 33.0016C8.36563 33.8708 9.23734 34.4059 10.2644 34.805C11.2586 35.1914 12.3942 35.4547 14.0573 35.5309C15.7241 35.6067 16.2563 35.6253 20.4995 35.6253C24.7434 35.6253 25.2744 35.6067 26.9409 35.5309C28.6044 35.4547 29.7411 35.1914 30.7353 34.805C31.7627 34.4059 32.6331 33.8708 33.5012 33.0016C34.3705 32.1331 34.9042 31.2614 35.3047 30.2341C35.6887 29.2402 35.9525 28.1044 36.0306 26.4416C36.1055 24.775 36.125 24.2438 36.125 20.0002C36.125 15.7566 36.1055 15.2241 36.0306 13.5573C35.9525 11.8939 35.6887 10.7586 35.3047 9.76516C34.9042 8.73734 34.3705 7.86562 33.5012 6.99703C32.6322 6.12797 31.763 5.59406 30.7344 5.19547C29.7383 4.80891 28.6022 4.54547 26.9387 4.46938C25.272 4.39359 24.7414 4.375 20.4966 4.375H20.5014ZM19.0997 7.19078C19.5158 7.19016 19.98 7.19078 20.5014 7.19078C24.6734 7.19078 25.1678 7.20578 26.8153 7.28063C28.3387 7.35031 29.1656 7.60484 29.7164 7.81875C30.4456 8.10188 30.9655 8.44047 31.512 8.9875C32.0589 9.53438 32.3973 10.0552 32.6813 10.7844C32.8952 11.3344 33.15 12.1613 33.2194 13.6847C33.2942 15.3319 33.3105 15.8266 33.3105 19.9966C33.3105 24.1666 33.2942 24.6614 33.2194 26.3084C33.1497 27.8319 32.8952 28.6587 32.6813 29.2089C32.3981 29.9381 32.0589 30.4573 31.512 31.0039C30.9652 31.5508 30.4459 31.8892 29.7164 32.1725C29.1663 32.3873 28.3387 32.6413 26.8153 32.7109C25.1681 32.7858 24.6734 32.802 20.5014 32.802C16.3292 32.802 15.8347 32.7858 14.1877 32.7109C12.6642 32.6406 11.8373 32.3861 11.2861 32.1722C10.557 31.8889 10.0361 31.5505 9.48922 31.0036C8.94234 30.4567 8.60391 29.9372 8.32 29.2077C8.10609 28.6575 7.85125 27.8306 7.78188 26.3072C7.70703 24.66 7.69203 24.1653 7.69203 19.9927C7.69203 15.8202 7.70703 15.328 7.78188 13.6808C7.85156 12.1573 8.10609 11.3305 8.32 10.7797C8.60328 10.0505 8.94234 9.52969 9.48938 8.98281C10.0363 8.43594 10.557 8.09734 11.2862 7.81359C11.837 7.59875 12.6642 7.34484 14.1877 7.27484C15.6291 7.20969 16.1877 7.19016 19.0997 7.18687V7.19078ZM28.842 9.78516C27.8069 9.78516 26.967 10.6242 26.967 11.6595C26.967 12.6947 27.8069 13.5345 28.842 13.5345C29.8772 13.5345 30.717 12.6947 30.717 11.6595C30.717 10.6244 29.8772 9.78453 28.842 9.78453V9.78516ZM20.5014 11.9759C16.0702 11.9759 12.4773 15.5688 12.4773 20.0002C12.4773 24.4316 16.0702 28.0227 20.5014 28.0227C24.9328 28.0227 28.5244 24.4316 28.5244 20.0002C28.5244 15.5689 24.9325 11.9759 20.5011 11.9759H20.5014ZM20.5014 14.7917C23.3778 14.7917 25.7098 17.1234 25.7098 20.0002C25.7098 22.8766 23.3778 25.2086 20.5014 25.2086C17.6248 25.2086 15.2931 22.8766 15.2931 20.0002C15.2931 17.1234 17.6248 14.7917 20.5014 14.7917Z"
            fill="white"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_1594_23280"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.125 43.0808) rotate(-90) scale(39.643 36.8711)"
          >
            <stop stopColor="#FFDD55" />
            <stop offset="0.1" stopColor="#FFDD55" />
            <stop offset="0.5" stopColor="#FF543E" />
            <stop offset="1" stopColor="#C837AB" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_1594_23280"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-6.20016 2.88141) rotate(78.681) scale(17.7206 73.045)"
          >
            <stop stopColor="#3771C8" />
            <stop offset="0.128" stopColor="#3771C8" />
            <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_1594_23280">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: "Google",
    icon: (props: IconProps) => (
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_1594_23288)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.7 20.4546C39.7 19.0364 39.5727 17.6728 39.3364 16.3637H20.5V24.1H31.2636C30.8 26.6 29.3909 28.7182 27.2727 30.1364V35.1546H33.7364C37.5182 31.6728 39.7 26.5455 39.7 20.4546Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.4997 40C25.8997 40 30.427 38.2091 33.736 35.1545L27.2724 30.1364C25.4815 31.3364 23.1906 32.0454 20.4997 32.0454C15.2906 32.0454 10.8815 28.5273 9.30877 23.8H2.62695V28.9818C5.91786 35.5182 12.6815 40 20.4997 40Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.30909 23.8C8.90909 22.6 8.68182 21.3182 8.68182 20C8.68182 18.6818 8.90909 17.4 9.30909 16.2V11.0182H2.62727C1.27273 13.7182 0.5 16.7727 0.5 20C0.5 23.2273 1.27273 26.2818 2.62727 28.9818L9.30909 23.8Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.4997 7.95455C23.436 7.95455 26.0724 8.96364 28.1451 10.9455L33.8815 5.20909C30.4179 1.98182 25.8906 0 20.4997 0C12.6815 0 5.91786 4.48182 2.62695 11.0182L9.30877 16.2C10.8815 11.4727 15.2906 7.95455 20.4997 7.95455Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_1594_23288">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
