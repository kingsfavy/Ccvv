
document.addEventListener('DOMContentLoaded', () => {

    const info = document.getElementById('info');

    const tap = document.getElementById('tap');

    const img = document.getElementById('resume');
    const images = ['resume.jpeg', 'resume-contd.jpeg']; // Add more images if needed
    let currentIndex = 0;

    img.addEventListener('click', () => {
        if (img.classList.contains('full-screen')) {
            img.classList.toggle('flip');
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                img.src = images[currentIndex];
                img.classList.remove('flip');
            }, 500);

info.innerHTML = "Tap the Resume to flip back to the previous page.";

tap.style.display = "none";
        } else {
            img.classList.add('full-screen');

        }
    });

    // Optional: Reset to original state on double-click or other events
    img.addEventListener('dblclick', () => {
        img.classList.remove('full-screen');
        img.src = images[0]; // Reset to the first image
        currentIndex = 0;
    });
});

const year = new Date().getUTCFullYear();

document.getElementById("year").innerHTML = year;



function adjustColorsBasedOnTime() {
          const date = new Date();
          const hours = date.getHours();
          const body = document.body;

          if (hours >= 6 && hours < 18) { // Daytime (6am to 5:59pm)
            body.style.backgroundColor = "white";
            body.style.color = "black";
          } else { // Nighttime (6pm to 5:59am)
            body.style.backgroundColor = "black";
            body.style.color = "white";
          }
        }

        // Call the function when the page loads to adjust colors based on the time of day
        adjustColorsBasedOnTime();


        let timer;
let lastPage = '';

// Function to update the nav text
function updateNavText(page) {
    if (lastPage === page) {
        document.getElementById('nav').textContent = `Last visit was on the ${page} page`;
    } else {
        document.getElementById('nav').textContent = `You are currently on the ${page} page`;
    }
    lastPage = page;
}

// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const page = this.textContent;

        const mainNav = document.querySelector('.main-nav');

        // Add the slide-up class to slide up the .main-nav


        // Clear the previous timer if it exists
        if (timer) {
            clearTimeout(timer);
        }

        // Update the nav text immediately
        updateNavText(page);

        mainNav.classList.remove('slide-up');

        // Set a timer to update the nav text after 1 minute
        timer = setTimeout(() => {
            updateNavText(page);
        }, 30000); // 60000 milliseconds = 1 minute
    });
});



function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




function openModal() {

document.getElementById('modal').style.display = 'block';

document.getElementById('res').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';

document.getElementById('res').style.display = 'block';
  document.getElementById('app').classList.remove('blur');
}


function openCert() {

document.getElementById('modalCert').style.display = 'block';

document.getElementById('cert').style.display = 'none';
  document.getElementById('app').classList.add('blur');
}

function closeCert() {
  document.getElementById('modalCert').style.display = 'none';

document.getElementById('cert').style.display = 'block';
  document.getElementById('app').classList.remove('blur');
}


const blogPosts = [
    {
        id: 1,
        title: "Creating a Balanced Lifestyle: Tips for Modern Living",
        content: "In today’s fast-paced world, maintaining a balanced lifestyle is crucial for overall well-being. Incorporate regular breaks, prioritize self-care, and find time for hobbies to improve your quality of life.",
        fullContent: "Achieving a balanced lifestyle requires conscious effort and planning. Start by setting clear priorities and boundaries between work and personal life. Regularly engage in activities you enjoy, whether it's reading, cooking, or spending time with loved ones. Remember to also incorporate physical activity into your daily routine and manage stress through mindfulness or relaxation techniques. By making these adjustments, you can enhance your productivity and personal happiness.",
        date: "2024-07-01"
    },
    {
        id: 2,
        title: "Optimizing Your Space for Comfort and Productivity",
        content: "Creating a functional and comfortable space can significantly boost productivity and well-being. Focus on ergonomics, lighting, and organization to enhance your workspace or living area.",
        fullContent: "To optimize your space, start by ensuring that your workstation is ergonomically designed to prevent strain. Invest in a good chair and desk, and position your computer screen at eye level. Good lighting is essential; natural light is preferable, but adjustable desk lamps can help. Additionally, keep your space organized to minimize distractions and clutter. Personalize your area with items that inspire you, such as plants or artwork, to create a motivating environment.",
        date: "2024-07-03"
    },
    {
        id: 3,
        title: "The Importance of Mental and Physical Health",
        content: "Maintaining both mental and physical health is essential for a fulfilling life. Engage in regular exercise, eat a balanced diet, and prioritize mental health practices like meditation and therapy.",
        fullContent: "Mental and physical health are interconnected and equally important. For physical health, aim for at least 150 minutes of moderate aerobic activity each week and incorporate strength training exercises. A balanced diet rich in fruits, vegetables, whole grains, and lean proteins supports overall health. Equally important is mental health; practice mindfulness, manage stress, and seek professional help if needed. Regularly engaging in activities that promote relaxation and mental clarity can lead to a more balanced and healthy lifestyle.",
        date: "2024-07-05"
    },
    {
        id: 4,
        title: "Effective Strategies for Remote Work Success",
        content: "Remote work offers flexibility but requires discipline and effective strategies to maintain productivity. Establish a dedicated workspace, set clear boundaries, and use digital tools to stay organized.",
        fullContent: "Remote work can be highly productive if managed properly. Create a dedicated workspace that is free from distractions and equipped with everything you need. Establish a routine that mimics a typical workday, including regular breaks and a clear start and end time. Use digital tools and apps to manage tasks and collaborate with colleagues. Stay connected through regular virtual meetings and maintain open communication channels. Balancing work and personal life is crucial; ensure you take time to relax and recharge.",
        date: "2024-07-07"
    },
    {
        id: 5,
        title: "Building and Maintaining Healthy Relationships",
        content: "Healthy relationships are built on communication, trust, and mutual respect. Invest time in understanding your loved ones, and be open and honest in your interactions.",
        fullContent: "Strong relationships require effort and commitment. Regularly communicate with those you care about, and practice active listening to understand their perspectives. Building trust involves being reliable and supportive, while respect means valuing their boundaries and opinions. Invest quality time together, whether it’s through shared activities or simply spending time in each other’s company. Address conflicts with empathy and a willingness to compromise. Healthy relationships contribute significantly to personal happiness and emotional stability.",
        date: "2024-07-09"
    },
    {
        id: 6,
        title: "The Role of Sports in Enhancing Quality of Life",
        content: "Engaging in sports offers physical, mental, and social benefits. It can improve fitness, reduce stress, and foster teamwork and camaraderie.",
        fullContent: "Participating in sports provides numerous benefits beyond physical fitness. Regular involvement in sports helps improve cardiovascular health, build muscle strength, and increase endurance. It also has positive effects on mental health by reducing stress and boosting mood through the release of endorphins. Additionally, sports can enhance social skills and foster a sense of community and teamwork. Whether you’re playing competitively or for fun, incorporating sports into your routine can lead to a more balanced and enjoyable life.",
        date: "2024-07-11"
    },
    {
        id: 7,
        title: "Fitness Goals: How to Set and Achieve Them",
        content: "Setting clear and achievable fitness goals can motivate and guide your exercise routine. Start with specific, measurable, and realistic objectives to track progress and stay committed.",
        fullContent: "To set effective fitness goals, begin by identifying what you want to achieve, such as improving endurance, increasing strength, or losing weight. Make your goals specific and measurable; for example, aim to run 5 kilometers in 30 minutes or complete 20 push-ups. Ensure your goals are realistic and align with your current fitness level. Create a structured plan with incremental steps and track your progress regularly. Stay motivated by celebrating milestones and adjusting goals as needed to keep challenging yourself.",
        date: "2024-07-13"
    }
];



                // Function to generate HTML for each blog post
function generateBlogPostHTML(post) {
    return `
        <div class="blog-post" id="post-${post.id}">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <span>${post.date}</span><br><br>
            <button type="button" class="btn" id="btn-${post.id}" onclick="toggleContent(${post.id})">Read more</button><br>
            <div class="full-content" id="content-${post.id}" style="display: none;">
                <p>${post.fullContent}</p>
            </div>
<div style="height:50px;"></div>

        </div>
    `;
}

// Function to toggle the visibility of the additional content
function toggleContent(postId) {

    const contentDiv = document.getElementById(`content-${postId}`);
    const button = document.getElementById(`btn-${postId}`);
    
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
        button.textContent = 'Collapse content';
    } else {
        contentDiv.style.display = 'none';
        button.textContent = 'Collapse content';

        // Revert the button text after 1 second
        setTimeout(() => {
            button.textContent = 'Read more';
        }, 1000);
    }
}

        // Function to render blog posts on the webpage
        function renderBlogPosts() {
            const blogPostsContainer = document.getElementById('blogPosts');
            // Clear existing content
            blogPostsContainer.innerHTML = '';
            // Generate HTML for each blog post and append it to the container
            blogPosts.forEach(post => {
                const postHTML = generateBlogPostHTML(post);
                blogPostsContainer.insertAdjacentHTML('beforeend', postHTML);
            });
        }

        // Call renderBlogPosts function when the page loads
        window.onload = renderBlogPosts;


          let hideTimeout;

        function hideDiv() {
            const div = document.querySelector('.GT');
            div.classList.add('fade-out');
            
            // Set display to none after animation completes
            setTimeout(function() {
                div.style.display = 'none';
            }, 1000); // Duration of the animation in milliseconds
        }

        // Function to show the div and start the hide timer
        function showDiv() {
            const div = document.querySelector('.GT');
            clearTimeout(hideTimeout); // Clear any previous hide timeout
            
            div.style.display = 'block'; // Make sure the div is visible
            div.classList.remove('fade-out'); // Remove the fade-out class
            div.style.opacity = 1; // Reset the opacity

            // Set the timeout to hide the div again after 31 seconds
            hideTimeout = setTimeout(hideDiv, 31000); // 31,000 milliseconds = 31 seconds
        }

        // Attach event listeners to all elements with the class "show-gt"
        document.querySelectorAll('.show-gt').forEach(function(link) {
            link.addEventListener('click', showDiv);
        });



// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(40 , window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create a plane geometry
const geometry = new THREE.PlaneGeometry(2, 2);

// Load the texture
const loader = new THREE.TextureLoader();
loader.load(
  'sato .png', // Adjust path to your image
  function (texture) {
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
);

// Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
