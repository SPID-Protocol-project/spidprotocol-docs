import React from 'react';

export default function FooterLicense() {
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <a
        href="https://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Creative Commons License"
          style={{ height: '22px', verticalAlign: 'middle' }}
          src="https://licensebuttons.net/l/by/4.0/88x31.png"
        />
        <span style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
          This work is licensed under a Creative Commons Attribution 4.0 International License.
        </span>
      </a>
    </div>
  );
}
