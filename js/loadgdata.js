window.onload = init
function init(){
  var names = "https://docs.google.com/spreadsheets/d/1vvA9n123EJ0hmuQcnwE88JpsOVgxvUgDonPSaoULP3k/edit?usp=sharing";
  Tabletop.init({key: names, callback: loadData, simpleSheet: true } );

  var farm = "https://docs.google.com/spreadsheets/d/1HX2Z8qOfQ-RTp68rQmueHwlZkIDZKkONVdihq_PUoGY/edit?usp=sharing";
  Tabletop.init({key: farm, callback: loadFarmData, simpleSheet: true });

  var garden = "https://docs.google.com/spreadsheets/d/1FDutRQCbo00KdXPRoWzVuX3_e7aUl6tofli94Ekn0Ig/edit?usp=sharing";
  Tabletop.init({key: garden, callback: loadGardenData, simpleSheet: true});

  var baile = "https://docs.google.com/spreadsheets/d/1vAYF4sweOfNG48KYVta2pS8oXorf3bGEFTybohzmbcw/edit?usp=sharing"
  Tabletop.init({key: baile, callback: loadBaileData, simpleSheet: true});

  var sabaile = "https://docs.google.com/spreadsheets/d/1FpFj74H1Av3CJCG3ae0M-XR1t2ZaMuTMtcK-RyV2KY8/edit?usp=sharing";
  Tabletop.init({key: sabaile, callback: loadSaBhaileData, simpleSheet: true});

  var animals = "https://docs.google.com/spreadsheets/d/1xxDmXYduGqMPNRJNDgI0_DJM4x38FfEyaWF0FZZ9UEg/edit?usp=sharing";
  Tabletop.init({key: animals, callback: loadAnimalsData, simpleSheet: true});

  var dinner = "https://docs.google.com/spreadsheets/d/1ymr7oyOrX1RE2ZNvHk_pGsoZg1rEwR78jXzPfXcrmbU/edit?usp=sharing";
  Tabletop.init({key: dinner, callback: loadDinnerData, simpleSheet: true});

  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1kPZZKJSnIJXAe8Rf-BfnazlaG5Nrch1oR1Q5ag75N_0/edit?usp=sharing", callback: loadBiaData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1RDHHm8XLLx3635h7_tbmdjASED0JdehZvD4RXHndTJk/edit?usp=sharing", callback: loadCeoilData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1XgpMk5uIOUbQLbT1ud6RJSQi9bGFKDYR5V3sZ3A9byM/edit?usp=sharing", callback: loadEadaiData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1idAa3A62rIFHVFzAd2l6RcQLgKqzs0CPZ6MDCJtpfsI/edit?usp=sharing", callback: loadSiopaData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1OowxNFiMr77WSpu9oXzuKLRIOWRI7l-u4yyvMafEl4o/edit?usp=sharing", callback: loadPaircData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1iqYGR0qSunQrmYCFTMtMe8ZAPYGxEc9vW-TVJoN_Gqo/edit?usp=sharing", callback: loadOutAboutData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1NwkSvmeBKAbn4kcOln9qbbaI85x90_ys39j5io09ebE/edit?usp=sharing", callback: loadAimsirData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1kZUwuzNfsK8NV_tKGn1jj1o4hfqXUEZb10y8ZW_HOeU/edit?usp=sharing", callback: loadCorpData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1CISGZ-uHThtPw7LyViehyp0FO2busRVbHKPL54Kfmlg/edit?usp=sharing", callback: loadEalainData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1iHJU1g6_cmXbmZkYp_L8iOrzmm6i9P4LFixyfVNaqNQ/edit?usp=sharing", callback: loadCruthannaData, simpleSheet: true});
  Tabletop.init({key: "https://docs.google.com/spreadsheets/d/1XaX29n4ZMziRzr9bxTZy2h8EYqPM5fGyqzideVLe9zM/edit?usp=sharing", callback: loadSeasuirData, simpleSheet: true});
}

function loadData(data, tabletop){
  for(i = 0; i < data.length; i++){
    ainmneacha[i] = data[i];
  }
  setup();
}

function loadFarmData(data, tabletop){
  for(i = 0; i < data.length; i++){
    feirm[i] = data[i];
  }
  //console.log(feirm);
}

function loadGardenData(data, tabletop){
  for(i = 0; i < data.length; i++){
    gairdin[i] = data[i];
  }
  //console.log(gairdin);
}

function loadBaileData(data, tabletop){
  for(i = 0; i < data.length; i++){
    bailemor[i] = data[i];
  }
  //console.log(bailemor);
}

function loadSaBhaileData(data, tabletop){
  for(i = 0; i < data.length; i++){
    saBhaile[i] = data[i];
  }
  //console.log(saBhaile);
}

function loadAnimalsData(data, tabletop){
  for(i = 0; i < data.length; i++){
    fiaine[i] = data[i];
  }
  //console.log(fiaine);
}

function loadDinnerData(data, tabletop){
  for(i = 0; i < data.length; i++){
    beileDeas[i] = data[i];
  }
  //console.log(beileDeas);
}

function loadBiaData(data, tabletop){
  for(i = 0; i < data.length; i++){
    bia[i] = data[i];
  }
  //console.log(bia);
}

function loadCeoilData(data, tabletop){
  for(i = 0; i < data.length; i++){
    ceoil[i] = data[i];
  }
  //console.log(ceoil);
}

function loadEadaiData(data, tabletop){
  for(i = 0; i < data.length; i++){
    eadai[i] = data[i];
  }
  //console.log(eadai);
}

function loadSiopaData(data, tabletop){
  for(i = 0; i < data.length; i++){
    siopa[i] = data[i];
  }
  //console.log(siopa);
}

function loadPaircData(data, tabletop){
  for(i = 0; i < data.length; i++){
    anPhairc[i] = data[i];
  }
  //console.log(anPhairc);
}

function loadOutAboutData(data, tabletop){
  for(i = 0; i < data.length; i++){
    outAbout[i] = data[i];
  }
  //console.log(outAbout);
}

function loadAimsirData(data, tabletop){
  for(i = 0; i < data.length; i++){
    aimsir[i] = data[i];
  }
  //console.log(aimsir);
}

function loadCorpData(data, tabletop){
  for(i = 0; i < data.length; i++){
    corp[i] = data[i];
  }
  //console.log(corp);
}

function loadEalainData(data, tabletop){
  for(i = 0; i < data.length; i++){
    ealain[i] = data[i];
  }
  //console.log(ealain);
}

function loadCruthannaData(data, tabletop){
  for(i = 0; i < data.length; i++){
    cruthanna[i] = data[i];
  }
  //console.log(cruthanna);
}

function loadSeasuirData(data, tabletop){
  for(i = 0; i < data.length; i++){
    seasuir[i] = data[i];
  }
  //console.log(seasuir);
}
