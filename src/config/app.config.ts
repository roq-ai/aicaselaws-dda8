interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Legal Researcher', 'AI Developer', 'Data Analyst', 'Business Owner'],
  tenantName: 'Organization',
  applicationName: 'AICaseLaws',
  addOns: ['chat', 'notifications', 'file'],
};
