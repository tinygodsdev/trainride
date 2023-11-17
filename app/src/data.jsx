import GeneralCalendarInfo from "./components/GeneralCalendarInfo";

const data = {
  people: {
    mirely: {
      name: "Мирели Бом",
      subtitle: "Зачарованный странник",
      image: "/images/people/mirely.png",
      ava: "/images/people/mirely-ava.png",
      birthday: "Зима 99 г. ППВ",
      birthplace: "Вельвет",
      motto: "Приключения ждут!",
      nomumu: {
        text: "mireli bom",
        // translation: "время зелени",
        // transcription: "[ ампа най ]",
      },
    },
    arie: {
      name: "Ари",
      subtitle: "Волшебное животное",
      image: "/images/people/arie.png",
      ava: "/images/people/arie-ava.png",
      birthday: "Неизвестно",
      birthplace: "Неизвестно",
      motto: "У кого лапки, а у кого крылышки",
    },
    monlie: {
      name: "Монли",
      subtitle: "Социально неловкая колдунья",
      image: "/images/girl.png",
      ava: "/images/girl-ava.png",
    },
    thunderpaw: {
      name: "Громолап",
      subtitle: "Умеренно нелегальный кот",
      image: "/images/cat.png",
      ava: "/images/cat-ava.png",
    },
  },
  info: {
    calendarGreen: {
      triggerText: "Сезон Зелени",
      title: "Сезон Зелени",
      subtitle: "Календарь Блаженства",
      imageUrl: "/images/views/season_green.png",
      nomumu: {
        text: "ampa naj",
        translation: "время зелени",
        transcription: "[ ампа най ]",
      },
      content: (
        <>
          <p className="mb-4">
            Сезон Зелени - время, когда раскрываются почки, появляются свежие листья, вырастает молодая трава, а воздух наполняется ароматом цветущих растений.
          </p>
          <h4 className="mb-4 mt-8 font-bold">Общая информация о календаре Блаженства</h4>
          <GeneralCalendarInfo />
        </>
      ),
      footerText: "Аромат вербы и вишни",
      source: {
        title: "Энциклопедия Блаженства",
        author: "Каво Эйж", // FIXME
        url: "https://publish.obsidian.md/bliss/publish/%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C",
      },
    },
  },
  places: {
    fatKnight: {
      triggerText: "Толстый рыцарь",
      title: "Толстый рыцарь",
      subtitle: "Бар на улице Мордена",
      imageUrl: "/images/house.png",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nunc. Donec euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nunc. Donec euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nunc. Donec euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nunc. Donec euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nunc. Donec euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nunc. Donec euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget nunc. ",
      footerText: "Не рухнувшее устоит",
    },
    fraglands: {
      triggerText: "Дробные земли",
      title: "Дробные земли",
      subtitle: "За границей Блаженства",
      imageUrl: "/images/places/fraglands.png",
      content: (
        <>
          <p className="mb-4">
            Территория неопределенной протяженности, со всех сторон окружающая Блаженство.
            Наверняка о Дробных землях, представляющих из себя каменистую пустошь, известно немногое.
            Магия там не действует, там ничего не растёт и никто не живёт.
          </p>
          <p className="mb-4">
            Зато о Дробных землях ходит множество мрачных слухов, впрочем, не подтверждённых.
            Например, можно услышать, что там обитают чудовища, которые набрасываются на путников, рискнувших зайти в этот негостеприимный край.
            Особенно суеверные утверждают даже, что Дробные земли - это вотчина самой смерти.
            Никаких заслуживающих доверия свидетельств о встречах с чудовищами (или смертью), однако, не существует.
          </p>
          <p className="mb-4">
            Попытки исследования или преодоления Дробных земель заканчивались либо ничем, либо (предположительно) исчезновением экспедиций,
            что и дало основания для упомянутых слухов. Тем не менее, если не заходить далеко, посещение Дробных земель вполне безопасно.
            Например, дети из находящихся у Границы поселений иногда бегают туда играть и собирать камешки, которые имеют необычный бледно-фиолетовый цвет.
          </p>
        </>
      ),
      footerText: "Будь осторожен...",
      source: {
        title: "Энциклопедия Блаженства",
        author: "Каво Эйж", // FIXME
        url: "https://publish.obsidian.md/bliss/publish/%D0%94%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B5+%D0%B7%D0%B5%D0%BC%D0%BB%D0%B8",
      },
    },
  },
}



export default data;


