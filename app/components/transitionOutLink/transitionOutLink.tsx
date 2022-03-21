import { MouseEvent } from 'react';
import { Link, useNavigate } from 'remix';

import { transitionOut, transitionTimingOut } from '../../utils/transitions'

type Props = {
  to: string,
  className: string,
  prefetch?: "none" | "intent" | "render",
  children: React.ReactNode
}

export default function TransitionOutLink(props: Props){
  const navigate = useNavigate();

  function handleNavigation(e: MouseEvent, path: string){
    e.preventDefault();
    transitionOut();
    setTimeout(() => {
      navigate(path)
    }, transitionTimingOut)
  }

  return (
    <Link
      to={props.to}
      className={props.className}
      onClick={(e: MouseEvent) => handleNavigation(e, props.to)}
      prefetch={props.prefetch ? props.prefetch : 'none'}
    >
      {props.children}
    </Link>
  )
}