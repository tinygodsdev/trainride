import React from 'react'
import CharacterCard from '../components/CharacterCard';
import SurveyItem from "../components/SurveyItem";
import { Button, Card, CardBody, Divider, Link } from "@nextui-org/react";
import PageHeader from '../components/PageHeader';
import Stations from '../components/Stations';

export default function RideToRiszChannel({ theme, idx }) {
  return (
    <>
      <PageHeader imageUrl={"/images/map.png"} bgColorClass={"bg-primary"}>
        <div className="text-center">
          <h1 className="text-4xl font-bold font-gabriela mb-4">Поездка в Апину</h1>
          <h3 className="text-2xl mb-12 font-marck">Вельветская железнодорожная компания</h3>
          <Card
            isBlurred
            className="border-none bg-background/2 max-w-[610px]"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0">
                      <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                      <p className="text-small text-foreground/80">12 Tracks</p>
                      <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
                    </div>
                  </div>

                  <div className="flex flex-col mt-3 gap-1">
                    <div className="flex justify-between">
                      <p className="text-small">1:23</p>
                      <p className="text-small text-foreground/50">4:32</p>
                    </div>
                  </div>

                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </PageHeader>
      <div className="container mx-auto px-4 max-w-screen-md py-24">

        <p className="mb-8 font-raleway text-xl">
          Однажды маленькая булочка с кунжутом на верху решила, что ей пора узнать мир. Скользнув с прилавка пекарни, она отправилась в путешествие по городу. Преодолевая препятствия в виде голодных птиц и огромных луж, булочка даже нашла временный дом в корзинке уличного музыканта, где она стала частью импровизированного барабанного сета. Но самое удивительное произошло, когда булочка оказалась в парке: там её заметил ребёнок и положил в кормушку для уток. В итоге, наша героиня стала частью большого праздника для пернатых друзей, поняв, что иногда самые невероятные приключения приводят к самым тёплым и трогательным моментам.
        </p>


        <Stations current={idx} />
      </div>
    </>
  )
}
