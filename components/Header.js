import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <div className="text-2xl dark:text-white text-center">
        <div>
          <Link href="/">Headers</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
