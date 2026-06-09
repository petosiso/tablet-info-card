interface CardHeaderProps {
  icon: string;
  title: string;
}

export const CardHeader = ({ icon, title }: CardHeaderProps) => (
  <div className="tic-header">
    <div className="tic-icon-cell">
      <ha-icon icon={icon}></ha-icon>
    </div>
    <div className="tic-title">{title}</div>
  </div>
);
