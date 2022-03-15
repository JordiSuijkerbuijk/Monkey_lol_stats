import { Link } from 'remix';
import Container from '../container/container';

export default function Navbar() {
  return (
    <>
      <div className='relative w-full h-[60px]'></div>
      <nav className='flex bg-background fixed top-0 w-full'>
        <span className='absolute text-3xl h-[60px] flex items-center ml-2'>
          <Link to='/' className=''>
            🐒
          </Link>
        </span>
        <Container>
          <div className='flex space-x-4 justify-center items-center py-2 h-[60px]'>
            <Link
              to='/clash'
              className='flex text-medium text-tertiary font-bebas tracking-wider overflow-hidden h-[20px]'
            >
              Clash
            </Link>
            <div className='h-[14px] w-[1px] bg-primary' />
            <Link
              to='/stats'
              className='flex text-medium text-tertiary font-bebas tracking-wider overflow-hidden h-[20px]'
            >
              Stats
            </Link>
            <div className='h-[14px] w-[1px] bg-primary' />
            <Link
              to='/champions'
              className='flex text-medium text-tertiary font-bebas tracking-wider overflow-hidden h-[20px]'
            >
              Champions
            </Link>
          </div>
        </Container>
      </nav>
    </>
  );
}
