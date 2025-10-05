export function getYears(palmares: Array<Record<string, any>>) {
  return Array.from(new Set(palmares.map((p) => p.year))).sort((a: number, b: number) => b - a);
}

export function getByYearAndGender(palmares: Array<Record<string, any>>, year: number, gender: string) {
  return palmares.find((p) => p.year === year && p.gender === gender);
}
