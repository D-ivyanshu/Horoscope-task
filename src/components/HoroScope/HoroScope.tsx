import { View, Text, ActivityIndicator, Image } from "react-native";
import Dropdown from "../Dropdown/Dropdown";
import { zodiacSigns } from "../../constants/constants";
import { useEffect, useState } from "react";
import { getHoroscope } from "../../services/horoscopeService";
import { colors } from "../../utils/theme";
import styles from "./styles";

const HoroScope = () => {
  const [selectedZodiacSign, setSelectedZodiacSign] = useState("");
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedZodiacSign) {
      fetchHoroscopeData();
    }
  }, [selectedZodiacSign]);

  const fetchHoroscopeData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getHoroscope(selectedZodiacSign, "today");
      setHoroscopeData(res.data.horoscope_data);
    } catch (error) {
      setError("Failed to fetch horoscope data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleZodiacSelect = (value: string | number) => {
    setSelectedZodiacSign(value as string);
  };

  return (
    <View>
      <Dropdown
        options={zodiacSigns}
        selectedValue={selectedZodiacSign}
        onSelect={handleZodiacSelect}
        placeholder="Select your zodiac sign"
        label="Zodiac Sign"
      />

      {!selectedZodiacSign && (
        <Image
          style={styles.horoscopeImage}
          source={{
            uri: "https://www.mynaksh.com/static/media/mangal.3f5ca793ef98204f4a8b.webp",
          }}
        />
      )}

      {loading && (
        <View style={styles.horoscopeContainer}>
          <ActivityIndicator size="large" color={colors.primary[500]} />
          <Text style={styles.horoscopeText}>Fetching your horoscope...</Text>
        </View>
      )}

      {error && (
        <View style={[styles.errorContainer, styles.horoscopeContainer]}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      {horoscopeData && !loading && !error && (
        <View style={styles.horoscopeContainer}>
          <Text style={styles.horoscopeTitle}>
            {selectedZodiacSign.charAt(0).toUpperCase() +
              selectedZodiacSign.slice(1)}{" "}
            - Today's Horoscope
          </Text>
          <Text style={styles.horoscopeText}>
            {horoscopeData || "No horoscope data available"}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HoroScope;
