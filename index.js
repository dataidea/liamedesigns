const form = document.querySelector("form");
// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    from: form.email.value,
    text: form.message.value,
    name: form.name.value,
  };

  const res_data = await fetch("https://liamedesigns.herokuapp.com/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/json" },
  });

  const res = res_data.json();

  location.reload();
};

form.addEventListener("submit", handleSubmit);
