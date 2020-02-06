export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (let drug of this.drugs) {
      switch (drug.name) {
        case "Herbal Tea":
          if (drug.benefit < 50) {
            if (drug.expiresIn > 0) {
              drug.benefit += 1;
            } else {
              drug.benefit += 2;
            }
          }
          drug.expiresIn -= 1;
          break;
        case "Fervex":
          if (drug.benefit < 50) {
            if (drug.expiresIn > 10) {
              drug.benefit += 1;
            } else if (drug.expiresIn > 5) {
              drug.benefit += 2;
            } else if (drug.expiresIn > 0) {
              drug.benefit += 3;
            } else {
              drug.benefit = 0;
            }
          }
          drug.expiresIn -= 1;
          break;
        case "Magic Pill":
          break;
        default:
          if (drug.benefit > 0) {
            if (drug.expiresIn > 0) {
              drug.benefit -= 1;
            } else {
              drug.benefit -= 2;
            }
          }
          drug.expiresIn -= 1;
          break;
          if (drug.name != "Herbal Tea" && drug.name != "Fervex") {
            if (drug.benefit > 0) {
              if (drug.name != "Magic Pill") {
                drug.benefit = drug.benefit - 1;
              }
            }
          } else {
            if (drug.benefit < 50) {
              drug.benefit = drug.benefit + 1;
              if (drug.name == "Fervex") {
                if (drug.expiresIn < 11) {
                  if (drug.benefit < 50) {
                    drug.benefit = drug.benefit + 1;
                  }
                }
                if (drug.expiresIn < 6) {
                  if (drug.benefit < 50) {
                    drug.benefit = drug.benefit + 1;
                  }
                }
              }
            }
          }
          if (drug.name != "Magic Pill") {
            drug.expiresIn = drug.expiresIn - 1;
          }
          if (drug.expiresIn < 0) {
            if (drug.name != "Herbal Tea") {
              if (drug.name != "Fervex") {
                if (drug.benefit > 0) {
                  if (drug.name != "Magic Pill") {
                    drug.benefit = drug.benefit - 1;
                  }
                }
              } else {
                drug.benefit = drug.benefit - drug.benefit;
              }
            } else {
              if (drug.benefit < 50) {
                drug.benefit = drug.benefit + 1;
              }
            }
          }
      }
    }

    return this.drugs;
  }
}
