
const selectTab = async (query) => {
  const [tab] = await chrome.tabs.query(query);
  chrome.tabs.update(tab.id, { active: true });
  return tab;
}

export default selectTab;