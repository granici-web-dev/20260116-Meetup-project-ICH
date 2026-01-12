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

const eventContainer = document.querySelector('.event-card__wrapper');

const createElement = (event) => {
  const formattedDate = formatEventDate(event.date);
  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');

  eventCard.innerHTML = `
    <div class="event-card__cover">
                    <a href="#">
                      <img src="${event.image}" class="event-card__cover__img" />
                    </a>
                  </div>
                  <div class="event-card__info">
                    <div class="event-card__info-wrapper">
                      <a href="#" class="event-card__info__title">
                        ${event.title}
                      </a>
                    </div>
                    <div class="event-card__info__category">${event.category} (${
    event.distance
  } km)</div>
                    <div class="event-card__info__description">
                      <div class="event-card-info-description__date">
                        <img
                          src="/images/icons/date.svg"
                          alt="Date icon"
                          class="event-card-info-description__date__img"
                        />
                        <span>${formattedDate}</span>
                      </div>
                      <div class="event-card-info-description__bottom">
                        <div class="event-card-info-description__guests">
                          <img src="/images/icons/check.svg" alt="" />
                          <span>${event.attendees !== undefined ? event.attendees : 0}</span>
                        </div>
                        <div class="event-card-info-description__price">
                          <img src="/images/icons/ticket.svg" alt="" />
                          <span>Free</span>
                        </div>
                      </div>
                    </div>
                  </div>
  `;

  return eventCard;
}

const renderEventCard = () => {
  eventsStore.forEach((event) => {
    const eventChild = createElement(event);
    eventContainer.appendChild(eventChild);
  })
}

renderEventCard();

function formatEventDate(date) {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  return new Intl.DateTimeFormat('en-US', options)
    .format(date)
    .toUpperCase()
    .replace(',', '')
    .replace(' AT', ' ·');
}
