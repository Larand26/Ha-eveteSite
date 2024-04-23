const imgCarrossel = document.querySelectorAll(".img-carrossel");
const btnAntes = document.querySelector(".antes");
const btnDepois = document.querySelector(".depois");

const updateCarrossel = () => {
  imgCarrossel.forEach((img) => {
    const pos = parseInt(img.getAttribute("pos"));

    if (pos !== 0) {
      if (pos > 2 || pos < -2) {
        img.style.opacity = `0`;
      } else if (pos < 0) {
        img.style.opacity = `${(pos + 5) / 10}`;
        img.style.transform = `translate(${pos * 15}%) scale(${
          (pos + 10) / 10
        })`;
      } else if (pos > 0) {
        img.style.opacity = `${(pos * -1 + 5) / 10}`;
        img.style.transform = `translate(${pos * 15}%) scale(${
          (pos * -1 + 10) / 10
        })`;
      }
      if (!img.classList.contains("carrossel-hidden")) {
        img.classList.add("carrossel-hidden");
      }
    } else {
      img.style.transform = ``;
      img.style.opacity = `1`;
      img.classList.remove("carrossel-hidden");
    }
  });
};
updateCarrossel();
btnAntes.addEventListener("click", (evt) => {
  imgCarrossel.forEach((img) => {
    const pos = parseInt(img.getAttribute("pos"));
    img.setAttribute("pos", pos + 1);
    if (pos == 0 && img.classList.contains("primeiro")) {
      imgCarrossel.forEach((el) => {
        const posAtual = parseInt(el.getAttribute("pos"));
        el.setAttribute("pos", posAtual - imgCarrossel.length);
      });
    }
    updateCarrossel();
  });
});
btnDepois.addEventListener("click", (evt) => {
  imgCarrossel.forEach((img) => {
    const pos = parseInt(img.getAttribute("pos"));
    img.setAttribute("pos", pos - 1);
    if (pos == 0 && img.classList.contains("proximo")) {
      imgCarrossel.forEach((el) => {
        const posAtual = parseInt(el.getAttribute("pos"));
        el.setAttribute("pos", posAtual + imgCarrossel.length);
      });
    }
    updateCarrossel();
  });
});
