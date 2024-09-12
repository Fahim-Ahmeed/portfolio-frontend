import React, { useEffect, useState } from "react";
import axios from "axios";
const About = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-x0dd.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  console.log(user.avatar.url)
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={user.avatar.url}
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5 text-justify">
            <p >
            I am Fahim Ahmed, commonly known as Fahim, and I have completed my B.Sc. in Computer Science from Daffodil International University. I am passionate about technology and work as a web developer, specializing in modern web technologies like React, Express.js, and MongoDB. I enjoy creating dynamic and user-friendly web applications that solve real-world problems. My curiosity and dedication drive me to continually learn new skills and keep up with the latest industry trends, which helps me grow professionally and stay competitive in the field.
            </p>
            <p>
            Outside of work, I am an avid traveler who loves exploring new places and experiencing different cultures. I am also a cricket enthusiast; playing the sport helps me stay active and sharp. I cherish spending quality time with my family and friends, as these moments provide balance and joy in my life. Whether it’s a casual hangout or a meaningful conversation, being around my loved ones is always a priority. I believe that a blend of professional growth and personal fulfillment is key to a happy and successful life
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended periods.My innovation will fulfill your needs.
          
        </p>
      </div>
    </div>
  );
};

export default About;