class Photo {
    constructor(displayImage, title, caption, thumb, original) {
        this.displayImage = displayImage;
        this.title = title;
        this.caption = caption;
        this.thumb = thumb;
        this.original = original;
    }
}

var albumImages = [ ];

albumImages.push(
    new Photo(
        "pexels-anna-shvets-5894032-large.jpg",
        "Don't Look at ME, Look at THESE",
        "Anna Shvets loves her fresh plants and wants you to see them.",
        "pexels-anna-shvets-5894032-thumb.jpg",
        "pexels-anna-shvets-5894032.jpg"
    )
);

albumImages.push(
    new Photo(
        "pexels-brett-sayles-12408308-large.jpg",
        "You Are Loved",
        "Brett Sayles wants you to know that you are loved, maybe not by him, but by someone in your life.",
        "pexels-brett-sayles-12408308-thumb.jpg",
        "pexels-brett-sayles-12408308.jpg"
    )
);

albumImages.push(
    new Photo(
        "pexels-julie-aagaard-2351286-large.jpg",
        "Public Transportation is Better in Other Cities",
        "Julie Aagaard shows off her city's wonderful public transportation system.",
        "pexels-julie-aagaard-2351286-thumb.jpg",
        "pexels-julie-aagaard-2351286.jpg"
    )
);

albumImages.push(
    new Photo(
        "pexels-marlene-leppaenen-15732664-large.jpg",
        "For the Love of Things in Spaces",
        "Marlene Leppaenen can't get enough things to fill her rooms. She's thinking of going into interior design to give her an excuse to do this, but she doesn't need to have one.",
        "pexels-marlene-leppaenen-15732664-thumb.jpg",
        "pexels-marlene-leppaenen-15732664.jpg"
    )
);

albumImages.push(
    new Photo(
        "pexels-ricardo-lima-15311317-large.jpg",
        "Can You Say Hello?",
        "Ricardo Lima thinks you're a pretty bird. Yes you are. You're a pretty bird. Can you say 'Hello?'",
        "pexels-ricardo-lima-15311317-thumb.jpg",
        "pexels-ricardo-lima-15311317.jpg"
    )
);

albumImages.push(
    new Photo(
        "pexels-ricardo-oliveira-13850232-large.jpg",
        "Commute Hate",
        "Ricardo Oliveira enjoyed working at home, but now his company expects them to walk 3 miles up hill in the snow both ways to attend a meeting that could have been an email.",
        "pexels-ricardo-oliveira-13850232-thumb.jpg",
        "pexels-ricardo-oliveira-13850232.jpg"
    )
);

albumImages.push(
    new Photo(
        "pexels-serinus-5838973-large.jpg",
        "It's All About the Angles",
        "Serinus looks around...a lot. They're that person you see randomly walking sideways and leaning in weird positions. They are just composing these images in their mind.",
        "pexels-serinus-5838973-thumb.jpg",
        "pexels-serinus-5838973.jpg"
    )
);

for (let x in albumImages) {
    document.getElementById("carousel").innerHTML += '<div id="photo-' + x + '" class="thumb"></div>';
    
    document.getElementById("photo-" + x).style.backgroundImage = 'url("images/' + albumImages[x].thumb + '")';
}

document.getElementById("large-photo").innerHTML = '<img src="images/' + albumImages[0].displayImage + '" alt="' + albumImages[0].title + '">';

document.getElementById("photo-title").innerHTML = albumImages[0].title;

document.getElementById("photo-caption").innerHTML = albumImages[0].caption;