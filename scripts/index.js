/* -------------------------------------------------------------------------- */
/*                                    Cards                                   */
/* -------------------------------------------------------------------------- */

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                Elements DOM                                */
/* -------------------------------------------------------------------------- */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

/* -------------------------------------------------------------------------- */
/*                                  Buttons                                 */
/* -------------------------------------------------------------------------- */

const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
const profileEditForm = profileEditModal.querySelector(".modal__form");
// const profileSaveButton = profileEditForm.querySelector("#save-button");
const addCardModal = document.querySelector("#add-card-modal");
const cardTitleInput = addCardModal.querySelector(".modal__input_title");
const cardUrlInput = addCardModal.querySelector(".modal__input_url");
// const modalInputTitle = addCardModal.querySelector("modal__input_title");
// const modalInputUrl = addCardModal.querySelector("modal__input_url");
const cardsListELement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardCloseButton = addCardModal.querySelector(".modal__close");
const previewImageModal = document.querySelector("#preview-image-modal");
const previewCardImageModal = previewImageModal.querySelector(
  ".modal__image_preview"
);
const previewCardCaptionModal = previewImageModal.querySelector(
  ".modal__text_caption"
);

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  console.log("close");
}

function getCardElement(cardData) {
  //{name: Yosemite valley, link: http:sfskdlf}
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    // "delete" the card. ie: remove it from the dom
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    openPopup(previewImageModal);
    previewImageModal.classList.add("modal_opened");
    previewCardImageModal.src = cardData.link;
    previewCardImageModal.alt = cardData.name;
    previewCardCaptionModal.textContent = cardData.name;
  });

  cardImageElement.addEventListener("click", (e) => {
    closePopup(previewImageModal);
  });

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;
  return cardElement;
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function renderCard(cardData, cardsListELement) {
  const cardElement = getCardElement(cardData);
  cardsListELement.prepend(cardElement);
}
/* -------------------------------------------------------------------------- */
/*                                Event Handler                               */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = (cardTitleInput.textContent = cardTitleInput.value);
  const link = (cardUrlInput.textContent = cardUrlInput.value);
  const cardData = { name, link };
  renderCard(cardData, cardsListELement);
  closePopup(addCardModal);
}

/* -------------------------------------------------------------------------- */
/*                               EventListeners                               */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", (e) => {
  closePopup(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardModal.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardsListELement));

addNewCardButton.addEventListener("click", (e) => {
  openPopup(addCardModal);
});

addCardCloseButton.addEventListener("click", () => {
  closePopup(addCardModal);
});
