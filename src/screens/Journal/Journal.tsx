import { View, Alert } from "react-native";
import { useState, useEffect } from "react";
import JournalHeader from "../../components/JournalHeader/JournalHeader";
import JournalInput from "../../components/JournalInput/JournalInput";
import JournalCard from "../../components/JournalCard/JournalCard";
import {
  saveJournalEntryToStorage,
  getJournalEntriesFromStorage,
  deleteJournalEntryFromStorage,
} from "../../services/journalService";
import { styles } from "./styles";

export interface JournalEntry {
  id: string;
  content: string;
  date: Date;
}

export default function JournalScreen() {
  const [journalText, setJournalText] = useState("");
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // this will load the journal entries from the storage when the component mounts
  useEffect(() => {
    loadJournalEntries();
  }, []);

  const loadJournalEntries = async () => {
    const journalEntries = await getJournalEntriesFromStorage();
    setJournalEntries(journalEntries);
  };

  const saveJournalEntry = async (journalText: string) => {
    if (!journalText.trim()) {
      Alert.alert("Empty Journal", "Please write something before saving.");
      return;
    }

    setIsLoading(true);

    try {
      const newEntry: JournalEntry = {
        id: Date.now().toString(),
        content: journalText.trim(),
        date: new Date(),
      };

      setJournalEntries((prev) => [newEntry, ...prev]);
      await saveJournalEntryToStorage(newEntry);
      setJournalText("");

      Alert.alert("Success", "Journal entry saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save journal entry. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteJournalEntry = (id: string) => {
    Alert.alert(
      "Delete Entry",
      "Are you sure you want to delete this journal entry?",
      [
        { text: "Cancel" },
        {
          text: "Delete",
          onPress: () => {
            setJournalEntries((prev) =>
              prev.filter((entry) => entry.id !== id)
            );
            deleteJournalEntryFromStorage(id);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <JournalHeader />
      <JournalInput
        saveJournalEntry={saveJournalEntry}
        setJournalText={setJournalText}
        isLoading={isLoading}
        journalText={journalText}
      />
      <JournalCard
        deleteJournalEntry={deleteJournalEntry}
        journalEntries={journalEntries}
      />
    </View>
  );
}
