import type { TabletInfoRow } from "../types";
import { CardRow } from "./CardRow";

interface CardRowsProps {
  rows: TabletInfoRow[];
  onRowTap: (row: TabletInfoRow) => void;
}

export const CardRows = ({ rows, onRowTap }: CardRowsProps) => (
  <div className="tic-rows">
    {rows.length > 0 ? (
      rows.map((row, index) => <CardRow key={`${row.entity ?? "row"}-${index}`} row={row} onTap={onRowTap} />)
    ) : (
      <div className="tic-row empty">No rows configured</div>
    )}
  </div>
);
