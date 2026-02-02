import Button from "./Button";

const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "Valentines",
  "Movies",
  "Serials",
  "Shows",
  "Badminton",
  "Swimming",
];

const ButtonList = () => {
  return (
    <div className="w-full overflow-x-scroll scrollbar-hide">
      <div className="flex flex-nowrap">
        {List.map((text) => {
          return <Button name={text} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
