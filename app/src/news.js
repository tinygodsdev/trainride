import tracery from 'tracery-grammar';

const grammars = {
  apinu: {
    ApinuToday: {
      source: "Апину сегодня",
      grammar: {
        "origin": ["#baseNews.capitalize#."],
        "baseNews": [
          "прибыл дипломатический корпус из Рижа. Лим Томоки встретится с гостями в Парке Славы Защитников",
          "Вельветская транспортная компания запускает дополнительные поезда в Апину и Пакин",
          "Ответственка Заботы согласовала увеличение бюджета на этот год",
          "Банк Апину-Электро: мы не собираемся повышать тарифы, доступность всегда была нашим приоритетом",
        ]
      },
    },
    GoldenPath: {
      source: "Золотой путь",
      grammar: {
        "origin": ["#baseNews.capitalize#"],
        "baseNews": [
          "#prices# #pricesObject# #pricesDynamics#. #pricesReasonBase.capitalize#",
          // "Акции металлургических компаний достигли исторического максимума",
          // "Инвестиции в IT-стартапы Апину выросли на 30%",
          // "Прибыль Апину-Электро выросла на 15%",
        ],
        "prices": ["цены на"],
        "pricesObject": [
          "сорго", "какао", "струши", "магические предметы", "магические ресурсы",
          "услуги #servicesOf#", "#servicesWhich# услуги", "грузоперевозки",
          "сахар", "мёд", "спирт", "лошадей", "растительное волокно", "стекло", "отопление", "керамику",
          "краски", "красители", "домашний скот", "пух", "птицу", "яйца", "шерсть", "говядину", "курицу",
          "турбины", "оружие", "проживание", "аренду", "складские помещения", "речные перевозки", "кирпичи Регеля",
          "кирпич", "песок", "табак", "коноплю", "мак", "растительное масло", "животный жир", "кормовые культуры",
          "орехи", "клубнику", "землянику", "съедобные водоросли", "лук", "чеснок", "йогурт",
          "рис", "пшеницу", "муку", "выпечку", "сладости", "паровозы", "вагоны", "паровые машины",
          "промышленные вычислители", "станки", "неквалифицированный труд", "квалифицированный труд",
          "фрукты", "овощи", "зелень", "яблоки", "кабачки", "сыр", "тыквы", "тыквенные семена",
          "кукурузу", "кукурузный крахмал", "электричество", "воду", "ремонтные работы",
          "металл", "древесину", "медь", "железо", "олово", "свинец", "серебро", "золото", "алюминий",
          "рыбу", "мясо", "молоко", "масло", "сметану", "соль", "перец", "консервы", "соусы", "сельскохозяйственную продукцию",
          "кожу", "кожаные изделия", "обувь", "одежду", "парфюмерию", "пряности", "посуду", "мебель", "книги", "бумагу",
          "корицу", "таволгу", "чернику", "дыни", "сливки", "перец", "ароматные травы"
        ],
        "servicesOf": [
          "инструменталистов", "#mageTitles#", "медицинских #mageTitles#", "боевых #mageTitles#", "промышленных #mageTitles#",
          "инженеров", "учителей", "водителей", "механиков", "экономистов", "письмоводителей", "Магического Надзора", "конезаводчиков", "медиаторов"
        ],
        "servicesWhich": ["транспортные", "типографские", "образовательные", "рекламные", "бухгалтерские"],
        "mageTitles": ["волшебников", "магов", "никнетов", "кнетмиш", "формулаистов"],
        "pricesDynamics": [
          "растут", "продолжают расти", "снижаются", "продолжают снижаться", "падают", "продолжают падать",
          "остаются стабильными",
          "достигли #pricesExtremum# #pricesExtremumPeriod#",
          "не изменятся #pricesPredictionPeriod#", "#maybeNot# вырастут #pricesPredictionPeriod#", "#maybeNot# снизятся #pricesPredictionPeriod#",
        ],
        "maybeNot": [
          "", "не", "скорее всего", "вряд ли", "предположительно", "значительно",
          "незначительно", "заметно", "постепенно", "катастрофически",
        ],
        "pricesExtremum": ["максимума", "минимума"],
        "pricesExtremumPeriod": [
          "за этот год", "за 2 года", "за 3 года", "за 4 года", "за 5 лет", "за 10 лет", "за весь период наблюдений",
        ],
        "pricesPredictionPeriod": [
          "в ближайшее время", "в ближайшие годы", "в ближайшие 5 лет", "в этом году",
          "при сохранении текущих тенденций", "при сохранении текущего тренда",
          "в ближайшие 2 года", "в ближайшие 3 года", "в ближайшие 4 года",
        ],
        "pricesReasonBase": [
          "",
          "#pricesReasonSource.capitalize# #situationBase#.",
        ],
        "pricesReasonSource": [
          "#maybeBase# это связано с", "аналитики связывают это с", "#maybeBase# это обусловлено", "#maybeBase# это вызвано", "#maybeBase# это объясняется",
          "наш эксперт связывает это с", "экономисты объясняют это",
        ],
        "maybeBase": ["", "#maybe.capitalize#,"],
        "maybe": ["вероятно", "по всей видимости", "скорее всего", "как нам кажется", "по мнению экспертов", "с нашей точки зрения", "по мнению редакции"],
        "situationInst": [
          "ситуацией", "политической ситуацией", "экономической ситуацией", "положением дел", "недавними событиями", "политическими изменениями",
          "политическими событиями", "политическими процессами",
        ],
        "situationBase": [
          "#situationInst# в #otherCityLoc#",
          "#situationOf# #otherCityGen#",
          "#situationMagistrate# Магистрата",
        ],
        "situationMagistrate": [
          "действиями", "решениями", "политикой", "политическим курсом", "экономической стратегией", "экономической политикой",
          "поведением", 
        ],
        "situationOf": ["действиями руководства", "ситуацией на рынках"],
        "otherCityGen": [
          "Саланы", "Ротаны", "Анишки", "Маша", "Пакина", "Рижа", "Кепекена", "Вельвета", "Эши", "Каларны",
          "Тиланки", "Келли", "вечерних городов", "ночных городов", "дневных городов", "утренних городов"
        ],
        "otherCityLoc": ["Салане", "Ротане", "Анишке", "Маше", "Пакине", "Риже", "Кепекене", "Вельвете", "Эше", "Каларне", "Тиланке", "Келли"],
      },
    },
    Cauldron: {
      source: "Кипящий котёл",
      grammar: {
        "origin": [
          "#baseIntro.capitalize# #baseNews.capitalize#! #baseOutro#",
        ],
        "baseIntro": ["", "#intro.capitalize#!"],
        "baseOutro": ["", "#outro.capitalize#."],
        "baseNews": [
          "#famousPersonNom.capitalize# #pairingBase#",
          "#loverStory#",
          "В #undergroundLoc# #facilityGen# #discoveredF# #laboratoryNom# #laboratoryPurpose# #laboratoryObject#",
          "#famousPersonNom.capitalize# #discoveredM# #pairingLocation# с #pairingInst#",
          "#originStory#",
          "#outbreakSubjectBase# #outbreakBase#",
        ],
        "loverStory": [
          "#loverNomM# #famousPersonGen# #tellsM# #toUs# #allDetails#",
          "#loverNomF# #famousPersonGen# #tellsF# #toUs# #allDetails#",
        ],
        "originStory": [
          "#famousPersonNom.capitalize# оказался #pairingInst#",
          "#famousPersonNom.capitalize# на самом деле #pairingNom#",
        ],
        "intro": [
          "Шок", "Сенсация", "Эксклюзив", "Паника в городе", "Апину стоит на макушке",
          "Всё не так, как кажется", "За уши к небу", "великие мощи", "Дожили", "Новость дня", "Событие года",
          "Только что", "Срочно", "Внимание", "Свежие новости", "Должен знать каждый", "Срочное сообщение",
          "Только в \"Кипящем котле\"", "Об этом говорят все",
        ],
        "outro": [
          "#outroComment#",
          "#outroDetails#",
        ],
        "outroComment": [
          "\"#outroCommentBody#\", #commentActionBase#",
        ],
        "outroDetails": [
          "Подробности в следующем выпуске",
          "Больше подробностей в следующем выпуске",
          "Наш художник изобразил события в картинках",
          "Читайте Кипящий котёл: мы говорим правду",
          "Достоверная информация",
          "Источники подтверждают",
          "Только проверенная информация",
          "Вот что известно",
          "Вот что #toUs# удалось выяснить",
          "Можете не верить, но это так",
          "\"Апину сегодня\" хранит молчание",
        ],
        "outroCommentBody": [
          "Совсем с ума посходили",
          "Вот это да",
          "Ну и дела",
          "Никто такого не ожидал",
          "Отправь дурака в лес - он мимо пройдёт",
          "Ногой в сортир",
          "Этого следовало ожидать",
          "Блаженство сошло с ума",
          "Апину будет вне себя",
          "Мы этого так не оставим",
          "Что-то будет дальше",
          "Подтяните штаны, сограждане",
          "Ну и ну",
          "Правду не скроешь",
          "Правда, как всегда, где-то рядом",
          "Никто и не сомневался",
          "Меня это не удивляет",
          "В прошлом году было хуже",
          "В прошлом году было лучше",
          "В прошлом году было так же",
          "Делаем выводы",
          "У кого лапки, а у кого крылышки",
          "Гузно в супе не всплывёт, а в море не потонет",
          "Вертелом вертимся, х**м стучим",
          "Штаны на нас",
        ],
        "commentActionBase": [
          "#commentActionM# #commentSourceM#",
          "#commentActionF# #commentSourceF#",
          "#commentActionN# #commentSourceN#",
        ],
        "commentSourceM": [
          "Глава Магического Надзора", "наш главный редактор", "Япен Бидри", "#zulinAdj# Зулин",
          "Глава Верховного Суда", "Ректор #universityGen#", "представитель #otherCityGen#",
          "Штрав Латлек", "анонимный свидетель",
        ],
        "zulinAdj": ["бедняга", "старый", "бедолага", "старый ворчун", "старый дурак"],
        "commentSourceF": ["Лим Томоки", "Председатель Магистрата", "Жоня", "представительница #otherCityGen#", "#nameF# из #areaOf#"],
        "commentSourceN": ["#commentSourceM#", "#commentSourceF#"],
        "commentActionM": ["заявил", "прокомментировал", "отреагировал"],
        "commentActionF": ["заявила", "прокомментировала", "отреагировала"],
        "commentActionN": ["заявляет", "комментирует"],
        "nameF": ["Калиша", "Тлалика", "Аска", "Пакери", "Кики", "Кирика", "***", "гражданка", "Шира", "Тенка", "Майра", "Лира", "Лана", "Вив"],
        "famousPersonNom": [
          "#magister#", "#famousAdjNom# судья", "#famousAdjNom# профессор #universityGen#", "#famousAdjNom# актёр",
          "#famousAdjNom# промышленник", "#famousAdjNom# волшебник", "звезда театра", "#famousAdjNom# певец", "Глава Верховного Суда"
        ],
        "famousPersonGen": [
          "#magisterGen#", "#famousAdjGen# судьи", "#famousAdjGen# актёра", "#famousAdjGen# профессора #universityGen#",
          "#famousAdjGen# промышленника", "#famousAdjGen# волшебника", "звезды театра", "#famousAdjGen# певца", "Главы Верховного Суда"
        ],
        "famousAdjNom": ["известный", "заслуженный", "бывший", "состоятельный", ""],
        "famousAdjGen": ["известного", "заслуженного", "бывшего", "состоятельного", ""],
        "facilityGen": ["#universityGen#", "\"Паровых машин Жони\"", "завода", "электростанции", "Магнадзора", "#cookeryGen#"],
        "cookeryGen": ["#cookeryGenAdj# готовинки", "#cookeryGenAdj# готовинки в #areaAt#"],
        "cookeryGenAdj": ["", "обычной", "неприметной", "самой обычной", "популярной"],
        "areaOf": [
          "Старого Центра", "Административного Центра", "Коммерческого Центра", "Медовой Горки",
          "Ткатцкого меандра", "Сверчков", "Напрудного Лужка", "Кузенки", "Перегонок", "Левой Копоти",
          "Правой Копоти", "Войти-не-выйти", "Мушиной Ямы", "Вышнего Сада", "Артиллерийского Холма",
          "Смешного Пригорка", "Ралова", "Синего Предела", "Копаленки", "Вороньей Поймы", "Грибного Болота", "Старой Вишни",
          "Пижмы", "Законского Предела", "Липова Мха", "Сонной Мучки", "Малой Вишни", "Ползучего Леса",
        ],
        "areaAt": [
          "Старом Центре", "Административном Центре", "Коммерческом Центре", "Медовой Горке",
          "Ткацком Меандре", "Сверчках", "Напрудном Лужке", "Кузенке", "Перегонках", "Левой Копоти",
          "Правой Копоти", "Войти-не-выйти", "Мушиной Яме", "Вышнем Саду", "Артиллерийском Холме",
          "Смешном Пригорке", "Ралове", "Синем Пределе", "Копаленке", "Вороньей Пойме", "Грибном Болоте",
          "Старой Вишне", "Пижме", "Законском Пределе", "Липовом Мху", "Сонной Мучке", "Малой Вишне", "Ползучем Лесу",
        ],
        "universityGen": ["УМВНА", "Школы Блистательного Благородства"],
        "magister": ["Магистр #magisterProfession.capitalize#"],
        "magisterGen": ["Магистра #magisterProfession.capitalize#"],
        "magisterProfession": ["заботы", "внешних связей", "безопасности", "торговли", "энергетики", "транспорта", "здоровья", "культуры", "связи", "чистоты"],
        "pairingLoc": [
          "гоблине", "магическом животном", "оборотне", "шпионе из #otherCityGen#", "каменном столбе",
          "собственной дочери", "собственном сыне", "известной воровке", "самом себе"
        ],
        "pairingInst": [
          "гоблином", "магическим животным", "оборотнем", "огромным жуком", "непонятной субстанцией",
          "агентом из #otherCityGen#", "собственной дочерью", "собственным сыном", "говорящим котом"
        ],
        "pairingNom": [
          "гоблин", "магическое животное", "оборотень", "шпион из #otherCityGen#",
          "агент #otherCityGen#", "огромный жук", "воплощение Упа", "упаист", "редкостник"
        ],
        "pairingBase": [
          "#secret# женат на #pairingLoc#",
          "#secret# встречается с #pairingInst#",
          "#secret# спит с #pairingInst#",
          "оказался #pairingInst#",
          "оказался втянут в интрижку c #pairingInst#",
          "замечен #pairingLocation# с #pairingInst#",
        ],
        "pairingLocation": ["в постели", "в бане", "в интересной ситуации", "в компрометирующей ситуации", "в борделе"],
        "secret": ["втайне от всех", "тайно", ""],
        "loverNomF": ["любовница", "жена", "внебрачная дочь"],
        "loverNomM": ["любовник", "муж", "внебрачный сын"],
        "tellsM": ["рассказал", "раскрыл", "поведал", "сообщил"],
        "tellsF": ["рассказала", "раскрыла", "поведала", "сообщила"],
        "allDetails": ["все подробности", "все детали", "все подробности и детали", "страшную тайну", "неприятную правду", "правду", "всё", "кое-что"],
        "toUs": ["нам", "редакции", "Кипящему котлу", "нашему осведомителю", "нашему корреспонденту", ""],
        "otherCityGen": ["Намако", "Пакина", "Рижа", "Кепекена", "Вельвета", "Эши", "Каларны", "Тиланки", "Келли"],
        "laboratoryNom": ["#laboratoryNomAdj# лаборатория", "#laboratoryNomAdj# фабрика"],
        "laboratoryGen": ["лаборатории", "фабрики"],
        "laboratoryNomAdj": ["секретная", "тайная", "скрытая", "незаконная", ""],
        "laboratoryPurpose": ["по созданию", "для создания", "для разработки"],
        "laboratoryObject": ["химер", "магических существ", "магических животных", "магических растений", "экстернитов", "ядов", "#mechanicalAdj# чудовищ", "#mechanicalAdj# людей"],
        "undergroundLoc": ["подвале", "подземелье", "подземельях", "подвалах", "катакомбах", "закромах", "подвальных помещениях"],
        "mechanicalAdj": ["механических", "паровых", "электрических", "магических"],
        "discoveredF": ["обнаружена", "найдена", "обнаружилась", "нашлась", "замечена", "оказалась"],
        "discoveredM": ["обнаружен", "найден", "обнаружился", "нашёлся", "оказался", "замечен", "оказался"],
        "outbreakSubjectBase": ["маньяк-#maniacType#", "#outbreakSubjectAdj# #outbreakSubject#"],
        "outbreakSubjectAdj": ["безумный", "кровожадный", "сумасшедший"],
        "outbreakSubject": ["профессор", "учёный", "волшебник", "гоблин", "оборотень", "заключённый", "торговец оружием", "гробокопатель"],
        "maniacType": ["каннибал", "поджигатель", "потрошитель", "конокрад"],
        "outbreakAction": ["сбежал", "вырвался"],
        "outbreakLocation": ["на свободу", "из тюрьмы", "из заключения", "из-под стражи", "из застенков Магнадзора", "из Ответственки Безопасности", "на волю"],
        "outbreakBase": ["#outbreakFrequency# #outbreakAction# #outbreakLocation#", "#outbreakFrequency# #outbreakResult#"],
        "outbreakResult": ["на свободе", "на улицах города", "среди нас", "на улицах Апину", "в городе", "#discoveredM# в пригородах Апину", "#discoveredM# в #areaAt#"],
        "outbreakFrequency": ["", "снова", "опять"],
      }
    },
    // Evening: {
    //   source: "Вечерок",
    //   grammar: {
    //     'origin': ['Hello, #name#!', 'Greetings, #name#!'],
    //     'name': ['world', 'user', 'friend']
    //   },
    // },
    Neighbors: {
      source: "Соседи",
      grammar: {
        "origin": [
          "#personSingleMaleNom.capitalize# #areaOf.capitalizeAll# #actionsToSmthSingleMale# #actionsToObject#.",
          "#intro.capitalize#: #personSingleMaleNom# #areaOf.capitalizeAll# #actionsToSmthSingleMale# #actionsToObject#.",
          "В #areaAt# #frequency# #actionsPlural#.",
          "#intro.capitalize#: в #areaAt# #frequency# #actionsPlural#.",
          "#event.capitalize# в #areaAt#. #outro.capitalize#",
          "В #areaAt# #frequency# #event#. #outro.capitalize#",
        ],
        "areaOf": [
          "Старого Центра", "Административного Центра", "Коммерческого Центра", "Медовой Горки",
          "Ткатцкого меандра", "Сверчков", "Напрудного Лужка", "Кузенки", "Перегонок", "Левой Копоти",
          "Правой Копоти", "Войти-не-выйти", "Мушиной Ямы", "Вышнего Сада", "Артиллерийского Холма",
          "Смешного Пригорка", "Ралова", "Синего Предела", "Копаленки", "Вороньей Поймы", "Грибного Болота", "Старой Вишни",
          "Пижмы", "Законского Предела", "Липова Мха", "Сонной Мучки", "Малой Вишни", "Ползучего Леса",
        ],
        "areaAt": [
          "Старом Центре", "Административном Центре", "Коммерческом Центре", "Медовой Горке",
          "Ткацком Меандре", "Сверчках", "Напрудном Лужке", "Кузенке", "Перегонках", "Левой Копоти",
          "Правой Копоти", "Войти-не-выйти", "Мушиной Яме", "Вышнем Саду", "Артиллерийском Холме",
          "Смешном Пригорке", "Ралове", "Синем Пределе", "Копаленке", "Вороньей Пойме", "Грибном Болоте",
          "Старой Вишне", "Пижме", "Законском Пределе", "Липовом Мху", "Сонной Мучке", "Малой Вишне", "Ползучем Лесу",
        ],
        "personSingleMaleNom": ["житель", "старик из", "местный житель из", "торговец из", "рабочий из", "прохожий из", "чиновник из"],
        "personSingleFemaleNom": ["жительница", "старуха из", "местная жительница из", "торговка из", "рабочая из"],
        "personPluralNom": ["жители"],
        "actionsToSmthSingleMale": [
          "купил #placeAt#", "продал #placeAt#", "приобрел #placeAt#", "заказал", "выиграл",
          "нашёл #placeAt#", "показал #placeAt#", "обнаружил #placeAt#", "украл #placeAt#", "привёз #placeTo#",
        ],
        "actionsToObject": ["#pumpkinExgAcc# #pumpkinAdjAcc# #pumpkinVariation#"],
        "actionsPlural": ["#actionsPluralAgainst# #objectAgainst#"],
        "actionsPluralAgainst": ["протестуют против", "выступают против", "митингуют против", "собрались против"],
        "objectAgainst": ["#pricesAgainst#", "результатов выборов в #electionsTo#"],
        "pricesAgainst": ["#pricesDynamicsAgainst# цен на #pricesOf#"],
        "pricesDynamicsAgainst": ["повышения", "падения", "роста", "снижения"],
        "electionsTo": ["магистрат", "районный совет", "местную администрацию"],
        "pricesOf": [
          "воду", "бахчевые", "хлеб", "струши", "пиво", "молоко", "масло", "сахар", "соль", "перец", "муку",
          "крупу", "мак", "гречку", "рис", "масло", "маргарин", "соус", "сметану",
          "#flavoursPlural# конфеты", "шоколад", "печенье", "#flavoursPlural# пирожные", "выпечку", "#flavoursPlural# булочки"
        ],
        "flavoursPlural": ["тыквенные", "дынные", "сахарные", ""],
        "pumpkinVariation": ["тыкву", "редиску", "хурму", "сливу", "дыню", "грушу", "морковь", "морковку", "капусту", "картошку", "свёклу"],
        "pumpkinAdjAcc": ["большую", "красивую", "вкусную", "уродливую", "дорогую", "сладкую", "сочную"],
        "pumpkinExgAcc": ["ужасно", "очень", "невероятно", "невыносимо", "невыразимо", "невероятно", "самую", "исключительно"],
        "placeAt": ["", "на рынке", "на площади", "на ярмарке", "на вокзале"],
        "placeTo": ["", "на рынок", "на ярмарку", "на вокзал", "на площадь"],
        "frequency": [
          "", "опять", "снова", "#timeNPrep# #timeN# раз",
        ],
        "timeN": ["в который", "второй", "третий", "четвертый", "пятый", "шестой", "седьмой"],
        "timeNPrep": ["", "уже"],
        "event": ["драка", "потасовка", "стрельба", "пожар", "распродажа #objectSaleGen#", "гуляния", "выставка #objectSaleGen#", "ярмарка #objectSaleGen#"],
        "objectSaleGen": ["#adjPluralGen# #objectSalePluralGen#"],
        "objectSalePluralGen": [
          "коров", "свиней", "коз", "котов", "котят", "щенков", "кабачков", "дверей", "конфет",
          "пирожных", "стульев", "столов", "кроватей", "комодов", "шкафов", "книг",
          "тыкв", "растений", "семян", "плодов", "ягод", "овощей", "фруктов", "цветов", "деревьев", "кустов",
        ],
        "adjPluralGen": ["", "редких", "кепекенских", "вельветских", "странных", "необычных", "рижских", "заколдованных"],
        "intro": [
          "яйца курице не новость", "и что теперь", "без мухи и суп под стол", "свинья в каше - зёрен не найдёшь",
          "где король коза, там трава золото", "чем выше мак, тем ниже коту", "где муха сидит, туда и язык лезет",
          "красавицу и сопли украшают", "не с коня ворон кормить", "где мёд и сыр, там мира кусок",
          "спешим сообщить", "вот это новости", "ситуация выходит из под контроля", "всё идёт по плану",
        ],
        "outro": ["", "#outroContent##outroContentEnd#"],
        "outroContent": [
          "#probably#, год такой", "ждём #reactionGen# #reactionSubjectGen#", "и это не всё", "и это ещё не всё", "чем это кончится, мы не знаем",
          "следим за развитием событий", "будем держать вас в курсе", "подробности в следующем выпуске", "это уже не смешно",
        ],
        "outroContentEnd": ["!", "...", "."],
        "reactionSubjectGen": ["Магистрата", "горожан", "местных жителей",],
        "reactionGen": ["реакции", "ответа", "комментария", "комментариев"],
        "probably": ["наверное", "видимо", "надо думать", "вероятно"]
      },
    },
  },
};

const newsApinu = [
  {
    source: "Апину сегодня",
    content: "Новые инвестиции в инфраструктуру города: мост через Пель будет расширен",
  },
  {
    source: "Золотой путь",
    content: "Крупные банки объединяются для запуска инновационного финтех-проекта",
  },
  {
    source: "Наука и магия",
    content: "Прорыв в области телепортации: ученые из УМВНА демонстрируют успешный эксперимент",
  },
  {
    source: "Вечерок",
    content: "Чемпионат города по игре в мяч: неожиданный поворот в финальном матче",
  },
  {
    source: "Соседи",
    content: "Жители Пижмы организуют праздник улицы с конкурсами и мастер-классами",
  },
  {
    source: "Удар молота",
    content: 'Рабочие "Паровых машин Жони" требуют повышения зарплаты: митинг у городской администрации',
  },
  {
    source: "Кипящий котёл",
    content: "Захватывающее разоблачение: магистр в центре финансового скандала",
  },
  {
    source: "Благородные люди",
    content: "Эксклюзив: тайная свадьба популярного актера в загородном особняке",
  },
];

const getRandomApinuNews = (n) => {
  // const shuffledNews = [...newsApinu].sort(() => 0.5 - Math.random());
  // return shuffledNews.slice(0, n);
  return generateApinuNews(n);
};

function capitalizeSentences(content) {
  return content
      .split(/(?<=[.!?])\s+/) // Разбиваем текст на предложения по точке, восклицательному или вопросительному знаку
      .map(sentence => 
          sentence.charAt(0).toUpperCase() + sentence.slice(1)
      ) // Делаем первую букву каждого предложения заглавной
      .join(' '); // Объединяем предложения обратно, добавляя пробел
}

const generateApinuNews = (n) => {
  const apinuKeys = Object.keys(grammars.apinu);
  let generatedNews = [];

  for (let i = 0; i < n; i++) {
    // Выбрать случайный источник новостей
    const randomKey = apinuKeys[Math.floor(Math.random() * apinuKeys.length)];
    const apinuSource = grammars.apinu[randomKey];

    // Создать новость с использованием грамматики Tracery
    const grammar = tracery.createGrammar(apinuSource.grammar);
    grammar.addModifiers(tracery.baseEngModifiers);
    const content = capitalizeSentences(grammar.flatten('#origin#'));

    // Добавить сгенерированную новость в массив
    generatedNews.push({ source: apinuSource.source, content });
  }

  return generatedNews;
};


const newsColumns = [
  {
    key: "source",
    label: "Газета",
  },
  {
    key: "content",
    label: "Заголовок",
  },
];

export { getRandomApinuNews, newsColumns };