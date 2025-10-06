interface RankingData {
  gold: number;
  silver: number;
  bronze: number;
}

interface Athlete {
  name: string;
  pos?: number;
  stats: RankingData;
}

export const calculateRanking = (palmares: Record<string, any>) => {
  const ranking: Record<string, RankingData> = {};

  palmares.races.map((race: Record<string, any>) => {
    race.palmares.map((res: Record<string, any>) => {
      res.results.map((resultado: Record<string, any>) => {
        if (!ranking[resultado.name]) {
          ranking[resultado.name] = { gold: 0, silver: 0, bronze: 0 };
        }

        if (resultado.pos === 1) {
          ranking[resultado.name].gold++;
        }
        if (resultado.pos === 2) {
          ranking[resultado.name].silver++;
        }
        if (resultado.pos === 3) {
          ranking[resultado.name].bronze++;
        }
      });
    });
  });

  return ranking;
};

const sortAthletes = (athlete1: Athlete, athlete2: Athlete) => {
  return (
    athlete2.stats.gold - athlete1.stats.gold ||
    athlete2.stats.silver - athlete1.stats.silver ||
    athlete2.stats.bronze - athlete1.stats.bronze
  );
};

const areTied = (athlete: Athlete, previousAthlete: Athlete): boolean => {
  if (!athlete || !previousAthlete) return false;

  return sortAthletes(athlete, previousAthlete) === 0;
};

export const getSortedRanking = (ranking: Record<string, RankingData>) => {
  let previousAthlete: { name: string; stats: RankingData };
  let position = 0;

  return Object.entries(ranking)
    .map(([name, stats]) => ({ name, stats }))
    .sort((a, b) => sortAthletes(a, b))
    .map((athlete, index) => {
      if (!previousAthlete || !areTied(athlete, previousAthlete)) {
        position = index + 1;
      }

      previousAthlete = athlete;

      return { ...athlete, pos: position };
    });
};