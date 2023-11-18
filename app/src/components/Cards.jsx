import React from 'react';
import CharacterCard from './CharacterCard';
import SurveyItem from './SurveyItem';
import { Divider } from '@nextui-org/react';
import data from '../data';
import TranslationTooltip from './TranslationTooltip';

const MirelyCard = () => {
  return (
    <CharacterCard imageUrl={data.people.mirely.image} footerText={data.people.mirely.motto}>
      <h3 className='font-bold text-xl font-gabriela'>{data.people.mirely.name} <TranslationTooltip data={data.people.mirely.nomumu} /></h3>
      <p className="text-sm">{data.people.mirely.subtitle}</p>
      <Divider className='my-3' />
      <SurveyItem title={"Время рождения"} value={data.people.mirely.birthday} />
      <SurveyItem title={"Место рождения"} value={data.people.mirely.birthplace} />
      <SurveyItem title={"Любимая еда"} value={"Сырный хруст"} />
      <SurveyItem title={"Комфортный напиток"} value={"Липовый чай"} />
      <SurveyItem title={"Хобби"} value={"Ввязываться в неприятности"} />
      <SurveyItem title={"Хобби"} value={"Ввязываться в неприятности"} />
    </CharacterCard>
  );
};

const ArieCard = () => {
  return (
    <CharacterCard imageUrl={data.people.arie.image} footerText={data.people.arie.motto}>
      <h3 className='font-bold text-xl font-gabriela'>{data.people.arie.name}</h3>
      <p className="text-sm">{data.people.arie.subtitle}</p>
      <Divider className='my-3' />
      <SurveyItem title={"Дата рождения"} value={data.people.arie.birthday} />
      <SurveyItem title={"Место рождения"} value={data.people.arie.birthplace} />
      <SurveyItem title={"Любимая еда"} value={"Любая еда (кроме яблок)"} />
      <SurveyItem title={"Любимый запах"} value={"Базилик"} />
      <SurveyItem title={"Маскировка"} value={"Белая лиса"} />
    </CharacterCard>
  );
}

export { MirelyCard, ArieCard };
