// app/components/Breadcrumb.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className=" px-20 py-10">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="text-text1 capitalize">
            Home
          </Link>
        </li>
        {pathnames.map((segment, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex items-center">
              <span className="mx-2 text-text1 capitalize">/</span>
              {isLast ? (
                <span className=" capitalize">{segment}</span>
              ) : (
                <Link href={routeTo} className="text-text1 capitalize">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
