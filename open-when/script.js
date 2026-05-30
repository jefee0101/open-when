// Edit these letter titles and messages to personalize the gift.
const letters = [
  {
    title: "Open When You're Sad",
    image: "images/open-when-sad.png",
    imageAlt: "Placeholder image for the sad letter",
    message:
      "My love, I wish I could sit beside you right now and hold your hand until the heaviness gets softer. Please remember that one hard day does not define your beautiful heart. Rest, breathe, drink some water, and let yourself be loved through this moment."
  },
  {
    title: "Open When I Caused You Pain",
    image: "images/open-when-pain.png",
    imageAlt: "Placeholder image for the pain letter",
    message:
      "Love, if I hurt you, I am truly sorry. Your feelings matter to me, and I never want my pride to be louder than my care for you. I hope this letter reminds you that I am willing to listen, learn, and choose gentleness with you again."
  },
  {
    title: "Open When You Need Motivation",
    image: "images/open-when-motivation.png",
    imageAlt: "Placeholder image for the motivation letter",
    message:
      "You are stronger than the doubt trying to sit beside you. Take one small step, then another. I believe in your mind, your courage, your patience, and the quiet way you keep going even when things are difficult."
  },
  {
    title: "Open When You're Happy and Sad",
    image: "images/open-when-happy-sad.png",
    imageAlt: "Placeholder image for the happy and sad letter",
    message:
      "It is okay to feel two things at once. Your heart is allowed to be complicated, tender, bright, and tired all in the same day. I am proud of every version of you, not only the easy-to-understand parts."
  },
  {
    title: "Open When You Want To Smile",
    image: "images/open-when-smile.png",
    imageAlt: "Placeholder image for the smile letter",
    message:
      "Think of the way I look at you when you are not paying attention. Think of the little jokes only we understand. Think of this: somewhere, somehow, I am loving you with a ridiculous amount of softness."
  },
  {
    title: "Open When You're Stressed",
    image: "images/open-when-stressed.png",
    imageAlt: "Placeholder image for the stressed letter",
    message:
      "Pause for a tiny minute, sweetheart. Unclench your shoulders. Let the next breath be slower than the last. You do not have to solve everything at once. I am here, and we can take life one gentle piece at a time."
  },
  {
    title: "Open When You're Angry",
    image: "images/open-when-angry.png",
    imageAlt: "Placeholder image for the angry letter",
    message:
      "Your anger is not too much for me. It is a signal that something matters. Take the space you need, and when you are ready, I will meet you with patience instead of pressure."
  },
  {
    title: "Open When You're Overthinking",
    image: "images/open-when-overthinking.png",
    imageAlt: "Placeholder image for the overthinking letter",
    message:
      "My love, your mind is trying to protect you, but you do not have to believe every scary thought it makes. Come back to what is true: you are loved, you are wanted, and you are not alone in this."
  },
  {
    title: "Open When You Feel Something Is Off",
    image: "images/open-when-off.png",
    imageAlt: "Placeholder image for the something is off letter",
    message:
      "If something feels strange, we can talk about it. No guessing games, no quiet distance, no pretending. I want us to be a place where honesty feels safe and love feels steady."
  },
  {
    title: "Open When You Miss Me",
    image: "images/open-when-miss-me.png",
    imageAlt: "Placeholder image for the miss me letter",
    message:
      "I miss you too, probably more than I will admit gracefully. Until I can be beside you again, keep this letter close and remember that my heart always knows the way back to you."
  }
];

const finalLetter = {
  title: "Open Last",
  image: "images/open-last.png",
  imageAlt: "Placeholder image for the final letter",
  message:
    "My dearest love, thank you for being the person who makes ordinary days feel softer and brighter. I made this little place so you could return to my love whenever you need it. I promise to keep choosing you with patience, laughter, honesty, and care. You are my favorite thought, my safest feeling, and the sweetest part of my days."
};

const secretMessages = [
  "Tiny secret: you are my favorite hello.",
  "Hidden note: your smile makes my whole day softer.",
  "Little truth: I am so lucky to love you."
];

const grid = document.querySelector("#letterGrid");
const modal = document.querySelector("#letterModal");
const modalTitle = document.querySelector("#modalTitle");
const modalMessage = document.querySelector("#modalMessage");
const modalImage = document.querySelector("#modalImage");
const modalImageCaption = document.querySelector("#modalImageCaption");
const toast = document.querySelector("#toast");
let toastTimer;

// Builds each clickable envelope card from the editable data above.
function createCard(letter, index) {
  const card = document.createElement("button");
  card.className = "letter-card";
  card.type = "button";
  card.style.animationDelay = `${index * 70}ms`;
  card.innerHTML = `
    <span class="card-number">Letter ${String(index + 1).padStart(2, "0")}</span>
    <h3>${letter.title}</h3>
    <span class="card-heart" aria-hidden="true"></span>
  `;
  card.addEventListener("click", () => openLetter(letter));
  return card;
}

function renderLetters() {
  letters.forEach((letter, index) => {
    grid.appendChild(createCard(letter, index));
  });
}

function openLetter(letter) {
  modalTitle.textContent = letter.title;
  modalMessage.textContent = letter.message;
  modalImage.src = letter.image;
  modalImage.alt = letter.imageAlt;
  modalImageCaption.textContent = "Replace this file in the images folder with your own photo.";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  createFallingHearts();
}

function closeLetter() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// Creates the soft floating heart background without image assets.
function createAmbientHearts() {
  const container = document.querySelector(".ambient-hearts");
  for (let index = 0; index < 24; index += 1) {
    const heart = document.createElement("span");
    const size = 10 + Math.random() * 28;
    heart.className = "floating-heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.width = `${size}px`;
    heart.style.animationDuration = `${12 + Math.random() * 15}s`;
    heart.style.animationDelay = `${Math.random() * -18}s`;
    container.appendChild(heart);
  }
}

function createSparkles() {
  const container = document.querySelector(".sparkle-field");
  for (let index = 0; index < 42; index += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 4}s`;
    container.appendChild(sparkle);
  }
}

// Plays whenever a letter opens for a little celebratory moment.
function createFallingHearts() {
  for (let index = 0; index < 26; index += 1) {
    const heart = document.createElement("span");
    heart.className = "falling-heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.width = `${12 + Math.random() * 18}px`;
    heart.style.animationDelay = `${Math.random() * 0.55}s`;
    heart.style.background = index % 3 === 0 ? "var(--gold)" : "var(--rose)";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2600);
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3000);
}

function bindSecretHearts() {
  document.querySelectorAll(".secret-heart").forEach((heart, index) => {
    heart.addEventListener("click", () => showToast(secretMessages[index]));
  });
}

document.querySelectorAll("[data-close-letter]").forEach((button) => {
  button.addEventListener("click", closeLetter);
});

document.querySelector("[data-open-last]").addEventListener("click", () => openLetter(finalLetter));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLetter();
  }
});

renderLetters();
createAmbientHearts();
createSparkles();
bindSecretHearts();
