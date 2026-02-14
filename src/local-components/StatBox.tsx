import {
  BrainIcon,
  DumbbellIcon,
  EyeIcon,
  HeartCrackIcon,
  PersonStandingIcon,
  SpeechIcon,
} from "lucide-react";
import "./StatBox.css";
export default function StatBox({
  name,
  value,
}: {
  name: string;
  value: number;
}) {
  const modifier = Math.floor((value - 10) / 2);
  return (
    <div className="stat-box">
      <div className="stat-container">
        {(name === "STR" && (
          <DumbbellIcon className="box1 icon" color="var(--muted-border)" />
        )) ||
          (name === "DEX" && (
            <PersonStandingIcon
              className="box1 icon"
              color="var(--muted-border)"
            />
          )) ||
          (name === "CON" && (
            <HeartCrackIcon className="box1 icon" color="var(--muted-border)" />
          )) ||
          (name === "INT" && (
            <BrainIcon className="box1 icon" color="var(--muted-border)" />
          )) ||
          (name === "WIS" && (
            <EyeIcon className="box1 icon" color="var(--muted-border)" />
          )) ||
          (name === "CHA" && (
            <SpeechIcon className="box1 icon" color="var(--muted-border)" />
          ))}
        <div className="box1">
          <h1>{value}</h1>
        </div>
      </div>
      <h2 className="stat-mod">{modifier}</h2>
    </div>
  );
}
