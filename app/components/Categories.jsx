"use client";
import { urlFor } from "@/utils/generateImgUrl";
import Image from "next/image";

export function Categories({ categories, currentCatSatate, blogByCatFun }) {
  const categoryImg = categories.find((cat) => cat.name === currentCatSatate)
    ? urlFor(categories.find((cat) => cat.name === currentCatSatate)?.catImg)
        ?.width(200)
        ?.url()
    : `https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600`;
  return (
    <div className="pm-txt tracking-wider ">
      <Image
        className="rounded-md"
        style={{width:200,height:200,objectFit:'cover'}}
        width={500}
        height={500}
        src={categoryImg}
      />
      <div>
        <div className="mt-4 cursor-pointer">
          {/* <input
            onClick={() => blogByCatFun("All")}
            type="checkbox"
            checked={"All" === currentCatSatate && true}
            value={"All"}
          /> */}
          <label  onClick={() => blogByCatFun("All")} className={`${'All' === currentCatSatate && 'underline font-bold'} ml-2`}>All</label>
        </div>
        {categories &&
          categories.map((category) => {
            const { _id, name } = category;
            return (
              <div
                onClick={() => blogByCatFun(name)}
                key={_id}
                className="my-2 "
              >
                {/* <input
                  className="cursor-pointer"
                  type="checkbox"
                  checked={name === currentCatSatate && true}
                /> */}
                <label className={` ${name === currentCatSatate && 'underline font-bold'} ml-2 cursor-pointer  `}>{name}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
}
