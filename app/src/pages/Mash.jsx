import React from "react";
import { Button, Image } from "@nextui-org/react";
import PageHeader from "../components/PageHeader";
import PopoverCard from "../components/PopoverCard";
import Stations from "../components/Stations";
import data from "../data";
import ChatMessage from "../components/ChatMessage";
import ChatWrapper from "../components/ChatWrapper";
import { MirelyCard } from "../components/Cards";

export default function Mash({ theme, idx }) {
  return (
    <>
      <PageHeader imageUrl={"/images/map.png"} bgColorClass={"bg-primary"}>
        <div className="text-center">
          <h1 className="text-4xl font-bold font-gabriela mb-4">На поезде со всеми остановками</h1>
          <h3 className="text-2xl mb-12 font-marck">Уютное путешествие with a twist</h3>
        </div>
      </PageHeader>
      <div className="container mx-auto px-4 max-w-screen-md py-24">
        <Stations current={idx} />


        <p className="mb-8 font-raleway text-xl">
          Однажды маленькая булочка с кунжутом на верху решила, что ей пора узнать мир. Скользнув с прилавка пекарни, она отправилась в путешествие по городу. Преодолевая препятствия в виде голодных птиц и огромных луж, булочка даже нашла временный дом в корзинке уличного музыканта, где она стала частью импровизированного барабанного сета. Но самое удивительное произошло, когда булочка оказалась в парке: там её заметил ребёнок и положил в кормушку для уток. В итоге, наша героиня стала частью большого праздника для пернатых друзей, поняв, что иногда самые невероятные приключения приводят к самым тёплым и трогательным моментам.
        </p>

        <Button className="mr-2" color="primary">
          primary
        </Button>
        <Button className="mr-2" color="default">
          default
        </Button>
        <Button className="mr-2" color="secondary">
          secondary
        </Button>
        <Button className="mr-2" color="success">
          success
        </Button>
        <Button className="mr-2" color="warning">
          warning
        </Button>
        <Button className="mr-2" color="danger">
          danger
        </Button>

        <ChatWrapper imageUrl={"/images/house.png"} bgColorClass={"bg-primary"}>
          <ChatMessage name="Thunderpaw" avatar={data.people.thunderpaw.ava} message="Hi Monlie! Seen my red dot lately?" colorClass={"primary"} position={"left"} />
          <ChatMessage name="Monlie" avatar={data.people.monlie.ava} message="Not now, Thunderpaw. I'm busy looking for my left sock." colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Monlie" avatar={""} message="How about you help me first, then we talk treats?" colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Thunderpaw" avatar={data.people.thunderpaw.ava} message="If you give me treats, I might just help you find it." colorClass={"primary"} position={"left"} />
          <ChatMessage name="Thunderpaw" avatar={""} message="..." colorClass={"primary"} position={"left"} />
          <ChatMessage name="Thunderpaw" avatar={""} message="Gimmie food, Monlie! I can't search on an empty stomach!" colorClass={"primary"} position={"left"} />
          <ChatMessage name="Monlie" avatar={data.people.monlie.ava} message="You just had breakfast, Thunderpaw. Are you a black hole in disguise?" colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Thunderpaw" avatar={data.people.thunderpaw.ava} message="I'm a growing boy! I need my second breakfast, elevenses, luncheon..." colorClass={"primary"} position={"left"} />
          <ChatMessage name="Monlie" avatar={data.people.monlie.ava} message="You've been hanging out with the Hobbits again, haven't you?" colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Thunderpaw" avatar={data.people.thunderpaw.ava} message="Maybe... But seriously, where's the food?" colorClass={"primary"} position={"left"} />
          <ChatMessage name="Monlie" avatar={data.people.monlie.ava} message="Fine, I'll get the treats. But you're helping me with laundry after." colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Thunderpaw" avatar={data.people.thunderpaw.ava} message="Deal! But I get to nap in the laundry basket after." colorClass={"primary"} position={"left"} />
          <ChatMessage name="Monlie" avatar={data.people.monlie.ava} message="Only if you promise not to shed on my clean clothes again." colorClass={"secondary"} position={"right"} />
        </ChatWrapper>

        <p className="font-raleway text-xl mb-8">
          Сырный хруст — это не просто закуска, это целое кулинарное произведение искусства. Изготовленный из тонких листов теста, щедро посыпанных сыром и запечённых до золотистой корочки, он становится звездой любого стола. При первом же укусе хрустящая текстура и насыщенный сырный вкус сливаются воедино, создавая неповторимый вкусовой опыт. Но сырный хруст не терпит поспешности: чтобы по-настоящему оценить его, нужно медленно наслаждаться каждым кусочком, позволяя ароматам и текстурам раскрыться в полной мере. Эта закуска становится идеальным дополнением к вину или коктейлю, а также отличным поводом собрать друзей и провести время в хорошей компании.
        </p>

        <MirelyCard />

        <p className="font-raleway text-xl mb-8">
          Сырный хруст — это не просто закуска, это целое кулинарное произведение искусства. Изготовленный из тонких листов теста, щедро посыпанных сыром и запечённых до золотистой корочки, он становится звездой любого стола. При первом же укусе хрустящая текстура и насыщенный сырный вкус сливаются воедино, создавая неповторимый вкусовой опыт. Но сырный хруст не терпит поспешности: чтобы по-настоящему оценить его, нужно медленно наслаждаться каждым кусочком, позволяя ароматам и текстурам раскрыться в полной мере. Эта закуска становится идеальным дополнением к вину или коктейлю, а также отличным поводом собрать друзей и провести время в хорошей компании.
        </p>

        <div className="float-right w-80 my-2 ml-4">
          <Image src={"/images/house.png"} />
        </div>

        <p className="font-raleway text-xl hyphens-auto mb-8 text-justify">
          Сырный хруст — это не просто закуска, это целое кулинарное произведение искусства. Изготовленный из тонких листов теста, щедро посыпанных сыром и запечённых до золотистой корочки, он становится звездой любого стола. При первом же укусе хрустящая текстура и насыщенный сырный вкус сливаются воедино, создавая неповторимый вкусовой опыт. Но сырный хруст не терпит поспешности: чтобы по-настоящему оценить его, нужно медленно наслаждаться каждым кусочком, позволяя ароматам и текстурам раскрыться в полной мере. Эта закуска становится идеальным дополнением к вину или коктейлю, а также отличным поводом собрать друзей и провести время в хорошей компании.
        </p>

        <div className="float-left w-80 my-2 mr-4">
          <Image src={"/images/house.png"} />
        </div>

        <p className="font-raleway text-xl mb-8">
          "Медовое веретено" — это не просто пирожное, это настоящая легенда бара <PopoverCard triggerText={"Толстый рыцарь"} data={data.places.fatKnight} theme={"dark"} />. С первого взгляда оно напоминает пахлаву, но только один укус раскрывает его уникальный характер. Слои тончайшего теста чередуются с медово-ореховой начинкой, а сверху пирожное украшено карамелизованными орехами. Но самое удивительное в этом десерте — его способность гармонировать с соленым пивом, которое подают прямо в баре. Контраст между сладостью меда и солёностью пива создаёт невероятно насыщенный вкусовой букет. А взбитые сливки, подаваемые на боку, добавляют завершающий акцент, делая каждый укус "Медового веретено" поистине незабываемым. Это пирожное — идеальный выбор для тех, кто ищет нечто большее, чем просто десерт; это целый вкусовой эксперимент, который никого не оставит равнодушным.
        </p>
        <Stations current={0} />
      </div>
    </>
  );
}