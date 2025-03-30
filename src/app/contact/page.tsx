'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function ContactPage() {
  return (
    <>
      <div className="p-8 bg-[var(--background)] w-full text-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Get in Touch!
        </h1>
        <p className="text-sm text-gray-900 mb-8">
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-[var(--darkpurple)] hover:bg-[var(--hoverpurple)] p-4 rounded-md transition">
            <i className="fas fa-envelope text-lg text-[var(--selectedpurple)] w-6 text-center" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Email</span>
              <a
                href="mailto:you@example.com"
                className="text-xs text-gray-300 hover:underline"
              >
                choyongsoo22@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[var(--darkpurple)] hover:bg-[var(--hoverpurple)] p-4 rounded-md transition">
            <i className="fab fa-github text-lg text-[var(--selectedpurple)] w-6 text-center" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">GitHub</span>
              <a
                href="https://github.com/Yongsoo-Cho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-300 hover:underline"
              >
                github.com/Yongsoo-Cho
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[var(--darkpurple)] hover:bg-[var(--hoverpurple)] p-4 rounded-md transition">
            <i className="fab fa-linkedin text-lg text-[var(--selectedpurple)] w-6 text-center" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/mike-cho-991527211/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-300 hover:underline"
              >
                linkedin.com/in/mike-cho
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}