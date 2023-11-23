import { singleBlog } from "@/sanity/sanity-utils";
import { urlFor } from "@/utils/generateImgUrl";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import Image from "next/image";

export default async function blogDetail(props) {
  const {
    params: { slug },
  } = props;
  const detail = await singleBlog(slug);
  const { title, content, image, alt, author, _createdAt, cat } = detail;

  return (
    <div className="container ">
      <Image
        className="w-full h-[500px] object-cover"
        src={image}
        width={500}
        height={400}
        alt={alt}
      />
      <div className="pm-txt ">
        <h1 className="text-2xl my-6 font-bold tracking-widest ">{title}</h1>
        <div className="flex items-center gap-4 mb-8">
          <Image
            src={urlFor(author?.profileImg).width(200).url()}
            alt="author"
            width={200}
            height={200}
            style={{ width: 50, height: 50, objectFit: "cover" }}
            className="rounded-full"
          />
          <div className="">
            <p className="text-sm font-bold">Author : {author.name} </p>
          <p className="text-xs font-semibold">Published : {moment(_createdAt).format("MMM Do YY")}{" "}</p>

          </div>
          <p className="tag">{cat.name}</p>
        </div>
      </div>
      <div className="text-justify tracking-wider font-mono text-gray-400">
        <PortableText value={content} components={{}} />
      </div>
    </div>
  );
}
