// Edit these letter titles and messages to personalize the gift.
const letters = [
  {
    title: "Open When You're Sad",
    message:
      "I'm sorry you feel that way, love. I hope I can make you feel lighter when I'm trying to comfort you, to experience it like it's a breeze of beach air. When I have time, I'll try to visit you with love, hugs, and kisses, maybe food also hehe. If I cannot, view our moments where we are happy and having fun! Be Happy Always, Loveee"
  },
  {
    title: "Open When I Caused You Pain",
    message:
      "I'm sorry, darling, for the pain that I have caused you. I know deeply that what I did was wrong. I hope that you can forgive me for my actions. I know that you know that I'm always trying to do better for you, the relationship, and for me. I pray and hope that what I say can translate realistically."
  },
  {
    title: "Open When You Need Motivation",
    message:
      "You aree the strongesttt person I knowwwww. The independent girl I knowww. And I want you to know that you have to know what to know to take the action that you have to know is to never give up! Be as strong as Hulk, as energetic as a runner(like me), as devoted as your spirit you can dooooo thisssss my swettieeeee piee"
  },
  {
    title: "Open When You're Happy and Sad",
    message:
      "When you're happy and you're sad, clap your hands *clap *clap. Btaw darling, pag selfie ra katong signature pose nmo nga peace, one eye closed."
  },
  {
    title: "Open When You Want To Smile",
    message:
      "Unsay tawag sa bisaya nga lovebirds?LANGGGGGGGGGGGAAAAAAAmmmmm"
  },
  {
    title: "Open When You're Stressed",
    message:
      "You know when I am stressed about something, I just jog it sometimes, darling, or just rest for a couple of minutes. There are also other methods that you can use to relieve stress that you can find on the internet. Pero feel nko mo gana nmo kung mo drink ka ug something cold, maglihok sa lawas, or pa hug rka."
  },
  { 
    title: "Open When You're Overthinking",
    message:
      "Haloooo my loveee if magoverthink gani ka, d ra dapat ana raman jd na. Pero fr, if magoverthink ka about something, just look at the bright side always ha. I know unavoidable man jd na d magoverthink for any reasons, and imo na sya dawaton nga naa jd na nga perspective, but I know that your prayers are stronger and you're full of hope. Always be hopeful loveeeee"
  },
  {
    title: "Open When You Miss Me",
    message:
      "I miss you too and moreee sooo muchhh my babyy. There are times that I wish I just want to hug you when you're very far away from me. There are times that i just want to feel your presence. And lastly, there are times that I just simply want your love. I reminisce about the times that we are together. Look at our photos and vids together, and imagine our cute and intimate moments together. When i missed you i just simply visualize those times when we have our beautiful moments. Kung mingawon man ka darling, just find our moments, or I'll find a way to get to you mwhehe."
  }
];

const finalLetter = {
  title: "Open Last",
  message:
    "Sunod rani"
};

const secretMessages = [
  "Tiny secret: ",
  "Hidden note: ",
  "Little truth: "
];

const grid = document.querySelector("#letterGrid");
const modal = document.querySelector("#letterModal");
const modalTitle = document.querySelector("#modalTitle");
const modalMessage = document.querySelector("#modalMessage");
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
