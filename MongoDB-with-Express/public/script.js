let button = document.getElementById("#button");

button.addEventListener("click", () => {
  let alert = confirm(
    "Are you sure you want to delete this item? This action cannot be undone."
  );
  if (alert) {
    alert("chat deleted sucessfully !!");
  }
});
