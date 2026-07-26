import { useState } from 'react';

const Contact = () => {
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
    };

    return (
        <section id="contact">
            <h2><i className="fa-solid fa-envelope"></i>&nbsp;Contact</h2>

            <div className="contact-flex">
                <div className="contact-info">
                    <p><i className="fa-solid fa-envelope"></i>&nbsp;Email: <a href="mailto:singhabiman33@gmail.com">singhabiman33@gmail.com</a></p>
                    <p><i className="fa-solid fa-phone"></i>&nbsp; Phone: +91 8945835029</p>
                    <p><i className="fa-solid fa-location-dot"></i>&nbsp; Address- KOLKATA</p>

                    <div className="social-flex">
                        <a href="https://www.linkedin.com/in/biman-singha-19752122b" className="social-btn social-linkedin"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Biman2003" className="social-btn social-github"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100065899874050&mibextid=rS40aB7S9Ucbxw6v" className="social-btn social-facebook"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://whatsapp.com/dl/" className="social-btn social-whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>

                    <a href="public/my resume.pdf" download className="btn" style={{ marginTop: '20px', display: 'inline-block' }}>
                        <i className="fa-solid fa-download"></i> Resume
                    </a>
                </div>

                <div className="message-form">
                    <h3>Send a Message</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label><i className="fa-solid fa-user"></i>&nbsp;Name</label>
                            <input type="text" placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label><i className="fa-solid fa-envelope"></i>&nbsp;Email</label>
                            <input type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="form-group">
                            <label><i className="fa-solid fa-pen"></i>&nbsp;Message</label>
                            <textarea rows="4" placeholder="Say hello..." required></textarea>
                        </div>
                        <button type="submit" className="btn">
                            <i className="fa-solid fa-paper-plane"></i>&nbsp;{isSent ? 'Sent ✓' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
