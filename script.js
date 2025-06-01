
const videos = [
  {
    title: "Learn HTML in 10 Minutes",
    videoId: "UB1O30fR-EE",
    likes: 0
  },
  {
    title: "CSS Crash Course",
    videoId: "yfoY53QXEnI",
    likes: 0
  },
  {
    title: "JavaScript Tutorial for Beginners",
    videoId: "W6NZfCO5SIk",
    likes: 0
  },
  {
    title: "Responsive Web Design",
    videoId: "srvUrASNj0s",
    likes: 0
  }
];
const sidebarItems = document.querySelectorAll("aside li");
sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    sidebarItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// Example actions on icon clicks
document.getElementById("homeBtn").addEventListener("click", () => {
  alert("Home clicked – Showing all videos!");
  renderVideos(); // Optionally reset view
});

document.getElementById("trendingBtn").addEventListener("click", () => {
  alert("Trending clicked – (You can filter trending videos here!)");
  // You could filter top-liked or hardcoded trending videos
});

document.getElementById("subscriptionsBtn").addEventListener("click", () => {
  alert("Subscriptions clicked – (You can show subscribed channels here!)");
});

document.getElementById("bellBtn").addEventListener("click", () => {
  alert("No new notifications!");
});


const videoList = document.getElementById("videoList");
const modal = document.getElementById("videoModal");
const player = document.getElementById("player");
const videoTitle = document.getElementById("videoTitle");
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let currentVideo = null;

function renderVideos() {
  videos.forEach((video, index) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <img src="https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg" />
      <div class="video-info"><h4>${video.title}</h4></div>
    `;
    card.addEventListener("click", () => openModal(index));
    videoList.appendChild(card);
  });
}

function openModal(index) {
  currentVideo = index;
  const video = videos[index];
  player.src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1`;
  videoTitle.textContent = video.title;
  likeCount.textContent = video.likes;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
  player.src = "";
}

likeBtn.addEventListener("click", () => {
  if (currentVideo !== null) {
    videos[currentVideo].likes++;
    likeCount.textContent = videos[currentVideo].likes;
  }
});

renderVideos();
