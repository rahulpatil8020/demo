import React from 'react';

function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="space-y-8">
        <Section
          title="Information We Collect"
          content="We collect information that you provide directly to us, including but not limited to your name, email address, and usage data when you use our services."
        />
        
        <Section
          title="How We Use Your Information"
          content="We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new features."
        />
        
        <Section
          title="Information Sharing"
          content="We do not sell or share your personal information with third parties except as described in this policy or with your consent."
        />
        
        <Section
          title="Data Security"
          content="We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure."
        />
        
        <Section
          title="Your Rights"
          content="You have the right to access, correct, or delete your personal information. You can also object to or restrict certain processing of your information."
        />
        
        <Section
          title="Updates to This Policy"
          content="We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page."
        />
        
        <Section
          title="Contact Us"
          content="If you have any questions about this privacy policy, please contact us at privacy@example.com"
        />
      </div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}

export default Privacy;