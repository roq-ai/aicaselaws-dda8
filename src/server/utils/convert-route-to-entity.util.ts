const mapping: Record<string, string> = {
  'ai-models': 'ai_model',
  renamedcases: 'Renamedcase',
  organizations: 'organization',
  'search-queries': 'search_query',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
