interface Props {
  value: string;
}

const Chip = (props: Props) => {
  return (
    <div className="rounded-lg bg-accent py-1.5 px-3 font-sans text-xs font-bold uppercase text-white max-w-max">
      <span>{props.value}</span>
    </div>
  );
};

export default Chip;
