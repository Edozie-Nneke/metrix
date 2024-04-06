'use client';

import layoutStyle from '../app/page.module.css';

import { usePathname } from 'next/navigation';

export default function rootLayoutContainer({ children }) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div
      className={
        pathname === '/messages'
          ? `${layoutStyle.message_grid_container}`
          : `${layoutStyle.dashboard_grid_container}`
      }
    >
      <header
        className={
          pathname === '/messages'
            ? `${layoutStyle.message_header}`
            : `${layoutStyle.dashboard_header}`
        }
      >
        header
      </header>

      <aside
        className={
          pathname === '/messages'
            ? `${layoutStyle.message_aside}`
            : `${layoutStyle.dashboard_aside}`
        }
      >
        aside
      </aside>

      <main
        className={
          pathname === '/messages'
            ? `${layoutStyle.message_main}`
            : `${layoutStyle.dashboard_main}`
        }
      >
        {children}
      </main>
    </div>
  );
}
