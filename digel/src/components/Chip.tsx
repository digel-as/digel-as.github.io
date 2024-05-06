interface Props {
  value: string;
}

const Chip = (props: Props) => {
  return (
    <div className="relative inline-block select-none rounded-lg bg-accent py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
      <span className="text-center">{props.value}</span>
    </div>
  );
};

export default Chip;
