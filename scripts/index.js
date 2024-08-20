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

console.log(initialCards);

/* -------------------------------------------------------------------------- */
/*                                Elements DOM                                */
/* -------------------------------------------------------------------------- */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
// const profileCloseModal = document.querySelector("#profile-close-modal");

const editModal = document.querySelector("#profile-edit-modal");
const editModalClose = editModal.querySelector(".modal__close");
/* -------------------------------------------------------------------------- */
/*                               EventListeners                               */
/* -------------------------------------------------------------------------- */

editModalClose.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
});

// profileEditCloseButton.addEventListener("click", () => {
//   profileCloseModal.classList.remove("modal_opened");
// });
