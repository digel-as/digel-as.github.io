interface Props {
  value: string;
}

const Chip = (props: Props) => {
  return (
    <div className="rounded-lg bg-accent py-1 px-2 font-sans text-xs font-semibold uppercase text-white max-w-max">
      <span>{props.value}</span>
    </div>
  );
};

export default Chip;
