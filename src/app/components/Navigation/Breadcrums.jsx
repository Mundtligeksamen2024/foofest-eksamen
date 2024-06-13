// components/Breadcrumb.js
import Link from 'next/link';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="bg-white p-3 rounded-md shadow-md mb-4">
      <ol className="flex text-gray-700 space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== items.length - 1 ? (
              <Link href={item.path}>
                <a className={`hover:underline font-medium ${item.className}`}>{item.label}</a>
              </Link>
            ) : (
              <span className={`font-bold ${item.className}`}>{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2 text-gray-500">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
