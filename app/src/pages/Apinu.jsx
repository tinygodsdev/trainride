import React from 'react'
import CharacterCard from '../components/CharacterCard';
import SurveyItem from "../components/SurveyItem";
import { Button, Divider, Link } from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import Stations from '../components/Stations';
import { ApinuDashboard1, ApinuDashboard2 } from '../dashboards.jsx/ApinuDashboards';

export default function Apinu({ theme, idx }) {
  return (
    <>
      <PageHeader imageUrl={"/images/map.png"} bgColorClass={"bg-primary"}>
        <h1>Whaevert</h1>
      </PageHeader>

      <ApinuDashboard1 />

      <div className="container mx-auto px-4 max-w-screen-md ty-24">
        <p className="mb-8 font-raleway text-xl">
          Однажды маленькая булочка с кунжутом на верху решила, что ей пора узнать мир. Скользнув с прилавка пекарни, она отправилась в путешествие по городу. Преодолевая препятствия в виде голодных птиц и огромных луж, булочка даже нашла временный дом в корзинке уличного музыканта, где она стала частью импровизированного барабанного сета. Но самое удивительное произошло, когда булочка оказалась в парке: там её заметил ребёнок и положил в кормушку для уток. В итоге, наша героиня стала частью большого праздника для пернатых друзей, поняв, что иногда самые невероятные приключения приводят к самым тёплым и трогательным моментам.
        </p>

        <p className="mb-3">
          <Link className='text-bold text-lg font-extrabold' color="foreground" as={RouterLink} to="/" underline="always">На вокзал</Link>
        </p>
        <p className="mb-3">
          <Link className='text-lg font-extrabold' color="foreground" as={RouterLink} to="/0010" underline="always">Следующая станция</Link>
        </p>

        <CharacterCard imageUrl="/images/girl.png" footerText="Не рухнувшее устоит">
          <h3 className='font-bold text-xl font-gabriela'>Монли Муви</h3>
          <p className="text-sm">Социально-неловкая колдунья</p>
          <Divider className='my-3' />
          <SurveyItem title={"Время рождения"} value={"Осень 97 г. ППВ"} />
          <SurveyItem title={"Место рождения"} value={"Кепекен"} />
          <SurveyItem title={"Любимая еда"} value={"Дынные булочки 🥮"} />
          <SurveyItem title={"Комфортный напиток"} value={"Чай из горной таволги"} />
        </CharacterCard>

        <CharacterCard imageUrl="/images/cat.png" footerText="Мууурррррр">
          <h3 className='font-bold text-xl font-gabriela'>Громолап</h3>
          <p className="text-sm">Умеренно нелегальный кот</p>
          <Divider className='my-3' />
          <SurveyItem title={"Дата рождения"} value={"01.04.00 (не шутка!)"} />
          <SurveyItem title={"Место рождения"} value={"?"} />
          <SurveyItem title={"Любимая еда"} value={"Абсолютно любая еда (кроме яблок)"} />
        </CharacterCard>
        <p className="mb-8 font-raleway text-xl">
          Сырный хруст — это не просто закуска, это целое кулинарное произведение искусства. Изготовленный из тонких листов теста, щедро посыпанных сыром и запечённых до золотистой корочки, он становится звездой любого стола. При первом же укусе хрустящая текстура и насыщенный сырный вкус сливаются воедино, создавая неповторимый вкусовой опыт. Но сырный хруст не терпит поспешности: чтобы по-настоящему оценить его, нужно медленно наслаждаться каждым кусочком, позволяя ароматам и текстурам раскрыться в полной мере. Эта закуска становится идеальным дополнением к вину или коктейлю, а также отличным поводом собрать друзей и провести время в хорошей компании.
        </p>

      </div>
      <div className='py-8 bg-gradient-to-r from-primary via-secondary to-default w-full h-min-50 mb-12'>
        <ApinuDashboard2 />
      </div>
      <div className="container mx-auto px-4 max-w-screen-md pb-24">

        <p className="mb-8 font-raleway text-xl">
          "Медовое веретено" — это не просто пирожное, это настоящая легенда бара "Толстый рыцарь". С первого взгляда оно напоминает пахлаву, но только один укус раскрывает его уникальный характер. Слои тончайшего теста чередуются с медово-ореховой начинкой, а сверху пирожное украшено карамелизованными орехами. Но самое удивительное в этом десерте — его способность гармонировать с соленым пивом, которое подают прямо в баре. Контраст между сладостью меда и солёностью пива создаёт невероятно насыщенный вкусовой букет. А взбитые сливки, подаваемые на боку, добавляют завершающий акцент, делая каждый укус "Медового веретено" поистине незабываемым. Это пирожное — идеальный выбор для тех, кто ищет нечто большее, чем просто десерт; это целый вкусовой эксперимент, который никого не оставит равнодушным.
        </p>
        <Stations current={idx} />
      </div>
    </>
  )
}
