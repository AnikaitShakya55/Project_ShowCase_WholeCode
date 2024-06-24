import React from "react";
import styles from "./AboutMe.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import myImg from "../Assests/akshxar.jpeg";
import HtmlIcon from '../Assests/html.png';
import reactIcon from '../Assests/atom.png';
import cssIcon from '../Assests/css-3.png';
import javaIcon from '../Assests/js.png';
import nextIcon from '../Assests/nextjs.png';
import bootStrapIcon from '../Assests/bootStrap.png';
import tailwindIcon from '../Assests/tailwind.png';


const AboutMe = () => {
  


  return (
    <div className=" flex-col  min-h-screen mx-40">
      <div className="text-center p-10 flex-col">
        <h2 className="inline-block text-5xl py-5 px-9 text-white bg-slate-500 bg-opacity-25 rounded-xl font-semibold">
          Anikait Shakya
        </h2>

        <h3 className=" inline-block justify-center text-2xl my-5  py-2 px-9 mx-72 text-yellow-50 bg-slate-500 bg-opacity-25 rounded-xl  font-semibold ">
          Developer and Designer
        </h3>

        <p className="text-1xl text-white font-bold ">
          Proficient React.js engineer with expertise in HTML, CSS, JavaScript,
          and Next.js, skilled at developing responsive web designs using
          Bootstrap. Eager to contribute knowledge and experience to drive
          success in React.js development roles.
        </p>
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3">
        <FaGithub style={{ color: "aliceblue" }} />
        <FaLinkedin />
        <RiInstagramFill />
      </div>

      <div className=" my-5 text-sm flex justify-center ">
        <img
          alt="my pic"
          src={myImg}
          className="text-center rounded-full w-70 h-80"
        />
      </div>

      <section className="lg:flex h-auto rounded-lg gap-20">
        <div className='"text-center shadow-lg p-10  my-10  bg-slate-500 bg-opacity-25 rounded-xl flex-1"'>
          <h1 className="text-3xl  font-extrabold">
            Education
          </h1>

          <p className="text-1xl pt-3">
            Indian Institute of Technology and Management Jan 2019 - Dec 2022
          </p>

          <p className="text-1xl pt-3">
            Sumeet Rahul Goel Memorial Senior Secondary School Jul 2017 - May
            2018
          </p>
        </div>

        <div className="text-center shadow-lg p-10  my-10  bg-slate-500 bg-opacity-25 rounded-xl flex-1">
          <h1 className="text-3xl font-extrabold">
            Language Skills
          </h1>

          <p className="text-1xl pt-3">Hindi - Native</p>

          <p className="text-1xl pt-3">English - Intermediate</p>
        </div>
      </section>



      <section className="flex-col bg-slate-500 bg-opacity-25 p-5 my-10 rounded-lg">
        <div className="flex justify-center gap-16 mt-5 mb-10 ">
          <h1 className="text-6xl font-extrabold">SKILLS</h1>
        </div>

        <div className="flex justify-center gap-16">
          <img src={HtmlIcon} className="h-20"  />
          <img src={cssIcon} className="h-20"  />
          <img src={javaIcon} className="h-20"  />
          <img src={reactIcon} className="h-20"  />
          <img src={nextIcon} className="h-20 text-white bg-white "  />
        </div>


        <div className="flex justify-center gap-16 mt-8">
        <img src={bootStrapIcon} className="h-20"  />
        <img src={tailwindIcon} className="h-20"  />

        </div>
      
      </section>


      <section className="flex-col bg-slate-500 bg-opacity-25 p-5 my-10 rounded-lg">
        
      <h1 className="text-4xl font-extrabold">Contact </h1>
          <p className="mt-5">Email: shakya.ani47@gmail.com </p>
          <p className="mt-5">Phone: 8077065169 </p>

      </section>
 

        
      </div>

  );
};

export default AboutMe;
