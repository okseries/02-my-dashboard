export interface PokemonsResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  Data[];
}

export interface Data {
  name: string;
  url:  string;
}