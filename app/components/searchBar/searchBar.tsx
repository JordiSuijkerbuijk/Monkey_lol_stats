import { Form } from "remix";
import Icon from "../icon/icon";

type Props = {
  placeholder?: String;
};

export default function Searchbar({ placeholder }: Props) {
  return (
    <Form method="get" action="/getSummoner" className="relative">
      <input
        type="text"
        name="summoner name"
        className="py-2 pl-4 rounded-full bg-primary pr-14 text-background outline-0 focus-visible:outline-1"
        placeholder={placeholder && "Searchterm..."}
      />
      <button className="absolute flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full right-1 top-1/2 bg-secondary">
        <span className="w-4 fill-primary">
          <Icon type="magnifyingGlass" />
        </span>
      </button>
    </Form>
  );
}
