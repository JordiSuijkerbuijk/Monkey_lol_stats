import Crown from "./types/crown";
import Coins from "./types/coins";
import Skull from "./types/skull";
import Handshake from "./types/handshake";
import Eye from "./types/eye";
import Ellipsis from "./types/ellipsis";
import MageIcon from "./types/mageIcon"
import AssasinIcon from "./types/assasinIcon";
import FighterIcon from "./types/fighterIcon";
import MarksmanIcon from "./types/marksmanIcon"
import TankIcon from "./types/tankIcon";
import SupportIcon from './types/supportIcon'

const iconTypes = {
  crown: Crown,
  coins: Coins,
  skull: Skull,
  handshake: Handshake,
  eye: Eye,
  ellipsis: Ellipsis,
  mage: MageIcon,
  assasin: AssasinIcon,
  fighter: FighterIcon,
  marksman: MarksmanIcon,
  tank: TankIcon,
  support: SupportIcon
};

export default function Icon({ type = null, ...rest }) {
  const IconComp = iconTypes[type];
  if (!type || type === "" || IconComp === undefined) return null;
  return <IconComp {...rest} />;
}
