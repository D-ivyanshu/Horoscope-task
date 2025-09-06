import AsyncStorage from "@react-native-async-storage/async-storage";

export const getJournalEntriesFromStorage = async () => {
  const journalEntries = await AsyncStorage.getItem("journalEntries");
  return journalEntries ? JSON.parse(journalEntries) : [];
};

export const saveJournalEntryToStorage = async (entry: any) => {
  const journalEntries = await getJournalEntriesFromStorage();
  const newJournalEntries = [entry, ...journalEntries];
  await AsyncStorage.setItem(
    "journalEntries",
    JSON.stringify(newJournalEntries)
  );
};

export const deleteJournalEntryFromStorage = async (id: string) => {
  const journalEntries = await getJournalEntriesFromStorage();
  const newJournalEntries = journalEntries.filter(
    (entry: any) => entry.id !== id
  );
  await AsyncStorage.setItem(
    "journalEntries",
    JSON.stringify(newJournalEntries)
  );
};
