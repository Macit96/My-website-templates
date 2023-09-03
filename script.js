
const portfolioData = [
    {
        title: "portfolio1",
        image: "portfolio1.jpg",
        description: "Interesting details about Project 1"
    },
    {
        title: "Project 2",
        image: "portfolio2.jpg",
        description: "Interesting details about Project 2"
    },
    
];


const portfolioSection = document.getElementById("portfolio");

portfolioData.forEach(item => {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("portfolio-item");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    portfolioItem.appendChild(image);
    portfolioItem.appendChild(title);
    portfolioItem.appendChild(description);

    portfolioSection.appendChild(portfolioItem);
});
