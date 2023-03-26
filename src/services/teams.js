import { API } from './API';

export const getTeams = async() => {
  const teamsUrl = `${API.base}${API.teams}`;
  const response = await fetch(teamsUrl);
  const teams = await response.json();
  return teams;
};

export const updateTeamGroupId = async(idTeam, groupId) => {
  const teamsUrl = `${API.base}${API.teams}/${idTeam}`;
  console.log(groupId);
  const response = await fetch(teamsUrl, {
    method: 'PATCH',
    body: JSON.stringify({
      groupId
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });
  console.log(response);
};
