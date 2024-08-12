import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
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
            jgfjghv tfutf  tyjhg g xc v,mndc mdnf vmdnf sd vnbsevks fvsdf vmnrf vgf vnf jfb jdfn ljdfv vfh fmn jfh ljsnf ljhfbslrj ,sfnv jhv mfnv ljfh ljhf mnf ljhv jf hjhv kjsd nfv ljshf kjnsv mdxvn djlfh mfnv ljfv ljfhv dv df lfjdn .fnv ldfj kfj
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
  );
};

export default AboutSection;