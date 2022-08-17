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
    concept: "Yin Yang Project",
    entry:
      "Working through getting project structure setup and spliting work responsibility",
    mood: "🥱 Tired",
  },
  {
    id: 5,
    date: "07/23/2022",
    concept: "Yin Yang Project",
    entry: "Agreed on theme and came together with congruent CSS Theme",
    mood: "😋 Hungry",
  },
];

export const getJournalEntries = () => {
  const copyOfEntries = jentries;
  return copyOfEntries;
};
