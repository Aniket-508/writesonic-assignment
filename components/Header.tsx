"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/helper";
import { PathMap } from "@/lib/pathmap";
import useOnClickOutside from "@/hooks/useOnClickOutside";

interface HeaderItemProps extends PathMap {}

const HeaderItem: React.FC<HeaderItemProps> = ({ name, url, options }) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  useOnClickOutside<HTMLLIElement>(ref, () => {
    setOpenDropdown(false);
  });

  const hasOptionsCheck = options?.length;

  return (
    <li ref={ref} className="relative w-full lg:w-max">
      {url ? (
        <Link
          className={cn(
            "text-white md:text-white-40% relative z-20 py-3.5 pl-4 pr-1 lg:py-1.5 lg:px-2 flex items-center justify-between w-full text-xs lg:text-11 gap-1 font-bold uppercase lg:hover:text-white",
            openDropdown && "md:text-white"
          )}
          href={url}
        >
          {name}
        </Link>
      ) : (
        <button
          className={cn(
            "text-white md:text-white-40% relative z-20 py-3.5 pl-4 pr-1 lg:py-1.5 lg:px-2 flex items-center justify-between w-full text-xs lg:text-11 gap-1 font-bold uppercase lg:hover:text-white",
            openDropdown && "md:text-white"
          )}
          onClick={() => setOpenDropdown((prev) => !prev)}
        >
          {name}
          <Image
            alt="menu-open"
            loading="lazy"
            width={16}
            height={16}
            decoding="async"
            className={cn(
              !openDropdown && "opacity-40 rotate-45",
              openDropdown && "rotate-90"
            )}
            src="menu-open.svg"
          />
        </button>
      )}
      {hasOptionsCheck && openDropdown && <DropdownMenu options={options} />}
    </li>
  );
};

const DropdownMenu: React.FC<{ options: PathMap["options"] }> = ({
  options,
}) => (
  <div className="lg:absolute lg:top-5 lg:-z-[1] ml-4 lg:ml-0 pt-2 pb-2 lg:pt-4 lg:px-2 bg-bunker-lite rounded-lg">
    <div className="flex rounded-lg bg-bunker lg:w-max lg:px-2 lg:mt-1">
      <div className="flex flex-col w-full">
        {options?.map((option) => {
          const { id, name, url, icon } = option;

          return (
            <Link
              key={id}
              className="text-white lg:text-white-70% flex p-4 gap-2 items-center text-sm font-medium hover:text-white focus:text-white"
              href={url}
            >
              {icon && (
                <Image
                  alt={`${name}-icon`}
                  loading="lazy"
                  width={20}
                  height={20}
                  src={icon}
                />
              )}
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

const SignInBtn: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link
      className={cn(
        "inline-block ml-auto font-bold text-[11px] leading-3 uppercase bg-transparent py-p7 px-4 border border-gray-1 text-white whitespace-nowrap rounded-lg hover:opacity-80 focus:opacity-80",
        className
      )}
      target="_self"
      href="https://app.writesonic.com/login"
    >
      sign in
    </Link>
  );
};

const GetStartedBtn: React.FC = () => {
  return (
    <Link
      className="hover:bg-custom-yellow-hover w-[304px] md:w-[450px] lg:w-auto mx-auto flex text-center items-center justify-center font-bold text-sm lg:text-11 uppercase bg-custom-yellow p-4 lg:py-2 lg:px-3 text-black whitespace-nowrap rounded-lg"
      href="https://app.writesonic.com/signup"
    >
      get started
    </Link>
  );
};

const Header: React.FC<{ data: PathMap[] }> = ({ data }) => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  return (
    <header
      className={cn(
        "top-2 lg:top-3 z-50 px-2 lg:px-3 sticky flex flex-col",
        openMobileSidebar && "min-h-[98vh]"
      )}
    >
      <div
        className={cn(
          "bg-black-beauty lg:bg-transparent rounded-2xl",
          openMobileSidebar && "flex-grow flex flex-col"
        )}
      >
        <div className="relative flex justify-between item-center gap-2 bg-bunker-lite lg:bg-black-beauty w-full lg:w-max px-4 lg:px-2 py-2 mx-auto rounded-2xl">
          <div className="text-white flex items-center gap-2 text-11 cursor-pointer hover:opacity-80 focus:opacity-80">
            <Image
              alt="writesonic"
              loading="lazy"
              width={22}
              height={22}
              src="logo.svg"
            />
            Writesonic
          </div>
          <nav className="hidden lg:flex gap-x-2 items-center">
            <ul className="flex items-center gap-x-2">
              {data.map((item) => (
                <HeaderItem key={item.id} {...item} />
              ))}
            </ul>
            <SignInBtn />
            <GetStartedBtn />
          </nav>
          <SignInBtn className="lg:hidden" />
          <button
            className="bg-transparent w-6 h-6 p-0 z-50 relative m-0 lg:hidden"
            onClick={() => setOpenMobileSidebar((prev) => !prev)}
          >
            <Image
              alt={`mobile menu ${openMobileSidebar ? "close" : "open"}`}
              loading="lazy"
              width={32}
              height={32}
              decoding="async"
              src={openMobileSidebar ? "cross.svg" : "hamburger.svg"}
            />
          </button>
        </div>
        {openMobileSidebar && (
          <nav className="flex flex-col flex-1">
            <ul className="flex flex-col pr-4 pb-2 gap-3">
              {data.map((item) => (
                <HeaderItem key={item.id} {...item} />
              ))}
            </ul>
            <div className="lg:hidden mt-auto bg-bunker px-2 pt-2 pb-3 w-full rounded-b-2xl">
              <GetStartedBtn />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
