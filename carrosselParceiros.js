const logoC = document.querySelectorAll(".logoC");
const tamanhoC = logoC.length;

const updateCarrosselC = () => {
  logoC.forEach((img) => {
    const pos = parseInt(img.getAttribute("pos"));

    if (pos !== 0) {
      img.style.transition = "";
      if (pos < 0) {
        // img.style.opacity = `${(pos + 5) / 10}`;
        img.style.transform = `translate(${pos * 260}px) scale(${
          (pos + 10) / 10
        })`;
      } else if (pos > 0) {
        // img.style.opacity = `${(pos * -1 + 5) / 10}`;
        img.style.transform = `translate(${pos * 260}px) scale(${
          (pos * -1 + 10) / 10
        })`;
      }
      if (!img.classList.contains("carrossel-hidden")) {
        img.classList.add("carrossel-hidden");
      }
      img.style.opacity = `1`;
    } else {
      img.style.transform = ``;
      img.classList.remove("carrossel-hidden");
    }
    if (pos > 2) {
      img.style.transition = "0s";
      img.style.opacity = `0`;
    }
  });
};
updateCarrosselC();
updateCarrosselC();
const next = () => {
  logoC.forEach((img) => {
    const pos = parseInt(img.getAttribute("pos"));
    if (pos == -2) {
      img.setAttribute("pos", tamanhoC - 3);
    } else {
      img.setAttribute("pos", pos - 1);
    }
    updateCarrosselC();
  });
};

setInterval(next, 5000);
