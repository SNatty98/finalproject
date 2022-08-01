import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="firstSection">
        <h1 className="header">The Story So Far...</h1>
      </div>
      <div className="secondSection">
        <p className="smHeader">Why we started...</p>
        <p className="text">
          This project was started to help students grow in their mathematics
          ability, focusing on those who failed to achieve their mathematics GCSE.
        </p>
        <p className="text">
          Over 30% of students, more than 1 million students per year,
          fail their mathematics GCSE, and this puts them at a disadvantage when
          joining college, and when they look to join a university.
        </p>
        <p className="text">
          The ambition of this project is to help those who have not passed
          their mathematics GCSE at secondary school to succeed in resitting
          their mathematics exam, by providing content that is accessible, tailored to individual needs, and is curated for college level students.
        </p>
      </div>
      <div className="thirdSection">
        <p className="smHeader">Where we are...</p>
        <p className="text">
          The current content available on the website is only the beginning of the support this website aims to provide.
          So far, there are several ways for students to interact with the different areas of mathematics, and the opportunity 
          for teachers to target certain skills and work individually with students.
        </p>
        <p className="text">
          Check out the Learning Centre, where you can learn new topics by reading
          through the pages currently available to you, or can brush up on old
          skills you may have forgotten since you were at secondary school!
        </p>
        <p className="text">
          Additionally, there are quizzes where you can test your knowledge on the 'My Tasks'
          page after utilising the learning centre to learn a new topic!
        </p>
      </div>
      <div className="fourthSection">
        <p className="smHeader">Plans for the future...</p>
        <p className="text">
          We are looking to expand this web application with many more features
          to enable the education of college students.
        </p>
        <p className="text">
          Some of these features include a live chat function for students to
          communicate with each other, and learn mathematical theories through
          communicating with one another!
        </p>
        <p className="text">
          Another feature that will be added is the ability to see the results
          of your completed quizzes. This will allow you to see your own
          progress and how you develop over time, which will boost your
          confidence each time you progress!
        </p>
      </div>
    </div>
  );
};

export default About;
