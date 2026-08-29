import re
import json

file_path = r'c:\Users\user\Desktop\itcenter\itcenter\src\locales\translations.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix oz.contact.namePlaceholder
content = content.replace('"Иcrossingзни киритинг"', '"Исмингизни киритинг"')

# Data to add
additions = {
    'uz': {
        'stats': '''      subtitle: "Markazimiz yoshlarga nafaqat bilim, balki yangi imkoniyatlar eshigini ochmoqda.",
      studentsDesc: "Bitiruvchilar soni",
      directionsDesc: "IT yo'nalishlar",
      freeDesc: "Bepul ta'lim",
      teachersDesc: "Professional o'qituvchilar"''',
        'courses': '''      applyCourse: "Aynan shu kursga yozilish",
      students: "o'quvchi",
      details: "Batafsil ma'lumot",
      apply: "Ariza qoldirish"''',
        'teachers': '''      telegram: "Telegram orqali yozish",
      experience: "tajriba",
      certified: "Sertifikatlangan"''',
        'news': '''      allCategory: "Barchasi",
      readMore: "Batafsil o'qish",
      close: "Yopish"''',
        'contact': '''      successDesc: "Tez orada operatorimiz siz bilan bog'lanadi.",
      phoneError: "Telefon raqam noto'g'ri formatda"''',
        'nav': '''      darkMode: "Tungi rejim",
      portfolio: "Portfolio",
      gallery: "Galereya",
      events: "Tadbirlar",
      quiz: "IT Test",
      apply: "Ariza qoldirish"''',
        'hero': '''      scrollDown: "Pastga",
      namePlaceholder: "Ismingiz",
      quickApply: "Tezkor ariza",
      formNote: "Ma'lumotlaringiz maxfiy saqlanadi",
      formSuccess: "Arizangiz qabul qilindi!",
      formError: "Xatolik yuz berdi"''',
        'footer': '''      backToTop: "Yuqoriga qaytish",
      portfolio: "Portfolio",
      gallery: "Galereya",
      events: "Tadbirlar",
      quiz: "IT Test",
      certificate: "Sertifikat tekshirish",
      newsletter: "Yangiliklardan xabardor bo'ling",
      emailPlaceholder: "Email manzilingiz",
      subscribe: "Obuna bo'lish",
      grantInfo: "Kelajak kasblari davlat granti mavjud"''',
        'new_sections': '''    chat: {
      badge: "Savolingiz bormi?",
      title: "IT Park Rishtan Qo'llab-quvvatlash",
      onlineStatus: "Operatorlar onlayn",
      greeting: "Assalomu alaykum! Kurslar, qabul yoki markaz bo'yicha qanday yordam bera olamiz?",
      writeTg: "Telegram orqali yozish",
      callUs: "Qo'ng'iroq qilish",
      fastAnswer: "Tezkor javob kafolatlanadi"
    },
    testimonials: {
      title: "Bitiruvchilarimiz fikrlari",
      subtitle: "Markazimiz bitiruvchilari o'z tajribalarini baham ko'rishmoqda",
      graduatedIn: "Bitirgan yili",
      workingAt: "Ishlaydi"
    },
    partners: {
      title: "Hamkorlarimiz",
      subtitle: "Ishonchli hamkor tashkilotlar va kompaniyalar"
    },
    countdown: {
      title: "Yangi guruh tez orada boshlanadi!",
      subtitle: "Ro'yxatdan o'tishga shoshiling",
      seatsLeft: "ta joy qoldi",
      applyNow: "Hoziroq ro'yxatdan o'ting",
      days: "Kun",
      hours: "Soat",
      minutes: "Daqiqa",
      seconds: "Soniya",
      started: "Guruh boshlandi!"
    },
    portfolio: {
      title: "Talabalar portfoliosi",
      subtitle: "Bitiruvchilarimizning real loyihalari",
      all: "Barchasi",
      web: "Web",
      mobile: "Mobile",
      design: "Dizayn",
      iot: "IoT",
      liveDemo: "Jonli ko'rish",
      viewCode: "Kodni ko'rish",
      noResults: "Loyihalar topilmadi"
    },
    gallery: {
      title: "Galereya",
      subtitle: "Markazimiz va tadbirlarimizdan suratlar",
      all: "Barchasi",
      center: "Markazimiz",
      lessons: "Darslar",
      events: "Tadbirlar",
      lab: "Laboratoriya"
    },
    quiz: {
      title: "Qaysi IT kasb sizga mos?",
      subtitle: "6 ta savolga javob bering va o'zingizga mos yo'nalishni toping",
      question: "Savol",
      of: "dan",
      next: "Keyingisi",
      prev: "Oldingisi",
      result: "Natija",
      yourMatch: "Sizga mos yo'nalish",
      matchPercent: "mos keladi",
      retake: "Qaytadan boshlash",
      viewCourse: "Kursni ko'rish",
      applyNow: "Hoziroq ariza qoldiring"
    },
    events: {
      title: "Tadbirlar va ochiq darslar",
      subtitle: "Kelgusi tadbirlar va bepul masterklasslarga qo'shiling",
      all: "Barchasi",
      openLessons: "Ochiq darslar",
      hackathons: "Hackathonlar",
      masterclasses: "Masterklasslar",
      meetups: "Uchrashuvlar",
      register: "Ro'yxatdan o'tish",
      seatsLeft: "ta joy qoldi",
      seatsFull: "Joylar to'ldi",
      past: "O'tgan tadbirlar",
      upcoming: "Kelgusi tadbirlar",
      featured: "Tavsiya etiladi"
    },
    certificate: {
      title: "Sertifikat tekshirish",
      subtitle: "Sertifikat raqamini kiritib, haqiqiyligini tekshiring",
      placeholder: "Masalan: ITPR-2026-FE-001",
      verify: "Tekshirish",
      valid: "Sertifikat haqiqiy!",
      invalid: "Sertifikat topilmadi",
      student: "Talaba",
      course: "Yo'nalish",
      date: "Berilgan sana",
      number: "Sertifikat raqami"
    },
    notFound: {
      title: "Sahifa topilmadi",
      description: "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan",
      goHome: "Bosh sahifaga qaytish"
    }'''
    },
    'oz': {
        'stats': '''      subtitle: "Марказимиз ёшларга нафақат билим, балки янги имкониятлар эшигини очмоқда.",
      studentsDesc: "Битирувчилар сони",
      directionsDesc: "ИТ йўналишлар",
      freeDesc: "Бепул таълим",
      teachersDesc: "Профессионал ўқитувчилар"''',
        'courses': '''      applyCourse: "Айнан шу курсга ёзилиш",
      students: "ўқувчи",
      details: "Батафсил маълумот",
      apply: "Ариза қолдириш"''',
        'teachers': '''      telegram: "Telegram орқали ёзиш",
      experience: "тажриба",
      certified: "Сертификатланган"''',
        'news': '''      allCategory: "Барчаси",
      readMore: "Батафсил ўқиш",
      close: "Ёпиш"''',
        'contact': '''      successDesc: "Тез орада операторимиз сиз билан боғланади.",
      phoneError: "Телефон рақам нотўғри форматда"''',
        'nav': '''      darkMode: "Тунги режим",
      portfolio: "Портфолио",
      gallery: "Галерея",
      events: "Тадбирлар",
      quiz: "ИТ Тест",
      apply: "Ариза қолдириш"''',
        'hero': '''      scrollDown: "Пастга",
      namePlaceholder: "Исмингиз",
      quickApply: "Тезкор ариза",
      formNote: "Маълумотларингиз махфий сақланади",
      formSuccess: "Аризангиз қабул қилинди!",
      formError: "Хатолик юз берди"''',
        'footer': '''      backToTop: "Юқорига қайтиш",
      portfolio: "Портфолио",
      gallery: "Галерея",
      events: "Тадбирлар",
      quiz: "ИТ Тест",
      certificate: "Сертификат текшириш",
      newsletter: "Янгиликлардан хабардор бўлинг",
      emailPlaceholder: "Емаил манзилингиз",
      subscribe: "Обуна бўлиш",
      grantInfo: "Келажак касблари давлат гранти мавжуд"''',
        'new_sections': '''    chat: {
      badge: "Саволингиз борми?",
      title: "IT Park Rishtan Қўллаб-қувватлаш",
      onlineStatus: "Операторлар онлайн",
      greeting: "Ассалому алайкум! Курслар, қабул ёки марказ бўйича қандай ёрдам бера оламиз?",
      writeTg: "Telegram орқали ёзиш",
      callUs: "Қўнғироқ қилиш",
      fastAnswer: "Тезкор жавоб кафолатланади"
    },
    testimonials: {
      title: "Битирувчиларимиз фикрлари",
      subtitle: "Марказимиз битирувчилари ўз тажрибаларини бахам кўришмоқда",
      graduatedIn: "Битирган йили",
      workingAt: "Ишлайди"
    },
    partners: {
      title: "Ҳамкорларимиз",
      subtitle: "Ишончли ҳамкор ташкилотлар ва компаниялар"
    },
    countdown: {
      title: "Янги гуруҳ тез орада бошланади!",
      subtitle: "Рўйхатдан ўтишга шошилинг",
      seatsLeft: "та жой қолди",
      applyNow: "Ҳозироқ рўйхатдан ўтинг",
      days: "Кун",
      hours: "Соат",
      minutes: "Дақиқа",
      seconds: "Сония",
      started: "Гуруҳ бошланди!"
    },
    portfolio: {
      title: "Талабалар портфолиоси",
      subtitle: "Битирувчиларимизнинг реал лойиҳалари",
      all: "Барчаси",
      web: "Веб",
      mobile: "Мобайл",
      design: "Дизайн",
      iot: "IoT",
      liveDemo: "Жонли кўриш",
      viewCode: "Кодни кўриш",
      noResults: "Лойиҳалар топилмади"
    },
    gallery: {
      title: "Галерея",
      subtitle: "Марказимиз ва тадбирларимиздан суратлар",
      all: "Барчаси",
      center: "Марказимиз",
      lessons: "Дарслар",
      events: "Тадбирлар",
      lab: "Лаборатория"
    },
    quiz: {
      title: "Қайси ИТ касб сизга мос?",
      subtitle: "6 та саволга жавоб беринг ва ўзингизга мос йўналишни топинг",
      question: "Савол",
      of: "дан",
      next: "Кейингиси",
      prev: "Олдингиси",
      result: "Натижа",
      yourMatch: "Сизга мос йўналиш",
      matchPercent: "мос келади",
      retake: "Қайтадан бошлаш",
      viewCourse: "Курсни кўриш",
      applyNow: "Ҳозироқ ариза қолдиринг"
    },
    events: {
      title: "Тадбирлар ва очиқ дарслар",
      subtitle: "Келгуси тадбирлар ва бепул мастерклассларга қўшилинг",
      all: "Барчаси",
      openLessons: "Очиқ дарслар",
      hackathons: "Ҳакатонлар",
      masterclasses: "Мастеркласслар",
      meetups: "Учрашувлар",
      register: "Рўйхатдан ўтиш",
      seatsLeft: "та жой қолди",
      seatsFull: "Жойлар тўлди",
      past: "Ўтган тадбирлар",
      upcoming: "Келгуси тадбирлар",
      featured: "Тавсия этилади"
    },
    certificate: {
      title: "Сертификат текшириш",
      subtitle: "Сертификат рақамини киритиб, ҳақиқийлигини текширинг",
      placeholder: "Масалан: ITPR-2026-FE-001",
      verify: "Текшириш",
      valid: "Сертификат ҳақиқий!",
      invalid: "Сертификат топилмади",
      student: "Талаба",
      course: "Йўналиш",
      date: "Берилган сана",
      number: "Сертификат рақами"
    },
    notFound: {
      title: "Саҳифа топилмади",
      description: "Кечирасиз, сиз қидираётган саҳифа мавжуд эмас ёки кўчирилган",
      goHome: "Бош саҳифага қайтиш"
    }'''
    },
    'ru': {
        'stats': '''      subtitle: "Наш центр открывает молодежи двери к новым международным возможностям.",
      studentsDesc: "Количество выпускников",
      directionsDesc: "IT направления",
      freeDesc: "Бесплатное обучение",
      teachersDesc: "Профессиональные преподаватели"''',
        'courses': '''      applyCourse: "Записаться на этот курс",
      students: "студент",
      details: "Подробнее",
      apply: "Подать заявку"''',
        'teachers': '''      telegram: "Написать в Telegram",
      experience: "опыт",
      certified: "Сертифицирован"''',
        'news': '''      allCategory: "Все",
      readMore: "Читать подробнее",
      close: "Закрыть"''',
        'contact': '''      successDesc: "Наш оператор свяжется с вами в ближайшее время.",
      phoneError: "Неверный формат номера"''',
        'nav': '''      darkMode: "Темная тема",
      portfolio: "Портфолио",
      gallery: "Галерея",
      events: "Мероприятия",
      quiz: "IT Тест",
      apply: "Подать заявку"''',
        'hero': '''      scrollDown: "Вниз",
      namePlaceholder: "Ваше имя",
      quickApply: "Быстрая заявка",
      formNote: "Ваши данные защищены",
      formSuccess: "Заявка принята!",
      formError: "Произошла ошибка"''',
        'footer': '''      backToTop: "Наверх",
      portfolio: "Портфолио",
      gallery: "Галерея",
      events: "Мероприятия",
      quiz: "IT Тест",
      certificate: "Проверка сертификата",
      newsletter: "Подпишитесь на новости",
      emailPlaceholder: "Ваш email",
      subscribe: "Подписаться",
      grantInfo: "Доступен государственный грант"''',
        'new_sections': '''    chat: {
      badge: "Есть вопросы?",
      title: "Поддержка IT Park Rishtan",
      onlineStatus: "Операторы онлайн",
      greeting: "Здравствуйте! Чем мы можем помочь вам по курсам или поступлению?",
      writeTg: "Написать в Telegram",
      callUs: "Позвонить нам",
      fastAnswer: "Быстрый ответ гарантирован"
    },
    testimonials: {
      title: "Отзывы выпускников",
      subtitle: "Наши выпускники делятся своим опытом",
      graduatedIn: "Год выпуска",
      workingAt: "Работает в"
    },
    partners: {
      title: "Наши партнёры",
      subtitle: "Надёжные партнёрские организации"
    },
    countdown: {
      title: "Новая группа скоро начнётся!",
      subtitle: "Спешите зарегистрироваться",
      seatsLeft: "мест осталось",
      applyNow: "Зарегистрируйтесь сейчас",
      days: "Дней",
      hours: "Часов",
      minutes: "Минут",
      seconds: "Секунд",
      started: "Группа началась!"
    },
    portfolio: {
      title: "Портфолио студентов",
      subtitle: "Реальные проекты наших выпускников",
      all: "Все",
      web: "Веб",
      mobile: "Мобильные",
      design: "Дизайн",
      iot: "IoT",
      liveDemo: "Живой просмотр",
      viewCode: "Посмотреть код",
      noResults: "Проекты не найдены"
    },
    gallery: {
      title: "Галерея",
      subtitle: "Фотографии нашего центра и мероприятий",
      all: "Все",
      center: "Наш центр",
      lessons: "Занятия",
      events: "Мероприятия",
      lab: "Лаборатория"
    },
    quiz: {
      title: "Какая IT-профессия вам подходит?",
      subtitle: "Ответьте на 6 вопросов и найдите подходящее направление",
      question: "Вопрос",
      of: "из",
      next: "Следующий",
      prev: "Предыдущий",
      result: "Результат",
      yourMatch: "Подходящее направление",
      matchPercent: "совпадение",
      retake: "Начать заново",
      viewCourse: "Посмотреть курс",
      applyNow: "Подать заявку сейчас"
    },
    events: {
      title: "Мероприятия и открытые уроки",
      subtitle: "Присоединяйтесь к предстоящим мероприятиям",
      all: "Все",
      openLessons: "Открытые уроки",
      hackathons: "Хакатоны",
      masterclasses: "Мастер-классы",
      meetups: "Встречи",
      register: "Зарегистрироваться",
      seatsLeft: "мест осталось",
      seatsFull: "Мест нет",
      past: "Прошедшие мероприятия",
      upcoming: "Предстоящие",
      featured: "Рекомендуем"
    },
    certificate: {
      title: "Проверка сертификата",
      subtitle: "Введите номер сертификата для проверки",
      placeholder: "Например: ITPR-2026-FE-001",
      verify: "Проверить",
      valid: "Сертификат действителен!",
      invalid: "Сертификат не найден",
      student: "Студент",
      course: "Направление",
      date: "Дата выдачи",
      number: "Номер сертификата"
    },
    notFound: {
      title: "Страница не найдена",
      description: "Извините, запрашиваемая страница не существует",
      goHome: "На главную"
    }'''
    },
    'en': {
        'stats': '''      subtitle: "Our center opens doors to global tech opportunities for regional talent.",
      studentsDesc: "Number of graduates",
      directionsDesc: "IT directions",
      freeDesc: "Free education",
      teachersDesc: "Professional teachers"''',
        'courses': '''      applyCourse: "Enroll in this track",
      students: "students",
      details: "More details",
      apply: "Apply"''',
        'teachers': '''      telegram: "Message on Telegram",
      experience: "experience",
      certified: "Certified"''',
        'news': '''      allCategory: "All",
      readMore: "Read more",
      close: "Close"''',
        'contact': '''      successDesc: "Our support team will contact you shortly.",
      phoneError: "Invalid phone format"''',
        'nav': '''      darkMode: "Dark Mode",
      portfolio: "Portfolio",
      gallery: "Gallery",
      events: "Events",
      quiz: "IT Quiz",
      apply: "Apply Now"''',
        'hero': '''      scrollDown: "Scroll Down",
      namePlaceholder: "Your name",
      quickApply: "Quick apply",
      formNote: "Your data is protected",
      formSuccess: "Application received!",
      formError: "An error occurred"''',
        'footer': '''      backToTop: "Back to Top",
      portfolio: "Portfolio",
      gallery: "Gallery",
      events: "Events",
      quiz: "IT Quiz",
      certificate: "Certificate verification",
      newsletter: "Stay updated",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      grantInfo: "Government grant available"''',
        'new_sections': '''    chat: {
      badge: "Have a question?",
      title: "IT Park Rishtan Support",
      onlineStatus: "Support is Online",
      greeting: "Hello! How can we assist you regarding courses, admission, or the center?",
      writeTg: "Chat on Telegram",
      callUs: "Call Us Directly",
      fastAnswer: "Prompt assistance guaranteed"
    },
    testimonials: {
      title: "Graduate testimonials",
      subtitle: "Our graduates share their experiences",
      graduatedIn: "Graduated in",
      workingAt: "Works at"
    },
    partners: {
      title: "Our partners",
      subtitle: "Trusted partner organizations"
    },
    countdown: {
      title: "New group starts soon!",
      subtitle: "Hurry up to register",
      seatsLeft: "seats left",
      applyNow: "Register now",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      started: "Group has started!"
    },
    portfolio: {
      title: "Student portfolio",
      subtitle: "Real projects by our graduates",
      all: "All",
      web: "Web",
      mobile: "Mobile",
      design: "Design",
      iot: "IoT",
      liveDemo: "Live demo",
      viewCode: "View code",
      noResults: "No projects found"
    },
    gallery: {
      title: "Gallery",
      subtitle: "Photos from our center and events",
      all: "All",
      center: "Our center",
      lessons: "Classes",
      events: "Events",
      lab: "Laboratory"
    },
    quiz: {
      title: "Which IT career suits you?",
      subtitle: "Answer 6 questions and find your direction",
      question: "Question",
      of: "of",
      next: "Next",
      prev: "Previous",
      result: "Result",
      yourMatch: "Your match",
      matchPercent: "match",
      retake: "Start over",
      viewCourse: "View course",
      applyNow: "Apply now"
    },
    events: {
      title: "Events and open lessons",
      subtitle: "Join upcoming events and free masterclasses",
      all: "All",
      openLessons: "Open lessons",
      hackathons: "Hackathons",
      masterclasses: "Masterclasses",
      meetups: "Meetups",
      register: "Register",
      seatsLeft: "seats left",
      seatsFull: "Seats full",
      past: "Past events",
      upcoming: "Upcoming",
      featured: "Featured"
    },
    certificate: {
      title: "Certificate verification",
      subtitle: "Enter the certificate number to verify",
      placeholder: "Example: ITPR-2026-FE-001",
      verify: "Verify",
      valid: "Certificate is valid!",
      invalid: "Certificate not found",
      student: "Student",
      course: "Course",
      date: "Issue date",
      number: "Certificate number"
    },
    notFound: {
      title: "Page not found",
      description: "Sorry, the page you're looking for doesn't exist",
      goHome: "Go to homepage"
    }'''
    }
}

for lang, data in additions.items():
    for section in ['stats', 'courses', 'teachers', 'news', 'contact', 'nav', 'hero', 'footer']:
        lines = data[section].split('\\n')
        old_line = lines[0]
        content = content.replace(old_line, data[section])
    
    lang_pattern = f'  {lang}: \\{{.*?(    chat: \\{{.*?\\}\\n    \\}})\\n  \\}}'
    match = re.search(lang_pattern, content, flags=re.DOTALL)
    if match:
        old_chat = match.group(1)
        content = content.replace(old_chat, data['new_sections'])
    else:
        lang_pattern = f'  {lang}: \\{{.*?(    chat: \\{{.*?\\}\\n    \\}})\\n(?:  \\}},|\\}})'
        match = re.search(lang_pattern, content, flags=re.DOTALL)
        if match:
            old_chat = match.group(1)
            content = content.replace(old_chat, data['new_sections'])

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
