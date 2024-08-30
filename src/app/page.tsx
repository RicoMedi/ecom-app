import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
// import { FaShoppingCart } from 'react-icons/fa';
//I created a max with wrapper a custom component we can reuse acros our app

export default function Home() {
  //in the classname inside maxWidtWrapper i added those styles that arent already used inside the maxwidthwrapper component those styles are specific to this section that we are working on and dont want to be applied to other sections where we use this maxWidthWrapper

  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  alt="snake"
                  width={200}
                  height={200}
                />
              </div>

              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                {" "}
                Create Your Own{" "}
                <span className="bg-blue-700 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Preserve your cherished moments with a personalized,{" "}
                <span className="font-semibold">one-of-a-kind</span> phone case.
                CaseCobra ensures your memories are protected, along with your
                phone.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm-items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />{" "}
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />6 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" /> Modern
                    iPhone Models Supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm-items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user-image"
                    width={40} 
                    height={40} 
                  />
                   <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user-image"
                    width={40} 
                    height={40} 
                  />
                   <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user-image"
                    width={40} 
                    height={40} 
                  />
                   <Image
                    className="inline-block rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user-image"
                    width={40} 
                    height={40} 
                  />
                   <Image
                    className="inline-block object-cover rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user-image"
                    width={40} 
                    height={40} 
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                    <Star className="h-4 w-4 text-green-600 fill-green-600"/>
                  </div>
                  <p className="text-gray-700 text-sm">Rated 4.9/5</p>
                  <p className="text-gray-700 text-sm">Based on 1000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
