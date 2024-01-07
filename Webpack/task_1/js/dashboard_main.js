import $ from "jquery";
import debounce from "lodash/debounce";

$(function () {
  // Add elements
  $("<p>").text("Holberton Dashboard").appendTo("body");
  $("<p>").text("Dashboard data for the students").appendTo("body");
  $("<button>").text("Click here to get started").appendTo("body");
  $("<p>").attr("id", "count").appendTo("body");
  $("<p>").text("Copyright - Holberton School").appendTo("body");

  // Function to update counter
  let count = 0;
  function updateCounter() {
    count++;
    $("#count").text(count + " clicks on the button");
  }

  // Bind debounce function to click event
  $("button").on("click", debounce(updateCounter, 500));
});
