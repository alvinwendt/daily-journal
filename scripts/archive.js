// console.log("I'm here to party");

const jentries = [
  {
    id: 1,
    date: "07/12/2022",
    concept: "Daily Journal 1",
    entry: "Flexbox is tricky",
    mood: "😁 Bussin'",
  },
  {
    id: 2,
    date: "07/16/2022",
    concept: "Daily Journal 1",
    entry: "Tried some cool stuff with CSS",
    mood: "😁 Bussin'",
  },
  {
    id: 3,
    date: "07/18/2022",
    concept: "Github",
    entry: "Found some cool git commands for when SHTF",
    mood: "😐 Meh",
  },
  {
    id: 4,
    date: "07/19/2022",
    concept: "Yin Yang Project Part 1",
    entry:
      "Working through getting project structure setup and spliting work responsibility",
    mood: "🥱 Tired",
  },
  {
    id: 5,
    date: "07/23/2022",
    concept: "Yin Yang Project Part 1",
    entry: "Agreed on theme and came together with congruent CSS Theme",
    mood: "😋 Hungry",
  },
  {
    id: 6,
    date: "07/25/2022",
    concept: "Yin Yang Project Part 2",
    entry: "Learned more about clean and readable code",
    mood: "😁 Bussin'",
  },
  {
    id: 7,
    date: "07/26/2022",
    concept: "Yin Yang Project Part 2",
    entry: "Added links and a header to complete page",
    mood: "🤪 Fun",
  },
  {
    id: 8,
    date: "07/30/2022",
    concept: "Leonids Toys",
    entry: "Worked on Leonids Toys project. Not very interesting",
    mood: "😢 Sad",
  },
];

export const getJournalEntries = () => {
  const copyOfEntries = jentries;
  return copyOfEntries;
};
