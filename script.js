 // Wait until the button is clicked
 document.getElementById("api-btn").addEventListener("click", function () {
     // get the movie title from the input
    const movieTitle = document.getElementById("api-input").value;

     //  Your OMDb API key
    const apiKey = "594ab4c8";

    // Build the API URL
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;
    const resultsDiv = document.getElementById("api-results");
    resultsDiv.innerHTML = "Loading...";

     //  Fetch data from OMDb API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            // If movie is found
            if (data.Response === "True") {
                resultsDiv.innerHTML = `
                    <h2>${data.Title}</h2>
                     <p><strong>Year:</strong> ${data.Year}</p>
                     <p><strong>Genre:</strong> ${data.Genre}</p>
                     <p><strong>Director:</strong> ${data.Director}</p>
                     <p><strong>Plot:</strong> ${data.Plot}</p>
                     <img src="${data.Poster}" alt="${data.Title} Poster">
                `;
            }else {
                //if movie isnt found
                 resultsDiv.innerHTML = `<p>Movie not found. Please try again.</p>`;
             }
        })
         .catch(error => {
             console.log("Error:", error);
             document.getElementById("api-results").innerHTML = `<p>Something went wrong.</p>`;
              });
});
window.onload = function () {
    document.getElementById("api-input").value = "Batman";
    document.getElementById("api-btn").click();
}