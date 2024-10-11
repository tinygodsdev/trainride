import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import { FaArrowDown } from 'react-icons/fa';
import { CgArrowLongDownR } from "react-icons/cg";
import { AiFillCaretDown } from "react-icons/ai";
import { Link as RouterLink } from 'react-router-dom';

function Stations({ current }) {
  const stations = [
    { name: '[ Вельвет ]', url: '/' },
    { name: '🚂 Вельвет-Апину', url: "/to-apinu" },

    { name: '[ Апину ]', url: '/apinu' },
    { name: '🚂 Апину-Кепекен', url: "/to-kepeken" },

    { name: '[ Кепекен ]', url: '/kepeken' },
    { name: '🚂 Кепекен-Долина ручьёв', url: "/to-valley-of-creeks" },

    { name: '[ Долина ручьев ]', url: '/valley-of-creeks' },
    { name: '🚂 Долина ручьёв-Великий канал', url: "/to-risz-channel" },

    { name: '[ Великий канал Рижа ]', url: '/risz-channel' },
    { name: '🚂 Великий канал-Риж', url: "/to-risz" },

    { name: '[ Риж ]', url: '/risz' },
    { name: '🚂 Риж-Маш', url: "/to-mash" },

    { name: '[ Маш ]', url: '/mash' },
    { name: '🚂 Маш-Тиланка', url: "/to-tilanka" },

    { name: '[ Тиланка ]', url: '/tilanka' },
    { name: '🚂 Тиланка-Эша', url: "/to-esha" },

    { name: '[ Эша ]', url: '/esha' },
    { name: '🚂 Эша-Каларна', url: "/to-kalarna" },

    { name: '[ Каларна ]', url: '/kalarna' },
    { name: '🚂 Каларна-Вельвет', url: "/to-velvet-again" },

    { name: '[ Снова Вельвет ]', url: '/velvet-again' },
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

