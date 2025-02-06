import { Template } from "@/types/chat";
import { businessTemplates } from "./categories/business";
import { financeTemplates } from "./categories/finance";
import { healthcareTemplates } from "./categories/healthcare";
import { realEstateTemplates } from "./categories/realestate";
import { professionalTemplates } from "./categories/professional";
import { serviceTemplates } from "./categories/services";
import { technologyTemplates } from "./categories/technology";
import { educationTemplates } from "./categories/education";
import { marketingTemplates } from "./categories/marketing";
import { sustainabilityTemplates } from "./categories/sustainability";

export const templates: Template[] = [
  ...businessTemplates,
  ...financeTemplates,
  ...healthcareTemplates,
  ...realEstateTemplates,
  ...professionalTemplates,
  ...serviceTemplates,
  ...technologyTemplates,
  ...educationTemplates,
  ...marketingTemplates,
  ...sustainabilityTemplates
];

export const templateCategories = {
  business: businessTemplates,
  finance: financeTemplates,
  healthcare: healthcareTemplates,
  realEstate: realEstateTemplates,
  professional: professionalTemplates,
  services: serviceTemplates,
  technology: technologyTemplates,
  education: educationTemplates,
  marketing: marketingTemplates,
  sustainability: sustainabilityTemplates
};

export type TemplateCategory = keyof typeof templateCategories;