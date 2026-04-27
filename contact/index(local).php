<?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'root');
    define('DB_PASS','');
    define('DB_NAME', 'dataform');

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if($conn->connect_error){
                die('Connection Failed: ' . $conn->connect_error);
        }
        if ($_SERVER['REQUEST_METHOD'] === 'POST')
    {
            $name = $_POST["name"] ?? '';
            $email = $_POST["email"] ?? '';
            $sub = $_POST["subject"] ?? '';
            $message = $_POST["message"] ?? '';
      $query = $conn->prepare("INSERT INTO user_inquiries (Name, Email, Subject, Message)
      VALUES(?,?,?,?)");
      $query->bind_param('ssss', $name, $email, $sub, $message);
      $query->execute();
      $conn->close();
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Author of This webpage is Cyrus Jones -->
        <meta charset = "UTF-8">
        <title>Lines Connect - Contact</title>
        <link rel = "stylesheet" href="../assets/css/reset.css">
        <link rel = "stylesheet" href="../assets/css/variables.css">
        <link rel = "stylesheet" href="../assets/css/global.css">
        <link rel = "stylesheet" href="../assets/css/layout.css">
        <link rel = "stylesheet" href="../assets/css/components.css">
        <link rel = "stylesheet" href="../assets/css/pages/contact.css">
    </head>
    <body>
        <header class="site-header">
            <section class="header-content">
                <img src="../assets/images/logo/logo.png"
                        alt="Lines Connect Logo"
                        class="site-logo">
                <h1 class="site-title">Lines Connect</h1>
            </section>
        </header>
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../index.html">Home</a> &gt; <span>Contact</span>
        </nav>

        <main class="contact-main">
            <!-- Section 1: Contact Information -->
            <section class="contact-intro">
                <h2>Get In Touch</h2>
                <p>I'd love to hear from you! Whether you have a question about my work, want to discuss a commission, or just want to say hello, feel free to reach out through any of the following channels:</p>
                <p>Email: contact@linesconnect.com | Instagram: @linesconnect | Twitter: @linesconnect</p>
            </section>

            <!-- Section 2: Video & Stream Schedule -->
            <section class="stream-section">
                <div class="video-container">
                    <video controls>
                        <source src="../assets/videos/stream-preview.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="stream-schedule">
                    <h3>Live Stream Schedule</h3>
                    <p>Join me live for art sessions and Q&A!</p>
                    <ul>
                        <li>Tuesdays: 7:00pm - 9:00pm</li>
                    </ul>
                </div>
            </section>

            <!-- Section 3: Contact Form -->
            <section class="contact-form-section">
                <h2>Send Me a Message</h2>
                <form id="contactForm" class="contact-form" method="POST" novalidate>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </section>
        </main>
        <script src="../assets/js/form-handler.js"></script>
    </body>
</html>