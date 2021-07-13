document.addEventListener("DOMContentLoaded", function () {

  let filterCheckBox = document.querySelectorAll(".form-check-input");

  filterCheckBox.forEach( ele => {
    ele.addEventListener("change", e => {
      let tickets = document.querySelectorAll('#col-' + e.target.id);
      if(e.target.checked) {
        // let label = document.getElementById("label-" + e.target.id);
        // console.log(label.classList);
        tickets.forEach( ticket => ticket.style.display = "none" );
      } else {
        tickets.forEach( ticket => ticket.style.display = "block" );
      }
    });
  });
});
