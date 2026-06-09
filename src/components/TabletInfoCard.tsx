import type { KeyboardEvent } from "react";
import type { HomeAssistant, ResolvedTabletInfoCardConfig, TabletInfoRow } from "../types";
import { buildStyles } from "../styles";
import { buildCardViewModel } from "../viewModel";
import { CardHeader } from "./CardHeader";
import { CardRows } from "./CardRows";

interface TabletInfoCardProps {
  config: ResolvedTabletInfoCardConfig;
  hass?: HomeAssistant;
  onCardTap: () => void;
  onRowTap: (row: TabletInfoRow) => void;
}

export const TabletInfoCard = ({ config, hass, onCardTap, onRowTap }: TabletInfoCardProps) => {
  const viewModel = buildCardViewModel(config, hass);
  const cardClassName = ["tic-card", viewModel.isClickable ? "clickable" : ""].filter(Boolean).join(" ");

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!viewModel.isClickable || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    onCardTap();
  };

  return (
    <>
      <style>{buildStyles(config, viewModel)}</style>
      <ha-card>
        <div
          className={cardClassName}
          role={viewModel.isClickable ? "button" : "presentation"}
          tabIndex={viewModel.isClickable ? 0 : -1}
          onClick={viewModel.isClickable ? onCardTap : undefined}
          onKeyDown={handleKeyDown}
        >
          <CardHeader icon={viewModel.icon} title={viewModel.title} />
          <CardRows rows={viewModel.rows} onRowTap={onRowTap} />
        </div>
      </ha-card>
    </>
  );
};
