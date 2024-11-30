export interface Player {
  id: number;
  name: string;
  category:
    | "NC"
    | "S2"
    | "S1"
    | "N3"
    | "N2"
    | "N1"
    | "CM"
    | "M"
    | "FM"
    | "IM"
    | "GM"
    | "WNC"
    | "W2S"
    | "W1S"
    | "W3N"
    | "W2N"
    | "W1N"
    | "WCM"
    | "WM"
    | "WFM"
    | "WIM"
    | "WGM";
  score: number;
  image: string | null;
}
