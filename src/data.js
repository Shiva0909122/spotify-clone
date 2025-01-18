// FileName: data.js

import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Sunrise Serenade",
      cover:
        "https://burst.shopifycdn.com/photos/hand-on-the-neck-of-a-guitar-in-a-g-chord.jpg?height=182&format=pjpg&exif=0&iptc=0",
      artist: " Harmony Harp",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Urban Groove",
      cover:
        "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=600",
      artist: "Beatmaster B",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mystic Echo",
      cover:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004210619/3408428b23c516b1687c748cb7de7be7.webp",
      artist: " Harmony Harp",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Electro Vibes",
      cover:
        "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      artist: "Synthwave Sensation",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazzy Whispers",
      cover:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004210806/DemotivationalPosterfull936506.jpg",
      artist: "Smooth Sax Serenade",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004184006/SoundHelix-Song-10.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tropical Breez",
      cover:
        "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=600",
      artist: "Island Rhythms",
      audio:
        "https://media.geeksforgeeks.org/wp-content/uploads/20231004191840/Zinda-Banda---Jawan-(1).mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
