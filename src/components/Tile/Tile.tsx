import s from "./Tile.module.css";

type Props = {
  children?: React.ReactNode;
}

export default function Tile({children}: Props) {
  return (
    <div className={s.tile}>
      {children}
    </div>
  );
}
