import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file for styling

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h1>Privacy Policy</h1>
            <div className="privacy-policy-content">
                <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>

                <h4>1. Information We Collect</h4>
                <p>We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better.</p>

                <h4>2. Information You Provide to Us</h4>
                <p>We collect information that you provide to us directly. This may include your name, email address, phone number, delivery address, payment information, and any other details you choose to provide.</p>

                <h4>3. How We Use Your Information</h4>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website and services</li>
                    <li>Improve, personalize, and expand our website and services</li>
                    <li>Understand and analyze how you use our website and services</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h4>4. Security of Your Information</h4>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

                <h4>5. Changes to This Privacy Policy</h4>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h4>6. Contact Us</h4>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: [Your Contact Email]</li>
                    <li>By visiting this page on our website: [Your Contact Page URL]</li>
                    <li>By phone number: [Your Contact Phone Number]</li>
                </ul>
            </div>
        </div>
    );
}

export default PrivacyPolicy;