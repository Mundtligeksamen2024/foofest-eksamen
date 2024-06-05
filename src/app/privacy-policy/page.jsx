import React from 'react'

function page() {
  return (
    <>
    <section className='grid gap-5 text-White py-5 px-5 xl:py-20 xl:px-96'>
    <h1 className='text-2xl xl:text-4xl'>Privacy Policy</h1>
        <div>
        <h2 className='text-2xl'>Introduction</h2>
        <p>Welcome to the Foo Festival Privacy Policy. 
            This policy outlines how we collect, use, disclose, and protect your personal information when you visit our website, 
            purchase tickets, and attend the Foo Festival. By using our services, you agree to the terms of this Privacy Policy.
        </p>
        </div>

        <div>
        <h2 className='text-2xl'>Information We Collect</h2>
        <p>
        We collect various types of information to provide and improve our services to you, including:
        </p>
        <li>Personal Information: 
            When you purchase tickets, register for the festival, or use our website, we may collect 
            information such as your name, email address, phone number, mailing address, and payment information.
        </li>
        <li>Technical Information: 
            We automatically collect information about your device, browser type, 
            IP address, and how you interact with our website.
        </li>
        <li>Usage Information: 
            This includes information about your interactions with our website, such as pages visited, 
            time spent on the site, and click-throughs.
        </li>
        <li>Location Information: 
            With your consent, we may collect information about your location to enhance your festival 
            experience and provide relevant information.
        </li>
        </div>

        <div>
        <h2 className='text-2xl'>How We Use Your Information</h2>
        <p>We use your information for various purposes, including:</p>
        <li>Providing Services: To process ticket purchases, provide customer support, and deliver festival updates.</li>
        <li>Personalization: To tailor content, recommendations, and offers to your preferences and enhance your festival experience.</li>
        <li>Communication: To send you promotional materials, newsletters, and important festival information.</li>
        <li>Analytics: To analyze website usage and improve our services.</li>
        <li>Security: To detect and prevent fraud, abuse, and other harmful activities.</li>
        </div>

        <div>
        <h2 className='text-2xl'>Sharing Your Information</h2>
        <p>We do not sell your personal information. However, we may share your information in the following circumstances:</p>
        <li>Service Providers: With trusted third-party service providers who assist us in operating our website, processing payments, and delivering services. </li>
        <li>Legal Requirements: If required by law, we may disclose your information to comply with legal obligations or protect our rights and safety.</li>
        <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
        </div>

        <div>
        <h2 className='text-2xl'>Security</h2>
        <p>We take the security of your personal information seriously and implement reasonable measures to protect it from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
        </div>

        <div>
        <h2 className='text-2xl'>Your Choices</h2>
        <p>You have the following rights regarding your personal information:</p>
        <li>Access: You can request a copy of the personal information we hold about you.</li>
        <li>Correction: You can request that we correct or update your personal information.</li>
        <li>Deletion: You can request that we delete your personal information, subject to legal limitations.</li>
        <li>Opt-Out: You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.</li>
        </div>

        <div>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us.</p>
        <p>Thank you for being a part of the Foo Festival community. We value your privacy and are committed to protecting your personal information.</p>
        </div>
    </section>
    </>
  )
}

export default page