import Image from 'next/image';
import { AiOutlineEnvironment } from 'react-icons/ai';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-12">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
        {/* Sidebar bên trái */}
        <div className="mb-4 w-full lg:mb-0 lg:w-1/4">
          <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-black">
            {/* Ảnh đại diện */}
            <Image
              src="/img/ato.JPG"
              alt="Description"
              width={128} // Thiết lập chiều rộng ảnh
              height={128} // Thiết lập chiều cao ảnh
              className="mb-2 rounded-full border-4 border-[#3AB8FE]"
            />
            <h1 className="my-2 text-center text-2xl font-medium">Hung To</h1>
            <p className="text-center text-sm">
              <AiOutlineEnvironment className="mr-2 inline-block text-lg" />
              Ho Chi Minh City, Vietnam
            </p>
            <p className="text-center text-sm">
              Contact:
              <br />
              Phone:
              <span className="font-bold"> 0858990375</span>
              <br />
              Email:
              <span className="font-bold"> thienhungto@gmail.com</span>
            </p>
          </div>
          <div className="mt-4 flex flex-col rounded-lg border bg-white p-6 text-black">
            <h1 className="mb-4 text-lg font-medium text-[#1f1f1f]">
              Highlights
            </h1>
            {/* Dòng nội dung với ảnh và text */}
            <div className="mt-4 flex items-center">
              {/* Ảnh bên trái */}
              <div className="mr-4 flex-shrink-0">
                <Image
                  src="/img/1.jpg"
                  alt="Description"
                  width={40} // Thiết lập chiều rộng ảnh
                  height={40} // Thiết lập chiều cao ảnh
                  className="mb-2 rounded-full"
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
        <div className="w-full lg:ml-6 lg:w-3/4">
          <div className="rounded-lg border bg-white p-6">
            <section>
              <p className="text-sm text-gray-700">
                As a junior developer, I have hands-on experience with various
                technologies, focusing on delivering web solutions using
                ReactJS. I have worked on developing user interfaces, creating
                responsive websites, and integrating RESTful APIs. My experience
                includes using React frameworks like Next.js and managing state
                with tools such as Redux Toolkit. I am proficient with Git for
                version control and have collaborated effectively with teams
                using project management tools like JIRA and Trello.
              </p>
              <p className="mt-2 text-sm text-gray-700">
                I am a fast learner, passionate about web development, and
                always eager to take on new challenges to expand my skill set. I
                thrive in team environments and am committed to delivering
                high-quality work.
              </p>
            </section>
          </div>
          <div>
            <h1 className="mt-4 text-2xl font-semibold">Experience</h1>
          </div>
          <div className="mt-2 rounded-lg border bg-white p-4">
            <section className="mb-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Work history
              </h2>
              <div className="mt-2 flex">
                {/* Ảnh bên trái */}
                <div className="mr-2 flex-shrink-0">
                  <Image
                    src="/img/123.JPG"
                    alt="Description"
                    width={48}
                    height={48}
                    className="mb-2 rounded-full"
                  />
                </div>
                {/* Nội dung bên phải */}
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h2 className="text-base font-semibold">Admin Dashboard</h2>
                    <p className="ml-2 text-[#636363]">
                      (May 2024 up to Present)
                    </p>
                  </div>

                  <ul className="ml-4 list-disc text-[#636363]">
                    <li className="mt-1 text-sm">
                      Design and develop user interfaces for web application
                      using React.js and Node.js
                    </li>
                    <li className="mt-1 text-sm">
                      Optimize website performance, ensuring a responsive
                    </li>
                    <li className="mt-1 text-sm">
                      Stay up-to-date with the latest trends in frontend
                      development and the React
                    </li>
                    <li className="mt-1 text-sm">
                      Build and enhance user interfaces for the application,
                      focusing on user experience{' '}
                    </li>
                    <li className="mt-1 text-sm">
                      Conduct testing and debugging to ensure robust application
                      performance
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div>
            <h1 className="mt-4 text-2xl font-semibold">Projects</h1>
          </div>
          <div className="mt-2 rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">
                  Admin Dashboard - Frontend
                </div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden flex-wrap space-x-2 md:flex print:flex">
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  ReactJS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Tailwind CSS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Deploy to Vercel
                </div>
              </div>
            </div>
            <a
              href="https://admin-frontend-ochre.vercel.app"
              className="rounded p-2 font-medium text-[#108a00]"
            >
              https://admin-frontend-ochre.vercel.app
            </a>
            <h1 className="p-2 text-sm text-black">
              The Admin Dashboard frontend is a management interface that allows
              administrators to monitor and manage the application
              functionalities
            </h1>
          </div>

          <div className="mt-2 rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">
                  Admin Dashboard - Backend
                </div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden flex-wrap space-x-2 md:flex print:flex">
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Expressjs
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  MySQL
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  JWT
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Deploy to Vercel
                </div>
              </div>
            </div>
            <a
              href="https://dev-to-backend-abx5.vercel.app" // Đường dẫn đến liên kết
              className="rounded p-2 font-medium text-[#108a00]"
            >
              https://dev-to-backend-abx5.vercel.app
            </a>
            <h1 className="p-2 text-sm text-black">
              The Admin Dashboard backend is responsible for managing data,
              handling requests, and ensuring the security and functionality of
              the application.
            </h1>
          </div>
          <div className="mt-2 rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">Muadee</div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden flex-wrap space-x-2 md:flex print:flex">
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  ReactJS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Tailwind CSS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Deploy to Vercel
                </div>
              </div>
            </div>
            <a
              href="https://www.muadee.com.vn/tra-gop-muadee-trung-iphone-16-pro-max" // Đường dẫn đến liên kết
              className="rounded p-2 font-medium text-[#108a00]"
            >
              https://www.muadee.com.vn/tra-gop-muadee-trung-iphone-16-pro-max
            </a>
            <h1 className="p-2 text-sm text-black">Make UI</h1>
          </div>
          <div className="mt-2 rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">Muadee</div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden flex-wrap space-x-2 md:flex print:flex">
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  ReactJS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Tailwind CSS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Deploy to Vercel
                </div>
              </div>
            </div>
            <a
              href="https://www.muadee.com.vn/thanh-toan-voi-apple-pay" // Đường dẫn đến liên kết
              className="rounded p-2 font-medium text-[#108a00]"
            >
              https://www.muadee.com.vn/thanh-toan-voi-apple-pay
            </a>
            <h1 className="p-2 text-sm text-black">Make UI</h1>
          </div>

          <div className="mt-2 rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">Muadee</div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden flex-wrap space-x-2 md:flex print:flex">
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  ReactJS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Tailwind CSS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Deploy to Vercel
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://d3dxi7t02b61aw.cloudfront.net/shopeefood-khao-ban-70k-qua-the-tra-gop-muadee"
                className="block rounded p-2 font-medium text-[#108a00]"
              >
                <span className="block text-sm text-black">Shopee</span>
                https://d3dxi7t02b61aw.cloudfront.net/shopeefood-khao-ban-70k-qua-the-tra-gop-muadee
              </a>
              <a
                href="https://d3dxi7t02b61aw.cloudfront.net/di-muon-noi-voi-traveloka-giam-150k-qua-muadee"
                className="block rounded p-2 font-medium text-[#108a00]"
              >
                <span className="block text-sm text-black">Traveloka</span>
                https://d3dxi7t02b61aw.cloudfront.net/di-muon-noi-voi-traveloka-giam-150k-qua-muadee
              </a>
              <a
                href="https://d3dxi7t02b61aw.cloudfront.net/luot-lazada-tha-ga-giam-200k-qua-the-tra-gop-muadee"
                className="block rounded p-2 font-medium text-[#108a00]"
              >
                <span className="block text-sm text-black">Lazada</span>
                https://d3dxi7t02b61aw.cloudfront.net/luot-lazada-tha-ga-giam-200k-qua-the-tra-gop-muadee
              </a>
            </div>

            <h1 className="p-2 text-sm text-black">Make UI</h1>
          </div>

          <div className="mt-2 rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">Simea</div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden flex-wrap space-x-2 md:flex print:flex">
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  ReactJS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Tailwind CSS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Deploy to Vercel
                </div>
              </div>
            </div>
            <a
              href="https://www.simea.vn" // Đường dẫn đến liên kết
              className="rounded p-2 font-medium text-[#108a00]"
            >
              https://www.simea.vn
            </a>
            <h1 className="p-2 text-sm text-black">
              The coffee shop interface aims to provide a smooth user
              experience, helping customers easily explore the menu.
            </h1>
          </div>

          <div className="mt-2 rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between p-2">
              {/* Left section: Ninza */}
              <div>
                <div className="text-sm font-bold">Verinlayer</div>
              </div>
              {/* Right section: Other text items */}
              <div className="hidden flex-wrap space-x-2 md:flex print:flex">
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  ReactJS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Tailwind CSS
                </div>
                <div className="print-bg rounded-lg bg-[#E4EBE4] px-2 py-1 text-sm">
                  Deploy to Vercel
                </div>
              </div>
            </div>
            <a
              href="https://layer-verin-ui.vercel.app" // Đường dẫn đến liên kết
              className="rounded p-2 font-medium text-[#108a00]"
            >
              https://layer-verin-ui.vercel.app
            </a>
            <h1 className="p-2 text-sm text-black">Make UI</h1>
          </div>
          <div>
            <h1 className="mt-4 text-2xl font-semibold">Education</h1>
          </div>
          <div className="mt-2 rounded-lg border bg-white p-6">
            <h1 className="text-lg font-semibold">Credentials</h1>
            {/* Dòng nội dung với ảnh và text */}
            <div className="mt-4 flex items-center">
              {/* Ảnh bên trái */}
              <div className="mr-4 flex-shrink-0">
                <Image
                  src="/img/2.png"
                  alt="Description"
                  width={48} // Thiết lập chiều rộng ảnh
                  height={48} // Thiết lập chiều cao ảnh
                  className="mb-2 rounded-full"
                />
              </div>
              {/* Nội dung bên phải */}
              <div className="">
                <p className="font-semibold">
                  Ho Chi Minh City University of Agriculture and Forestry
                </p>
                <p className="text-[#1f1f1f]">
                  Engineer degree in Software Engineering
                </p>
                <p className="text-sm font-semibold text-[#636363]">
                  4.5 years program • Completed May 2024
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center">
              {/* Ảnh bên trái */}
              <div className="mr-4 flex-shrink-0">
                <Image
                  src="/img/1.jpg"
                  alt="Description"
                  width={48} // Thiết lập chiều rộng ảnh
                  height={48} // Thiết lập chiều cao ảnh
                  className="mb-2 rounded-full"
                />
              </div>
              {/* Nội dung bên phải */}
              <div className="flex-grow">
                <p className="font-semibold">
                  Scrum Training Certificate - Axon Active
                </p>
                <a
                  href="https://verified.sertifier.com/en/verify/96291607243483/?ref=email" // Đường dẫn đến liên kết
                  className="text-sm text-[#0056d2] underline" // Định dạng cho liên kết
                >
                  View certificate
                </a>
                <p className="text-sm font-semibold text-[#636363]">
                  3 months program • Completed May 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
