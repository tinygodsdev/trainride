import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter, Button, Divider } from "@nextui-org/react";

export default function CharacterCard({ children, imageUrl, footerText }) {
  return (
    <Card className="py-4 mb-8 font-raleway text-content1-foreground">
      <CardHeader className="pb-0 pt-0 px-0 flex-col items-start">
      </CardHeader>
      <CardBody className="overflow-visible py-2 sm:grid grid-cols-2 gap-5">

        <div className="flex flex-col">
          <Image
            className="object-cover rounded-xl"
            src={imageUrl}
          />
        </div>

        <div className="flex flex-col">
          {children}
        </div>
      </CardBody>
      <CardFooter className='text-xl justify-center'>
        <h3 className='font-marck'>{footerText}</h3>
      </CardFooter>
    </Card>
  );
}
