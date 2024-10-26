export interface Player {
  id: number;
  name: string;
  category: "NC" | "2S" | "1S" | "3N" | "2N" | "1N" | "CM" | "M" | "FM" | "IM" | "GM" | "WNC" | "W2S" | "W1S" | "W3N" | "W2N" | "W1N" | "WCM" | "WM" | "WFM" | "WIM" | "WGM";
  score: number;
  image: string | null;
}
