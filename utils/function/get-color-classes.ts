import { skillColorMap } from "@/utils/const/skill-colors";
import type { SkillColorClasses } from "@/utils/types";

export const getColorClasses = (color: string): SkillColorClasses =>
  skillColorMap[color] || skillColorMap.emerald;
