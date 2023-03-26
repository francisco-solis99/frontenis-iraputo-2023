import { API } from './API';

export const getGroupAllInfo = async(id) => {
  const groupUrl = `${API.base}${API.groups}/all-info/${id}`;
  const response = await fetch(groupUrl);
  const group = await response.json();
  return group;
};

export const getGroups = async() => {
  const groupsUrl = `${API.base}${API.groups}`;
  const response = await fetch(groupsUrl);
  const groups = await response.json();
  return groups;
};

export async function isAvailableGroup(idRandomGroup) {
  const { data: group } = await getGroupAllInfo(idRandomGroup);
  const { teams } = group;
  if (teams.length > 2) return false;
  return true;
}
