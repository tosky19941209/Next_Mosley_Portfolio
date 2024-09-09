import Avatar from "@/components/avatar";
import Profile from "@/components/profile";
export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-[80%] bg-white flex-row md:flex gap-10 row-start-2 items-center sm:items-start bg-red-100">
        <Avatar />
        <Profile />
      </main>
    </div>
  );
}
