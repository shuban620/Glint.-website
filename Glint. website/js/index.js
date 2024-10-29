// <-----------------for navbar animation---------------->
window.addEventListener('scroll', function() {
    const header = document.querySelector('.btn-align'); // Select the image inside the 'head-section'

    if (window.scrollY > 100) {
        header.style.backgroundColor = 'black'; // Change background to white
        header.style.color = 'black'; // Change font color to black
    } else {
        header.style.backgroundColor = 'transparent'; // Change background back to transparent
        header.style.color = 'white'; 
    }
});



// <---------------for counter animation-------------->
// Function to animate a counter element
function animateCounter(counter, duration) {
    const maxCount = parseInt(counter.getAttribute('data-max')); // Get the max value
    const stepTime = Math.floor(duration / maxCount); // Calculate step time based on max value and duration
    let count = 0;
    
    const interval = setInterval(() => {
        counter.textContent = count;
        count++;
        if (count > maxCount) {
            clearInterval(interval); // Stop when maxCount is reached
        }
    }, stepTime);
}

// Total duration for all counters to finish (in milliseconds)
const totalDuration = 2000; // 2 seconds

// Select all counter elements and animate each one
document.querySelectorAll('.counter').forEach(counter => {
    animateCounter(counter, totalDuration);
});



// <----------------------for image slider---------------->
const mainSwiper = new Swiper('.swiper-main', {
    effect: 'slide',
    slidesPerView: 6,  // Show 6 slides per view
    spaceBetween: 10,  // Adjust space between the slides
    loop: true,        // Enable looping
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    speed: 700,  // Increase speed for smoother transitions
  
    autoplay: {
      delay: 3000,  // Autoplay delay (1 second)
      disableOnInteraction: false,  // Continue autoplay after user interaction
    },

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    breakpoints: {
      // For larger screens (desktops)
      1024: {
        slidesPerView: 6,  // Show 6 slides
        spaceBetween: 10,  // Space between the slides
      },
      // For tablets
      768: {
        slidesPerView: 4,  // Show 4 slides
        spaceBetween: 10,
      },
      // For mobile phones
      0: {
        slidesPerView: 2,  // Show 2 slides on small screens
        spaceBetween: 10,
      },
    },
});



// <------------------for section slider---------------->
const sectionSwiper = new Swiper('.swiper-section', {
  effect: 'slide',  // Use slide effect
  slidesPerView: 1,  // Show 1 slide per view
  spaceBetween: 30,
  loop: true,  // Enable infinite looping

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  speed: 700,  // Increase speed for smoother transitions

  autoplay: {
    delay: 3000,  // Autoplay delay (1 second)
    disableOnInteraction: false,  // Continue autoplay after user interaction
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },
});

