import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
export function timeConverter(isoTime) {
  const currentTime = new Date().getTime();
  const pastTime = new Date(isoTime).getTime();
  const timeDifference = currentTime - pastTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
}
function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.Small_Thumbnail}
          height={1080}
          width={1920}
          alt=""
          loading='lazy'
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.Published_Date)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.Total_Views}</span>
            </p>
          </div>
        </div>
        <Link target='_blank' href={`https://www.blog.iplust.in/post/${blog.Title.split(" ").join("-")}`}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium line-clamp-2'>
            {blog.Title}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.Read_Time}`}
        </p>
        <p className='text-sm text-[#d3d8e8] line-clamp-4'>
          {blog.Description}
        </p>
        <div className="">
          <Link target='_blank' href={`https://www.blog.iplust.in/post/${blog.Title.split(" ").join("-")}`}>
            <button className='bg-violet-500 text-white mt-5 rounded px-3 py-1.5 text-xs'>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;