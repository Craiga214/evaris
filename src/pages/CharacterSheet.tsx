import { FootprintsIcon, HeartIcon, ShieldIcon } from "lucide-react";
import IconBox from "../local-components/IconBox";
import SidebarProvider from "../local-components/SidebarProvider";
import StatBox from "../local-components/StatBox";
import "./CharacterSheet.css";
export default function CharacterSheet() {
  return (
    <SidebarProvider name="Character Sheet">
      <div>
        <div className="cs-array">
          <StatBox name="STR" value={18} />
          <StatBox name="DEX" value={14} />
          <StatBox name="CON" value={9} />
          <StatBox name="INT" value={11} />
          <StatBox name="WIS" value={13} />
          <StatBox name="CHA" value={29} />
        </div>
        <div className="cs-array">
          <IconBox
            icon={<HeartIcon color="var(--muted-border)" className="full" />}
            value={12}
          />
          <IconBox
            icon={<ShieldIcon color="var(--muted-border)" className="full" />}
            value={19}
          />
          <IconBox
            icon={
              <FootprintsIcon color="var(--muted-border)" className="full" />
            }
            value={30}
          />
        </div>
      </div>
    </SidebarProvider>
  );
}
