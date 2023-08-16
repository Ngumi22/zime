const categories = [
  {
    title: 'all',
    items: [
      {
        id: 4,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'First Cmp',
        price: 100,
        color: 'red',
        description: 'description A',
        size: '12',
        os: 'windows',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 1002,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
        title: 'LENOVO',
        price: 500000,
        color: 'blue',
        touchscreen: 'no',
        description: 'two',
        size: '15',
        storage: "HDD",
        os: 'windows',
        generation: '12thgen',
        processor: 'core17',
        theme: 'business',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 1003,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'APPLE',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'three',
        size: '20',
        storage: "HDD",
        os: 'windows',
        generation: '11thgen',
        processor: 'core15',
        theme: 'programming',
        userRatings: 4.3,
        promotion: 'Discounted'
      },
      {
        id: 1004,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        title: 'DELL',
        price: 100,
        color: 'red',
        touchscreen: 'yes',
        description: 'four',
        size: '22',
        storage: "HDD",
        os: 'windows',
        generation: '10thgen',
        processor: 'core13',
        theme: 'gaming',
        userRatings: 4.4,
        promotion: 'Discounted'
      },
      {
        id: 1005,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'ASUS',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'five',
        size: '24',
        storage: "HDD",
        os: 'windows',
        generation: '13thgen',
        processor: 'ryzen3',
        theme: 'gaming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 1006,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'ACER',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'six',
        size: '13',
        storage: "eMMC",
        os: 'windows',
        generation: '13thgen',
        processor: 'm1',
        theme: 'business',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 1007,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        title: 'APPLE',
        price: 113300,
        color: 'blue',
        touchscreen: 'yes',
        description: 'sixty',
        size: '24',
        storage: "SSD",
        os: 'mac',
        generation: '5thgen',
        processor: 'ryzen1',
        theme: 'gaming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 1008,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'APPLE',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'seven',
        size: '13',
        storage: "SSD",
        os: 'ios',
        generation: '13thgen',
        processor: 'ryzen2',
        theme: 'gaming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },

      {
        id: 1009,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        title: 'MICROSOFT',
        price: 133300,
        color: 'green',
        touchscreen: 'no',
        description: 'seventy',
        size: '32',
        storage: "HDD + SSD",
        os: 'linux',
        generation: '13thgen',
        processor: 'core19',
        theme: 'programming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the 'laptops' category
    ]
  },
  {
    title: 'laptops',
    items: [
      {
        id: 0,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'HP',
        price: 1000,
        color: 'red',
        touchscreen: 'yes',
        description: 'one',
        size: '17',
        storage: "HDD",
        os: 'windows',
        generation: '13thgen',
        processor: 'core19',
        theme: 'gaming',
        userRatings: 4.1,
        promotion: 'Discounted'

      },
      {
        id: 1,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'LENOVO',
        price: 500000,
        color: 'blue',
        touchscreen: 'no',
        description: 'two',
        size: '15',
        storage: "HDD",
        os: 'windows',
        generation: '12thgen',
        processor: 'core17',
        theme: 'business',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 2,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'APPLE',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'three',
        size: '20',
        storage: "HDD",
        os: 'windows',
        generation: '11thgen',
        processor: 'core15',
        theme: 'programming',
        userRatings: 4.3,
        promotion: 'Discounted'
      },
      {
        id: 3,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'DELL',
        price: 100,
        color: 'red',
        touchscreen: 'yes',
        description: 'four',
        size: '22',
        storage: "HDD",
        os: 'windows',
        generation: '10thgen',
        processor: 'core13',
        theme: 'gaming',
        userRatings: 4.4,
        promotion: 'Discounted'
      },
      {
        id: 4,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'ASUS',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'five',
        size: '24',
        storage: "HDD",
        os: 'windows',
        generation: '13thgen',
        processor: 'ryzen3',
        theme: 'gaming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 5,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'ACER',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'six',
        size: '13',
        storage: "eMMC",
        os: 'windows',
        generation: '13thgen',
        processor: 'm1',
        theme: 'business',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 512,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        title: 'APPLE',
        price: 113300,
        color: 'blue',
        touchscreen: 'yes',
        description: 'sixty',
        size: '24',
        storage: "SSD",
        os: 'mac',
        generation: '5thgen',
        processor: 'ryzen1',
        theme: 'gaming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 6,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'APPLE',
        price: 100,
        color: 'red',
        touchscreen: 'no',
        description: 'seven',
        size: '13',
        storage: "SSD",
        os: 'ios',
        generation: '13thgen',
        processor: 'ryzen2',
        theme: 'gaming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },

      {
        id: 612,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        title: 'MICROSOFT',
        price: 133300,
        color: 'green',
        touchscreen: 'no',
        description: 'seventy',
        size: '32',
        storage: "HDD + SSD",
        os: 'linux',
        generation: '13thgen',
        processor: 'core19',
        theme: 'programming',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the 'laptops' category
    ]
  },
  {
    title: 'computers',
    items: [
      {
        id: 4,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        title: 'First Cmp',
        price: 100,
        color: 'red',
        description: 'description A',
        size: '12',
        os: 'windows',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 5,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        title: 'Second Comp',
        price: 1000,
        color: 'red',
        description: 'description B',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 6,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        title: 'Third Comp',
        price: 2000,
        color: 'red',
        description: 'description C',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 7,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Fourth Comp',
        price: 200,
        color: 'red',
        description: 'description D',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the Computers category
    ]
  },
  {
    title: 'phones',
    items: [
      {
        id: 30,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        title: 'First Phone',
        price: 300,
        color: 'red',
        description: 'description A',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 31,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Phone',
        price: 4000,
        color: 'yellow',
        description: 'description B',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 32,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Phone',
        price: 1400,
        color: 'yellow',
        description: 'description C',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 33,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Phone',
        price: 400,
        color: 'yellow',
        description: 'description E',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 34,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Phone',
        price: 400,
        color: 'yellow',
        description: 'description F',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the Phones & Tablets category
    ]
  },
  {
    title: 'accessories',
    items: [
      {
        id: 10,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        title: 'First Accessories',
        price: 300,
        color: 'blue',
        description: 'description B',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 11,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Accessories',
        price: 400,
        color: 'yellow',
        description: 'description B',
        size: '12',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 12,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Accessories',
        price: 400,
        color: 'yellow',
        description: 'description B',
        size: '14',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 13,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Accessories',
        price: 400,
        color: 'yellow',
        description: 'description B',
        size: '14',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the Phones & Tablets category
    ]
  },
  {
    title: 'printers',
    items: [
      {
        id: 20,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        title: 'First Printer',
        price: 300,
        color: 'blue',
        description: 'description B',
        size: '14',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 21,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Printers',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 22,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Printers',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 23,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Printers',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the Phones & Tablets category
    ]
  },
  {
    title: 'monitors',
    items: [
      {
        id: 90,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        title: 'First Monitors',
        price: 300,
        color: 'blue',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 91,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Monitors',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 92,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Monitors',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 93,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second Monitors',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the Phones & Tablets category
    ]
  },

  {
    title: 'networking',
    items: [
      {
        id: 50,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        title: 'First network',
        price: 300,
        color: 'blue',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 51,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second network',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 52,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Third network',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 53,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Fourth network',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 54,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Fifth network',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 55,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Sixth network',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 56,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Seventh network',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      // Add more items for the Phones & Tablets category
    ]
  },

  {
    title: 'deals',
    items: [
      {
        id: 70,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        title: 'First deal',
        price: 300,
        color: 'blue',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 71,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second deal',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.7,
        promotion: 'Discounted'
      },
      {
        id: 72,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second deal',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 73,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second deal',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 74,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second deal',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.2,
        promotion: 'Discounted'
      },
      {
        id: 75,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second deal',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.8,
        promotion: 'Discounted'
      },
      {
        id: 76,
        image: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        title: 'Second deal',
        price: 400,
        color: 'yellow',
        description: 'description B',
        userRatings: 4.9,
        promotion: 'Discounted'
      },
      // Add more items
    ]
  },
  // Add more categories
];


const itemsPerPage = 8;
let currentPage = 1;

function renderCards(category = null, page = 1) {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.textContent = '';
  cardsContainer.classList.add('d-grid', 'mx-2', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'gap-2', 'filterDiv');

  const activeCategory = category || categories[0];
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cards = activeCategory.items.slice(startIndex, endIndex).map((item, index) => {
    const { image, title, price, color, size, touchscreen, storage, os, generation, processor, theme } = item;
    const card = document.createElement('div');
    card.classList.add('product-card');

    const cardLink = document.createElement('a');
    cardLink.href = `#${activeCategory.title}`;
    cardLink.classList.add('group', 'justify-items-center', 'relative');
    card.appendChild(cardLink);

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('flex-shrink-0', 'overflow-hidden', 'rounded-md', 'border', 'border-gray-200');
    const img = document.createElement('img');
    img.src = image;
    img.alt = 'Product';
    img.className = 'aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7';
    imageDiv.appendChild(img);
    cardLink.appendChild(imageDiv);

    const titleH3 = document.createElement('h3');
    titleH3.textContent = title;
    titleH3.classList.add('mt-1', 'text-sm', 'text-gray-700', 'name');
    cardLink.appendChild(titleH3);

    const colorH3 = document.createElement('h3');
    colorH3.textContent = color;
    colorH3.classList.add('mt-1', 'text-sm', 'text-gray-700', 'color');
    cardLink.appendChild(colorH3);


    const sizeH4 = document.createElement('h6');
    sizeH4.textContent = size;
    sizeH4.classList.add('size', 'd-none');
    cardLink.appendChild(sizeH4);


    const touchH4 = document.createElement('h6');
    touchH4.textContent = touchscreen;
    touchH4.classList.add('touch', 'd-none');
    cardLink.appendChild(touchH4);

    const osH4 = document.createElement('h6');
    osH4.textContent = os;
    osH4.classList.add('os', 'd-none');
    cardLink.appendChild(osH4);


    const storageH4 = document.createElement('h6');
    storageH4.textContent = storage;
    storageH4.classList.add('diskstorage', 'd-none');
    cardLink.appendChild(storageH4);


    const generationH4 = document.createElement('h6');
    generationH4.textContent = generation;
    generationH4.classList.add('generation', 'd-none');
    cardLink.appendChild(generationH4);

    const processorH4 = document.createElement('h6');
    processorH4.textContent = processor;
    processorH4.classList.add('processor', 'd-none');
    cardLink.appendChild(processorH4);


    const themeH4 = document.createElement('h6');
    themeH4.textContent = theme;
    themeH4.classList.add('theme', 'd-none');
    cardLink.appendChild(themeH4);



    const priceDiv = document.createElement('div');
    priceDiv.textContent = `Ksh ${price}.00`;
    priceDiv.classList.add('mt-1', 'font-medium', 'text-gray-900', 'price');
    cardLink.appendChild(priceDiv);

    const cartButton = document.createElement('button');
    cartButton.classList.add('btn', 'position-absolute', 'bottom-0', 'end-0', 'mt-1');
    cartButton.innerHTML = '<i class="bi bi-cart"></i>';
    cartButton.onclick = function () {
      addToCart(index, activeCategory.title);
    };
    cardLink.appendChild(cartButton);

    const openModalButton = document.createElement('button');
    openModalButton.classList.add('btn', 'position-absolute', 'top-0', 'end-0', 'mt-1', 'mr-1');
    openModalButton.innerHTML = '<i class="bi bi-eye"></i>';
    openModalButton.onclick = function () {
      openModal(item);
    };
    cardLink.appendChild(openModalButton);




    // Append the card to the cardsContainer
    cardsContainer.appendChild(card);
    return card;
  });

  return cards;
}

function updatePagination() {
  const paginationNumbers = document.getElementById('pagination-numbers');
  paginationNumbers.innerHTML = '';

  const totalPages = Math.ceil(categories[0].items.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('span');
    pageNumber.textContent = i;
    pageNumber.classList.add('page-number', 'cursor-pointer', 'mx-2', 'p-2', 'border', 'border-black', 'rounded');
    if (i === currentPage) {
      pageNumber.classList.add('bg-red-200');
    }
    pageNumber.onclick = function () {
      currentPage = i;
      renderCards(null, currentPage);
      updatePagination();
    };
    paginationNumbers.appendChild(pageNumber);
  }

  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  if (currentPage === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentPage === totalPages) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}


document.getElementById('prev-button').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderCards(null, currentPage);
    updatePagination();
  }
});

document.getElementById('next-button').addEventListener('click', () => {
  const totalPages = Math.ceil(categories[0].items.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderCards(null, currentPage);
    updatePagination();
  }
});

// Initial rendering and pagination setup
renderCards(null, currentPage);
updatePagination();






















const priceRangeInput = document.getElementById('priceRange');
const priceOutputMin = document.getElementById('priceOutputMin');

priceRangeInput.addEventListener('input', updatePriceOutputMin);

function updatePriceOutputMin() {
  const selectedPrice = priceRangeInput.value;
  priceOutputMin.textContent = `Ksh${selectedPrice}`;
}

updatePriceOutputMin();

//filters
//color filter
function filterCardsByColor(color) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardColor = card.querySelector('.color').textContent.toLowerCase();
    if (cardColor === color.toLowerCase() || color === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}
const colorSelector = document.getElementById('color-selector'); // Replace 'color-selector' with the actual ID of your color dropdown

colorSelector.addEventListener('change', function () {
  const selectedColor = colorSelector.value;
  filterCardsByColor(selectedColor);
});

//brand filter

function filterCardsByBrand(brand) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.name').textContent.toLowerCase();
    if (cardTitle === brand.toLowerCase() || brand === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const brandCheckboxes = document.querySelectorAll('.brand-filter-checkbox');

brandCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedBrands = [];
    brandCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectedBrands.push(cb.value);
      }
    });

    // If no checkboxes are selected, show all cards (brand='all')
    const brandToFilter = selectedBrands.length === 0 ? 'all' : selectedBrands[0];
    filterCardsByBrand(brandToFilter);
  });
});
//brandToFilter end

//screen size filter start

function filterCardsBySize(size) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.size').textContent.toLowerCase();
    if (cardTitle === size.toLowerCase() || size === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const sizeCheckboxes = document.querySelectorAll('.size-filter-checkbox');

sizeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedSizes = [];
    sizeCheckboxes.forEach((sb) => {
      if (sb.checked) {
        selectedSizes.push(sb.value);
      }
    });

    // If no checkboxes are selected, show all cards (size='all')
    const sizeToFilter = selectedSizes.length === 0 ? 'all' : selectedSizes[0];
    filterCardsBySize(sizeToFilter);
  });
});
//screen size filter end

//screen touch filter start

function filterCardsByTouch(touchscreen) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.touch').textContent.toLowerCase();
    if (cardTitle === touchscreen.toLowerCase() || touchscreen === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const touchCheckboxes = document.querySelectorAll('.touch-filter-checkbox');

touchCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedTouch = [];
    touchCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectedTouch.push(cb.value);
      }
    });


    const touchToFilter = selectedTouch.length === 0 ? 'all' : selectedTouch[0];
    filterCardsByTouch(touchToFilter);
  });
});
//screen touch filter end

//storage filter start

function filterCardsBystorage(storage) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.diskstorage').textContent.toLowerCase();
    if (cardTitle === storage.toLowerCase() || storage === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const storageCheckboxes = document.querySelectorAll('.storage-filter-checkbox');

storageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedstorage = [];
    storageCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectedstorage.push(cb.value);
      }
    });


    const storageToFilter = selectedstorage.length === 0 ? 'all' : selectedstorage[0];
    filterCardsBystorage(storageToFilter);
  });
});
//storage filter end


//os filter start

function filterCardsByos(os) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.os').textContent.toLowerCase();
    if (cardTitle === os.toLowerCase() || os === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const osCheckboxes = document.querySelectorAll('.os-filter-checkbox');

osCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedos = [];
    osCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectedos.push(cb.value);
      }
    });


    const osToFilter = selectedos.length === 0 ? 'all' : selectedos[0];
    filterCardsByos(osToFilter);
  });
});
//os filter end

//generation filter start

function filterCardsBygeneration(generation) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.generation').textContent.toLowerCase();
    if (cardTitle === generation.toLowerCase() || generation === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const generationCheckboxes = document.querySelectorAll('.generation-filter-checkbox');

generationCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedgeneration = [];
    generationCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectedgeneration.push(cb.value);
      }
    });


    const generationToFilter = selectedgeneration.length === 0 ? 'all' : selectedgeneration[0];
    filterCardsBygeneration(generationToFilter);
  });
});
//generation filter end


//processor filter start

function filterCardsByprocessor(processor) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.processor').textContent.toLowerCase();
    if (cardTitle === processor.toLowerCase() || processor === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const processorCheckboxes = document.querySelectorAll('.processor-filter-checkbox');

processorCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedprocessor = [];
    processorCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectedprocessor.push(cb.value);
      }
    });


    const processorToFilter = selectedprocessor.length === 0 ? 'all' : selectedprocessor[0];
    filterCardsByprocessor(processorToFilter);
  });
});
//processor filter end



//theme filter start

function filterCardsBytheme(theme) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardTitle = card.querySelector('.theme').textContent.toLowerCase();
    if (cardTitle === theme.toLowerCase() || theme === 'all') {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

const themeCheckboxes = document.querySelectorAll('.theme-filter-checkbox');

themeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    const selectedtheme = [];
    themeCheckboxes.forEach((cb) => {
      if (cb.checked) {
        selectedtheme.push(cb.value);
      }
    });


    const themeToFilter = selectedtheme.length === 0 ? 'all' : selectedtheme[0];
    filterCardsBytheme(themeToFilter);
  });
});
//theme filter end

//filters end

let activeModal = null;

function openModal(item) {
  closeModal();
  const modal = document.createElement('div');
  modal.classList.add('modal', 'fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-opacity-50', 'bg-black', 'flex', 'justify-center', 'items-center');

  const modalContent = document.createElement('div');
  modalContent.classList.add('bg-white', 'p-4', 'rounded-md');
  modal.appendChild(modalContent);
  const { image, title, price, description, color, os, size, userRatings } = item;
  modalContent.innerHTML = `

  <div class='d-flex'>
    <div class='col-4'>
      <img src="${image}" alt="Product" class="max-h-96 object-contain m-1">
    </div>
   <div class='col-8 d-block justify-content-center text-center ml-4'>
      <h3 class="text-lg font-bold">${title}</h3>
      <p class="text-sm text-gray-700 mb-2">${description}</p>
      <p class="text-lg font-medium">Price <br> Ksh ${price}.00</p>
      <p class="text-lg font-medium">${os}</p>
      <p class="text-lg font-medium">${color}</p>
      <p class="text-lg font-medium">${size}</p>
      <p class="text-lg font-medium">${userRatings}</p></div>
  <div>
  `;
  document.body.appendChild(modal);
  activeModal = modal;
  modal.addEventListener('click', closeModal);
}
function closeModal() {
  if (activeModal) {
    activeModal.remove();
    activeModal = null;
  }
}
const categoryLinks = document.querySelectorAll('a[href^="#"]');
categoryLinks.forEach(link => {
  link.addEventListener('click', () => {
    const categoryTitle = link.getAttribute('href').slice(1);
    const category = categories.find(cat => cat.title === categoryTitle);
    if (category) {
      renderCards(category);
    }
  });
});

// Get the category navigation links
const categoryLink = document.querySelectorAll('#category-nav a');

// Set the first category link as active by default
categoryLink[0].classList.add('activ');

// Add a click event listener to each category link
categoryLink.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Remove the "active" class from all links
    categoryLink.forEach(link => {
      link.classList.remove('activ');
    });

    // Add the "active" class to the clicked link
    link.classList.add('activ');

    // Get the category title from the link's href
    const categoryTitle = link.getAttribute('href').slice(1);

    // Find the category object based on the selected title
    const selectedCategory = categories.find(category => category.title === categoryTitle);

    // Render cards for the selected category
    renderCards(selectedCategory);
  });
});


function createCardElement(image, title, price, color, index, categoryTitle) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  card.innerHTML = `
 <a href="#" class="group justify-items-center relative">
  <div class="flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
    <img src="${image}" alt="Product" class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
  </div>
  <h3 class="mt-1 text-sm text-gray-700 name">${title}</h3>
  <h3 class="mt-1 text-sm text-gray-700 color">${color}</h3>
  <div class="d-flex justify-content-between">
    <p class="mt-1 font-medium text-gray-900 price">Ksh ${price}.00</p>
    <button class="mt-1 font-medium text-gray-900" onclick="addToCart(${index}, '${categoryTitle}')">
      <i class="bi bi-cart"></i>
    </button>
  </div>
</a>
  `;

  return card;
}

function addToCart(index, categoryTitle) {
  const selectedCategory = categories.find(category => category.title === categoryTitle);
  const selectedItem = selectedCategory.items[index];
  const existingCartItem = cart.find(item => item.id === selectedItem.id);

  if (existingCartItem) {
    existingCartItem.quantity++;
    existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
  } else {
    const newCartItem = {
      ...selectedItem,
      quantity: 1,
      totalPrice: selectedItem.price
    };
    cart.push(newCartItem);
  }

  displayCart();
  updateCartStorage();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
  updateCartStorage();
}

let cart = []

function displayCart() {
  const cartItemContainer = document.getElementById('cart-item');
  const countElement = document.getElementById('count');
  const totalElement = document.getElementById('total');
  let total = 0;
  let count = 0;

  cartItemContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemContainer.textContent = 'Your cart is empty';
    countElement.textContent = '0';
    totalElement.textContent = 'Ksh 0.00';
  } else {
    cart.forEach((item, index) => {
      const { image, title, price, color, quantity, totalPrice } = item;
      total += totalPrice;
      count += quantity;

      const cartItem = document.createElement('li');
      cartItem.classList.add('flex', 'py-6');

      cartItem.innerHTML = `
        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src="${image}" alt="Product">
        </div>

        <div class="ml-4 flex flex-1 flex-col">
          <div>
            <div class="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a>${title}</a>
              </h3>
              <p class="ml-4 unit-price">Ksh ${price}.00</p>
            </div>
            <p class="mt-1 text-sm text-dark">${color}</p>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm">
            <p class="text-dark">Quantity <input id="quantity-${index}" min="1" name="quantity" value="${quantity}" type="number" class="form-control form-control-sm" onchange="updateQuantity(${index}, this.value)"></p>
            <div class="flex">
              <button type="button" onclick="removeFromCart(${index})" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
          </div>
        </div>
      `;

      cartItemContainer.appendChild(cartItem);
    });

    countElement.textContent = count.toString();
    totalElement.textContent = `Ksh ${total.toFixed(2)}`;

    const unitPriceElements = document.querySelectorAll('.unit-price');
    unitPriceElements.forEach((element, index) => {
      const cartItem = cart[index];
      element.textContent = `Ksh ${cartItem.price * cartItem.quantity}.00`;
    });
  }
}

function updateQuantity(index, newQuantity) {
  const cartItem = cart[index];
  cartItem.quantity = parseInt(newQuantity);
  cartItem.totalPrice = cartItem.quantity * cartItem.price;
  displayCart();
  updateCartStorage();
}

function updateCartStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('cartCount', cart.length);
}

function loadCartFromStorage() {
  const savedCart = localStorage.getItem('cart');
  const savedCartCount = localStorage.getItem('cartCount');

  if (savedCart) {
    cart = JSON.parse(savedCart);
  }

  if (savedCartCount) {
    const countElement = document.getElementById('count');
    countElement.textContent = savedCartCount;
  }
}


loadCartFromStorage();
displayCart();

document.addEventListener("DOMContentLoaded", function () {
  const categoriesDiv = document.getElementById("categories");
  const filtersDiv = document.querySelector(".filters");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showMoreFiltersBtn = document.getElementById("showMoreFiltersBtn"); // Corrected ID

  // Initial setup to hide extra categories if there are more than 4
  const categoriesList = categoriesDiv.querySelectorAll(".nav-item");
  if (categoriesList.length > 4) {
    for (let i = 4; i < categoriesList.length; i++) {
      categoriesList[i].style.display = "none";
    }
    showMoreBtn.style.display = "block";
  }

  showMoreBtn.addEventListener("click", function () {
    categoriesDiv.classList.toggle("expanded"); // Toggle the expanded class for categories

    // Update the button text based on the state
    const areCategoriesExpanded = categoriesDiv.classList.contains("expanded");
    showMoreBtn.textContent = areCategoriesExpanded ? "Show Less" : "Show More";

    // Show/hide the hidden categories based on the state
    for (let i = 4; i < categoriesList.length; i++) {
      categoriesList[i].style.display = areCategoriesExpanded ? "block" : "none";
    }
  });

  // Initial setup to hide extra filters if there are more than 4
  const filtersList = filtersDiv.querySelectorAll(".border-1.my-2");
  if (filtersList.length > 4) {
    for (let i = 4; i < filtersList.length; i++) {
      filtersList[i].style.display = "none";
    }
    showMoreFiltersBtn.style.display = "block";
  }

  showMoreFiltersBtn.addEventListener("click", function () {
    filtersDiv.classList.toggle("expanded"); // Toggle the expanded class for filters

    // Update the button text based on the state
    const areFiltersExpanded = filtersDiv.classList.contains("expanded");
    showMoreFiltersBtn.textContent = areFiltersExpanded ? "Show Less" : "Show More";

    // Show/hide the hidden filters based on the state
    for (let i = 4; i < filtersList.length; i++) {
      filtersList[i].style.display = areFiltersExpanded ? "block" : "none";
    }
  });
});

$(document).ready(function () {
  $(".toggle-header").on("click", function () {
    $(this).next("div").toggleClass("hidden");
    $(this).find("i").toggleClass("bi-chevron-down bi-chevron-up");
  });
});




// JavaScript code for smooth drag-to-scroll functionality
const scrollerContainer = document.querySelector('.scroller-container');
const mediaScroller = document.getElementById('mediaScroller');
let isMouseDown = false;
let startX;
let scrollLeft;

scrollerContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - mediaScroller.offsetLeft;
  scrollLeft = mediaScroller.scrollLeft;
});

scrollerContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

scrollerContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
});

scrollerContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - mediaScroller.offsetLeft;
  const walk = (x - startX) * .1; // You can adjust the scroll speed here

  // Smoothly scroll to the new position
  mediaScroller.scrollBy({ left: -walk, behavior: 'smooth' });
});




function hasScrolled() {
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 1) {
    navbar.classList.add('with-shadow');
  } else {
    navbar.classList.remove('with-shadow');
  }
}

window.addEventListener('scroll', hasScrolled);




//pagination




//pagination end