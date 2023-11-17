import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import { FaArrowDown } from 'react-icons/fa';
import { CgArrowLongDownR } from "react-icons/cg";
import { AiFillCaretDown } from "react-icons/ai";
import { Link as RouterLink } from 'react-router-dom';

function Stations({ current }) {
  const stations = [
    { name: '[ Вельвет ]', url: '/' },
    { name: '🚂 Вельвет-Апину', url: "/to0010" },

    { name: '[ Апину ]', url: '/0010' },
    { name: '🚂 Апину-Кепекен', url: "/to0020" },

    { name: '[ Кепекен ]', url: '/0020' },
    { name: '🚂 Кепекен-Долина ручьёв', url: "/to0030" },

    { name: '[ Долина ручьев ]', url: '/0030' },
    { name: '🚂 Долина ручьёв-Великий канал', url: "/to0040" },

    { name: '[ Великий канал Рижа ]', url: '/0040' },
    { name: '🚂 Великий канал-Риж', url: "/to0050" },

    { name: '[ Риж ]', url: '/0050' },
    { name: '🚂 Риж-Маш', url: "/to0060" },

    { name: '[ Маш ]', url: '/0060' },
    { name: '🚂 Маш-Тиланка', url: "/to0070" },

    { name: '[ Тиланка ]', url: '/0070' },
    { name: '🚂 Тиланка-Эша', url: "/to0080" },

    { name: '[ Эша ]', url: '/0080' },
    { name: '🚂 Эша-Каларна', url: "/to0090" },

    { name: '[ Каларна ]', url: '/0090' },
    { name: '🚂 Каларна-Вельвет', url: "/to0100" },

    { name: '[ Снова Вельвет ]', url: '/' },
  ]

  return (
    <Card isFooterBlurred className="p-0 w-full">
      <CardHeader className="absolute z-10 top-0 p-0 flex-col items-start h-full">
        <Card
          isBlurred
          className="font-raleway h-full m-4">
          <CardHeader className="p-5">
            <h2 className="text-2xl text-center font-bold font-gabriela mb-2">Маршрутный лист</h2>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            {stations.map((station, index) => (
              <div key={`${station.url}_${index}`} className="my-1">
                <div className="flex items-center">
                  {!station.url.startsWith('/to') && (
                    <div className="flex">
                      <Link
                        className={`text-md font-extrabold ${current === index ? 'text-primary' : 'text-foreground'} ${current > index ? 'line-through' : 'no-underline'}`}
                        color={current === index ? 'primary' : 'foreground'}
                        as={RouterLink}
                        to={station.url}
                      >
                        {station.name}
                      </Link>
                    </div>
                  )}
                  {index < stations.length - 1 && station.url.startsWith('/to') && (
                    <>
                      <CgArrowLongDownR className="text-center" />
                      <Link
                        className={`text-md ml-2 ${current === index ? 'text-primary' : 'text-foreground'} ${current > index ? 'line-through' : 'no-underline'}`}
                        color={current === index ? 'primary' : 'foreground'}
                        as={RouterLink}
                        to={station.url}
                      >
                        {station.name}
                      </Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </CardBody>
          <CardFooter className='text-xl justify-center'>
            {/* <h3 className='font-marck'>Путь, который может быть пройдён, - это не вечный путь</h3> */}
          </CardFooter>
        </Card>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/images/house.png"
      />
    </Card>
  )
}

export default Stations

