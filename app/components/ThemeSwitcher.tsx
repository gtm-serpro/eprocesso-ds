import { useTheme } from './ThemeProvider';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'accessible')}
        className="bg-background text-foreground rounded-md border border-input px-3 py-1"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="accessible">Accessible</option>
      </select>
    </div>
  );
}