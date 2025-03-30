'use client';

import { useRouter, usePathname } from 'next/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';

const navItems = [
  {
    label: 'Home',
    activeIcon: 'fas fa-building',
    inactiveIcon: 'far fa-building',
    path: '/',
  },
  {
    label: 'Contact',
    activeIcon: 'fas fa-comment-dots',
    inactiveIcon: 'far fa-comment-dots',
    path: '/contact',
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col items-center gap-4 bg-[var(--darkpurple)] text-white py-8 w-full">
      {navItems.map(({ label, activeIcon, inactiveIcon, path }) => {
        const active = isActive(path);
        return (
          <div
            key={label}
            onClick={() => router.push(path)}
            className="flex flex-col items-center gap-1 cursor-pointer"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-md transition duration-150 ${
                active
                  ? 'bg-[var(--bgpurple)] text-[var(--selectedpurple)]'
                  : 'hover:bg-[var(--hoverpurple)] text-white'
              }`}
            >
              <i className={`${active ? activeIcon : inactiveIcon} text-xl`} />
            </div>

            <span className="text-xs font-medium text-white">{label}</span>
          </div>
        );
      })}
    </div>
  );
}