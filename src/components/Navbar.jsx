import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LeetCodeIcon, LinkedInIcon, MediumIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0 "}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className=" w-full px-32 py-8 font-medium flex items-center justify-between ">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4 " />
        <CustomLink href="/projects" title="Projects" className="mx-4 " />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <Logo />
      <nav className="flex items-center justify-between flex-wrap">
        <motion.a
          href="/"
          target={"_blank"}
          className="w-6 mr-2"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.85 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          className="w-6 mx-2"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.85 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          className="w-6  mx-2"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.85 }}
        >
          <LeetCodeIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          className="w-6 ml-2"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.85 }}
        >
          <MediumIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
