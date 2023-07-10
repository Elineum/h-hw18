const commonImageUrl =
  "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg";
const categoriesMockAPI = [
  {
    categoryType: "electronics",
    categoryName: "Electronics",
    products: [
      {
        productName: "telephone",
        productDisc: "best nokia 5130 ever",
        productId: "telephone",
        imgUrl: commonImageUrl,
        price: 130000,
      },
      {
        productName: "computer",
        productDisc: "Fastest PC on windows 95",
        productId: "computer",
        imgUrl: commonImageUrl,
        price: 6500,
      },
      {
        productName: "notebook",
        productDisc: "Good and flat wooden notebook",
        productId: "notebook",
        imgUrl: commonImageUrl,
        price: 6000,
      },
      {
        productName: "charge device",
        productDisc: "Just charge device",
        productId: "charge",
        imgUrl: commonImageUrl,
        price: 40,
      },
    ],
  },
  {
    categoryType: "food",
    categoryName: "Food",
    products: [
      {
        productName: "fried nails",
        productDisc: "Delicious French fried nails with teriyaki sauce",
        productId: "friedNails",
        imgUrl: commonImageUrl,
        price: 335,
      },
      {
        productName: "fresh nails",
        productDisc: "Fresh unfried nails with salt",
        productId: "freshNails",
        imgUrl: commonImageUrl,
        price: 125,
      },
      {
        productName: "salmon",
        productDisc: "Still live fish without caviar",
        productId: "salmon",
        imgUrl: commonImageUrl,
        price: 170,
      },
      {
        productName: "eggs",
        productDisc: "Ostrich eggs mixed with quail eggs. Guess where what!",
        productId: "eggs",
        imgUrl: commonImageUrl,
        price: 6,
      },
    ],
  },
  {
    categoryType: "medicine",
    categoryName: "Medicine",
    products: [
      {
        productName: "Drugs",
        productDisc: "Drugs is bad!",
        productId: "drugs",
        imgUrl: commonImageUrl,
        price: 99,
      },
      {
        productName: "syrup",
        productDisc: "Syrop is good!",
        productId: "syrup",
        imgUrl: commonImageUrl,
        price: 5,
      },
      {
        productName: "ascorbic",
        productDisc: "Ascorbic for 9999 dollars, pure platinum ascorbic",
        productId: "ascorbic",
        imgUrl: commonImageUrl,
        price: 9999,
      },
      {
        productName: "med. patch",
        productDisc: "Med patch if u been injured ",
        productId: "patch",
        imgUrl: commonImageUrl,
        price: 1,
      },
    ],
  },
  {
    categoryType: "tools",
    categoryName: "Building Tools",
    products: [
      {
        productName: "common nails",
        productDisc: "Nails. Ok? Just nails!",
        productId: "nails",
        imgUrl: commonImageUrl,
        price: 2,
      },
      {
        productName: "roulette",
        productDisc: "Krutilka.",
        productId: "roulette",
        imgUrl: commonImageUrl,
        price: 15,
      },
      {
        productName: "hammer",
        productDisc: "The best gift for your neighbors",
        productId: "hammer",
        imgUrl: commonImageUrl,
        price: 25,
      },
      {
        productName: "drill",
        productDisc: "The best gift for your neighbors, same as hammer",
        productId: "drill",
        imgUrl: commonImageUrl,
        price: 5432,
      },
    ],
  },
  {
    categoryType: "sports",
    categoryName: "Sports",
    products: [
      {
        name: "tennis ball",
        productName: "tennis ball",
        productDisc: "Square tennis ball",
        productId: "ball",
        imgUrl: commonImageUrl,
        price: 3,
      },
      {
        productName: "racket",
        productDisc: "Jelly racket",
        productId: "racket",
        imgUrl: commonImageUrl,
        price: 670,
      },
      {
        productName: "punching bag",
        productDisc: "Висит груша нельзя скушать.",
        productId: "bag",
        imgUrl: commonImageUrl,
        price: 3999,
      },
      {
        productName: "sport boots",
        productDisc: "So soft boots",
        productId: "boots",
        imgUrl: commonImageUrl,
        price: 1500,
      },
    ],
  },
  {
    categoryType: "pets",
    categoryName: "Goods for animals",
    products: [
      {
        productName: "Food for cat",
        productDisc: "Best cat food for your best pet (recommend)",
        productId: "catFood",
        imgUrl: commonImageUrl,
        price: 10,
      },
      {
        productName: "sport boots",
        productDisc: "Best dog food for your best pet",
        productId: "dogFoot",
        imgUrl: commonImageUrl,
        price: 15,
      },
      {
        productName: "food for some people",
        productDisc: "You know who to give it to!",
        productId: "humFood",
        imgUrl: commonImageUrl,
        price: 5,
      },
      {
        productName: "leash",
        productDisc: "For animals, but for people possible too",
        productId: "leash",
        imgUrl: commonImageUrl,
        price: 10,
      },
    ],
  },
];
const cityListAPI = [
  {
    cityName: " ",
    cityId: "null",
    cityPostOffices: [{ officeName: "Choose city first!", officeId: "null" }],
  },
  {
    cityName: "Kyiv",
    cityId: "kyiv",
    cityPostOffices: [
      { officeName: "1-st Kyiv office", officeId: "kyi1" },
      { officeName: "2-nd Kyiv office", officeId: "kyi2" },
      { officeName: "3-rd Kyiv office", officeId: "kyi3" },
      { officeName: "4-th Kyiv office", officeId: "kyi4" },
      { officeName: "5-th Kyiv office", officeId: "kyi5" },
      { officeName: "6-th Kyiv office", officeId: "kyi6" },
    ],
  },
  {
    cityName: "Kharkiv",
    cityId: "kharkiv",
    cityPostOffices: [
      { officeName: "1-st Kharkiv office", officeId: "kha1" },
      { officeName: "2-nd Kharkiv office", officeId: "kha2" },
      { officeName: "3-rd Kharkiv office", officeId: "kha3" },
      { officeName: "4-th Kharkiv office", officeId: "kha4" },
      { officeName: "5-th Kharkiv office", officeId: "kha5" },
    ],
  },
  {
    cityName: "Odesa",
    cityId: "odesa",
    cityPostOffices: [
      { officeName: "1-st Odesa office", officeId: "ode1" },
      { officeName: "2-nd Odesa office", officeId: "ode2" },
      { officeName: "3-rd Odesa office", officeId: "ode3" },
    ],
  },
  {
    cityName: "Dnipro",
    cityId: "dnipro",
    cityPostOffices: [
      { officeName: "1-st Dnipro office", officeId: "dni1" },
      { officeName: "2-nd Dnipro office", officeId: "dni2" },
      { officeName: "3-rd Dnipro office", officeId: "dni3" },
    ],
  },
  {
    cityName: "Donetsk",
    cityId: "donetsk",
    cityPostOffices: [
      { officeName: "1-st Donetsk office", officeId: "don1" },
      { officeName: "2-nd Donetsk office", officeId: "don2" },
    ],
  },
  {
    cityName: "Zaporizhzhia",
    cityId: "zaporizhzhia",
    cityPostOffices: [
      { officeName: "1-st Zaporizhzhia office", officeId: "zap1" },
      { officeName: "2-nd Zaporizhzhia office", officeId: "zap2" },
      { officeName: "3-rd Zaporizhzhia office", officeId: "zap3" },
    ],
  },
  {
    cityName: "Lviv",
    cityId: "lviv",
    cityPostOffices: [
      { officeName: "1-st Lviv office", officeId: "lvi1" },
      { officeName: "2-nd Lviv office", officeId: "lvi2" },
      { officeName: "3-rd Lviv office", officeId: "lvi3" },
    ],
  },
  {
    cityName: "Kryvyi Rih",
    cityId: "kryvyiRih",
    cityPostOffices: [
      { officeName: "1-st Kryvyi Rih office", officeId: "kry1" },
      { officeName: "2-nd Kryvyi Rih office", officeId: "kry2" },
      { officeName: "3-rd Kryvyi Rih office", officeId: "kry3" },
    ],
  },
  {
    cityName: "Mykolaiv",
    cityId: "mykolaiv",
    cityPostOffices: [
      { officeName: "1-st Mykolaiv office", officeId: "myk1" },
      { officeName: "2-nd Mykolaiv office", officeId: "myk2" },
      { officeName: "3-rd Mykolaiv office", officeId: "myk3" },
    ],
  },
  {
    cityName: "Sevastopol",
    cityId: "sevastopol",
    cityPostOffices: [
      { officeName: "1-st Sevastopol office", officeId: "sev1" },
      { officeName: "2-nd Sevastopol office", officeId: "sev2" },
      { officeName: "3-rd Sevastopol office", officeId: "sev3" },
    ],
  },
];

const categoriesElement = document.querySelector(".categories");
const productsElement = document.querySelector(".products");
const productInfoElement = document.querySelector(".product-info");
const purchaseForm = document.querySelector(".purchase-form");
const modalWindow = document.querySelector(".modal");

const renderModalWindow = (purchaseData) => {
  const {
    fullName,
    cityId,
    postOfficeId,
    paymentType,
    productQuantity,
    purchaseComment,
  } = purchaseData;
  const modalInnerElement = modalWindow.querySelector(".modal-info");
  const productName =
    productInfoElement.querySelector(".card-title").textContent;
  const productPrice = productInfoElement
    .querySelector(".card-price")
    .textContent.toLowerCase();

  const cityObj = cityListAPI.find((c) => c.cityId === cityId);
  const { officeName } = cityObj.cityPostOffices.find(
    (o) => o.officeId === postOfficeId
  );

  modalInnerElement.innerHTML = `
  <h2>Purchase info</h2>
  <div>
    <p>You purchased x${productQuantity} ${productName} for ${productPrice}.</p>
    <p>Delivery city: ${cityObj.cityName}, ${officeName}</p>
    <p>Payment type: ${
      paymentType === "credit-card" ? "credit card now" : "after receiving"
    }</p>
    <p>Receiver: ${fullName}</p>
    <p>Your comment: ${purchaseComment}</p>
  </div>
  `;

  showModal();
};

const formSubmitHandler = (e) => {
  e.preventDefault();

  const formElements = e.target.elements;
  const formData = {
    fullName: formElements["full-name"].value.trim(),
    cityId: formElements["city-select"].value,
    postOfficeId: formElements["post-office-select"].value,
    paymentType: formElements["payment-type"].value,
    productQuantity: formElements["product-quantity"].value,
    purchaseComment: formElements["purchase-comment"].value.trim(),
  };
  const regex = /^[a-zA-Z\s]+$/;

  if (formData.cityId === "null") {
    alert("You need select your city for delivery!");
    return;
  }

  if (!regex.test(formData.fullName)) {
    alert("Uncorrect full name! You can't enter number or symbols");
    return;
  }

  renderModalWindow(formData);
};

const showModal = () => {
  modalWindow.classList.remove("hide");
};

const hideModal = (e) => {
  if (e.target === modalWindow) {
    modalWindow.classList.add("hide");
  }
};

const fillPostOffices = ({ target: { value } }) => {
  const postOfficeElement = document.getElementById("post-office-select");
  postOfficeElement.textContent = "";

  const cityInfo = cityListAPI.find((c) => c.cityId === value);
  if (cityInfo) {
    cityInfo.cityPostOffices.forEach(({ officeId, officeName }) => {
      const postOfficeOption = document.createElement("option");

      postOfficeOption.value = officeId;
      postOfficeOption.textContent = officeName;
      postOfficeElement.appendChild(postOfficeOption);
    });
  }
};

const createFormCity = () => {
  const citySelectElement = document.getElementById("city-select");

  cityListAPI.forEach((item) => {
    const citySelectOption = document.createElement("option");

    citySelectOption.value = item.cityId;
    citySelectOption.textContent = item.cityName;
    citySelectElement.appendChild(citySelectOption);
  });

  citySelectElement.addEventListener("change", fillPostOffices);
};

const createCategoriesList = (categories) => {
  const categoryListElement = document.createElement("ul");
  categoryListElement.className = "categories-list";
  categoriesElement.appendChild(categoryListElement);
  categoriesElement.addEventListener("click", generateProductList);

  categories.forEach((element) => {
    const createdItemEl = document.createElement("li");
    createdItemEl.className = "categories-item";
    createdItemEl.textContent = element.categoryName;
    createdItemEl.dataset.type = element.categoryType;
    categoryListElement.appendChild(createdItemEl);
  });
};

const generateProductList = ({ target: { dataset } }) => {
  const currentCategoryType = dataset.type;
  if (!currentCategoryType) {
    return;
  }

  productsElement.textContent = "";
  productsElement.dataset.categoryIndex = categoriesMockAPI.findIndex(
    (c) => c.categoryType === currentCategoryType
  );

  const { categoryIndex } = productsElement.dataset;
  const { products } = categoriesMockAPI[categoryIndex];
  products.forEach((item) => {
    const productItemEl = document.createElement("article");
    productItemEl.className = "card card-shop";
    productItemEl.dataset.id = item.productId;
    productItemEl.innerHTML = `
      <div class="card-img-wrap">
        <img src="${item.imgUrl}" alt="${item.productName}"/>
      </div>
      <h3 class="card-title">${item.productName}</h3>`;

    productsElement.appendChild(productItemEl);
  });
};

const createPurchaseWindow = (e) => {
  const currentProductItemEl = e.target.closest(".card");
  if (!currentProductItemEl) {
    return;
  }

  const { categoryIndex } = productsElement.dataset;
  const { products } = categoriesMockAPI[categoryIndex];
  const { imgUrl, productName, price, productDisc } = products.find(
    (p) => p.productId === currentProductItemEl.dataset.id
  );

  const cardElement = productInfoElement.querySelector(".card-info");

  cardElement.innerHTML = `
    <article>
      ${getArticleMarkup({ imgUrl, productName })}
      <span class="card-price">Price: ${price}$</span>
      <p class="card-description">${productDisc}</p>
    </article>
    <button class="buy-button active">I want it!</button>`;

  const buyButton = cardElement.querySelector("button");
  buyButton.addEventListener("click", () => {
    purchaseForm.classList.toggle("hide");
  });
};

const getArticleMarkup = ({ imgUrl, productName }) => {
  return `<div class='card-img-wrap'>
    <img src="${imgUrl}" alt="${productName}"/>
  </div>
  <h3 class="card-title">${productName}</h3>`;
};

createCategoriesList(categoriesMockAPI);
createFormCity();
productsElement.onclick = createPurchaseWindow;
purchaseForm.addEventListener("submit", formSubmitHandler);
modalWindow.addEventListener("click", hideModal);
