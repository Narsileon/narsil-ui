import { Tooltip } from "@narsil-ui/blocks/tooltip";
import { Icon } from "@narsil-ui/components/icon";
import { ToggleGroupItem, ToggleGroupRoot } from "@narsil-ui/components/toggle-group";
import { useTranslator } from "@narsil-ui/components/translator";
import { themes, useThemeStore } from "@narsil-ui/stores/theme-store";
import { useRef } from "react";

type ThemesProps = {
  className?: string;
};

function Themes({ ...props }: ThemesProps) {
  const { trans } = useTranslator();

  const { theme: currentTheme, setTheme } = useThemeStore();

  return (
    <ToggleGroupRoot multiple={false} value={[currentTheme]} {...props}>
      {themes.map((theme) => {
        const ref = useRef<HTMLButtonElement>(null);

        const handleClick = () => {
          if (!ref.current) {
            return;
          }

          const rect = ref.current.getBoundingClientRect();

          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;

          setTheme(theme, { x, y });
        };

        return (
          <Tooltip tooltip={trans(`themes.${theme}`)} key={theme}>
            <ToggleGroupItem
              ref={ref}
              size="icon"
              variant="outline"
              value={theme}
              onClick={handleClick}
            >
              <Icon name={theme === "light" ? "sun" : theme === "dark" ? "moon" : "sun-moon"} />
            </ToggleGroupItem>
          </Tooltip>
        );
      })}
    </ToggleGroupRoot>
  );
}

export default Themes;
