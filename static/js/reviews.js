  function openModal(title, overview, review, videoUrl, info, copyright, element) {
    const imgSrc = element.querySelector(".movie-poster").src;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalOverview").innerText = "Overview: " + overview;
    document.getElementById("modalReview").innerText = "My opinion: " + review;
    document.getElementById("modalFinfo").innerText = info;
    document.getElementById("modalRights").innerText = copyright;
    document.getElementById("modalImg").src = imgSrc;
    document.getElementById("ifr").src = videoUrl;

    document.getElementById("movieModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("movieModal").style.display = "none";
    document.getElementById("ifr").src = "";
  }