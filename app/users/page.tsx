import Link from "next/link";

async function getUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export default async function Users() {
  const users = await getUserData();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users List</h1>

      <ul className="space-y-4">
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id} className="text-center">
             <Link
              href={`/users/${slugify(user.name)}`}
              className="block w-full bg-white hover:bg-blue-50 text-blue-600 text-center font-medium px-4 py-2 rounded shadow"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
