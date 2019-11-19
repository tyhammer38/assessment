$(document).ready(() => {
  $("form").submit(event => {
    event.preventDefault();
    axios.get("http://localhost:3000/randomQuote").then(response => {
      quote = response.data;
      $("#text").css({
        "text-align": "center",
        "min-height": "150px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      });
      $("#text").html(quote);
    });
  });
});