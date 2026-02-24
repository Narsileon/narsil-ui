import { Button } from "@narsil-ui/components/button";
import {
  DropdownMenuItem,
  DropdownMenuPopup,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@narsil-ui/components/dropdown-menu";
import { Icon } from "@narsil-ui/components/icon";
import { Tooltip } from "@narsil-ui/components/tooltip";
import { useTranslator } from "@narsil-ui/components/translator";
import { type ComponentProps } from "react";

type SortableItemMenuProps = ComponentProps<typeof DropdownMenuTrigger> & {
  onMoveDown?: () => void;
  onMoveUp?: () => void;
  onRemove?: () => void;
};

function SortableItemMenu({
  children,
  onMoveDown,
  onMoveUp,
  onRemove,
  ...props
}: SortableItemMenuProps) {
  const { trans } = useTranslator();

  const deleteLabel = trans("ui.delete");
  const menuLabel = trans("ui.menu");
  const moveUpLabel = trans("ui.move_up");
  const moveDownLabel = trans("ui.move_down");

  return (
    <DropdownMenuRoot>
      <Tooltip tooltip={menuLabel}>
        <DropdownMenuTrigger
          {...props}
          render={
            <Button
              aria-label={menuLabel}
              size="icon-sm"
              variant="ghost-secondary"
              onClick={(event) => event.stopPropagation()}
            >
              <Icon name="more-horizontal" />
            </Button>
          }
        />
      </Tooltip>
      <DropdownMenuPortal>
        <DropdownMenuPositioner align="end">
          <DropdownMenuPopup onClick={(event) => event.stopPropagation()}>
            <DropdownMenuItem disabled={!onMoveUp} onClick={onMoveUp}>
              <Icon name="move-up" />
              {moveUpLabel}
            </DropdownMenuItem>
            <DropdownMenuItem disabled={!onMoveDown} onClick={onMoveDown}>
              <Icon name="move-down" />
              {moveDownLabel}
            </DropdownMenuItem>
            {onRemove ? (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onRemove}>
                  <Icon name="trash" />
                  {deleteLabel}
                </DropdownMenuItem>
              </>
            ) : null}
            {children ? (
              <>
                <DropdownMenuSeparator />
                {children}
              </>
            ) : null}
          </DropdownMenuPopup>
        </DropdownMenuPositioner>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}

export default SortableItemMenu;
