import type { KeyboardEvent, MouseEvent } from "react";
import type { TabletInfoRow } from "../types";

interface CardRowProps {
  row: TabletInfoRow;
  onTap: (row: TabletInfoRow) => void;
}

export const CardRow = ({ row, onTap }: CardRowProps) => {
  const isClickable = !!(row.entity || row.tap_action);
  const className = ["tic-row", row.warn ? "warn" : "", isClickable ? "button" : ""].filter(Boolean).join(" ");

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isClickable) {
      return;
    }

    event.stopPropagation();
    onTap(row);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isClickable || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    onTap(row);
  };

  return (
    <div
      className={className}
      role={isClickable ? "button" : "presentation"}
      tabIndex={isClickable ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      title={row.text}
    >
      {row.text}
    </div>
  );
};
