import React from 'react'

function page() {
  return (
    <>
    <section className='grid gap-5 text-White py-5 px-5 xl:py-20 xl:px-96'>
        <h1 className='text-2xl xl:text-4xl'>Terms Of Use</h1>
        <div>
            <h2 className='text-2xl'>Introduction</h2>
            <p>Welcome to the Foo Festival. These Terms of Use govern your use of our website, services, and attendance at the Foo Festival. By accessing or using our services, you agree to comply with and be bound by these terms. Please read them carefully.</p>
        </div>

        <div>
            <h2 className='text-2xl'>Eligibility</h2>
            <p>To use our services and attend the Foo Festival, you must be at least 18 years old or have the permission of a parent or guardian. By using our services, you represent and warrant that you meet this eligibility requirement.</p>
        </div>

        <div>
            <h2 className='text-2xl'>Ticket Purchases</h2>
            <li>Sales Finality: All ticket sales are final and non-refundable, except as required by law or stated in our refund policy.</li>
            <li>Transferability: Tickets are transferable under certain conditions specified on our website. Unauthorized resale of tickets is prohibited.</li>
            <li>Identification: You must present a valid government-issued ID along with your ticket for entry to the festival.</li>
        </div>

        <div>
            <h2 className='text-2xl'> Festival Conduct</h2>
            <li>Compliance: You agree to comply with all festival rules, regulations, and instructions from festival staff.</li>
            <li>Prohibited Items: Certain items are prohibited at the festival, including weapons, illegal substances, and outside food or drink. A full list of prohibited items is available on our website.</li>
            <li>Behavior: You agree to behave responsibly and respectfully towards other attendees, staff, and performers. Disruptive or unsafe behavior may result in removal from the festival without refund.</li>
        </div>

        <div>
            <h2 className='text-2xl'>Intellectual Property</h2>
            <li>Ownership: All content on our website and at the festival, including logos, graphics, music, and text, is owned by or licensed to Foo Festival and is protected by intellectual property laws.</li>
            <li>Usage: You may not use, reproduce, or distribute any content from our website or the festival without prior written permission from Foo Festival.</li>
        </div>

        <div>
            <h2 className='text-2xl'>Privacy</h2>
            <p>Your use of our services is also governed by our Privacy Policy, which details how we collect, use, and protect your personal information. By using our services, you consent to our collection and use of your information as outlined in the Privacy Policy.</p>
        </div>

        <div>
            <h2 className='text-2xl'>Privacy</h2>
            <li>Assumption of Risk: Attending a music festival involves inherent risks, including injury, illness, and loss of property. You voluntarily assume all such risks.</li>
            <li>Disclaimer: Foo Festival is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services or attendance at the festival.</li>
            <li>Force Majeure: Foo Festival is not responsible for events beyond our control, including weather conditions, acts of God, or governmental actions that may affect the festival.</li>
        </div>

        <div>
            <h2 className='text-2xl'>Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Foo Festival, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of our services or violation of these Terms of Use.</p>
        </div>

        <div>
            <h2 className='text-2xl'>Changes to Terms</h2>
            <p>Foo Festival reserves the right to modify these Terms of Use at any time. We will notify you of any changes by posting the updated terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.</p>
        </div>

        <div>
            <p>Thank you for being a part of the Foo Festival community. We look forward to providing you with an amazing festival experience!</p>
        </div>
    </section>
    </>
  )
}

export default page