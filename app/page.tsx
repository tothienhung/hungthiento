import Image from 'next/image';
import { AiOutlineEnvironment } from 'react-icons/ai';


export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 p-12 ">
      <div className="    flex   max-w-[1440px] mx-auto sm:p-[48px]">
        {/* Sidebar bên trái */}
        <div className="w-1/4    ">
          <div className="flex flex-col items-center  bg-white text-black p-6  h-[250px] border  rounded-lg">
            {/* Ảnh đại diện */}
            <Image
              src="/img/img3.jpg"
              alt="Description"
              width={118} // Thiết lập chiều rộng ảnh
              height={128} // Thiết lập chiều cao ảnh
              className="rounded-full mb-2"
            />
            <h1 className="font-medium text-[28px] my-2 text-center">Hung To</h1>
            <p className="text-[15px] text-center  ">
              <AiOutlineEnvironment className="inline-block mr-2 text-[18px]" />
              Ho Chi Minh City, Vietnam
            </p>
          </div>
          <div className="flex flex-col border rounded-lg bg-white text-black p-6 h-[250px] mt-4">
            <h1 className="text-[20px] text-[#1f1f1f] mb-4 font-medium ">Highlights</h1>
            {/* Dòng nội dung với ảnh và text */}
            <div className="flex items-center mt-4">
              {/* Ảnh bên trái */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/img/1.jpg"
                  alt="Description"
                  width={40} // Thiết lập chiều rộng ảnh
                  height={20} // Thiết lập chiều cao ảnh
                  className="rounded-full mb-2"
                />
              </div>
              {/* Nội dung bên phải */}
              <div className="flex-grow">
                <p className="text-[12px]">
                  Scrum Training Certificate - Axon Active
                </p>
                <a
                  href="https://example.com" // Đường dẫn đến liên kết
                  className="text-[12px] text-[#0056d2] underline" // Định dạng cho liên kết
                >
                  View certificate
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Nội dung bên phải */}
        <div className="w-3/4 ml-6">
          <div className="bg-white p-6 border  rounded-lg  ">
            <section className="">
              <p className="text-gray-700 text-sm">
                Over the past 8 years, I have worked with a wide range of technologies to deliver high-quality web solutions to clients across different industries. I have been working as a ReactJS Developer, honing my skills in developing complex web applications and user interfaces. I have a deep understanding of ReactJS frameworks such as Redux, NextJS, and GraphQL, and I am proficient in using tools such as Git, JIRA, and Trello to manage projects and collaborate with team members.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                My experience includes developing responsive websites, implementing RESTful APIs, integrating third-party libraries, and optimizing web applications for performance.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                What sets me apart from other developers is my ability to work effectively in a team environment and my commitment to delivering projects on time and within budget. I am a quick learner and I am always willing to take on new challenges to expand my skill set.
              </p>
            </section>

          </div>
          <div>
            <h1 className="text-[28px] font-semibold mt-4">Experience</h1>
          </div>
          <div className="bg-white p-4 mt-2 border  rounded-lg  ">
            <section className="mb-6">
              <h2 className="   text-gray-800 text-[18px] font-semibold mb-4">Work history</h2>
              <div className="flex mt-2">
                {/* Ảnh bên trái */}
                <div className="flex-shrink-0 mr-2">
                  <Image
                    src="/img/2.png"
                    alt="Description"
                    width={48}
                    height={128}
                    className="rounded-full mb-2"
                  />
                </div>
                {/* Nội dung bên phải */}
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h2 className="text-base font-semibold">Senior Blockchain Frontend Developer at IX Swap</h2>
                    <p className="ml-2 text-[#636363]">(May 2024 up to Present)</p>
                  </div>

                  <ul className="ml-4 list-disc text-[#636363]">
                    <li className="text-sm mt-1">Design and develop user interfaces for the IX Swap web application using modern front-end technologies (HTML, CSS, JavaScript)</li>
                    <li className="text-sm mt-1">Integrate with blockchain APIs and smart contracts</li>
                    <li className="text-sm mt-1">Optimize website performance and ensure a responsive design across all devices</li>
                    <li className="text-sm mt-1">Write clean, maintainable, and well-documented code</li>
                    <li className="text-sm mt-1">Collaborate with designers, backend developers, and blockchain engineers</li>
                    <li className="text-sm mt-1">Stay up-to-date on the latest trends in frontend development and blockchain technology</li>
                    <li className="text-sm mt-1">Building user interfaces for decentralized exchanges (DEXs)</li>
                    <li className="text-sm mt-1">Testing and debugging blockchain applications</li>
                    <li className="text-sm mt-1">Handle continuous integration/continuous delivery (CI/CD) pipelines</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div>
            <h1 className="text-[28px] font-semibold mt-4">Freelance Projects</h1>
          </div>
          <div className="bg-white p-6 mt-2  border  rounded-lg ">
            <div className="flex justify-between items-center p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">
                  Ninza
                </div>

              </div>
              {/* Right section: Other text items */}
              <div className="flex space-x-2">
                <div className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">ReactJS</div>
                <div className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">@injectivelabs libraries</div>
                <div className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Redux Toolkit</div>
                <div className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Deploy to Vultr</div>
                <div className="bg-[#E4EBE4] px-2 py-1 ml-1 text-sm rounded-lg">Blockchain</div>
              </div>

            </div>
            <a
              href="https://inj.ninza.xyz/" // Đường dẫn đến liên kết
              className="text-[#108a00] font-medium  p-2 rounded " // Định dạng cho liên kết
            >
              https://inj.ninza.xyz/
            </a>
            <h1 className='p-2 text-black text-sm'>Ninza is an idle social game where you can grow, train your own ninja, and compete with other players. It is built on the Injective Network

            </h1>
          </div>
          <div>
            <h1 className=" text-[28px] font-semibold mt-4">Education</h1>
          </div>
          <div className="bg-white p-6 mt-2 border  rounded-lg  ">
            <h1 className="text-[18px] font-semibold ">Credentials</h1>
            {/* Dòng nội dung với ảnh và text */}
            <div className="flex items-center mt-4">
              {/* Ảnh bên trái */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/img/2.png"
                  alt="Description"
                  width={48} // Thiết lập chiều rộng ảnh
                  height={128} // Thiết lập chiều cao ảnh
                  className="rounded-full mb-2"
                />
              </div>
              {/* Nội dung bên phải */}
              <div className="flex-grow">
                <p className="font-semibold">
                  Ho Chi Minh City University of Agriculture and Forestry
                </p>
                <p className=" text-[#1f1f1f] "> Engineer  degree in Software Engineering</p>
                <p className=" font-semibold text-[#636363] text-[14px]">4.5 years program • Completed May 2024</p>
              </div>
            </div>






          </div>
        </div>

      </div>
    </div >
  );
}
