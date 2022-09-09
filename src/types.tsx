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

export type SearchHandler = {
  handleCountryNameFilter: (name: string) => void
}

export type ThemeContextType = {
  toggleTheme: () => void
  theme: string
}

export type Column = {
  id: 'flag' | 'name' | 'languages' | 'population' | 'region' | 'add'
  label: string
  minWidth?: number
  align?: string
}
