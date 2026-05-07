import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_NAME, CONTACT_EMAIL } from '../utils/constants';

export default function Offline() {
  return (
    <div style={{minHeight: '100vh',display: 'flex',alignItems: 'center',justifyContent: 'center',padding: '2rem',background: '#f8fafc',color: '#0f172a'}}>
      <Helmet>
        <title>Site Offline — {COMPANY_NAME}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div style={{maxWidth: 720,textAlign: 'center'}}>
        <h1 style={{fontSize: '2.25rem',marginBottom: '0.5rem'}}>We'll be back soon</h1>
        <p style={{fontSize: '1.125rem',marginBottom: '1.25rem',color: '#334155'}}>The site is temporarily offline for maintenance. We're working to bring everything back online as quickly as possible.</p>
        <p style={{marginBottom: '1.25rem',color: '#475569'}}>If you need immediate assistance, please email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        <small style={{color: '#64748b'}}>Thank you for your patience.</small>
      </div>
    </div>
  );
}
