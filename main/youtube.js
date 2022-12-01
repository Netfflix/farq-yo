let videos = [
    { 
      url: 'https://www.youtube.com/embed/RRaZwB56djI',
      tittle: 'Hamdam Sobirob - Maktabimda',
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/1iS397msMZE',
      tittle: 'Munisa Rizayeva - Yetmadimi',
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/U4q4JwA1cp8',
      tittle: 'Uzeyir Mehdizade - Yaxsi Olar',
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/GEM8mTPSFa4',
      tittle: 'Shohruhxon - Oddiy bola',
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/Va2QWAX-_sw',
      tittle: 'Munisa Rizayeva - Xafa-xafa',
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/pZzz5XpPnCc',
      tittle: 'Arman Tovmasyan & Samira - AKA AKA',
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/8IRuO-Bwdm4',
      tittle: "Ziyoda - Tor ko'cha",
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/Xv7X00JAApQ',
      tittle: "Ulug'bek Rahmatullayev - Bilmadi",
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/p2T3W63VRS4',
      tittle: "Bojalar & Shohruhxon & Shaxriyor - Yig'lama muhabbat",
      categories: 'Музыка'
    },
    {
      url: 'https://www.youtube.com/embed/j_LrXZbOAWQ',
      tittle: 'Дима Билан - Держи',
      categories: 'Музыка'
    },
    
    {
      url: 'https://www.youtube.com/embed/qprnthDfKcU',
      tittle: 'Человек-паук 1',
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/_i_RBaP2t6s',
      tittle: 'Человек-паук 2',
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/O3DErsI-6w8',
      tittle: 'Хакер',
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/gA0g6xsgZM4',
      tittle: 'Овердрайв',
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/BtHq2VtMX80',
      tittle: 'Цунами',
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/I-kOOlhHLjI',
      tittle: 'Поезд в пусан',
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/IMQKIUWisPQ',
      tittle: "Т-34",
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/OBGbvdfkouE',
      tittle: "Домовой",
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/pStuYYtaQsU',
      tittle: "Хатико",
      categories: 'Фильм'
    },
    {
      url: 'https://www.youtube.com/embed/W-NNGWsc7ho',
      tittle: 'В Метре Друг от Друга',
      categories: 'Фильм'
    },
    
    {
      url: 'https://www.youtube.com/embed/iRUr751cIsg',
      tittle: 'Хаммаси',
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/pP7vc_jmjpA',
      tittle: 'AВБ',
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/Sibe1-q-o7o',
      tittle: 'Хато',
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/oUaEBe4Mfqc',
      tittle: 'Доим',
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/0dYCR7o9VVg',
      tittle: 'Сокка',
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/J7GOIMXPbuA',
      tittle: 'Снуппи Догг',
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/JihyRLrCQCk',
      tittle: "АБУ",
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/ayO71sG77o0',
      tittle: "Ханчар",
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/MGIVxxSR9q0',
      tittle: "Шерият",
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/qdjRr22Gxro',
      tittle: 'Коча Шерият',
      categories: 'Реп'
    },
    {
      url: 'https://www.youtube.com/embed/BE9ObN4lhJs',
      tittle: 'Избраный Богами',
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/f0SLmCd5pNw',
      tittle: 'Черный Призыватель',
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/LmWKTnvtvEw',
      tittle: 'Ученик Превзошёл Мудреца',
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/cEm-sgXjpq4',
      tittle: 'Любит — не любит',
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/oPwY10XxGkE',
      tittle: 'Самый Сильный Маг в День Пробуждения',
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/1BGv6J_qRlU',
      tittle: 'Сильнейший ГГ в другом мире',
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/tTPbTnJXQyE',
      tittle: " Где Герой Низшего Ранга Стал Непобедимым",
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/39EeJNnJC-4',
      tittle: "Повелитель тьмы — Магия подчинения",
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/x4rZ7TThApU',
      tittle: "Влады Деменов",
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/K-ljMjGMVac',
      tittle: 'Владыка Магии  ',
      categories: 'Аниме'
    },
    {
      url: 'https://www.youtube.com/embed/J42SZXS-_Qo',
      tittle: 'ASMR Programming - Coding a Snake Game - No Talking',
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/Wlu4MsBnjuk',
      tittle: 'ASMR Programming - Coding Purple Rain - No Talking',
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/tx6Ocl6s-K0',
      tittle: 'ASMR Programming - Colorful Random Shapes - No Talking',
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/CJF4ZNJYoSY',
      tittle: 'ASMR Programming - Terrain Generator - No Talking',
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/1A3qAfZzgbc',
      tittle: 'ASMR Programming - Pepsi Home Page - No Talking',
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/d6-8Y9kZ71k',
      tittle: 'ASMR Programming - Coding Snake A.I. - No Talking',
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/p09i_hoFdd0',
      tittle: "ASMR Programming - Spinning Cube - No Talking",
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/sNO7jYLqX-M',
      tittle: "ASMR Programming - Google Sign up Page - No Talking",
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/O6-9Z0k-_N8',
      tittle: "ASMR Modeling - Donut - No Talking",
      categories: 'Coding'
    },
    {
      url: 'https://www.youtube.com/embed/KKRlhyasaTA',
      tittle: 'ASMR Programming - Coding Matrix - No Talking',
      categories: 'Coding'
    },
      { 
        url: 'https://www.youtube.com/embed/RRaZwB56djI',
        tittle: 'Hamdam Sobirob - Maktabimda',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/1iS397msMZE',
        tittle: 'Munisa Rizayeva - Yetmadimi',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/U4q4JwA1cp8',
        tittle: 'Uzeyir Mehdizade - Yaxsi Olar',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/GEM8mTPSFa4',
        tittle: 'Shohruhxon - Oddiy bola',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/Va2QWAX-_sw',
        tittle: 'Munisa Rizayeva - Xafa-xafa',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/pZzz5XpPnCc',
        tittle: 'Arman Tovmasyan & Samira - AKA AKA',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/8IRuO-Bwdm4',
        tittle: "Ziyoda - Tor ko'cha",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/Xv7X00JAApQ',
        tittle: "Ulug'bek Rahmatullayev - Bilmadi",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/p2T3W63VRS4',
        tittle: "Bojalar & Shohruhxon & Shaxriyor - Yig'lama muhabbat",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/j_LrXZbOAWQ',
        tittle: 'Дима Билан - Держи',
        categories: 'Все'
      },
      
      {
        url: 'https://www.youtube.com/embed/qprnthDfKcU',
        tittle: 'Человек-паук 1',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/_i_RBaP2t6s',
        tittle: 'Человек-паук 2',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/O3DErsI-6w8',
        tittle: 'Хакер',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/gA0g6xsgZM4',
        tittle: 'Овердрайв',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/BtHq2VtMX80',
        tittle: 'Цунами',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/I-kOOlhHLjI',
        tittle: 'Поезд в пусан',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/IMQKIUWisPQ',
        tittle: "Т-34",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/OBGbvdfkouE',
        tittle: "Домовой",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/pStuYYtaQsU',
        tittle: "Хатико",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/W-NNGWsc7ho',
        tittle: 'В Метре Друг от Друга',
        categories: 'Все'
      },
      
      {
        url: 'https://www.youtube.com/embed/iRUr751cIsg',
        tittle: 'Хаммаси',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/pP7vc_jmjpA',
        tittle: 'AВБ',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/Sibe1-q-o7o',
        tittle: 'Хато',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/oUaEBe4Mfqc',
        tittle: 'Доим',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/0dYCR7o9VVg',
        tittle: 'Сокка',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/J7GOIMXPbuA',
        tittle: 'Снуппи Догг',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/JihyRLrCQCk',
        tittle: "АБУ",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/ayO71sG77o0',
        tittle: "Ханчар",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/MGIVxxSR9q0',
        tittle: "Шерият",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/qdjRr22Gxro',
        tittle: 'Коча Шерият',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/BE9ObN4lhJs',
        tittle: 'Избраный Богами',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/f0SLmCd5pNw',
        tittle: 'Черный Призыватель',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/LmWKTnvtvEw',
        tittle: 'Ученик Превзошёл Мудреца',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/cEm-sgXjpq4',
        tittle: 'Любит — не любит',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/oPwY10XxGkE',
        tittle: 'Самый Сильный Маг в День Пробуждения',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/1BGv6J_qRlU',
        tittle: 'Сильнейший ГГ в другом мире',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/tTPbTnJXQyE',
        tittle: " Где Герой Низшего Ранга Стал Непобедимым",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/39EeJNnJC-4',
        tittle: "Повелитель тьмы — Магия подчинения",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/x4rZ7TThApU',
        tittle: "Влады Деменов",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/K-ljMjGMVac',
        tittle: 'Владыка Магии  ',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/J42SZXS-_Qo',
        tittle: 'ASMR Programming - Coding a Snake Game - No Talking',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/Wlu4MsBnjuk',
        tittle: 'ASMR Programming - Coding Purple Rain - No Talking',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/tx6Ocl6s-K0',
        tittle: 'ASMR Programming - Colorful Random Shapes - No Talking',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/CJF4ZNJYoSY',
        tittle: 'ASMR Programming - Terrain Generator - No Talking',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/1A3qAfZzgbc',
        tittle: 'ASMR Programming - Pepsi Home Page - No Talking',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/d6-8Y9kZ71k',
        tittle: 'ASMR Programming - Coding Snake A.I. - No Talking',
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/p09i_hoFdd0',
        tittle: "ASMR Programming - Spinning Cube - No Talking",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/sNO7jYLqX-M',
        tittle: "ASMR Programming - Google Sign up Page - No Talking",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/O6-9Z0k-_N8',
        tittle: "ASMR Modeling - Donut - No Talking",
        categories: 'Все'
      },
      {
        url: 'https://www.youtube.com/embed/KKRlhyasaTA',
        tittle: 'ASMR Programming - Coding Matrix - No Talking',
        categories: 'Все'
      },
    ]

