import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="my-12 lg:my-16 relative">
        <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Who I am?
            </p>
            <p className="text-gray-200 text-sm lg:text-lg">
              I’m a dedicated full-stack developer with a year of hands-on experience in building dynamic web applications using React, Next.js, Node.js and More. Adept at crafting seamless user experiences and solving complex technical challenges. Committed to continuous learning and delivering high-quality code that powers innovative solutions.
            </p>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/profile.png"
              width={280}
              height={280}
              alt="Abu Said"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;