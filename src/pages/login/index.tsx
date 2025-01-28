const LoginPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className={"flex w-full max-w-md flex-col"}>
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-xl font-bold">Welcome Back</h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-gray-900 p-2 text-white hover:bg-gray-900/90"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
