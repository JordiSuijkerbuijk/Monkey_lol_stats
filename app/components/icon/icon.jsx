import Crown from "./types/crown";
import Coins from "./types/coins";
import Skull from "./types/skull";
import Handshake from "./types/handshake";
import Eye from "./types/eye";
import Ellipsis from "./types/ellipsis";

const iconTypes = {
  crown: Crown,
  coins: Coins,
  skull: Skull,
  handshake: Handshake,
  eye: Eye,
  ellipsis: Ellipsis,
};

export default function Icon({ type = null, ...rest }) {
  const IconComp = iconTypes[type];
  if (!type || type === "" || IconComp === undefined) return null;
  return <IconComp {...rest} />;
}
