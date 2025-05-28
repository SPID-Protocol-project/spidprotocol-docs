import React, { useEffect, useState } from 'react';

export default function GitHubBadge() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/SPID-Protocol-project/spidprotocol-docs')
      .then((res) => res.json())
      .then((data) => {
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
        });
      })
      .catch((err) => console.error('GitHub API error:', err));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <a
        href="https://github.com/SPID-Protocol-project/spidprotocol-docs"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.9rem',
        }}
      >
        <svg
          height="20"
          viewBox="0 0 16 16"
          version="1.1"
          width="20"
          aria-hidden="true"
          style={{ marginRight: '0.5rem' }}
        >
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.33C4.13
              14.91 3.63 13.91 3.63 13.91c-.36-.91-.88-1.15-.88-1.15-.72-.5.06-.49.06-.49.79.06
              1.2.82 1.2.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06-2.67-.3-5.47-1.34-5.47-5.96
              0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32
              3.3 1.23a11.5 11.5 0 016 0c2.29-1.55
              3.3-1.23 3.3-1.23.66 1.66.25 2.88.12
              3.18.77.84 1.24 1.91 1.24 3.22
              0 4.63-2.8 5.66-5.47 5.96.29.25.54.74.54
              1.49v2.21c0 .21.15.46.55.38A8.01
              8.01 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <span>SPID Protocol</span>
      </a>
      {stats && (
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
          <li>⭐ {stats.stars}</li>
          <li>🍴 {stats.forks}</li>
        </ul>
      )}
    </div>
  );
}
