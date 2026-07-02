export interface Stat {
  value: string;
  label: string;
  suffix?: string;
  isHighlighted: boolean;
}

export const stats: Stat[] = [
  {
    value: "234",
    suffix: "M",
    label: "Total transactions processed globally",
    isHighlighted: false,
  },
  {
    value: "768",
    suffix: "K",
    label: "Active users on the platform",
    isHighlighted: true,
  },
  {
    value: "5.0",
    suffix: "★",
    label: "Average user satisfaction rating",
    isHighlighted: false,
  },
  {
    value: "$8.8",
    suffix: "B",
    label: "Total assets managed securely",
    isHighlighted: false,
  },
];
