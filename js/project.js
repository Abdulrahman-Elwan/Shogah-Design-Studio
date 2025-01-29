$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');

    // Define your image arrays here
    const projectImages = {
        1: ['img/bg-about.jpg', 'img/bg-consult.jpg', 'img/bg-gallery.jpg'], // Project 1 images
        2: ['img/bg-service.jpg', 'img/bg-consult.jpg', 'img/bg-about.jpg']  // Project 2 images
        // Add more projects as needed
    };

    const images = projectImages[project] || [];

    if (images.length > 0) {
        const slider = $('.slider');
        images.forEach(img => {
            slider.append(`<div><img src="${img}" alt="Project Image"></div>`);
        });

        slider.slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false // Disable default arrows
        });

        // Custom arrows functionality
        $('.custom-prev').click(function () {
            slider.slick('slickPrev');
        });

        $('.custom-next').click(function () {
            slider.slick('slickNext');
        });
    } else {
        $('body').html('<p>No images available for this project.</p>');
    }
});