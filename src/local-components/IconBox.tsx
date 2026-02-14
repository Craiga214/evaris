import "./IconBox.css";
export default function IconBox({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: number;
}) {
  return (
    <div className="icon-box">
      <div className="box">{icon}</div>
      <div className="box">
        <h1>{value}</h1>
      </div>
    </div>
  );
}
