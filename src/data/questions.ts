export interface Question {
  id: number;
  text: string;
  category: 'Outdoors' | 'Food' | 'Culture' | 'Weather' | 'Activities';
}

export const questions: Question[] = [
  // Outdoors
  { id: 1, text: "Gone hiking in Acadia National Park", category: "Outdoors" },
  { id: 2, text: "Climbed Mount Katahdin", category: "Outdoors" },
  { id: 3, text: "Gone moose watching", category: "Outdoors" },
  { id: 4, text: "Camped in Baxter State Park", category: "Outdoors" },
  { id: 5, text: "Seen the Northern Lights in Maine", category: "Outdoors" },
  
  // Food
  { id: 6, text: "Eaten a lobster roll", category: "Food" },
  { id: 7, text: "Had wild Maine blueberries", category: "Food" },
  { id: 8, text: "Tried Moxie soda", category: "Food" },
  { id: 9, text: "Eaten at Red's Eats in Wiscasset", category: "Food" },
  { id: 10, text: "Made your own maple syrup", category: "Food" },
  
  // Culture
  { id: 11, text: "Said 'ayuh' unironically", category: "Culture" },
  { id: 12, text: "Owned L.L.Bean boots", category: "Culture" },
  { id: 13, text: "Been to the Common Ground Fair", category: "Culture" },
  { id: 14, text: "Attended a town meeting", category: "Culture" },
  { id: 15, text: "Used 'wicked' as an adverb", category: "Culture" },
  
  // Weather
  { id: 16, text: "Survived a Nor'easter", category: "Weather" },
  { id: 17, text: "Gone skiing at Sugarloaf", category: "Weather" },
  { id: 18, text: "Shoveled more than 2 feet of snow in one storm", category: "Weather" },
  { id: 19, text: "Experienced all four seasons in one day", category: "Weather" },
  { id: 20, text: "Gone ice fishing", category: "Weather" },
  
  // Activities
  { id: 21, text: "Gone to the Fryeburg Fair", category: "Activities" },
  { id: 22, text: "Visited the Desert of Maine", category: "Activities" },
  { id: 23, text: "Taken a whale watching tour", category: "Activities" },
  { id: 24, text: "Ridden on a lobster boat", category: "Activities" },
  { id: 25, text: "Been to a bean supper", category: "Activities" },
  { id: 26, text: "Visited Stephen King's house in Bangor", category: "Activities" },
  { id: 27, text: "Gone antiquing in Wells", category: "Activities" },
  { id: 28, text: "Attended the Maine Potato Blossom Festival", category: "Activities" },
  { id: 29, text: "Visited the Portland Head Light", category: "Activities" },
  { id: 30, text: "Ridden the Narrow Gauge Railroad", category: "Activities" },
  { id: 31, text: "Gone to Old Orchard Beach in the summer", category: "Activities" },
  { id: 32, text: "Picked potatoes in Aroostook County", category: "Activities" },
  { id: 33, text: "Been to a Maine Sea Dogs game", category: "Activities" },
  { id: 34, text: "Visited the Maine State Museum", category: "Activities" },
  { id: 35, text: "Gone shopping at the Kittery outlets", category: "Activities" },
  { id: 36, text: "Been to the Auburn mall", category: "Activities" },
]; 