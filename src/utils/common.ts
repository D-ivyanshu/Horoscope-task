/**
 * Formats a date using the built-in Intl.DateTimeFormat API
 * This is more efficient, handles localization, and is the modern standard
 * @param date - Date object, string, or timestamp
 * @param options - Formatting options
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string | number,
  options: {
    includeOrdinal?: boolean;
    includeWeekday?: boolean;
    locale?: string;
  } = {}
): string => {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided");
  }

  const {
    includeOrdinal = true,
    includeWeekday = false,
    locale = "en-US",
  } = options;

  if (includeOrdinal) {
    const formatter = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      ...(includeWeekday && { weekday: "long" }),
    });

    const parts = formatter.formatToParts(dateObj);
    const dayPart = parts.find((part) => part.type === "day");
    const monthPart = parts.find((part) => part.type === "month");
    const yearPart = parts.find((part) => part.type === "year");
    const weekdayPart = includeWeekday
      ? parts.find((part) => part.type === "weekday")
      : null;

    if (dayPart && monthPart && yearPart) {
      const day = parseInt(dayPart.value);
      const ordinal = getOrdinalSuffix(day);
      const weekday = weekdayPart ? `${weekdayPart.value}, ` : "";
      return `${weekday}${day}${ordinal} ${monthPart.value} ${yearPart.value}`;
    }
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...(includeWeekday && { weekday: "long" }),
  }).format(dateObj);
};

const getOrdinalSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
