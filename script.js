// log in ...
const nameInput = document.querySelector("input[type='text']");
const passwordInput = document.querySelector("input[type='password']");
const loginButton = document.getElementById("login-btn"); // Fixed selector
const logoutButton = document.getElementById("logout-btn"); // Fixed selector
const navbar = document.getElementById("navbar");
const banner = document.getElementById("banner");
const vocabSection = document.getElementById("vocabulary-section"); // Fixed duplicate ID issue
const faqSection = document.getElementById("faq");

//Always logged out at first
navbar.style.display = "none";
vocabSection.style.display = "none";
faqSection.style.display = "none";

// Function for login
loginButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    
    if (password !== "123456") {
        alert("Incorrect password!");
        return;
    }
    
    // Show after login
    banner.style.display = "none";
    navbar.style.display = "flex";
    vocabSection.style.display = "block";
    faqSection.style.display = "block";
});

// Function for logout
logoutButton.addEventListener("click", () => {
    banner.style.display = "block";
    navbar.style.display = "none";
    vocabSection.style.display = "none";
    faqSection.style.display = "none";

    // Clear input fields
    nameInput.value = "";
    passwordInput.value = "";
});












// function for data fetch [ok]
async function fetchLessons() {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/levels/all"
    );
    const data = await response.json();

    const lessons = data.data;

    const lessonButtonsContainer = document.getElementById("lesson-buttons");
    lessonButtonsContainer.innerHTML = "";

    if (Array.isArray(lessons) && lessons.length > 0) {
      lessons.forEach((lesson) => {
        const button = document.createElement("button");
        button.classList.add(
          "btn",
          "btn-outline",
          "border-2",
          "border-indigo-500",
          "text-indigo-600",
          "hover:bg-blue-900",
          "hover:text-white",
          "rounded-md",
          "px-4",
          "py-2"
        );
        button.innerHTML = ` <i class="fa-solid fa-book-open"></i>  Lesson - ${lesson.level_no}`;

        // lesson.id
        button.onclick = () => {
          highlightSelectedButton(button);
          loadWords(lesson.level_no);
        };

        lessonButtonsContainer.appendChild(button);
      });
    }
  } catch (error) {
    console.error("Error fetching lessons:", error);
  }
}

function highlightSelectedButton(button) {
  const buttons = document.querySelectorAll("#lesson-buttons button");
  buttons.forEach((btn) => btn.classList.remove("bg-blue-900", "text-white"));
  button.classList.add("bg-blue-900", "text-white");
}

// API-02 [ok]
async function loadWords(lessonId) {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML =`
  <span class="loading loading-spinner text-primary"></span>
  `;
  await new Promise(resolve=>setTimeout(()=>{
   return resolve()},2000))
  try {
    // api dynamic [ok]
    const response = await fetch(
      `https://openapi.programming-hero.com/api/level/${lessonId}`
    );
    const data = await response.json();
    const words = data.data;

    if (words && words.length > 0) {
      wordContainer.innerHTML = "";
      words.forEach((word) => {
        const wordCard = createWordCard(word);
        wordContainer.appendChild(wordCard);
      });
    } else {
      wordContainer.innerHTML =
      `<div class="my-16 flex flex-col items-center col-span-3">
                <img src="assets/alert-error.png" alt="">
                  <p class="font-hind-siliguri text-sm mb-3">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                  <h3 class="font-hind-siliguri font-medium text-3xl">নেক্সট Lesson এ যান</h3>
              </div>`
    }
  } catch (error) {
    wordContainer.innerHTML = '<p class="text-red-500">নেটওয়ার্ক এরর । আবার চেষ্টা করুন ।</p>';
    console.error("Error fetching words:", error);
  }
}

function createWordCard(word) {
  const card = document.createElement("div");
  card.classList.add(
    "bg-white",
    "p-4",
    "rounded-lg",
    "min-w-[300px]",
    "max-w-[300px]",
    "shadow-md",
    "justify-center",
    "items-center",
    "mb-4",
    "mx-auto"
  );

  card.innerHTML = `
    <div class="bg-white p-6 rounded-xl shadow-md text-center">
        <h2 class="text-xl font-bold">${word.word || "Unknown Word"}</h2>
        <p class="text-gray-500">Meaning / Pronunciation</p>
        <p class="text-lg mt-2 font-semibold">"${word.meaning || "Not available"} / ${word.pronunciation || "Not available"}"</p>
        <div class="flex gap-4 mt-4 justify-between">
             <button onclick="showdetails(${word.id})" class="p-2 bg-blue-100 rounded-md hover:bg-blue-200 transition">
    <i class="fas fa-info-circle"></i>
  </button>
            <button onclick="playAudio('${word.pronunciation}')" class="p-2 bg-blue-100 rounded-md">
                <i class="fas fa-volume-up"></i>
            </button>
        </div>
    </div>
  `;
  
  return card;
}



// showdetails option modal [ok]
const showdetails=async (id)=>{
  const modal=document.getElementById('modal')
  const response=await fetch(`https://openapi.programming-hero.com/api/word/${id}`)
  const itemDetails=await response.json()
  modal.innerHTML=`
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box ">
      <div class="card w-full bg-base-100 card-xl shadow-sm mb-4">
        <div class="p-4 space-y-4">
          <h2 class="text-4xl font-semibold">${itemDetails.data.word} (<i class="fa-solid fa-microphone-lines"></i>:${itemDetails.data.pronunciation})</h2>
          <div class="space-y-2">
            <p class="text-2xl font-semibold">Meaning</p>
            <p class="text-2xl font-semibold font-hind-siliguri">${itemDetails.data.meaning===null?'অর্থ পাওয়া যায়নি':itemDetails.data.meaning}</p>
          </div>
          <div class="space-y-2">
            <p class="text-2xl font-semibold">Example</p>
            <p class="text-2xl">${itemDetails.data.sentence}</p>
          </div>
          <p class="text-2xl mb-2 font-semibold">${itemDetails.data.synonyms.length?'সমার্থক শব্দ গুলো':'কোন সমার্থক শব্দ পাওয়া যায় নি'}</p>
          <div class="flex items-center gap-2">
          ${itemDetails.data.synonyms.map((item)=>`<span class="btn bg-blue-50">${item}</span>`).join('')}
          </div>
        </div>
      </div>
        <form method="dialog">
          <!-- if there is a button in form, it will র্close the modal -->
          <button class="btn btn-primary">close</button>
        </form>
      </div>
    </dialog>
  `
  my_modal_1.showModal()
}




// load function
window.onload = fetchLessons;
