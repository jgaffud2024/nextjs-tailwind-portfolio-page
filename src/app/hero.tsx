"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
// eslint-disable-next-line  react/no-unescaped-entities

interface MyTypographyProps {
  variant?: string;
  color?: string;
  className?: string;
}

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
        <Typography
  variant="h1"
  color="blue-gray"
  className="mb-4 lg:text-5xl !leading-tight text-3xl"
  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
>
  Welcome to my Web <br /> Development Portfolio!
</Typography>
          <Typography
  variant="lead"
  className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
>
  I'm Joseph Gaffud, a passionate web developer based in Philippines. Here,
  you'll get a glimpse of my journey in the world of web
  development, where creativity meets functionality.
</Typography>
          <div className="grid">
          <Typography
              variant="small"
                className="mb-2 text-gray-900 font-medium"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}       
                          
                          >
                     Your email
                    </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input color="gray" label="Enter your email" size="lg" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              <Button
  color="gray"
  className="w-full px-4 md:w-[12rem]"
  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
>
  require offer
</Button>
            </div>
          </div>
          <Typography
  variant="small"
  className="mb-2 text-gray-900 font-medium"
  placeholder=""
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
>
  Your email
</Typography>
        </div>
        <Image
          src="/image/image-7.svg"
          alt="team work"
          layout="responsive"
          width="500"
          height="500"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
