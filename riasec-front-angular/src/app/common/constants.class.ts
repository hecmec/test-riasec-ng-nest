/**
 * Les Types au nombre de 6 (RIASEC): Réaliste, Investigateur, Artiste, Social, Entreprenant, Conventionnel
 * https://fr.wikipedia.org/wiki/Mod%C3%A8le_RIASEC
 */
export class Constants {
  public static riasecMapping: {
    [key: string]: string;
  } = {
    R: 'Réaliste',
    I: 'Investigateur',
    A: 'Artiste',
    S: 'Social',
    E: 'Entreprenant',
    C: 'Conventionnel',
  };
}
