import Image from "next/image";
import moment from "moment/moment";
import Link from "next/link";
import { urlFor } from "@/utils/generateImgUrl";

export const BlogCard = (props) => {
  const { title, slug,  image, author, cat, alt, _createdAt } = props;
  return (
    <div className=" relative pb-3 flex flex-col justify-between  overflow-hidden w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" pb-5 ">
        <Image src={image} width={400} height={300} alt={alt} />
        <Link href={`/${slug}`} className="">
          <h5 className="text-md pm-txt px-5 mt-3 font-semibold tracking-wider desc ">
            {title}
          </h5>
        </Link>
      </div>
      <div className="flex px-5 items-center justify-between">
        <div className="flex gap-3 items-center ">
          <Image
            src={urlFor(author?.profileImg).width(200).url()}
            alt="author"
            width={60}
            height={60}
            style={{ width: 40, height: 40, objectFit: "cover" }}
            className="rounded-full"
          />
          <span className=" tag mt-2">{cat?.name}</span>
        </div>
        <div className="text-xs mt-4 pm-txt font-semibold ">
          {" "}
          {moment(_createdAt).format("MMM Do YY")}{" "}
        </div>
      </div>
    </div>
  );
};
