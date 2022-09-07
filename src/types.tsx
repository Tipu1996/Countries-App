export type Country = {
  name: {
    common: string
    official: string
  }
  flag: string
  languages: {
    [key: string]: string
  }
  population: number
  region: string
}
