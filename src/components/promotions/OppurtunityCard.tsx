interface Props {
  index: number;
  oppurtunity: {
    title: string;
    description: string;
    color: string;
  };
}

export default function OppurtunityCard({ index, oppurtunity }: Props) {
  return (
    <div className={`${index % 2 === 0 ? 'justify-end rotate-[-1.85deg]' : 'justify-start rotate-[1.85deg]'} flex hover:rotate-0 transition-all duration-200`}>
      <div className="bg-[#F8F9FF] space-x-3 rounded-[8px] p-4 flex items-center w-full max-w-[45rem]">
        <div>
          <div
            style={{ backgroundColor: oppurtunity.color }}
            className="w-[50px] h-[45px] rounded-[4px] flex justify-center items-center text-white text-4xl"
          >
            {index + 1}
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-[#131A34] text-lg font-semibold">
            {oppurtunity.title}
          </h1>

          <p className="text-[#545662] !font-light">
            {oppurtunity.description}
          </p>
        </div>
      </div>
    </div>
  );
} 