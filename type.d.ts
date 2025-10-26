export interface INavItem {
  label: string;
  href: string;
}

export interface InvestmentGoalsType {
  value: "Growth" | "Income" | "Balanced" | "Conservative";
  label: "Growth" | "Income" | "Balanced" | "Conservative";
}
export interface RiskToleranceOptionsType {
  value: "Low" | "Medium" | "High";
  label: "Low" | "Medium" | "High";
}
export interface PreferredIndustriesType {
  value:
    | "Technology"
    | "Healthcare"
    | "Finance"
    | "Energy"
    | "Consumer Goods";
  label:
    | "Technology"
    | "Healthcare"
    | "Finance"
    | "Energy"
    | "Consumer Goods";
}

export interface AlertTypeOptionsType {
  value: "upper" | "lower";
  label: "Upper" | "Lower";
}

export interface ConditionOptionsType {
  value: "greater" | "less";
  label: string;
}