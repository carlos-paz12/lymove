const gallery = document.getElementById("gallery");

async function loadImages() {
  const response = await fetch("./src/data/data.json");
  const images = await response.json();

  images.sort(() => Math.random() - 0.5);

  images.forEach(img => {
    const wrapper = document.createElement("div");
    wrapper.className = "break-inside-avoid flex flex-col mb-2";

    wrapper.innerHTML = `
      <div class="relative overflow-hidden rounded-xl group">
        <img src="./src/assets/images/${img.src}" class="w-full transition-transform duration-300 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <div class="flex justify-between items-center p-2 text-sm">
        <span>${img.name}</span>
        <a href="./src/assets/images/${img.name}" download class="cursor-pointer">
          <i class="fa-regular fa-floppy-disk"></i>
        </a>
      </div>
    `
    gallery.appendChild(wrapper);
  });
}

loadImages();