import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from "../../../data/menu.data";
import { Menu } from "./Menu";

export function LeftSidebar() {
  return (
    <aside>
      <Menu items={MENU_ITEMS} />

      <hr />

      <Menu items={LIBRARY_MENU_ITEMS} title="Your Library" />

      <hr />

      <Menu items={[]} title="Playlists" />
    </aside>
  );
}
