let img_links = document.querySelectorAll(".img-links");

img_links.forEach((e) => {
    e.addEventListener("mouseover", (event) => {
        if(event.target.nodeName = "IMG") {
            e.querySelector(".carousel-caption").classList.remove("hidden");
        }
    });

    e.addEventListener("mouseout", (event) => {
        if(event.target.nodeName = "IMG") {
            e.querySelector(".carousel-caption").classList.add("hidden");
        }
    });
});