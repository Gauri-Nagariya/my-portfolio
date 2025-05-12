const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 206)}, 
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)})`;
    link.style.color = randomColor; // Apply random RGB color
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "white"; // Reset to white when hover ends
  });
});