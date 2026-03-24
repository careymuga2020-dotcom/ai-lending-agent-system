type LoanInput = {
  name: string;
  amount: number;
};

type RiskResult = {
  riskScore: number;
  decision: "APPROVED" | "REJECTED" | "REVIEW";
};

export function evaluateRisk(input: LoanInput): RiskResult {
  let riskScore = 0;

  if (input.amount > 10000) riskScore += 50;
  if (input.amount > 5000) riskScore += 30;
  else riskScore += 10;

  let decision: RiskResult["decision"];

  if (riskScore > 60) decision = "REJECTED";
  else if (riskScore > 30) decision = "REVIEW";
  else decision = "APPROVED";

  return {
    riskScore,
    decision,
  };
}
