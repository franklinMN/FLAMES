function refineText(name) {
  return name.replace(/\s/g, "").toLowerCase();
}

function cancelCommonLetters(firstPerson, secondPerson) {
  let fp_array = [...firstPerson];
  let sp_array = [...secondPerson];

  for (let i = 0; i < fp_array.length; i++) {
    let ch = fp_array[i];

    if (sp_array.includes(ch)) {
      fp_array[i] = "*";
      sp_array[sp_array.indexOf(ch)] = "*";
    }
  }

  firstPerson = fp_array.join("").replace(/[*]/g, "");
  secondPerson = sp_array.join("").replace(/[*]/g, "");
  let totalLength = firstPerson.length + secondPerson.length;
  return totalLength;
}

export function calculateFlames(firstPerson, secondPerson) {
  let p1 = refineText(firstPerson);
  let p2 = refineText(secondPerson);
  let totalLength = cancelCommonLetters(p1, p2);
  let FLAMES = ["F", "L", "A", "M", "E", "S"];
  //   let totalLength = firstPerson.length + secondPerson.length;

  while (FLAMES.length > 1) {
    let pos = totalLength % FLAMES.length;
    if (pos === 0) {
      FLAMES = ["F"];
    } else if (pos === 1) {
      FLAMES = ["S"];
    } else {
      // placing is reverse to rotating while iterating the flames
      FLAMES = FLAMES.splice(pos).concat(FLAMES.splice(0, pos - 1));
    }
  }

  const letter = FLAMES[0];
  const meanings = {
    F: "Friends",
    L: "Lovers",
    A: "Affection",
    M: "Marriage",
    E: "Enemies",
    S: "Siblings",
  };

  return meanings[letter] || "Unknown";
}
