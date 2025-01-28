import { Theme } from "../../contexts";
import { useTheme } from "../../hooks";

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <select
        onChange={(e) => setTheme(e.target.value as Theme)}
        className="rounded border p-2"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
