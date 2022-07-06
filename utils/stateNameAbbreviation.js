export function convertRegion(state) {
    var states = [
      ["Alabama", "AL"],
      ["Alaska", "AK"],
      ["American Samoa", "AS"],
      ["Arizona", "AZ"],
      ["Arkansas", "AR"],
      ["Armed Forces Americas", "AA"],
      ["Armed Forces Europe", "AE"],
      ["Armed Forces Pacific", "AP"],
      ["California", "CA"],
      ["Colorado", "CO"],
      ["Connecticut", "CT"],
      ["Delaware", "DE"],
      ["District Of Columbia", "DC"],
      ["Florida", "FL"],
      ["Georgia", "GA"],
      ["Guam", "GU"],
      ["Hawaii", "HI"],
      ["Idaho", "ID"],
      ["Illinois", "IL"],
      ["Indiana", "IN"],
      ["Iowa", "IA"],
      ["Kansas", "KS"],
      ["Kentucky", "KY"],
      ["Louisiana", "LA"],
      ["Maine", "ME"],
      ["Marshall Islands", "MH"],
      ["Maryland", "MD"],
      ["Massachusetts", "MA"],
      ["Michigan", "MI"],
      ["Minnesota", "MN"],
      ["Mississippi", "MS"],
      ["Missouri", "MO"],
      ["Montana", "MT"],
      ["Nebraska", "NE"],
      ["Nevada", "NV"],
      ["New Hampshire", "NH"],
      ["New Jersey", "NJ"],
      ["New Mexico", "NM"],
      ["New York", "NY"],
      ["North Carolina", "NC"],
      ["North Dakota", "ND"],
      ["Northern Mariana Islands", "NP"],
      ["Ohio", "OH"],
      ["Oklahoma", "OK"],
      ["Oregon", "OR"],
      ["Pennsylvania", "PA"],
      ["Puerto Rico", "PR"],
      ["Rhode Island", "RI"],
      ["South Carolina", "SC"],
      ["South Dakota", "SD"],
      ["Tennessee", "TN"],
      ["Texas", "TX"],
      ["US Virgin Islands", "VI"],
      ["Utah", "UT"],
      ["Vermont", "VT"],
      ["Virginia", "VA"],
      ["Washington", "WA"],
      ["West Virginia", "WV"],
      ["Wisconsin", "WI"],
      ["Wyoming", "WY"]
    ];
  
    // So happy that Canada and the US have distinct abbreviations
    var provinces = [
      ["Alberta", "AB"],
      ["British Columbia", "BC"],
      ["Manitoba", "MB"],
      ["New Brunswick", "NB"],
      ["Newfoundland", "NF"],
      ["Northwest Territory", "NT"],
      ["Nova Scotia", "NS"],
      ["Nunavut", "NU"],
      ["Ontario", "ON"],
      ["Prince Edward Island", "PE"],
      ["Quebec", "QC"],
      ["Saskatchewan", "SK"],
      ["Yukon", "YT"]
    ];
  
    const selectedState = states.find(s => s.find(x => x.toLowerCase() === state.toLowerCase()));
    if (!selectedState) return null;
    return selectedState.filter(s => s.toLowerCase() !== state.toLowerCase()).join("");
  }