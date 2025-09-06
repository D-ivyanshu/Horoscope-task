import { View, Text, TextInput, Alert } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { styles } from "./styles";

interface JournalInputProps {
  journalText: string;
  setJournalText: (text: string) => void;
  saveJournalEntry: (text: string) => void;
  isLoading: boolean;
}

const JournalInput = ({
  saveJournalEntry,
  isLoading,
  journalText,
  setJournalText,
}: JournalInputProps) => {
  const getSaveButtonStyle = () => ({
    ...styles.saveButton,
    backgroundColor: journalText.trim() ? "#924f28" : "#D4C4B0",
    opacity: isLoading ? 0.6 : 1,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Reflection</Text>

      <TextInput
        value={journalText}
        onChangeText={(text) => setJournalText(text)}
        editable={!isLoading}
        multiline
        numberOfLines={6}
        maxLength={500}
        style={styles.textInput}
        placeholder="How are you feeling today? What cosmic energies are you experiencing?"
        placeholderTextColor="#999"
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.characterCount}>
          {journalText.length}/500 characters
        </Text>

        <TouchableScale
          activeScale={0.94}
          tension={800}
          friction={800}
          style={getSaveButtonStyle()}
          onPress={() => saveJournalEntry(journalText)}
          disabled={isLoading || !journalText.trim()}
        >
          <Text style={styles.saveButtonText}>
            {isLoading ? "Saving..." : "Save Entry"}
          </Text>
        </TouchableScale>
      </View>
    </View>
  );
};

export default JournalInput;
