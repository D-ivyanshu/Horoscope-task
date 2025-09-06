import { ScrollView, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import TouchableScale from "react-native-touchable-scale";
import { formatDate } from "../../utils/common";
import { JournalEntry } from "../../screens/Journal/Journal";
import styles from "./styles";
import theme from "../../utils/theme";

const JournalCard = ({
  deleteJournalEntry,
  journalEntries,
}: {
  deleteJournalEntry: (id: string) => void;
  journalEntries: JournalEntry[];
}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Past Reflections</Text>

      {journalEntries.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Ionicons
            name="book-outline"
            size={theme.normalize(48)}
            color={styles.emptyStateIcon.color}
          />
          <Text style={styles.emptyStateText}>
            No journal entries yet.{"\n"}Start your cosmic journey today!
          </Text>
        </View>
      ) : (
        journalEntries.map((entry: JournalEntry) => (
          <View key={entry.id} style={styles.journalEntryContainer}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryDate}>
                {formatDate(entry.date, { includeWeekday: true })}
              </Text>

              <TouchableScale
                activeScale={0.9}
                onPress={() => deleteJournalEntry(entry.id)}
                style={styles.deleteButton}
              >
                <Ionicons
                  name="trash-outline"
                  size={theme.normalize(16)}
                  color={styles.deleteIcon.color}
                />
              </TouchableScale>
            </View>

            <Text style={styles.entryContent}>{entry.content}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default JournalCard;
