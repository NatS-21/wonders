const wondersData = [
    {
        id: 0,
        name: "Пирамиды Гизы",
        description: "Они являются памятниками древнего египетского искусства и архитектуры.",
        imageUrl: "resources/pyramids.png",
        historicalValue: "Датируются приблизительно 2580-2560 годами до н.э.",
        architecturalFeatures: "Впечатляющие пирамидальные структуры из каменных блоков.",
        culturalSignificance: "Важное значение в религиозных и погребальных обрядах древних египтян.",
        technicalInnovations: "Особенности в строительстве, использование рабочей силы и инженерии.",
        modernImpact: "Популярный туристический объект и символ древнего Египта.",
    },
    {
        id: 1,
        name: "Висячие сады Семирамиды",
        description: "Они представляли собой великолепные сады на башнях в Вавилоне.",
        imageUrl: "resources/hanging_gardens.png",
        historicalValue: "Считаются одним из семи чудес света, существовали в Месопотамии.",
        architecturalFeatures: "Уникальная система поднятых садов на возвышенных конструкциях.",
        culturalSignificance: "Подарок для царицы Семирамиды, символ её любви и заботы.",
        technicalInnovations: "Использование сложной системы полива и инженерных решений.",
        modernImpact: "Легендарное чудо, но точное местоположение остается загадкой.",
    },
    {
        id: 2,
        name: "Статуя Зевса в Олимпии",
        description: "Огромная статуя Зевса была установлена в храме в Олимпии в Греции.",
        imageUrl: "resources/zeus_statue.png",
        historicalValue: "Один из величайших произведений древнегреческой скульптуры.",
        architecturalFeatures: "Колоссальная статуя Зевса из слоновой кости и драгоценных камней.",
        culturalSignificance: "Была образцом для других скульптурных изображений богов.",
        technicalInnovations: "Мастерство резьбы по слоновой кости, использование разнообразных материалов.",
        modernImpact: "Статуя не сохранилась, но оставила след в искусстве.",
    },
    {
        id: 3,
        name: "Храм Артемиды в Эфесе",
        description: "Этот храм был посвящен богине Артемиде и служил культовому центру.",
        imageUrl: "resources/artemis_temple.png",
        historicalValue: "Считается одним из семи чудес света, возводился несколько раз.",
        architecturalFeatures: "Изящная колоннада и декоративные элементы на фасадах храма.",
        culturalSignificance: "Культовое место для поклонения богине Артемиде, богине охоты.",
        technicalInnovations: "Использование мрамора и многоколоночных пролетов.",
        modernImpact: "Остатки храма являются объектом археологических изысканий и туристической привлекательности.",
    },
    {
        id: 4,
        name: "Мавзолей в Галикарнасе",
        description: "Этот мавзолей был построен в честь карийского правителя Мавсола.",
        imageUrl: "resources/mausoleum.png",
        historicalValue: "Мавзолей стал одним из семи чудес света и служил важным памятником древнего мира.",
        architecturalFeatures: "Сооружение было построено в стиле дорийской архитектуры и украшено скульптурами.",
        culturalSignificance: "Мавзолей стал символом любви и почитания к умершим правителям.",
        technicalInnovations: "Во время строительства использовались различные инженерные решения для создания монументальной конструкции.",
        modernImpact: "Мавзолей привлекал множество путешественников и паломников, способствуя развитию туризма.",
    },
    {
        id: 5,
        name: "Колосс Родосский",
        description: "Это была огромная бронзовая статуя бога Гелиоса на острове Родос.",
        imageUrl: "resources/colossus.png",
        historicalValue: "Колосс Родосский был одним из величайших творений древних художников и мастеров бронзы.",
        architecturalFeatures: "Статуя изображала стоящего бога Гелиоса с распростертыми руками и установлена на высоком постаменте.",
        culturalSignificance: "Колосс символизировал мощь и величие острова Родос и служил олицетворением бога солнца.",
        technicalInnovations: "Для создания статуи использовались инновационные техники литья бронзы.",
        modernImpact: "Статуя привлекала путешественников и стала популярным объектом паломничества и обозрения.",
    },
    {
        id: 6,
        name: "Александрийский маяк",
        description: "Этот маяк был высочайшим сооружением своего времени и служил морской навигации.",
        imageUrl: "resources/lighthouse.png",
        historicalValue: "Александрийский маяк являлся первым маяком в истории и стал прототипом для многих последующих.",
        architecturalFeatures: "Маяк был построен на острове Фарос и состоял из трех секций: квадратной базы, восьмиугольной средней секции и круглой верхней части с огнем.",
        culturalSignificance: "Маяк считался одним из семи чудес света и стал символом Александрии.",
        technicalInnovations: "Маяк был оснащен системой зеркал и отражателей, усиливавших свет маяка, что делало его видимым на большом расстоянии.",
        modernImpact: "Маяк значительно улучшил безопасность морской навигации и способствовал развитию морской торговли в регионе.",
    },
];

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        accordion.classList.toggle('active');

        if (accordion.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});

function loadInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const wonderId = urlParams.get('wonder');
    const selectedWonder = wondersData.find((wonder) => wonder.id === parseInt(wonderId));

    const headerImage = document.querySelector('.wonder-header img');
    const headerTitle = document.querySelector('.wonder-header h2');
    const headerDescription = document.querySelector('.wonder-header p');

    headerImage.src = selectedWonder.imageUrl;
    headerTitle.textContent = selectedWonder.name;
    headerDescription.textContent = selectedWonder.description;

    const accordionContainers = document.querySelectorAll('.accordion');

    accordionContainers[0].querySelector('.accordion-content').textContent = selectedWonder.historicalValue;
    accordionContainers[1].querySelector('.accordion-content').textContent = selectedWonder.architecturalFeatures;
    accordionContainers[2].querySelector('.accordion-content').textContent = selectedWonder.culturalSignificance;
    accordionContainers[3].querySelector('.accordion-content').textContent = selectedWonder.technicalInnovations;
    accordionContainers[4].querySelector('.accordion-content').textContent = selectedWonder.modernImpact;
}
