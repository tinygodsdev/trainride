import React from "react";
import CharacterCard from '../components/CharacterCard';
import SurveyItem from "../components/SurveyItem";
import { Button, Divider, Image, Link, Tooltip } from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PopoverCard from "../components/PopoverCard";
import Stations from "../components/Stations";
import data from "../data";
import ChatMessage from "../components/ChatMessage";
import ChatWrapper from "../components/ChatWrapper";
import BottomSVG from "../components/BottomSVG";
import Footer from "../components/Footer";
import Flags from "../components/Flags";
import { ArieCard, MirelyCard } from "../components/Cards";
import { BsQuestionCircle } from "react-icons/bs";
import TranslationTooltip from "../components/TranslationTooltip";

function Home({ theme, idx }) {
  return (
    <>
      <PageHeader imageUrl={"/images/map.png"} bgColorClass={"bg-primary"}>
        <div className="text-center">
          <h1 className="text-4xl font-bold font-gabriela mb-4">На поезде со всеми остановками</h1>
          <h3 className="text-2xl mb-12 font-marck">Уютное путешествие with a twist</h3>
        </div>
      </PageHeader>
      <div className="container mx-auto px-4 max-w-screen-md py-24">

        <div className="mb-8">
          <h2 className="text-2xl font-bold font-gabriela">Приморский вокзал, Вельвет <TranslationTooltip data={{ text: "veljvet", transcription: "" }} /></h2>
          <p className="font-raleway text-lg"><PopoverCard triggerText={"Сезон Зелени"} data={data.info.calendarGreen} theme={"dark"} />, четвертая декада, ранний вечер</p>
          <p className="font-raleway text-lg flex items-center">
            <span className="font-bold">07.4.3.119&nbsp;</span>
            <Tooltip className="" placement="right" color="primary" content="День.Декада.Сезон.Год">
              <span><BsQuestionCircle /></span>
            </Tooltip>
          </p>
        </div>

        <p className="mb-8 font-raleway text-xl">
          Прошло три года с тех пор. Он нашёл в себе ключ, чтобы победить страх, и страха больше нет.
          Теперь Мирели стоит на платформе вокзала и смотрит на позолоченные солнцем стрелы убегающих вдаль рельсов.
          Невидимое отсюда, за тамарисковой рощей шумит море, влажный прохладный ветер ерошит волосы.
        </p>

        <MirelyCard />

        <p className="mb-8 font-raleway text-xl">
          Волшебные животные его любят. Или, если не любят, то уважают.
          Мирели догадывается, что это как-то связано с тем,
          что случилось три года назад в <PopoverCard triggerText={"Дробных землях"} data={data.places.fraglands} theme={"dark"} />,
          но предпочитает об этом не думать.
          Он вообще предпочитает не думать о загадках, которые не может разрешить прямо сейчас.
          Так или иначе, за эти годы Мирели узнал, что волшебных животных вокруг намного больше, чем принято думать.
          Просто многие из них умеют не бросаться в глаза.
        </p>

        <p className="mb-8 font-raleway text-xl">
          Мирели - не профессиональный волшебник, и Ари - не его спутник.
          Ари - сам по себе, но сейчас по каким-то собственным неведомым причинам Ари решил составить ему компанию в предстоящем путешествии, и Мирели рад этому.
          Практической пользы от Ари никакой: он не раз напоминал Мирели, что помогать в делах не собирается "ни на пол лапушки".
          Но и сам Мирели относится к людям, которые исходят исключительно из практических соображений, с изрядной долей... снисходительности.
          Зато Ари - занятный собеседник, а если ты решил объехать весь мир, то не будешь отказываться от весёлой компании.
          Тем более, когда отказаться нет никакой возможности.
        </p>

        <ArieCard />

        <ChatWrapper imageUrl={"/images/house.png"} bgColorClass={"bg-warning"}>
          <ChatMessage name="Ари" avatar={data.people.arie.ava} message="Эй, Мирели, а давай поиграем в шахматы?" colorClass={"primary"} position={"left"} />
          <ChatMessage name="Мирели" avatar={data.people.mirely.ava} message="Я бы с удовольствием, но разве у тебя есть шахматы?" colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Ари" avatar={data.people.arie.ava} message="Нет, конечно. Я просто подумал, что мы могли бы использовать пешки вместо настоящих фигур!" colorClass={"primary"} position={"left"} />
          <ChatMessage name="Мирели" avatar={data.people.mirely.ava} message="И чем же, позволь спросить, мы будем их двигать по доске?" colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Ари" avatar={data.people.arie.ava} message="О, я могу их переставлять лапкой! А ты просто говори, куда ходить" colorClass={"primary"} position={"left"} />
          <ChatMessage name="Мирели" avatar={data.people.mirely.ava} message="Хм... Забавная идея! Давай попробуем, только без жульничества, ладно?" colorClass={"secondary"} position={"right"} />
          <ChatMessage name="Ари" avatar={data.people.arie.ava} message="Разумеется! Я же порядочный волшебный зверь" colorClass={"primary"} position={"left"} />
        </ChatWrapper>

        <Stations current={0} />
      </div>
    </>
  );
}

export default Home;