const gallery = document.getElementById("gallery");

async function loadMedia() {
  const res = await fetch("./src/data/data.json");
  const medias = await res.json();

  medias.sort(() => {
    Math.random() - 0.5
  });

  medias.forEach(media => {
    const wrapper = document.createElement("div");
    wrapper.className = "break-inside-avoid flex flex-col mb-2";

    if (media.type === "img") {
      wrapper.innerHTML = `
      <div class="relative overflow-hidden rounded-xl group">
        <img src="./src/assets/images/${media.src}" class="w-full transition-transform duration-300 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div class="flex justify-between items-center p-2 text-sm">
        <span>${media.name}</span>
        <a href="./src/assets/images/${media.name}" download class="cursor-pointer">
          <i class="fa-regular fa-floppy-disk"></i>
        </a>
      </div>
    `
    } else if (media.type === "video") {
      wrapper.innerHTML = `
      <div class="relative overflow-hidden rounded-xl group">
        <video autoplay muted loop class="w-full transition-transform duration-300 group-hover:scale-110">
          <source src="./src/assets/videos/${media.src}" type="video/mp4"/>
        </video>
        <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div class="flex justify-between items-center p-2 text-sm">
        <span>${media.name}</span>
        <a href="./src/assets/videos/${media.name}" download class="cursor-pointer">
          <i class="fa-regular fa-floppy-disk"></i>
        </a>
      </div>
    `
    }
    gallery.appendChild(wrapper);
  });
}

loadMedia();
