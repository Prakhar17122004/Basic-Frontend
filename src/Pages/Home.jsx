import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">📘 Word Wise</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>Word Wise</span>
          </h1>
          <p>Personalized dictionary for Classes 6, 7, and 8</p>
          <div className="edu-logo">
            <img
                           src="data:image/jpeg;base64,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BG3gYYk4HQdZ4OFnT6tF57pZVpzQtyhRkNSK23VnI2NgEgEHjgiefDHha7S6y+9ryam3LXUBgHfb5zW2c4Nm93UEAHHcnPDZ08jvV7xz1aV1Hwr0Kix6rLuqhkK7sUWuPW+xSGXTkEbuMg8ngZPE86Lw14ftNgq1XUn8qsWWEU2YCliv/t++QeO/B+BxvXW/BtWo1J1IbYzCrf8A1mS1OoSxDwwH2RYvb9YH25tug+AKtKuqpF1j1amladuEretR5+7a6ADJ84nOO+T74DZ08jvV7xz1c56j0/oSKHpt6jeosFb4R6zllUqKy2m2M2WX0llOMkZ4B3LSfRX06ytbFt1wDKCAxqRhkZwVaoEH5ESnd9GdyBU0+sZM3MS+xUaqk10cVBCPWG01ajsNjkENjnpIH4xs6eR3q9456uf/AM0fT/7bWfx0f8UfzR9P/ttZ/HR/xToMRs6OR3q/456ubP8ARl5Gopu0Ts4Uk2C25ULDgeWNtDAow3Bs+3Yc5FQfRLo7dNVTe96eW1j4qsUrmxl7s6ZYqiVpkgZ2k45nRYkxTEcIZ1Xa6v1VZab4T+jXp/T9R9ZoN72bSoNjIwUHGSoVRycYz8MzcoiWZkRECJMRAREQERECJMSIExEQEREBERAREQEREBERAREQEREBERAREQEiJMBERAREQEREBERAiTEQEREBERAREQEREBERAREQEREBERASIkwEREBERAREQEREBERAREQEREBESIExEQEREBERAREQERECJMRAREQEREBERAREQEREBERAREQEREBERAREQIiIgIiIExEQEREBERAREQEREBERAREQP//Z"
              alt="Basic Education Logo"
              className="edu-img"
            />
            <p>In collaboration with Basic Education Department, Uttar Pradesh</p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="classes">
        <h2>Choose Your Class</h2>
        <div className="class-container">
          <Link to="/class6" className="class-card">Class 6</Link>
          <Link to="/class7" className="class-card">Class 7</Link>
          <Link to="/class8" className="class-card">Class 8</Link>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback">
        <h2>Teacher Feedback Form</h2>
       <form 
            name="feedback" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            action="/success"   // Add this
            className="feedback-form"
>

          <input type="hidden" name="form-name" value="feedback" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <label htmlFor="teacherName">Teacher Name</label>
          <input type="text" id="teacherName" name="teacherName" required />

          <label htmlFor="schoolName">School Name</label>
          <input type="text" id="schoolName" name="schoolName" required />

          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" rows="5" required></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      </section>

     

      {/* Footer */}
      <footer id="contact">
        <h3>Contact Me</h3>
        <p>Email: <a href="mailto:yourname@email.com">yourname@email.com</a></p>
        <p>© 2025 Word Wise. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
