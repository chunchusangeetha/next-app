import { notFound } from "next/navigation";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

async function getUserData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}

export default async function UserPage({ params }: { params: { slug: string } }) {
  const users = await getUserData();
  const user = users.find((u: { name: string }) => slugify(u.name) === params.slug);

  if (!user) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Details</h1>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Website:</span>{" "}
          <a href={`https://${user.website}`} className="text-blue-500 hover:underline" target="_blank">
            {user.website}
          </a>
        </p>
        <div className="text-gray-600">
          <p className="font-semibold">Address:</p>
          <p>
            {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
        </div>
        <div className="text-gray-600">
          <p className="font-semibold">Company:</p>
          <p>{user.company.name}</p>
          <p className="italic text-sm">{user.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
}
