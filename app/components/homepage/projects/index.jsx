import ProjectCard from './project-card';
import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

const projectsData = [
  {
    id: 1,
    name: 'LOVERS - IPT - I Plus T Solution',
    description: "Discover a private and secure chat space just for you and your partner. For a one-time payment of ₹99 per user, enjoy lifetime access to a platform designed with your privacy in mind. Experience worry-free conversations with end-to-end encryption and no ads. Sign up now for your exclusive, secure chat space!",
    tools: ['Next.js', 'MySQL', 'Supabase', 'AWS S3', 'Node Mailer', 'JWT'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: crefin,
  },
  {
    id: 2,
    name: 'Photo AI',
    description: 'Photo AI is a cutting-edge alternative to Google Photos, designed for seamless event management. It utilizes AI to organize and tag photos efficiently, simplifying the process of handling large volumes of images. Perfect for both personal and professional events, Photo AI ensures a smooth and intuitive photo management experience.',
    tools: ['Next.js', 'Python','Fast API', "JavaScript", "AWS AppSync", "MySQL", "AWS S3"],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 3,
    name: 'I Plus T Solution Blogs',
    description: 'Stay ahead in the tech world with the I Plus T Solution Blog. Get the latest IT news, trends, and expert tips. Explore in-depth articles, practical guides, and insightful analysis on all things IT. Join our community for the best IT resources and stay updated on the ever-evolving tech landscape.',
    tools: ['Next.js', 'NestJS', "JavaScript", "AWS AppSync", "MySQL", "AWS S3"],
    role: 'Backend Developer',
    code: '',
    demo: '',
    image: travel,
  },
  {
    id: 4,
    name: 'Company Website',
    description: "I Plus T Solution: Your Growth Partner for Start ups 🚀 Empowering fledgling businesses to thrive, we provide tailored solutions for sustainable growth. From strategic planning to cutting-edge technology implementation, we're dedicated to propelling your venture forward. Let's collaborate and transform your startup dreams into success stories together",
    tools: ['Next.js', 'Node.js', 'Node Mailer', 'AWS AppSync'],
    code: '',
    role: 'Full Stack Developer',
    demo: '',
    image: realEstate,
  },
  {
    id: 5,
    name: 'Red Lorry Film Festival',
    description: "Immerse yourself in the world of cinema at the Red Lorry Film Festival! Experience a diverse range of global films across genres in the heart of the city. Join us for premieres, TV shows, classics, and more, alongside delightful cuisines, conversations, and camaraderie",
    tools: ['React', 'MongoDB', 'Node.js', "S3"],
    code: '',
    demo: '',
    image: ayla,
    role: 'Frontend Developer',
  }
];
const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;