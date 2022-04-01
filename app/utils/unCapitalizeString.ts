export default function unCapitalizeString(word: string){
  return word.charAt(0).toLowerCase() + word.slice(1)
}