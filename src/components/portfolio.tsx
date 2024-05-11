import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  ArrowDownNarrowWide,
  ArrowRightIcon,
  Download,
  MenuIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";

export const clickerScript = Clicker_Script({ subsets: ["latin"], display: 'swap', weight: '400'});

export const Navbar = () => {
  return (
    <header className="bg-black/40 z-40 backdrop-blur fixed top-0 w-[99.2vw] text-white py-4 px-6 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-xl font-bold" href="#">
          Vaibhav Kumar Singh
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="hover:text-gray-300" href="#home">
            Home
          </Link>
          <Link className="hover:text-gray-300" href="#education">
            Education
          </Link>
          <Link className="hover:text-gray-300" href="#achievements">
            Achievements
          </Link>
          <Link className="hover:text-gray-300" href="#projects">
            Projects
          </Link>
          <Link className="hover:text-gray-300" href="#blog">
            Blog
          </Link>
          <Link className="hover:text-gray-300" href="#contact">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="z-50 bg-gradient-to-l from-blue-900 to-gray-900 text-white text-center flex flex-col md:flex-row-reverse items-center justify-center min-h-screen md:text-left p-4 lg:p-8"
    >
      <div className="flex bg-gradient-radial from-gray-900/50 shadow-2xl to-white/50 rounded-full justify-center md:justify-start mb-8  scale-75 lg:scale-100">
        <Image
          alt="Vaibhav Kumar Singh"
          className="rounded-full shadow-2xl"
          height={500}
          width={500}
          src="/profile.png"
          style={{
            aspectRatio: 1,
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <h1
          className={cn(
            "text-4xl md:text-6xl lg:text-8xl font-thin mb-4",
            clickerScript.className
          )}
        >
          Vaibhav <small className="text-4xl lg:text-6xl">Kumar</small> Singh
        </h1>
        <p className="text-lg md:text-3xl mb-8">
          Full-Stack Web & App Developer
        </p>
        <p className="max-w-2xl text-balance text-xl mx-auto md:mx-0 mb-12">
          Passionate about creating innovative web and mobile applications that
          deliver exceptional user experiences. Skilled in a wide range of
          technologies, including Next.js, Node.js, and React Native.
        </p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
          <Button
            asChild
            variant={"ghost"}
            className="flex bg-[#0077B5] duration-150 items-center justify-center px-6 py-3 rounded-md font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <a href="https://linkedin.com/in/vaib215" target="_blank">
              <LinkedInLogoIcon className="mr-2 mb-0.5 text-lg" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className="flex bg-[#1DA1F2] duration-150 items-center justify-center px-6 py-3 rounded-md font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <a href="https://x.com/ThisIs_Vaib" target="_blank">
              <TwitterLogoIcon className="mr-2 mb-0.5 text-lg" />
              Follow on X
            </a>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className="flex bg-gray-700 duration-150 items-center justify-center px-6 py-3 rounded-md font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <a href="https://github.com/vaib215" target="_blank">
              <GitHubLogoIcon className="mr-2 mb-0.5 text-lg" />
              Follow on Github
            </a>
          </Button>
          {/* Download resume */}
          <Button
            asChild
            variant={"ghost"}
            className="flex bg-red-700 duration-150 items-center justify-center px-6 py-3 rounded-md font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <a href="/files/Vaibhav_Kumar_Singh_Resume.pdf" download>
              <Download className="mr-2 mb-0.5 text-lg scale-90" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export function Portfolio() {
  return (
    <div
      key="1"
      className="flex flex-col h-screen overflow-auto custom-scrollbar bg-gradient-to-l from-blue-900 to-gray-900"
    >
      <Navbar />
      <Hero />
      <section
        className="bg-gradient-to-l from-blue-900 to-gray-900 min-h-screen text-white flex flex-col justify-evenly p-4 md:p-16 lg:p-24"
        id="education"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">
                Bachelor of Engineering (B.E.)
              </h3>
              <p className="text-gray-300">
                Computer Science and Engineering (CGPA: 7.84)
              </p>
              <p className="text-gray-300 text-sm mb-1">
                Chandigarh University, 2021 - 2025
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Coordinator at DevHive Club, a departmental club for web
                  developers
                </li>
                <li>Smart India Hackathon 2022 Finalist</li>
                <li>Winner of CSSQuest by Hackoverflow Society</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                {/* 12th class */}
                Intermediate (XII)
              </h3>
              <p className="text-gray-300">Non-Medical (Percentage: 97.80%)</p>
              <p className="text-gray-300 text-sm mb-1">
                Board of Secondary Education (Alwar), Rajasthan, 2021
              </p>

              <h3 className="text-2xl font-bold">
                {/* 10th class */}
                High School (X)
              </h3>
              <p className="text-gray-300">Percentage: 97.80%</p>
              <p className="text-gray-300 text-sm mb-1">
                Board of Secondary Education (Alwar), Rajasthan, 2019
              </p>
            </div>
          </div>
        </div>
        <section id="achievements" className="container px-4 md:px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">
                Smart India Hackathon 2022 Finalist
              </h3>
              <p className="text-gray-300 mb-4">
                Developed a placement portal for colleges & government to
                maintain records of placements.
              </p>
              <Link
                className="inline-flex items-center underline text-blue-400 hover:text-blue-500 font-medium"
                href="#"
              >
                <ArrowRightIcon className="w-5 h-5 mr-1" />
                View Certificate
              </Link>
            </div>
            <div className="bg-white/10 rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">NPTEL Topper x 2</h3>
              <p className="text-gray-300 mb-4">
                Completed 4 online courses on NPTEL, out of which two (Discrete
                Mathematics & Social Networks) were in the top 5% of all
                participants, totalling to 3 Elite certificates.
              </p>
              <Link
                className="inline-flex items-center underline text-blue-400 hover:text-blue-500 font-medium"
                href="#"
              >
                <ArrowRightIcon className="w-5 h-5 mr-1" />
                View Certificate
              </Link>
            </div>
            <div className="bg-white/10 rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">
                Won CSS Quest (Hackoverflow)
              </h3>
              <p className="text-gray-300 mb-4">
                Completed a 2-round CSS challenge by Hackoverflow Society
                (Chandigarh University Branch), and was declared the winner
                among 100+ participants.
              </p>
              <Link
                className="inline-flex items-center underline text-blue-400 hover:text-blue-500 font-medium"
                href="#"
              >
                <ArrowRightIcon className="w-5 h-5 mr-1" />
                View Certificate
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="py-20 md:py-32" id="projects">
        <div className="container px-4 md:px-28 mx-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-8">
              <div className="bg-gray-100 rounded-md shadow-md overflow-hidden flex-shrink-0 w-80">
                <img
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project 1</h3>
                  <p className="text-gray-500 mb-4">
                    A responsive web application built with React and Node.js.
                  </p>
                  <Link
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                    href="#"
                  >
                    <ArrowRightIcon className="w-5 h-5 mr-1" />
                    View Project
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md shadow-md overflow-hidden flex-shrink-0 w-80">
                <img
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project 2</h3>
                  <p className="text-gray-500 mb-4">
                    A mobile app developed using React Native and Expo.
                  </p>
                  <Link
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                    href="#"
                  >
                    <ArrowRightIcon className="w-5 h-5 mr-1" />
                    View Project
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md shadow-md overflow-hidden flex-shrink-0 w-80">
                <img
                  alt="Project 3"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project 3</h3>
                  <p className="text-gray-500 mb-4">
                    A full-stack web application built with React, Node.js, and
                    MongoDB.
                  </p>
                  <Link
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                    href="#"
                  >
                    <ArrowRightIcon className="w-5 h-5 mr-1" />
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32" id="blog">
        <div className="container px-4 md:px-28 mx-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Blog</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-8">
              <div className="bg-white rounded-md shadow-md overflow-hidden flex-shrink-0 w-80">
                <img
                  alt="Blog Post 1"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blog Post 1</h3>
                  <p className="text-gray-500 mb-4">
                    Exploring the latest trends in web development and their
                    impact on the industry.
                  </p>
                  <Link
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                    href="#"
                  >
                    <ArrowRightIcon className="w-5 h-5 mr-1" />
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md overflow-hidden flex-shrink-0 w-80">
                <img
                  alt="Blog Post 2"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blog Post 2</h3>
                  <p className="text-gray-500 mb-4">
                    Mastering React Native: Building cross-platform mobile apps
                    with ease.
                  </p>
                  <Link
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                    href="#"
                  >
                    <ArrowRightIcon className="w-5 h-5 mr-1" />
                    Read More
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md overflow-hidden flex-shrink-0 w-80">
                <img
                  alt="Blog Post 3"
                  className="w-full h-48 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blog Post 3</h3>
                  <p className="text-gray-500 mb-4">
                    Optimizing web performance: Techniques and best practices
                    for faster loading times.
                  </p>
                  <Link
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                    href="#"
                  >
                    <ArrowRightIcon className="w-5 h-5 mr-1" />
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white py-20 md:py-32" id="contact">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-6">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                type="text"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                required
                rows={5}
              />
            </div>
            <div className="flex justify-center">
              <Button
                className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
