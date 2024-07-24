/* Existing CSS */

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.header, .services, .pricing, .booking, .footer {
    text-align: center;
    padding: 20px;
}

.hero {
    background: url('https://images.pexels.com/photos/3997346/pexels-photo-3997346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center/cover;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px;
}

.hero-content {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 10px;
}

.hero h1 {
    font-size: 3em;
    margin: 0;
}

.hero p {
    font-size: 1.5em;
}

.btn {
    background-color: #e91e63;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    display: inline-block;
    cursor: pointer;
}

.services {
    background-color: #ffffff; /* White background for services section */
    padding: 50px 20px;
}

.service-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.service-item {
    background-color: white;
    padding: 20px;
    margin: 10px;
    width: 30%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.service-item:hover {
    cursor: pointer;
}

.service-item:nth-child(1):hover {
    background-color: pink; /* Pink hover color for Manicure */
}

.service-item:nth-child(2):hover {
    background-color: rgb(186, 91, 186); /* Purple hover color for Pedicure */
}

.service-item:nth-child(3):hover {
    background-color: #FF69B4; /* Mixed pink and red hover color for Nail Art */
}

/* Service Section */
.service {
    margin-bottom: 40px;
}

.service h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.service-content {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align items to the left */
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.service-images-container {
    display: flex;
    gap: 5px; /* Adjusted gap */
    margin-right: 10px; /* Reduced margin-right */
}

.service-images {
    display: flex;
    gap: 5px; /* Adjusted gap */
}

.service-images img {
    width: 100px; /* Adjust as needed */
    height: 100px; /* Adjust as needed */
    object-fit: cover;
    border-radius: 50%; /* Makes the images oval */
    cursor: pointer;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.service-images img:hover {
    opacity: 0.8;
    transform: scale(1.05);
}

.service-price {
    font-size: 1.5em; /* Increased font size */
    padding: 5px; /* Reduced padding */
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

/* Adjusting hover effect box */
.service-content:hover {
    padding: 8px; /* Reduced padding */
}

/* Hover effects for service content */
.service:nth-child(1) .service-content:hover {
    background-color: peachpuff; /* Peach color for the first service */
}

.service:nth-child(2) .service-content:hover {
    background-color: #d8bfd8; /* Light purple color for the second service */
}

.service:nth-child(3) .service-content:hover {
    background-color: lightpink; /* Light pink color for the third service */
}

/* Hover effects for prices */
.service:nth-child(1) .service-content:hover .service-price {
    background-color: peachpuff; /* Peach color for the first service */
}

.service:nth-child(2) .service-content:hover .service-price {
    background-color: #d8bfd8; /* Light purple color for the second service */
}

.service:nth-child(3) .service-content:hover .service-price {
    background-color: lightpink; /* Light pink color for the third service */
}

.pricing {
    background-color: #87CEEB; /* Sky blue background for pricing section */
    padding: 50px 20px;
}

.pricing table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
}

.pricing th, .pricing td {
    border: 1px solid #ddd;
    padding: 10px;
}

.pricing th {
    background-color: #e91e63;
    color: white;
}

.booking {
    background-color: #f9f9f9;
    padding: 50px 20px;
}

.social-media-large {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.social-media-large a {
    color: #333;
    margin: 0 15px;
    text-decoration: none;
    font-size: 2em;
    transition: color 0.3s ease;
}

.social-media-large a:hover {
    color: blue;
}

.footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
    position: relative;
}

.footer p {
    margin: 0;
    padding: 0;
}

.social-media {
    margin-top: 10px;
}

.social-media a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.5em;
    transition: color 0.3s ease;
}

.social-media a:hover {
    color: blue;
}

#our-location {
    padding: 20px;
    background-color: #f9f9f9; /* Adjust the background color as needed */
    text-align: center;
}

#our-location h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.full-width-iframe {
    width: 100%;
    height: 450px; /* You can adjust the height as needed */
    border: none;
}

/* Modal styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    margin: 10% auto; /* Adjusted margin for better centering */
    padding: 10px; /* Reduced padding */
    border: 1px solid #888;
    width: 50%; /* Adjusted width */
    max-width: 600px; /* Adjusted max-width */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    text-align: center;
}

.modal-content img {
    width: 100%; /* Image width fills modal content */
    height: auto; /* Maintain aspect ratio */
}


.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover, .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.modal .social-media a {
    color: #333;
    margin: 10px;
    text-decoration: none;
    font-size: 1.5em;
    transition: color 0.3s ease;
}

.modal .social-media a:hover {
    color: blue;
}

/* Hover effects for service sections */
.service:nth-child(1) .service-content:hover {
    background-color: peachpuff; /* Peach color for the first service */
}

.service:nth-child(2) .service-content:hover {
    background-color: #d8bfd8; /* Light purple color for the second service */
}

.service:nth-child(3) .service-content:hover {
    background-color: lightpink; /* Light pink color for the third service */
}
