import Crown from "./types/crown";
import Coins from "./types/coins";
import Skull from "./types/skull";
import Handshake from "./types/handshake";
import Eye from "./types/eye";
import Ellipsis from "./types/ellipsis";
import MageIcon from "./types/mageIcon";
import AssasinIcon from "./types/assasinIcon";
import FighterIcon from "./types/fighterIcon";
import MarksmanIcon from "./types/marksmanIcon";
import TankIcon from "./types/tankIcon";
import SupportIcon from "./types/supportIcon";
import Fist from "./types/fist";
import FistIncrease from "./types/fistIncrease";
import Wand from "./types/wand";
import Shield from "./types/shield";
import ShieldIncrease from "./types/shieldIncrease";
import SchoolCap from "./types/schoolCap";
import Heart from "./types/heart";
import HeartIncrease from "./types/heartIncrease";
import Target from "./types/target";
import AxeSwing from "./types/axeSwing";
import AxeSwingIncrease from "./types/axeswingIncrease";
import Explosion from "./types/explosion";
import ExplosionIncrease from "./types/explosionIncrease";
import HealthPotion from "./types/healthPotion";
import HealthPotionIncrease from "./types/healthPotionIncrease";
import WingedBoot from "./types/wingedBoot";
import Raindrop from "./types/raindrop";
import RaindropIncrease from "./types/raindropIncrease";
import PotionBall from "./types/potionBall";
import PotionBallIncrease from "./types/potionBallIncrease";
import Holyshield from "./types/holyshield";
import HolyShieldIncrease from "./types/holyshieldIncrease";
import MagnifyingGlass from "./types/magnifyingGlass";

export const iconTypes = {
  crown: Crown,
  coins: Coins,
  skull: Skull,
  handshake: Handshake,
  eye: Eye,
  ellipsis: Ellipsis,
  mage: MageIcon,
  assassin: AssasinIcon,
  fighter: FighterIcon,
  marksman: MarksmanIcon,
  tank: TankIcon,
  support: SupportIcon,
  fist: Fist,
  fistincrease: FistIncrease,
  wand: Wand,
  shield: Shield,
  shieldincrease: ShieldIncrease,
  schoolcap: SchoolCap,
  heart: Heart,
  heartincrease: HeartIncrease,
  target: Target,
  axeswing: AxeSwing,
  axeswingincrease: AxeSwingIncrease,
  explosion: Explosion,
  explosionincrease: ExplosionIncrease,
  healthpotion: HealthPotion,
  healthpotionincrease: HealthPotionIncrease,
  wingedboot: WingedBoot,
  raindrop: Raindrop,
  raindropincrease: RaindropIncrease,
  potionball: PotionBall,
  potionballincrease: PotionBallIncrease,
  holyshield: Holyshield,
  holyshieldincrease: HolyShieldIncrease,
  magnifyingGlass: MagnifyingGlass,
};

type IconProps = {
  type: keyof typeof iconTypes;
  className?: string;
};

export default function Icon({ type, ...rest }: IconProps) {
  const IconComp = iconTypes[type];
  if (!type || IconComp === undefined) return null;
  return <IconComp {...rest} />;
}
