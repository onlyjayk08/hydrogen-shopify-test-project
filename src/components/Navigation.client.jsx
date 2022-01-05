import {Link} from '@shopify/hydrogen/client';

export default function Navigation({collections}) {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        <li>
          <Link
            to={"/"}
            className="block p-4 hover:opacity-80">
              Home
          </Link>
        </li>
        <li>
          <Link
            to={"/collections"}
            className="block p-4 hover:opacity-80">
              Collections
          </Link>
        </li>
        <li>
          <Link
            to={"/blogs"}
            className="block p-4 hover:opacity-80">
              Blogs
          </Link>
        </li>

        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
