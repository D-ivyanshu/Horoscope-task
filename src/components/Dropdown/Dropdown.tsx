import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { theme, colors } from "../../utils/theme";

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  selectedValue?: string | number;
  onSelect: (value: string | number) => void;
  placeholder?: string;
  label?: string;
  style?: any;
  dropdownStyle?: any;
  textStyle?: any;
  placeholderStyle?: any;
  maxHeight?: number;
  searchable?: boolean;
  onSearch?: (query: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  selectedValue,
  onSelect,
  placeholder = "Select an option",
  label,
  style,
  dropdownStyle,
  textStyle,
  placeholderStyle,
  maxHeight = theme.normalize(400),
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const handleSelect = (value: string | number) => {
    onSelect(value);
    setIsOpen(false);
  };

  const renderOption = ({ item }: { item: DropdownOption }) => (
    <TouchableScale
      activeScale={0.94}
      tension={800}
      friction={800}
      style={[
        styles.option,
        item.disabled && styles.optionDisabled,
        item.value === selectedValue && styles.optionSelected,
      ]}
      onPress={() => !item.disabled && handleSelect(item.value)}
      disabled={item.disabled}
    >
      <Text
        style={[
          styles.optionText,
          item.disabled && styles.optionTextDisabled,
          item.value === selectedValue && styles.optionTextSelected,
        ]}
      >
        {item.label}
      </Text>
    </TouchableScale>
  );

  return (
    <View style={[styles.container, style]}>
      {/* {label && <Text style={styles.label}>{label}</Text>} */}
      <TouchableScale
        activeScale={0.94}
        tension={800}
        friction={800}
        style={[styles.dropdownButton, dropdownStyle]}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text
          style={[
            styles.dropdownText,
            !selectedOption && styles.placeholderText,
            textStyle,
            !selectedOption && placeholderStyle,
          ]}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Text style={[styles.arrow, isOpen && styles.arrowOpen]}>▼</Text>
      </TouchableScale>

      <Modal
        visible={isOpen}
        transparent
        animationType="none"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setIsOpen(false)}
        >
          <View style={{ alignItems: "center" }}>
            <View style={[styles.dropdownContainer, { maxHeight }]}>
              <View style={styles.dropdownContent}>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item.value.toString()}
                  renderItem={renderOption}
                  showsVerticalScrollIndicator={false}
                  nestedScrollEnabled
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: colors.neutral[700],
    marginBottom: theme.spacing.xs,
  },
  required: {
    color: colors.error[500],
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#924f28",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  dropdownText: {
    fontSize: theme.typography.fontSize.base,
    color: colors.neutral[800],
    flex: 1,
  },
  placeholderText: {
    color: colors.neutral[500],
  },
  dropdownTextDisabled: {
    color: colors.neutral[400],
  },
  arrow: {
    fontSize: theme.typography.fontSize.sm,
    color: colors.neutral[600],
    marginLeft: theme.spacing.sm,
    transform: [{ rotate: "0deg" }],
  },
  arrowOpen: {
    transform: [{ rotate: "180deg" }],
  },
  errorText: {
    fontSize: theme.typography.fontSize.sm,
    color: colors.error[500],
    marginTop: theme.spacing.xs,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
  },
  dropdownContainer: {
    // marginHorizontal: theme.spacing.md,
    width: "80%",
    backgroundColor: colors.white,
    borderRadius: theme.borderRadius.md,
    // ...theme.shadows.lg,
  },
  dropdownContent: {
    overflow: "hidden",
  },
  option: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  optionSelected: {
    backgroundColor: colors.primary[50],
  },
  optionDisabled: {
    backgroundColor: colors.neutral[50],
  },
  optionText: {
    fontSize: theme.typography.fontSize.base,
    color: colors.neutral[800],
  },
  optionTextSelected: {
    color: colors.primary[600],
    fontWeight: theme.typography.fontWeight.medium,
  },
  optionTextDisabled: {
    color: colors.neutral[400],
  },
});

export default Dropdown;
