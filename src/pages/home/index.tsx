import ThemeToggle from "../../components/theme-toggle";

const HomePage = () => {
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-bold underline dark:text-white">
            Hello World!
          </h1>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
