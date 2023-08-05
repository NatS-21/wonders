const wondersData = [
    {
        id: 0,
        name: "Пирамиды Гизы",
        description: "Они являются памятниками древнего египетского искусства и архитектуры.",
        imageUrl: "resources/pyramids.png",
    },
    {
        id: 1,
        name: "Висячие сады Семирамиды",
        description: "Они представляли собой великолепные сады на башнях в Вавилоне.",
        imageUrl: "resources/hanging_gardens.png",
    },
    {
        id: 2,
        name: "Статуя Зевса в Олимпии",
        description: "Огромная статуя Зевса была установлена в храме в Олимпии в Греции.",
        imageUrl: "resources/zeus_statue.png",
    },
    {
        id: 3,
        name: "Храм Артемиды в Эфесе",
        description: "Этот храм был посвящен богине Артемиде и служил культовому центру.",
        imageUrl: "resources/artemis_temple.png",
    },
    {
        id: 4,
        name: "Мавзолей в Галикарнасе",
        description: "Этот мавзолей был построен в честь карийского правителя Мавсола.",
        imageUrl: "resources/mausoleum.png",
    },
    {
        id: 5,
        name: "Колосс Родосский",
        description: "Это была огромная бронзовая статуя бога Гелиоса на острове Родос.",
        imageUrl: "resources/colossus.png",
    },
    {
        id: 6,
        name: "Александрийский маяк",
        description: "Этот маяк был высочайшим сооружением своего времени и служил морской навигации.",
        imageUrl: "resources/lighthouse.png",
    },
];

const wondersContainer = document.querySelector(".wonders-container");
const searchInput = document.getElementById("searchInput");

function createWonderCard(wonder) {
    const wonderCard = document.createElement("div");
    wonderCard.classList.add("wonder-card");

    const wonderImage = document.createElement("div");
    wonderImage.classList.add("wonder-image");
    const image = document.createElement("img");
    image.src = wonder.imageUrl;
    image.alt = wonder.name;
    wonderImage.appendChild(image);

    const wonderDetails = document.createElement("div");
    wonderDetails.classList.add("wonder-details");
    const title = document.createElement("h3");
    title.textContent = wonder.name;
    const description = document.createElement("p");
    description.textContent = wonder.description;
    const button = document.createElement("button");
    button.textContent = "Подробнее";
    button.onclick = () => redirectToDetailedPage(wonder.id)

    wonderDetails.appendChild(title);
    wonderDetails.appendChild(description);
    wonderDetails.appendChild(button);

    wonderCard.appendChild(wonderImage);
    wonderCard.appendChild(wonderDetails);

    return wonderCard;
}

function renderWonders() {
    wondersData.forEach((wonder) => {
        const wonderCard = createWonderCard(wonder);
        wondersContainer.appendChild(wonderCard);
    });
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".wonder-card");

    const sortedCards = Array.from(cards).sort((a, b) => {
        const aTitle = a.querySelector(".wonder-details h3").textContent.toLowerCase();
        const bTitle = b.querySelector(".wonder-details h3").textContent.toLowerCase();
        return aTitle.includes(searchTerm) ? -1 : bTitle.includes(searchTerm) ? 1 : 0;
    });

    wondersContainer.innerHTML = '';

    sortedCards.forEach((card) => {
        wondersContainer.appendChild(card);
    });

    sortedCards.forEach((card) => {
        const title = card.querySelector(".wonder-details h3").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.classList.add('highlight'); // Добавляем класс с анимацией
            card.addEventListener('animationend', () => {
                card.classList.remove('highlight');
            }, { once: true });
        }
    });
}

function redirectToDetailedPage(wonderId) {
    window.location.href = `detailed.html?wonder=${wonderId}`;
}