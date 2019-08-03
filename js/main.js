(() => {
  console.log('fired!');

  let textContainer = document.querySelector("#Textbox1"),
      bioButton = document.querySelector("#profilePhoto1"),
      textContainer2 = document.querySelector("#Textbox2"),
      bioButton2 = document.querySelector("#profilePhoto2");

  const ifeInfo = ["Ife is a hard working web developer with an exceptional portfolio. very organized and knows her stuff. Any questions? Ask her."];

  const ediInfo = ["Edi’s life philosophy is: “Persistence is the key to SUCCESS.” He is a strong believer that finding your success in life is worth taking the risk and accomplishing your goals."];

  function showBioInfo1() {
    arrayIndex = this.dataset.arrayref;
    textContainer.textContent = ifeInfo[arrayIndex];
  }

  function showBioInfo2() {
    arrayIndex = this.dataset.arrayref;
    textContainer2.textContent = ediInfo[arrayIndex];
  }

  bioButton.addEventListener("click", showBioInfo1),
  bioButton2.addEventListener("click", showBioInfo2);
})();
