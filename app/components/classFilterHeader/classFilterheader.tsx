import Icon from '../icon/icon.jsx';

export default function classFilterFunction(){
  return (
    <div className="grid content-center grid-cols-6 justify-items-center">
      <button className="transition-opacity w-9 fill-primary opacity-60 hover:opacity-100">
        <Icon type="assasin" />
      </button>
      <button className="transition-opacity w-9 fill-primary opacity-60 hover:opacity-100">
        <Icon type="fighter" />
      </button>
      <button className="transition-opacity w-9 fill-primary opacity-60 hover:opacity-100">
        <Icon type="mage" />
      </button>
      <button className="transition-opacity w-9 fill-primary opacity-60 hover:opacity-100">
        <Icon type="marksman" />
      </button>
      <button className="transition-opacity w-9 fill-primary opacity-60 hover:opacity-100">
        <Icon type="support" />
      </button>
      <button className="transition-opacity w-9 fill-primary opacity-60 hover:opacity-100">
        <Icon type="tank" />
      </button>
    </div>
  )
}