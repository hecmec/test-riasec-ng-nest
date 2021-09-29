/**
 * Question looks like this
 *  {
    "Id": "de569a1c-71b6-4b22-920b-030d85408411",
    "Code": "A",
    "Question": "Je suis à l'aise quand je travaille seul·e "
  },
*/

export interface QuestionItem {
  Id: string;
  Code: string;
  Question: string;
  // We add a selected boolean to easily grab the selected items
  IsSelected?: boolean;
}
