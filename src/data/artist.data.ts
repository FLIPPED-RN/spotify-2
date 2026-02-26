import type { IArtist } from "../types/artist.types";
import { TRACKS } from "./tracks.data";

export const ARTISTS: IArtist[] = [
  {
    name: "FLIPPER",
    image: "",
    listenersCount: 1241253,
    tracks: [],
  },
];

ARTISTS[0].tracks.push(TRACKS[0]);
