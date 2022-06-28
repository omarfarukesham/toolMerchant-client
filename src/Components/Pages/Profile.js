import React from "react";
import Excel from "../../assets/Excel.png";
import mss from "../../assets/mss.png";
import omar from '../../assets/omar.png'
import ilo from '../../assets/ilo.png'
import php from '../../assets/php.png'

const About = () => {
  return (
    <>
      <div className="mx-10 my-10">
        <h1> Hi,</h1>
        <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img src={omar} />
          </div>
        </div>
        <small>
          I am Omar Faruk from Bangladesh, and I completed my Post Graduation
          from National University, Bangladesh, under the Department of
          Economics(2013). After finishing my academic, I started a professional
          journey as a trainer with BGMEA(Bangladesh Garment Manufacturers and
          Exporters Association). Last six years, I extensively served this
          Association.
          <br></br> <br></br>
          During my journey, I did start learning Programming language which is
          PHP, MySql as the Part time skills development activity, to help my
          family Extra earning, that time learning curve was slow, to expedite
          my skills-focused area, I admitted a diploma course, After six months
          I completed and aftermath I got a local part-time jobs by using HTML,
          CSS, Php, SQL and Laravel too. Unfortunate in 2018, my full-time
          trainer jobs expended with ILO(UN) project, subsequently I missed the
          programming rhythm.
          <br></br> <br></br>
          2020, during the corona pandemic, I suffered a massive disaster, and I
          lost my nearest one, to keep balance of my family, I had to sacrificed
          my full-time job, and for almost one year I did a part-time freelance
          trainer with 10minschools (online), Global Skills Agency(Physical and
          Online), Codeinnovior IT solution(Online) and so on.
          <br></br> <br></br>
          2021, I took a firm the decision, to build a remote career in
          programming, yes I start learning Javascript and ReactJs, at end of
          2021 I got a lucky opportunity with Programming Hero, Last 7 months, I
          have extensively worked with ReactJs, Javascript, and other inevitable
          tools that will help me reasonable React Developer, and finally,
          finishing this course I made 12 projects among them three FULL Stack
          Projects.
          <br></br> <br></br>
          Now I am early searching for a remote job to apply my true potential.
          I believe, any sort of technology for web development if I get time,
          explore is possible for me.<br></br> <br></br>
          <span className="font-bold">
            Thanks for Reading,<br></br>
            Omar Faruk (ReactJs Developer) <br></br>
            Phone - +8801775070627 <br></br>
            Email - omarfarukesham@gmail.com
            <br></br>
            <a
              href="https://www.linkedin.com/in/omar-faruk-reactjsdev/"
              target="_blank"
              className="btn btn-secondary btn-xs mx-2 my-5 text-white"
            >
              {" "}
              <i class="fa-brands fa-linkedin mx-2"></i>LinkedIn
            </a>
            <a
              href="https://10minuteschool.com/skills/courses/71/fire-safety-awareness"
              target="_blank"
              className="btn btn-secondary btn-xs mx-2 my-5 text-white"
            >
              {" "}
              <i class="fa-brands fa-youtube mx-2"></i>YouTube
            </a>
            <a
              href="https://github.com/omarfarukesham"
              target="_blank"
              className="btn btn-secondary btn-xs mx-2 my-5 text-white"
            >
              {" "}
              <i class="fa-brands fa-github mx-2"></i>GitHub
            </a>
          </span>
        </small>
      </div>

      <p className="text-center text-2xl text-bold">
        Professional Certification
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
        <div class="card w-75 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={Excel} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title">Excel!</h2>
            <p className="font-bold">Knowing Features</p>
            <small>1. Navigate the Data, get Result</small>
            <small>2. Short-cut, and Excel Formulas</small>
            <small>3. Pivot Tables, Conditional Formatting</small>
          </div>
        </div>
        <div class="card w-75 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={mss} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title">Post Graduate!</h2>
            <small className="font-bold">Knowing Features</small>
            <small>1. Macro Economics</small>
            <small>2. International Economics</small>
            <small>3. Micro Economics</small>
          </div>
        </div>
        <div class="card w-75 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={php} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title">PHP!</h2>
            <p className="font-bold">Knowing Features</p>
            <small>1. PHP, OOP</small>
            <small>2. SQL</small>
            <small>3. Laravel(Basic)</small>
          </div>
        </div>
        <div class="card w-75 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={ilo} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title">Supervisory Skills!</h2>
            <p className="font-bold">Knowing Features</p>
            <small>1. Leadership</small>
            <small>2. Employee Motivation</small>
            <small>3. Communication</small>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default About;
