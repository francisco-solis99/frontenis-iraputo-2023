import { API } from './API';

export const getPlayers = async() => {
  const playersUrl = `${API.base}${API.players}`;
  const players = await fetch(playersUrl);
  return players;
};
