import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech', href: '#tech' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { asPath } = useRouter();
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-slateDark/80 backdrop-blur z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-heading text-xl text-slateDark dark:text-slateLight">
          Usman Ali Khan
        </span>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-6 font-body text-sm">
            {links.map(({ label, href }) => {
              const active = asPath === href;
              return (
                <li key={href} className="relative group">
					<Link
						href={href}
						className="text-slateDark dark:text-slateLight hover:text-primary transition"
					>
					  {label}
					</Link>
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 bg-primary"
                    initial={false}
                    animate={{ width: active ? '100%' : '0%' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}