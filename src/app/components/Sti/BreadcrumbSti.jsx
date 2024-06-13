import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BreadcrumbSti = () => {
  const [pathnames, setPathnames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPathnames(router.asPath.split('/').filter((x) => x));
    }
  }, [router.isReady, router.asPath]);

  if (!router.isReady) return null;

  return (
    <nav className="p-3 rounded mb-4">
      <ul className="flex">
        <li>
          <Link href="/" style={{ color: 'black' }}>
            Tickets
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = '/' + pathnames.slice(0, index + 1).join('/');
          const isLast = index === pathnames.length - 1;
          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className='text-Black'>{value}</span>
              ) : (
                <Link href={href}>
                  <a className='text-Black'>{value}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadcrumbSti;
