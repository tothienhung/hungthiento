import Image from 'next/image';
import { AiOutlineEnvironment } from 'react-icons/ai';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-12">
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
        {/* Sidebar bên trái */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <div className="flex flex-col items-center bg-white text-black p-6 border rounded-lg">
            {/* Ảnh đại diện */}
            <Image
              src="/img/img3.jpg"
              alt="Description"
              width={128} // Thiết lập chiều rộng ảnh
              height={128} // Thiết lập chiều cao ảnh
              className="rounded-full mb-2"
            />
            <h1 className="font-medium text-2xl my-2 text-center">Hung To</h1>
            <p className="text-sm text-center">
              <AiOutlineEnvironment className="inline-block mr-2 text-lg" />
              Ho Chi Minh City, Vietnam
            </p>
          </div>
          <div className="flex flex-col border rounded-lg bg-white text-black p-6 mt-4">
            <h1 className="text-lg text-[#1f1f1f] mb-4 font-medium">Highlights</h1>
            {/* Dòng nội dung với ảnh và text */}
            <div className="flex items-center mt-4">
              {/* Ảnh bên trái */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/img/1.jpg"
                  alt="Description"
                  width={40} // Thiết lập chiều rộng ảnh
                  height={40} // Thiết lập chiều cao ảnh
                  className="rounded-full mb-2"
                />
              </div>
              {/* Nội dung bên phải */}
              <div className="flex-grow">
                <p className="text-sm">
                  Scrum Training Certificate - Axon Active
                </p>
                <a
                  href="https://verified.sertifier.com/en/verify/96291607243483/?ref=email" // Đường dẫn đến liên kết
                  className="text-sm text-[#0056d2] underline" // Định dạng cho liên kết
                >  
                  View certificate
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Nội dung bên phải */}
        <div className="w-full lg:w-3/4 lg:ml-6">
          <div className="bg-white p-6 border rounded-lg">
            <section>
              <p className="text-gray-700 text-sm">
              As an intern, I have gained hands-on experience with various technologies, focusing on delivering web solutions using ReactJS. I have worked on developing user interfaces, responsive websites, and integrating RESTful APIs. My experience includes using React frameworks like Next.js and managing state with tools like Redux. I am proficient with Git for version control and have collaborated with teams using project management tools such as JIRA and Trello.
              </p>
              <p className="text-gray-700 text-sm mt-2">
              I am a fast learner, passionate about web development, and always eager to take on new challenges to expand my skill set. I thrive in team environments and am committed to delivering high-quality work.
              </p>
            </section>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mt-4">Experience</h1>
          </div>
          <div className="bg-white p-4 mt-2 border rounded-lg">
            <section className="mb-6">
              <h2 className="text-gray-800 text-lg font-semibold mb-4">Work history</h2>
              <div className="flex mt-2">
                {/* Ảnh bên trái */}
                <div className="flex-shrink-0 mr-2">
                  <Image
                    src="/img/2.png"
                    alt="Description"
                    width={48}
                    height={48}
                    className="rounded-full mb-2"
                  />
                </div>
                {/* Nội dung bên phải */}
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h2 className="text-base font-semibold">Admin Dashboard</h2>
                    <p className="ml-2 text-[#636363]">(May 2024 up to Present)</p>
                  </div>

                  <ul className="ml-4 list-disc text-[#636363]">
                    <li className="text-sm mt-1">Design and develop user interfaces for web application using React.js and  Node.js</li>
                    <li className="text-sm mt-1">Optimize website performance, ensuring a responsive</li>
                    <li className="text-sm mt-1">Stay up-to-date with the latest trends in frontend development and the React</li>
                    <li className="text-sm mt-1">Build and enhance user interfaces for the application, focusing on user experience and funct</li>
                    <li className="text-sm mt-1">Conduct testing and debugging to ensure robust application performance</li>
  
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mt-4">Freelance Projects</h1>
          </div>
          <div className="bg-white p-6 mt-2 border rounded-lg">
            <div className="flex justify-between items-center p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">
                Admin Dashboard - Frontend
                </div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden md:flex flex-wrap space-x-2">
                <div className="bg-[#E4EBE4] px-2 py-1 text-sm rounded-lg">ReactJS</div>
                <div className="bg-[#E4EBE4] px-2 py-1 text-sm rounded-lg">Tailwind CSS</div>
                <div className="bg-[#E4EBE4] px-2 py-1 text-sm rounded-lg">Deploy to Vecel</div>
              </div>
            </div>
           <a
              href="https://admin-frontend-ochre.vercel.app"
              className="text-[#108a00] font-medium p-2 rounded"
            >
             https://admin-frontend-ochre.vercel.app
            </a>
            <h1 className='p-2 text-black text-sm'>The Admin Dashboard frontend is a management interface that allows administrators to monitor and manage the application's functionalities</h1>
          </div>


          <div className="bg-white p-6 mt-2 border rounded-lg">
            <div className="flex justify-between items-center p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">
                Admin Dashboard - Backend
                </div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden md:flex flex-wrap space-x-2">
                <div className="bg-[#E4EBE4] px-2 py-1 text-sm rounded-lg">Node.js</div>
                <div className="bg-[#E4EBE4] px-2 py-1 text-sm rounded-lg">MySQL</div>
                <div className="bg-[#E4EBE4] px-2 py-1 text-sm rounded-lg">Deploy to Vecel</div>
              </div>
            </div>     
           <a
              href="https://dev-to-backend-abx5.vercel.app" // Đường dẫn đến liên kết
              className="text-[#108a00] font-medium p-2 rounded"
            >
            https://dev-to-backend-abx5.vercel.app
            </a>
            <h1 className='p-2 text-black text-sm'>The Admin Dashboard backend is responsible for managing data, handling requests, and ensuring the security and functionality of the application.</h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mt-4">Education</h1>
          </div>
          <div className="bg-white p-6 mt-2 border rounded-lg">
            <h1 className="text-lg font-semibold">Credentials</h1>
            {/* Dòng nội dung với ảnh và text */}
            <div className="flex items-center mt-4">
              {/* Ảnh bên trái */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src="/img/2.png"
                  alt="Description"
                  width={48} // Thiết lập chiều rộng ảnh
                  height={48} // Thiết lập chiều cao ảnh
                  className="rounded-full mb-2"
                />
              </div>
              {/* Nội dung bên phải */}
              <div className="flex-grow">
                <p className="font-semibold">
                  Ho Chi Minh City University of Agriculture and Forestry
                </p>
                <p className="text-[#1f1f1f]">Engineer degree in Software Engineering</p>
                <p className="font-semibold text-[#636363] text-sm">4.5 years program • Completed May 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
