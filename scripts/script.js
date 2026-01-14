const eventsStore = [
  {
    title: 'INFJ Personality Type - Coffee Shop Meet & Greet',
    description: 'Being an INFJ',
    date: new Date(2024, 2, 23, 15),
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ',
    type: 'offline',
    attendees: 99,
    category: 'Hobbies and Passions',
    distance: 50,
  },
  {
    title: 'NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience',
    description: 'New York AI Users',
    date: new Date(2024, 2, 23, 11, 30),
    image:
      'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
    type: 'offline',
    attendees: 43,
    category: 'Technology',
    distance: 25,
  },
  {
    title: 'Book 40+ Appointments Per Month Using AI and Automation',
    description: 'New Jersey Business Network',
    date: new Date(2024, 2, 16, 14),
    image:
      'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    category: 'Technology',
    distance: 10,
  },
  {
    title: 'Dump writing group weekly meetup',
    description: 'Dump writing group',
    date: new Date(2024, 2, 13, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 77,
    category: 'Business',
    distance: 100,
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 140,
    category: 'Social Activities',
    distance: 74,
  },
  {
    title: 'All Nations - Manhattan Missions Church Bible Study',
    description: 'Manhattan Bible Study Meetup Group',
    date: new Date(2024, 2, 14, 11),
    image:
      'https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    category: 'Health and Wellbeing',
    distance: 15,
  },
];

const filters = [
  {
    type: 'day',
    options: [
      'Any date',
      new Date(2024, 2, 13, 11),
      new Date(2024, 2, 14, 11),
      new Date(2024, 2, 14, 20),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 23, 11, 30),
      new Date(2024, 2, 23, 14),
      new Date(2024, 2, 28, 20),
      new Date(2024, 2, 30, 14),
      new Date(2024, 3, 11, 20),
      new Date(2024, 3, 25, 20),
    ],
  },
  { type: 'type', options: ['Any type', 'offline', 'online'] },
  { type: 'distance', options: ['Any distance', 25, 50, 75, 100] },
  {
    type: 'category',
    options: [
      'Any category',
      'Health and Wellbeing',
      'Social Activities',
      'Business',
      'Technology',
    ],
  },
];

const dateSelect = document.querySelector('#date-select');
const typeSelect = document.querySelector('#type-select');
const distanceSelect = document.querySelector('#distance-select');
const categorySelect = document.querySelector('#category-select');

// Создаю функцию, которая будет показывать дату в выпадающем списке только месяц и день
const customDate = (date) => {
  // Указываем, что нужен только месяц и день
  const options = {
    month: 'short',
    day: 'numeric',
  };
  // функция возвращает строку вроде Mar 23
  return date.toLocaleDateString('en-US', options);
};

// Функция, котрая убирает дубликаты дней. Нам важен только день, без времени
const getUniqueDays = (dates) => {
  // Создаем пустой массив для уникальных дат
  const uniqueDates = [];
  // Создаем пустой массив для повторяющихся дат
  const seenDays = [];

  // Проходимся по массиву дат
  dates.forEach((date) => {
    // Переводим формат даты в YYYY-MM-DD
    const dateString = date.toISOString().split('T')[0];

    // Првоеряем, встречалась ли такая строка раньше
    if (!seenDays.includes(dateString)) {
      // Добавляем строку в массив уже увиденных дат
      seenDays.push(dateString);
      // Добавляем саму дату в массив уникальных дат
      uniqueDates.push(date);
    }
  });
  // Возвращаем массив уникальных дат
  return uniqueDates;
};

// Функция форматирования даты для карточки
const formatEventDate = (date) => {
  // Указываем формат, используя стандартный форматтер
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };

  return (
    date
      // Преобразовываем в строку
      .toLocaleDateString('en-US', options)
      // Преобразовываем в верхний регистр
      .toUpperCase()
  );
}

// ------- EVENT CARDS ----------

// Grid cards
const createGridEventCard = (event) => {
  // Создаем div для карточки
  const card = document.createElement('div');
  // Задаем класс для этого div
  card.classList.add('event-card');
  // Создаем разметку для карточки
  card.innerHTML = `
    <div class="event-card__cover">
          <a href="#">
            <img 
              src="${event.image}" 
              alt="${event.title}" 
              class="event-card__cover__img"
            />
          </a>
        </div>

        <div class="event-card__info">
          <div class="event-card__info-wrapper">
            <a href="events.html" class="event-card__info__title">
              ${event.title}
            </a>
          </div>

          <div class="event-card__info__category">
            ${event.category} (${event.distance} km)
          </div>

          <div class="event-card__info__description">
            <div class="event-card-info-description__date">
              <img src="/images/icons/date.svg" alt="Date icon" />
              <span>${formatEventDate(event.date)}</span>
            </div>

            <div class="event-card-info-description__bottom">
              <div class="event-card-info-description__guests">
                <img src="/images/icons/check.svg" alt="Attendees" />
                <span>${event.attendees === undefined ? event.attendees : 0}</span>
              </div>

              <div class="event-card-info-description__price">
                <img src="/images/icons/ticket.svg" alt="Price" />
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>
      `;

  return card;
}

// List cards
const createListEventCard = (event) => {
  // Создаем div для карточки
  const card = document.createElement('div');
  // Задаем класс для этого div
  card.classList.add('filter-events__item');
  // Создаем разметку для карточки
  card.innerHTML = `
    <div class="event-card__cover">
      <a href="#">
        <img 
          src="${event.image}" 
          alt="${event.title}" 
          class="event-card__cover__img"
        />
      </a>
    </div>

    <div class="filter-events__item-info">
      <div class="filter-events__item-info__date">
        ${formatEventDate(event.date)}
      </div>

      <div class="filter-events__item-info__title">
        ${event.title}
      </div>

      <div class="filter-events__item-info__categories">
        ${event.category}
        <span class="filter-events__item-info__categories-distance">
          (${event.distance} km)
        </span>
      </div>

      <div class="filter-events__item-info__bottom">
        <div class="filter-events__item-info__bottom__attendees">
          ${event.attendees === undefined ? event.attendees : 0} attendees
        </div>

        <div class="filter-events__item-info__bottom__devider">·</div>

        <div class="filter-events__item-info__bottom__left">
          ${event.attendees ? 150 - event.attendees : 150} spots left
        </div>
      </div>
    </div>
  `;

  return card
};

// Рендер карточек списком
const showListEvents = (eventsList) => {
  // Находим контейнер для списка событий
  const container = document.querySelector('.filter-events');
  // Очищаем container
  container.innerHTML = '';
  // Проверяем, если container пустой, выводим заголовок, что events не найдены
  if (eventsList.length === 0) {
    return container.innerHTML = `<h2 class="not-found-events-title">Events not found</h2>`;
  }
  // Проходимся по массиву
  eventsStore.forEach((event) => {
    // Создаем карточку event
    const card = createListEventCard(event);
    // Прикрепляем карточку к container
    container.appendChild(card);
  })
}

// Рендер карточек сеткой
const showGridEvents = (container, eventsList) => {
  container.innerHTML = '';

  // Проверяем, если container пустой, выводим заголовок, что events не найдены
  if (eventsList.length === 0) {
    return (container.innerHTML = `<h2 class="not-found-events-title">Events not found</h2>`);
  }
  // Проходимся по массиву 
  eventsList.forEach((event) => {
    // Создаем карточку event
    const card = createGridEventCard(event);
    // Прикрепляем карточку к container
    container.appendChild(card);
  });
};

// ------- ФИЛЬТРЫ ----------

// Функция, которая создает фильтры
const createFilterOptions = () => {
  // Фильтр по дате

  // Проверяем, существует ли он на странице
  if (dateSelect) {
    const dayFilter = filters.find((f) => {
      // Из массива фильтров находим объект с типом day
      return f.type === 'day';
    });

    if (dayFilter) {
      // Убираем из массива значение Any date
      const allDates = dayFilter.options.filter((opt) => {
        return opt !== 'Any date';
      });
      // Получаем массив уникальных дат
      const uniqueDates = getUniqueDays(allDates);

      dateSelect.innerHTML = `<option value="Any date">Any date</option>`;
      // Проходимся по массиву уникальных дат
      uniqueDates.forEach((date) => {
        // Создаем option
        const option = document.createElement('option');
        // В value кладем дату без времени
        option.value = date.toISOString().split('T')[0];
        // В текст кладем отформатированную дату
        option.textContent = customDate(date);
        // Добавляем option в select
        dateSelect.appendChild(option);
      });
    }
  }

  // Фильтр по типу
  // Проверяю, существует ли он на странице
  if (typeSelect) {
    const typeFilter = filters.find((f) => {
      // Из массива фильтров находим объект с типом type
      return f.type === 'type';
    });
    // Проверяем, существует ли он на странице
    if (typeFilter) {
      // Очищаем select
      typeSelect.innerHTML = '';
      // Проходимся по массиву опций
      typeFilter.options.forEach((opt) => {
        // Создаем option
        const option = document.createElement('option');
        // В value кладем тип
        option.value = opt;
        // В текст кладем тип
        option.textContent = opt;
        // Добавляем option в select
        typeSelect.appendChild(option);
      });
    }
  }

  // Фильтр по distance
  // Проверяю, существует ли он на странице
  if (distanceSelect) {
    const distanceFilter = filters.find((f) => {
      // Из массива фильтров находим объект с типом distance
      return f.type === 'distance';
    });
    // Проверяем, существует ли он на странице
    if (distanceFilter) {
      // Очищаем select
      distanceSelect.innerHTML = '';
      // Проходимся по массиву опций
      distanceFilter.options.forEach((opt) => {
        // Создаем option
        const option = document.createElement('option');
        // В value кладем дистанцию
        option.value = opt;
        // В текст кладем дистанцию
        option.textContent = opt;
        // Добавляем option в select
        distanceSelect.appendChild(option);
      });
    }
  }

  // Фильтр по category
  // Проверяю, существует ли он на странице
  if (categorySelect) {
    const categoryFilter = filters.find((f) => {
      // Из массива фильтров находим объект с типом category
      return f.type === 'category';
    });
    // Проверяем, существует ли он на странице
    if (categoryFilter) {
      // Очищаем select
      categorySelect.innerHTML = '';
      // Проходимся по массиву опций
      categoryFilter.options.forEach((opt) => {
        // Создаем option
        const option = document.createElement('option');
        // В value кладем категорию
        option.value = opt;
        // В текст кладем категорию
        option.textContent = opt;
        // Добавляем option в select
        categorySelect.appendChild(option);
      });
    }
  }
};



// Функция для фильтрации событий по выбранным фильтрам
const filterEvents = () => {

  // Если select отсутствует — используем значение по умолчанию
  const selectedDate = dateSelect ? dateSelect.value : 'Any date';
  const selectedType = typeSelect ? typeSelect.value : 'Any type';
  const selectedDistance = distanceSelect ? distanceSelect.value : 'Any distance'
  const selectedCategory = categorySelect ? categorySelect.value : 'Any category'

  // Проходимся по масиву events
  const filtered = eventsStore.filter((event) => {
    // Проверяем фильтр по дате, если выбранная дата не Any date
    if (selectedDate !== 'Any date') {
      // Переводим дату в строку, разбиваем строку на массив и вытаскиваем элемент под индексом 0, это наша дата
      const eventDateString = event.date.toISOString().split('T')[0];
      // Сравнаваем нашу дату с выбранной датой, если не совпадает, возвращаем false
      if (eventDateString !== selectedDate) {
        return false;
      }
    }

    // Проверяем фильтр по типу, если выбранный тип не Any type и тип не совпадает с выбранным событием возвращаем false
    if (selectedType !== 'Any type' && event.type !== selectedType) {
      return false;
    }

    // Проверяем фильтр по distance, если выбранный тип не Any distance и тип не совпадает с выбранным событием возвращаем false
    if (selectedDistance !== 'Any distance' && event.distance !== selectedDistance) {
      return false;
    }

    // Проверяем фильтр по category, если выбранный тип не Any category и тип не совпадает с выбранным событием возвращаем false
    if (selectedCategory !== 'Any category' && event.category !== selectedCategory) {
      return false;
    }
    // В инном случае, если все совпадает, возвращаем true
    return true
  });

  // Рендерим список events
  showListEvents(filtered);
}

