let range_slider_1 = document.getElementById("range_slider_1");

update_slider();
range_slider_1.addEventListener("input", function (e) {
  update_slider();
});

function update_slider() {
  let slider_value = range_slider_1.value / 100;
  let slider_width = range_slider_1.offsetWidth;
  let range_slider_1_value = document.getElementById("range-slider-1-value");
  let range_slider_1_track_highlight = document.getElementById(
    "range-slider-1-track-highlight"
  );
  range_slider_1_track_highlight.style.width =
    slider_width * slider_value + "px";
  range_slider_1_value.innerHTML = slider_value;
}
window.addEventListener(
  "resize",
  function (event) {
    update_slider();
  },
  true
);
