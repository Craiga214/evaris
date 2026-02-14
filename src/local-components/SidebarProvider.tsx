import React from "react";
import "./SidebarProvider.css";
import {
  ClipboardIcon,
  HammerIcon,
  SettingsIcon,
  ShellIcon,
  Table2Icon,
  UserRoundIcon,
} from "lucide-react";
import { Button } from "../components/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SidebarProvider({
  name,
  children,
}: {
  name?: string;
  children: React.ReactNode;
}) {
  const nav = useNavigate();

  const [expanded, setExpanded] = useState(true);

  return (
    <div className="sidebar-viewport">
      <aside
        className={expanded ? "expanded" : ""}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="option-group">
          <Button onClick={() => nav("/evaris/character-sheet")}>
            <Table2Icon />
          </Button>
          <h2>Character Sheet</h2>
        </div>
        <div className="option-group">
          <Button onClick={() => nav("/evaris/spell-book")}>
            <ShellIcon />
          </Button>
          <h2>Spells</h2>
        </div>
        <div className="option-group">
          <Button onClick={() => nav("/evaris/inventory")}>
            <ClipboardIcon />
          </Button>
          <h2>Items</h2>
        </div>
        <div className="option-group">
          <Button onClick={() => nav("/evaris/initiative-tracker")}>
            <UserRoundIcon />
          </Button>
          <h2>Initiative</h2>
        </div>
        <div className="option-group">
          <Button onClick={() => nav("/evaris/character-edit")}>
            <HammerIcon />
          </Button>
          <h2>Character Edit</h2>
        </div>
        <div style={{ height: "100%" }}></div>
        <div className="option-group">
          <Button onClick={() => nav("/evaris/settings")}>
            <SettingsIcon />
          </Button>
          <h2>Settings</h2>
        </div>
      </aside>
      <div className="sidebar-inset">
        <header>
          <h1>{name}</h1>
        </header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  );
}
