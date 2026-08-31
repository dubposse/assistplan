 const mvpHinweis = document.getElementById('mvp-hinweis');

 function allgemeine_einstellungen_ausblenden() {
 document.querySelector("#monat-details-input-container").style.display = "none";
 }


let Schicht1 = [];
let Schicht2 = [];
let Schicht3 = [];
        
let kollege1 = [],
    kollege2 = [],
    kollege3 = [],
    kollege4 = [],
    kollege5 = [],
    kollege6 = [],
    kollege7 = [],
    kollege8 = [],
    kollege9 = [],  
    kollege0 = [];                                    // Arrays für Kollegen

let kollege1Schicht1 = [],
    kollege1Schicht2 = [],
    kollege1Schicht3 = [];

let kollege2Schicht1 = [],
    kollege2Schicht2 = [],
    kollege2Schicht3 = [];  

let kollege3Schicht1 = [],
    kollege3Schicht2 = [],
    kollege3Schicht3 = []; 
    
let kollege4Schicht1 = [],
    kollege4Schicht2 = [],
    kollege4Schicht3 = [];   

let kollege5Schicht1 = [],
    kollege5Schicht2 = [],
    kollege5Schicht3 = [];

let kollege6Schicht1 = [],
    kollege6Schicht2 = [],    
    kollege6Schicht3 = [];

let kollege7Schicht1 = [],
    kollege7Schicht2 = [],
    kollege7Schicht3 = [];

let kollege8Schicht1 = [],
    kollege8Schicht2 = [],
    kollege8Schicht3 = [];

let kollege9Schicht1 = [],
    kollege9Schicht2 = [],
    kollege9Schicht3 = [];

let kollege0Schicht1 = [],
    kollege0Schicht2 = [],
    kollege0Schicht3 = [];

let kollege1WunschFrei = [],
    kollege2WunschFrei = [],
    kollege3WunschFrei = [],
    kollege4WunschFrei = [],
    kollege5WunschFrei = [],
    kollege6WunschFrei = [],
    kollege7WunschFrei = [],
    kollege8WunschFrei = [],
    kollege9WunschFrei = [],
    kollege0WunschFrei = []; 

let kollege1SchichtAbneigung = [],
    kollege2SchichtAbneigung = [],
    kollege3SchichtAbneigung = [],
    kollege4SchichtAbneigung = [],
    kollege5SchichtAbneigung = [],
    kollege6SchichtAbneigung = [],
    kollege7SchichtAbneigung = [],
    kollege8SchichtAbneigung = [],
    kollege9SchichtAbneigung = [],
    kollege0SchichtAbneigung = [];

// Wunsch-Arbeiten Arrays   

let kollege1WunschArbeitstage = [];
let kollege1WunschArbeitstageInSchicht1 = [],
    kollege1WunschArbeitstageInSchicht2 = [],
    kollege1WunschArbeitstageInSchicht3 = [];

let kollege2WunschArbeitstage = [];
let kollege2WunschArbeitstageInSchicht1 = [],
    kollege2WunschArbeitstageInSchicht2 = [], 
    kollege2WunschArbeitstageInSchicht3 = []; 

let kollege3WunschArbeitstage = [];
let kollege3WunschArbeitstageInSchicht1 = [],
    kollege3WunschArbeitstageInSchicht2 = [],    
    kollege3WunschArbeitstageInSchicht3 = [];

let kollege4WunschArbeitstage = [];
let kollege4WunschArbeitstageInSchicht1 = [],
    kollege4WunschArbeitstageInSchicht2 = [],
    kollege4WunschArbeitstageInSchicht3 = [];

let kollege5WunschArbeitstage = [];
let kollege5WunschArbeitstageInSchicht1 = [],
    kollege5WunschArbeitstageInSchicht2 = [],
    kollege5WunschArbeitstageInSchicht3 = [];

let kollege6WunschArbeitstage = [];
let kollege6WunschArbeitstageInSchicht1 = [],
    kollege6WunschArbeitstageInSchicht2 = [],
    kollege6WunschArbeitstageInSchicht3 = [];

let kollege7WunschArbeitstage = [];
let kollege7WunschArbeitstageInSchicht1 = [],
    kollege7WunschArbeitstageInSchicht2 = [],
    kollege7WunschArbeitstageInSchicht3 = [];

let kollege8WunschArbeitstage = [];
let kollege8WunschArbeitstageInSchicht1 = [],
    kollege8WunschArbeitstageInSchicht2 = [],
    kollege8WunschArbeitstageInSchicht3 = [];

let kollege9WunschArbeitstage = [];
let kollege9WunschArbeitstageInSchicht1 = [],
    kollege9WunschArbeitstageInSchicht2 = [],
    kollege9WunschArbeitstageInSchicht3 = [];

let kollege0WunschArbeitstage = [];
let kollege0WunschArbeitstageInSchicht1 = [],
    kollege0WunschArbeitstageInSchicht2 = [],
    kollege0WunschArbeitstageInSchicht3 = [];

// Monatserkennung und -verarbeitung
let einsatzplanMonatIdentifikation = [];              // Tage Erkennung
let naechsterEinsatzplan = [];  
let unbetreuteTage = [];   


// Monatserkennung - NÄCHSTER EINSATZPLAN
// Beispiel: Wenn das Input-Feld geändert wird, naechsterEinsatzplan aktualisieren
document.addEventListener("DOMContentLoaded", function() {
    const monatInput = document.getElementById("monat-input");
    monatInput.addEventListener("change", function() {
        naechsterEinsatzplan.length = 0; 
        naechsterEinsatzplan.push(monatInput.value); 
    });
});

// Array mit allen Tagen eines Monats füllen, basierend auf nächsterEinsatzplan.value (Format: "YYYY-MM")
function fuelleTageFuerMonat(monatString) {
    let [jahr, monatNummer] = monatString.split("-").map(Number);
    let tageImMonat = new Date(jahr, monatNummer, 0).getDate();
    einsatzplanMonatIdentifikation.length = 0; // Clear global array
    for (let tag = 1; tag <= tageImMonat; tag++) {
        let tagString = `${jahr}-${monatNummer.toString().padStart(2, "0")}-${tag.toString().padStart(2, "0")}`;
        einsatzplanMonatIdentifikation.push(tagString);
       
    }
}

// Beispiel: Wenn das Input-Feld geändert wird, Array neu füllen
document.addEventListener("DOMContentLoaded", function() {
    const monatInput = document.getElementById("monat-input");
    monatInput.addEventListener("change", function() {
        fuelleTageFuerMonat(monatInput.value);
        kollege1.length = 0;
        kollege1.push(...einsatzplanMonatIdentifikation);
        kollege2.length = 0;
        kollege2.push(...einsatzplanMonatIdentifikation);
        kollege3.length = 0;
        kollege3.push(...einsatzplanMonatIdentifikation);
        kollege4.length = 0;
        kollege4.push(...einsatzplanMonatIdentifikation);
        kollege5.length = 0;
        kollege5.push(...einsatzplanMonatIdentifikation);
        kollege6.length = 0;
        kollege6.push(...einsatzplanMonatIdentifikation);
        kollege7.length = 0;
        kollege7.push(...einsatzplanMonatIdentifikation);
        kollege8.length = 0;
        kollege8.push(...einsatzplanMonatIdentifikation);
        kollege9.length = 0;
        kollege9.push(...einsatzplanMonatIdentifikation);
        kollege0.length = 0;
        kollege0.push(...einsatzplanMonatIdentifikation); 
    });
});

// Funktion zum Subtrahieren von unbetreuteTage von einsatzplanMonatIdentifikation | kollege minus kollegeWunschFrei
function berechneBetreuteTage() {
    return einsatzplanMonatIdentifikation.filter(tag => !unbetreuteTage.includes(tag)); 
}

function monat_input_reset() {
    location.reload();
 /* document.getElementById('monat-input').value = '';
    document.getElementById('unbetreuter-tag-input').value = '';
    einsatzplanMonatIdentifikation.length = 0;
    naechsterEinsatzplan.length = 0;
    unbetreuteTage.length = 0;
    Schicht1.length = 0;
    Schicht2.length = 0;
    Schicht3.length = 0;  */
  
}

// Verstecke den MVP-Hinweis, sobald irgendwo auf die Seite geklickt oder getippt wird
document.addEventListener("DOMContentLoaded", function() {
    if (!mvpHinweis) return;
    const hideMvp = () => { mvpHinweis.style.display = "none"; };
    document.addEventListener("mousedown", hideMvp, { once: true });
    document.addEventListener("touchstart", hideMvp, { once: true });
    // Audio erst nach Benutzerinteraktion abspielen (z.B. Klick)
    document.addEventListener("click", function playAudioOnce() {
  //  new Audio('Audio-Info.mp3').play();   
        document.removeEventListener("click", playAudioOnce);
    }, { once: true });
});

// Kollege 1
document.addEventListener("DOMContentLoaded", function() { 
    let kollege1WunschFreierTag = document.getElementById("kollege1-wunschfrei-input");
    kollege1WunschFreierTag.addEventListener("change", function() {
        kollege1WunschFrei.push(kollege1WunschFreierTag.value);
        aktualisiereSchichtenKollege1(); 
    });
});

document.getElementById("kollege1-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege1();
    document.getElementById("kollege1-schicht-praeferenz-input").disabled = true; // Re-enable input after change
});

function aktualisiereSchichtenKollege1() {
    // Reset arrays bei jedem Aufruf
    kollege1Schicht1.length = 0;
    kollege1Schicht2.length = 0;
    kollege1Schicht3.length = 0;

    const kollege1SchichtPraeferenz = document.getElementById("kollege1-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege1 = kollege1EinsatzfaehigeTage();

    if (kollege1SchichtPraeferenz === "1") {
        kollege1Schicht1 = [...einsatzfaehigeTageKollege1];  // 
    }
    if (kollege1SchichtPraeferenz === "2") {
        kollege1Schicht2 = [...einsatzfaehigeTageKollege1];
    }
    if (kollege1SchichtPraeferenz === "3") {
        kollege1Schicht3 = [...einsatzfaehigeTageKollege1];
    }
    if (kollege1SchichtPraeferenz === "1+2") {
        kollege1Schicht1 = [...einsatzfaehigeTageKollege1];
        kollege1Schicht2 = [...einsatzfaehigeTageKollege1];
    }
    if (kollege1SchichtPraeferenz === "1+3") {
        kollege1Schicht1 = [...einsatzfaehigeTageKollege1];
        kollege1Schicht3 = [...einsatzfaehigeTageKollege1];
    }
    if (kollege1SchichtPraeferenz === "2+3") {
        kollege1Schicht2 = [...einsatzfaehigeTageKollege1];
        kollege1Schicht3 = [...einsatzfaehigeTageKollege1];
    }
    if (kollege1SchichtPraeferenz === "1+2+3") {
        kollege1Schicht1 = [...einsatzfaehigeTageKollege1];
        kollege1Schicht2 = [...einsatzfaehigeTageKollege1];
        kollege1Schicht3 = [...einsatzfaehigeTageKollege1];
    }
}

// Reset beim Klick ins Feld
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege1-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege1Schicht1.length = 0;
        kollege1Schicht2.length = 0;
        kollege1Schicht3.length = 0;
    });
});

function kollege1EinsatzfaehigeTage() {
    return kollege1.filter(tag => !kollege1WunschFrei.includes(tag));
}

// Nach Reset: Kollege1-Array wieder mit Monatstagen füllen, damit alles von Beginn an funktioniert
function kollege1_input_reset() {
    document.getElementById('kollege1-name-input').value = '';
    document.getElementById('kollege1-wunschfrei-input').value = '';
    document.getElementById('kollege1-schicht-praeferenz-input').value = '';
    kollege1.length = 0;
    kollege1WunschFrei.length = 0;
    kollege1Schicht1.length = 0;
    kollege1Schicht2.length = 0;
    kollege1Schicht3.length = 0;
    // Monatstage wieder ins Kollege1-Array laden
    kollege1.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege1WunschArbeitstag = document.getElementById("kollege1-wunscharbeiten-input");
    kollege1WunschArbeitstag.addEventListener("change", function() {
        kollege1WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege1WunschArbeitstage.push(kollege1WunschArbeitstag.value);
    });
});

// Füge den Tag beim Klick auf den Button in das jeweilige Schicht-Array ein
let kollege1WunschArbeitenBtn = document.getElementById("kollege1-wunscharbeiten-hinzufuegen-btn");
kollege1WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege1-wunscharbeiten-schicht-input").value;
    const tag = kollege1WunschArbeitstage[0];

    // Entferne den Tag aus allen Schicht-Arrays
    [kollege1WunschArbeitstageInSchicht1, kollege1WunschArbeitstageInSchicht2, kollege1WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    // Füge den Tag nur in das Array der gewählten Schicht ein
    if (schicht === "1") kollege1WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege1WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege1WunschArbeitstageInSchicht3.push(tag);
});

function kollege1_wunscharbeiten_input_reset() {
    document.getElementById('kollege1-wunscharbeiten-input').value = '';
    document.getElementById('kollege1-wunscharbeiten-schicht-input').value = '';
    kollege1WunschArbeitstage.length = 0;
    kollege1WunschArbeitstageInSchicht1.length = 0;
    kollege1WunschArbeitstageInSchicht2.length = 0;
    kollege1WunschArbeitstageInSchicht3.length = 0;
};


// Kollege 2
document.addEventListener("DOMContentLoaded", function() {
    let kollege2WunschFreierTag = document.getElementById("kollege2-wunschfrei-input");
    kollege2WunschFreierTag.addEventListener("change", function() {
        kollege2WunschFrei.push(kollege2WunschFreierTag.value);
        aktualisiereSchichtenKollege2(); 
    });
});

document.getElementById("kollege2-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege2();
    document.getElementById("kollege2-schicht-praeferenz-input").disabled = true;
    
});


function aktualisiereSchichtenKollege2() {
    // Reset arrays bei jedem Aufruf
    kollege2Schicht1.length = 0;
    kollege2Schicht2.length = 0;
    kollege2Schicht3.length = 0;

    const kollege2SchichtPraeferenz = document.getElementById("kollege2-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege2 = kollege2EinsatzfaehigeTage();

    if (kollege2SchichtPraeferenz === "1") {
        kollege2Schicht1 = [...einsatzfaehigeTageKollege2];  // 
    }
    if (kollege2SchichtPraeferenz === "2") {
        kollege2Schicht2 = [...einsatzfaehigeTageKollege2];
    }
    if (kollege2SchichtPraeferenz === "3") {
        kollege2Schicht3 = [...einsatzfaehigeTageKollege2];
    }
    if (kollege2SchichtPraeferenz === "1+2") {
        kollege2Schicht1 = [...einsatzfaehigeTageKollege2];
        kollege2Schicht2 = [...einsatzfaehigeTageKollege2];
    }
    if (kollege2SchichtPraeferenz === "1+3") {
        kollege2Schicht1 = [...einsatzfaehigeTageKollege2];
        kollege2Schicht3 = [...einsatzfaehigeTageKollege2];
    }
    if (kollege2SchichtPraeferenz === "2+3") {
        kollege2Schicht2 = [...einsatzfaehigeTageKollege2];
        kollege2Schicht3 = [...einsatzfaehigeTageKollege2];
    }
    if (kollege2SchichtPraeferenz === "1+2+3") {
        kollege2Schicht1 = [...einsatzfaehigeTageKollege2];
        kollege2Schicht2 = [...einsatzfaehigeTageKollege2];
        kollege2Schicht3 = [...einsatzfaehigeTageKollege2];
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege2-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege2Schicht1.length = 0;
        kollege2Schicht2.length = 0;
        kollege2Schicht3.length = 0;
    });
});

function kollege2EinsatzfaehigeTage() {
    return kollege2.filter(tag => !kollege2WunschFrei.includes(tag));
}

function kollege2_input_reset() {
    document.getElementById('kollege2-name-input').value = '';
    document.getElementById('kollege2-wunschfrei-input').value = '';
    document.getElementById('kollege2-schicht-praeferenz-input').value = '';
    kollege2.length = 0;
    kollege2WunschFrei.length = 0;
    kollege2Schicht1.length = 0;
    kollege2Schicht2.length = 0;
    kollege2Schicht3.length = 0;
    kollege2.push(...einsatzplanMonatIdentifikation);

}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege2WunschArbeitstag = document.getElementById("kollege2-wunscharbeiten-input");
    kollege2WunschArbeitstag.addEventListener("change", function() {
        kollege2WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege2WunschArbeitstage.push(kollege2WunschArbeitstag.value);
    });
});

let kollege2WunschArbeitenBtn = document.getElementById("kollege2-wunscharbeiten-hinzufuegen-btn");
kollege2WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege2-wunscharbeiten-schicht-input").value;
    const tag = kollege2WunschArbeitstage[0];

    [kollege2WunschArbeitstageInSchicht1, kollege2WunschArbeitstageInSchicht2, kollege2WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege2WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege2WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege2WunschArbeitstageInSchicht3.push(tag);
});

function kollege2_wunscharbeiten_input_reset() {
    document.getElementById('kollege2-wunscharbeiten-input').value = '';
    document.getElementById('kollege2-wunscharbeiten-schicht-input').value = '';
    kollege2WunschArbeitstage.length = 0;
    kollege2WunschArbeitstageInSchicht1.length = 0;
    kollege2WunschArbeitstageInSchicht2.length = 0;
    kollege2WunschArbeitstageInSchicht3.length = 0;
};

// Kollege 3
document.addEventListener("DOMContentLoaded", function() {
    let kollege3WunschFreierTag = document.getElementById("kollege3-wunschfrei-input");
    kollege3WunschFreierTag.addEventListener("change", function() {
        kollege3WunschFrei.push(kollege3WunschFreierTag.value);
        aktualisiereSchichtenKollege3(); 
    });
}); 

document.getElementById("kollege3-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege3();
    document.getElementById("kollege3-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege3() {
    // Reset arrays bei jedem Aufruf
    kollege3Schicht1.length = 0;
    kollege3Schicht2.length = 0;
    kollege3Schicht3.length = 0;

    const kollege3SchichtPraeferenz = document.getElementById("kollege3-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege3 = kollege3EinsatzfaehigeTage();

    if (kollege3SchichtPraeferenz === "1") {
        kollege3Schicht1 = [...einsatzfaehigeTageKollege3];
    }
    if (kollege3SchichtPraeferenz === "2") {
        kollege3Schicht2 = [...einsatzfaehigeTageKollege3];
    }
    if (kollege3SchichtPraeferenz === "3") {
        kollege3Schicht3 = [...einsatzfaehigeTageKollege3];
    }
    if (kollege3SchichtPraeferenz === "1+2") {
        kollege3Schicht1 = [...einsatzfaehigeTageKollege3];
        kollege3Schicht2 = [...einsatzfaehigeTageKollege3];
    }
    if (kollege3SchichtPraeferenz === "1+3") {
        kollege3Schicht1 = [...einsatzfaehigeTageKollege3];
        kollege3Schicht3 = [...einsatzfaehigeTageKollege3];
    }
    if (kollege3SchichtPraeferenz === "2+3") {
        kollege3Schicht2 = [...einsatzfaehigeTageKollege3];
        kollege3Schicht3 = [...einsatzfaehigeTageKollege3];
    }
    if (kollege3SchichtPraeferenz === "1+2+3") {
        kollege3Schicht1 = [...einsatzfaehigeTageKollege3];
        kollege3Schicht2 = [...einsatzfaehigeTageKollege3];
        kollege3Schicht3 = [...einsatzfaehigeTageKollege3];
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege3-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege3Schicht1.length = 0;
        kollege3Schicht2.length = 0;
        kollege3Schicht3.length = 0;
    });
});

function kollege3EinsatzfaehigeTage() {
    return kollege3.filter(tag => !kollege3WunschFrei.includes(tag));
}

function kollege3_input_reset() {
    document.getElementById('kollege3-name-input').value = '';
    document.getElementById('kollege3-wunschfrei-input').value = '';
    document.getElementById('kollege3-schicht-praeferenz-input').value = '';
    kollege3.length = 0;
    kollege3WunschFrei.length = 0;
    kollege3Schicht1.length = 0;
    kollege3Schicht2.length = 0;
    kollege3Schicht3.length = 0;
    kollege3.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege3WunschArbeitstag = document.getElementById("kollege3-wunscharbeiten-input");
    kollege3WunschArbeitstag.addEventListener("change", function() {
        kollege3WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege3WunschArbeitstage.push(kollege3WunschArbeitstag.value);
    });
});

let kollege3WunschArbeitenBtn = document.getElementById("kollege3-wunscharbeiten-hinzufuegen-btn");
kollege3WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege3-wunscharbeiten-schicht-input").value;
    const tag = kollege3WunschArbeitstage[0];

    [kollege3WunschArbeitstageInSchicht1, kollege3WunschArbeitstageInSchicht2, kollege3WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege3WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege3WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege3WunschArbeitstageInSchicht3.push(tag);
});

function kollege3_wunscharbeiten_input_reset() {
    document.getElementById('kollege3-wunscharbeiten-input').value = '';
    document.getElementById('kollege3-wunscharbeiten-schicht-input').value = '';
    kollege3WunschArbeitstage.length = 0;
    kollege3WunschArbeitstageInSchicht1.length = 0;
    kollege3WunschArbeitstageInSchicht2.length = 0;
    kollege3WunschArbeitstageInSchicht3.length = 0;
};

// Kollege 4
document.addEventListener("DOMContentLoaded", function() {
    let kollege4WunschFreierTag = document.getElementById("kollege4-wunschfrei-input");
    kollege4WunschFreierTag.addEventListener("change", function() {
        kollege4WunschFrei.push(kollege4WunschFreierTag.value);
        aktualisiereSchichtenKollege4(); 
    });
}); 

document.getElementById("kollege4-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege4();
    document.getElementById("kollege4-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege4() {
    // Reset arrays bei jedem Aufruf
    kollege4Schicht1.length = 0;
    kollege4Schicht2.length = 0;
    kollege4Schicht3.length = 0;

    const kollege4SchichtPraeferenz = document.getElementById("kollege4-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege4 = kollege4EinsatzfaehigeTage();

    if (kollege4SchichtPraeferenz === "1") {
        kollege4Schicht1 = [...einsatzfaehigeTageKollege4];
    }
    if (kollege4SchichtPraeferenz === "2") {
        kollege4Schicht2 = [...einsatzfaehigeTageKollege4];
    }
    if (kollege4SchichtPraeferenz === "3") {
        kollege4Schicht3 = [...einsatzfaehigeTageKollege4];
    }
    if (kollege4SchichtPraeferenz === "1+2") {
        kollege4Schicht1 = [...einsatzfaehigeTageKollege4];
        kollege4Schicht2 = [...einsatzfaehigeTageKollege4];
    }
    if (kollege4SchichtPraeferenz === "1+3") {
        kollege4Schicht1 = [...einsatzfaehigeTageKollege4];
        kollege4Schicht3 = [...einsatzfaehigeTageKollege4];
    }
    if (kollege4SchichtPraeferenz === "2+3") {
        kollege4Schicht2 = [...einsatzfaehigeTageKollege4];
        kollege4Schicht3 = [...einsatzfaehigeTageKollege4];
    }
    if (kollege4SchichtPraeferenz === "1+2+3") {
        kollege4Schicht1 = [...einsatzfaehigeTageKollege4];
        kollege4Schicht2 = [...einsatzfaehigeTageKollege4];
        kollege4Schicht3 = [...einsatzfaehigeTageKollege4];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege4-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege4Schicht1.length = 0;
        kollege4Schicht2.length = 0;
        kollege4Schicht3.length = 0;
    });
});

function kollege4EinsatzfaehigeTage() {
    return kollege4.filter(tag => !kollege4WunschFrei.includes(tag));
}

function kollege4_input_reset() {
    document.getElementById('kollege4-name-input').value = '';
    document.getElementById('kollege4-wunschfrei-input').value = '';
    document.getElementById('kollege4-schicht-praeferenz-input').value = '';
    kollege4.length = 0;
    kollege4WunschFrei.length = 0;
    kollege4Schicht1.length = 0;
    kollege4Schicht2.length = 0;
    kollege4Schicht3.length = 0;
    kollege4.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege4WunschArbeitstag = document.getElementById("kollege4-wunscharbeiten-input");
    kollege4WunschArbeitstag.addEventListener("change", function() {
        kollege4WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege4WunschArbeitstage.push(kollege4WunschArbeitstag.value);
    });
});

let kollege4WunschArbeitenBtn = document.getElementById("kollege4-wunscharbeiten-hinzufuegen-btn");
kollege4WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege4-wunscharbeiten-schicht-input").value;
    const tag = kollege4WunschArbeitstage[0];

    [kollege4WunschArbeitstageInSchicht1, kollege4WunschArbeitstageInSchicht2, kollege4WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege4WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege4WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege4WunschArbeitstageInSchicht3.push(tag);
});

function kollege4_wunscharbeiten_input_reset() {
    document.getElementById('kollege4-wunscharbeiten-input').value = '';
    document.getElementById('kollege4-wunscharbeiten-schicht-input').value = '';
    kollege4WunschArbeitstage.length = 0;
    kollege4WunschArbeitstageInSchicht1.length = 0;
    kollege4WunschArbeitstageInSchicht2.length = 0;
    kollege4WunschArbeitstageInSchicht3.length = 0;
};


// Kollege 5
document.addEventListener("DOMContentLoaded", function() { 
    let kollege5WunschFreierTag = document.getElementById("kollege5-wunschfrei-input");
    kollege5WunschFreierTag.addEventListener("change", function() {
        kollege5WunschFrei.push(kollege5WunschFreierTag.value);
        aktualisiereSchichtenKollege5(); 
    });
});

document.getElementById("kollege5-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege5();
    document.getElementById("kollege5-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege5() {
    // Reset arrays bei jedem Aufruf
    kollege5Schicht1.length = 0;
    kollege5Schicht2.length = 0;
    kollege5Schicht3.length = 0;
    
    const kollege5SchichtPraeferenz = document.getElementById("kollege5-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege5 = kollege5EinsatzfaehigeTage();

    if (kollege5SchichtPraeferenz === "1") {
        kollege5Schicht1 = [...einsatzfaehigeTageKollege5];
    }
    if (kollege5SchichtPraeferenz === "2") {
        kollege5Schicht2 = [...einsatzfaehigeTageKollege5];
    }
    if (kollege5SchichtPraeferenz === "3") {
        kollege5Schicht3 = [...einsatzfaehigeTageKollege5];
    }
    if (kollege5SchichtPraeferenz === "1+2") {
        kollege5Schicht1 = [...einsatzfaehigeTageKollege5];
        kollege5Schicht2 = [...einsatzfaehigeTageKollege5];
    }
    if (kollege5SchichtPraeferenz === "1+3") {
        kollege5Schicht1 = [...einsatzfaehigeTageKollege5];
        kollege5Schicht3 = [...einsatzfaehigeTageKollege5];
    }
    if (kollege5SchichtPraeferenz === "2+3") {
        kollege5Schicht2 = [...einsatzfaehigeTageKollege5];
        kollege5Schicht3 = [...einsatzfaehigeTageKollege5];
    }
    if (kollege5SchichtPraeferenz === "1+2+3") {
        kollege5Schicht1 = [...einsatzfaehigeTageKollege5];
        kollege5Schicht2 = [...einsatzfaehigeTageKollege5];
        kollege5Schicht3 = [...einsatzfaehigeTageKollege5];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege5-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege5Schicht1.length = 0;
        kollege5Schicht2.length = 0;
        kollege5Schicht3.length = 0;
    });
});

function kollege5EinsatzfaehigeTage() {
    return kollege5.filter(tag => !kollege5WunschFrei.includes(tag));
}

function kollege5_input_reset() {
    document.getElementById('kollege5-name-input').value = '';
    document.getElementById('kollege5-wunschfrei-input').value = '';
    document.getElementById('kollege5-schicht-praeferenz-input').value = '';
    kollege5.length = 0;
    kollege5WunschFrei.length = 0;
    kollege5Schicht1.length = 0;
    kollege5Schicht2.length = 0;
    kollege5Schicht3.length = 0;
    kollege5.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege5WunschArbeitstag = document.getElementById("kollege5-wunscharbeiten-input");
    kollege5WunschArbeitstag.addEventListener("change", function() {
        kollege5WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege5WunschArbeitstage.push(kollege5WunschArbeitstag.value);
    });
});

let kollege5WunschArbeitenBtn = document.getElementById("kollege5-wunscharbeiten-hinzufuegen-btn");
kollege5WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege5-wunscharbeiten-schicht-input").value;
    const tag = kollege5WunschArbeitstage[0];

    [kollege5WunschArbeitstageInSchicht1, kollege5WunschArbeitstageInSchicht2, kollege5WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege5WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege5WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege5WunschArbeitstageInSchicht3.push(tag);
});

function kollege5_wunscharbeiten_input_reset() {
    document.getElementById('kollege5-wunscharbeiten-input').value = '';
    document.getElementById('kollege5-wunscharbeiten-schicht-input').value = '';
    kollege5WunschArbeitstage.length = 0;
    kollege5WunschArbeitstageInSchicht1.length = 0;
    kollege5WunschArbeitstageInSchicht2.length = 0;
    kollege5WunschArbeitstageInSchicht3.length = 0;
};

// Kollege 6
document.addEventListener("DOMContentLoaded", function() {
    let kollege6WunschFreierTag = document.getElementById("kollege6-wunschfrei-input");
    kollege6WunschFreierTag.addEventListener("change", function() {
        kollege6WunschFrei.push(kollege6WunschFreierTag.value);
        aktualisiereSchichtenKollege6(); 
    });
});

document.getElementById("kollege6-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege6();
    document.getElementById("kollege6-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege6() {
    // Reset arrays bei jedem Aufruf
    kollege6Schicht1.length = 0;
    kollege6Schicht2.length = 0;
    kollege6Schicht3.length = 0;

    const kollege6SchichtPraeferenz = document.getElementById("kollege6-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege6 = kollege6EinsatzfaehigeTage();
    
    if (kollege6SchichtPraeferenz === "1") {
        kollege6Schicht1 = [...einsatzfaehigeTageKollege6];
    }
    if (kollege6SchichtPraeferenz === "2") {
        kollege6Schicht2 = [...einsatzfaehigeTageKollege6];
    }
    if (kollege6SchichtPraeferenz === "3") {
        kollege6Schicht3 = [...einsatzfaehigeTageKollege6];
    }
    if (kollege6SchichtPraeferenz === "1+2") {
        kollege6Schicht1 = [...einsatzfaehigeTageKollege6];
        kollege6Schicht2 = [...einsatzfaehigeTageKollege6];
    }
    if (kollege6SchichtPraeferenz === "1+3") {
        kollege6Schicht1 = [...einsatzfaehigeTageKollege6];
        kollege6Schicht3 = [...einsatzfaehigeTageKollege6];
    }
    if (kollege6SchichtPraeferenz === "2+3") {
        kollege6Schicht2 = [...einsatzfaehigeTageKollege6];
        kollege6Schicht3 = [...einsatzfaehigeTageKollege6];
    }
    if (kollege6SchichtPraeferenz === "1+2+3") {
        kollege6Schicht1 = [...einsatzfaehigeTageKollege6];
        kollege6Schicht2 = [...einsatzfaehigeTageKollege6];
        kollege6Schicht3 = [...einsatzfaehigeTageKollege6];
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege6-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege6Schicht1.length = 0;
        kollege6Schicht2.length = 0;
        kollege6Schicht3.length = 0;
    });
});

function kollege6EinsatzfaehigeTage() {
    return kollege6.filter(tag => !kollege6WunschFrei.includes(tag));
}

function kollege6_input_reset() {
    document.getElementById('kollege6-name-input').value = '';
    document.getElementById('kollege6-wunschfrei-input').value = '';
    document.getElementById('kollege6-schicht-praeferenz-input').value = '';
    kollege6.length = 0;
    kollege6WunschFrei.length = 0;
    kollege6Schicht1.length = 0;
    kollege6Schicht2.length = 0;
    kollege6Schicht3.length = 0;
    kollege6.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege6WunschArbeitstag = document.getElementById("kollege6-wunscharbeiten-input");
    kollege6WunschArbeitstag.addEventListener("change", function() {
        kollege6WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege6WunschArbeitstage.push(kollege6WunschArbeitstag.value);
    });
});

let kollege6WunschArbeitenBtn = document.getElementById("kollege6-wunscharbeiten-hinzufuegen-btn");
kollege6WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege6-wunscharbeiten-schicht-input").value;
    const tag = kollege6WunschArbeitstage[0];

    [kollege6WunschArbeitstageInSchicht1, kollege6WunschArbeitstageInSchicht2, kollege6WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege6WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege6WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege6WunschArbeitstageInSchicht3.push(tag);
});

function kollege6_wunscharbeiten_input_reset() {
    document.getElementById('kollege6-wunscharbeiten-input').value = '';
    document.getElementById('kollege6-wunscharbeiten-schicht-input').value = '';
    kollege6WunschArbeitstage.length = 0;
    kollege6WunschArbeitstageInSchicht1.length = 0;
    kollege6WunschArbeitstageInSchicht2.length = 0;
    kollege6WunschArbeitstageInSchicht3.length = 0;
};

// Kollege 7
document.addEventListener("DOMContentLoaded", function() { 
    let kollege7WunschFreierTag = document.getElementById("kollege7-wunschfrei-input");
    kollege7WunschFreierTag.addEventListener("change", function() {
        kollege7WunschFrei.push(kollege7WunschFreierTag.value);
        aktualisiereSchichtenKollege7(); 
    });
});

document.getElementById("kollege7-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege7();
    document.getElementById("kollege7-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege7() {
    // Reset arrays bei jedem Aufruf
    kollege7Schicht1.length = 0;
    kollege7Schicht2.length = 0;
    kollege7Schicht3.length = 0;

    const kollege7SchichtPraeferenz = document.getElementById("kollege7-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege7 = kollege7EinsatzfaehigeTage();

    if (kollege7SchichtPraeferenz === "1") {
        kollege7Schicht1 = [...einsatzfaehigeTageKollege7];
    }
    if (kollege7SchichtPraeferenz === "2") {
        kollege7Schicht2 = [...einsatzfaehigeTageKollege7];
    }
    if (kollege7SchichtPraeferenz === "3") {
        kollege7Schicht3 = [...einsatzfaehigeTageKollege7];
    }
    if (kollege7SchichtPraeferenz === "1+2") {
        kollege7Schicht1 = [...einsatzfaehigeTageKollege7];
        kollege7Schicht2 = [...einsatzfaehigeTageKollege7];
    }
    if (kollege7SchichtPraeferenz === "1+3") {
        kollege7Schicht1 = [...einsatzfaehigeTageKollege7];
        kollege7Schicht3 = [...einsatzfaehigeTageKollege7];
    }
    if (kollege7SchichtPraeferenz === "2+3") {
        kollege7Schicht2 = [...einsatzfaehigeTageKollege7];
        kollege7Schicht3 = [...einsatzfaehigeTageKollege7];
    }
    if (kollege7SchichtPraeferenz === "1+2+3") {
        kollege7Schicht1 = [...einsatzfaehigeTageKollege7];
        kollege7Schicht2 = [...einsatzfaehigeTageKollege7];
        kollege7Schicht3 = [...einsatzfaehigeTageKollege7];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege7-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege7Schicht1.length = 0;
        kollege7Schicht2.length = 0;
        kollege7Schicht3.length = 0;
    });
});

function kollege7EinsatzfaehigeTage() {
    return kollege7.filter(tag => !kollege7WunschFrei.includes(tag));
}

function kollege7_input_reset() {
    document.getElementById('kollege7-name-input').value = '';
    document.getElementById('kollege7-wunschfrei-input').value = '';
    document.getElementById('kollege7-schicht-praeferenz-input').value = '';
    kollege7.length = 0;
    kollege7WunschFrei.length = 0;
    kollege7Schicht1.length = 0;
    kollege7Schicht2.length = 0;
    kollege7Schicht3.length = 0;
    kollege7.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege7WunschArbeitstag = document.getElementById("kollege7-wunscharbeiten-input");
    kollege7WunschArbeitstag.addEventListener("change", function() {
        kollege7WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege7WunschArbeitstage.push(kollege7WunschArbeitstag.value);
    });
});

let kollege7WunschArbeitenBtn = document.getElementById("kollege7-wunscharbeiten-hinzufuegen-btn");
kollege7WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege7-wunscharbeiten-schicht-input").value;
    const tag = kollege7WunschArbeitstage[0];

    [kollege7WunschArbeitstageInSchicht1, kollege7WunschArbeitstageInSchicht2, kollege7WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege7WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege7WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege7WunschArbeitstageInSchicht3.push(tag);
});

function kollege7_wunscharbeiten_input_reset() {
    document.getElementById('kollege7-wunscharbeiten-input').value = '';
    document.getElementById('kollege7-wunscharbeiten-schicht-input').value = '';
    kollege7WunschArbeitstage.length = 0;
    kollege7WunschArbeitstageInSchicht1.length = 0;
    kollege7WunschArbeitstageInSchicht2.length = 0;
    kollege7WunschArbeitstageInSchicht3.length = 0;
};


// Kollege 8
document.addEventListener("DOMContentLoaded", function() { 
    let kollege8WunschFreierTag = document.getElementById("kollege8-wunschfrei-input");
    kollege8WunschFreierTag.addEventListener("change", function() {
        kollege8WunschFrei.push(kollege8WunschFreierTag.value);
        aktualisiereSchichtenKollege8(); 
    });
});

document.getElementById("kollege8-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege8();
    document.getElementById("kollege8-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege8() {
    // Reset arrays bei jedem Aufruf
    kollege8Schicht1.length = 0;
    kollege8Schicht2.length = 0;
    kollege8Schicht3.length = 0;

    const kollege8SchichtPraeferenz = document.getElementById("kollege8-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege8 = kollege8EinsatzfaehigeTage();

    if (kollege8SchichtPraeferenz === "1") {
        kollege8Schicht1 = [...einsatzfaehigeTageKollege8];
    }
    if (kollege8SchichtPraeferenz === "2") {
        kollege8Schicht2 = [...einsatzfaehigeTageKollege8];
    }
    if (kollege8SchichtPraeferenz === "3") {
        kollege8Schicht3 = [...einsatzfaehigeTageKollege8];
    }
    if (kollege8SchichtPraeferenz === "1+2") {
        kollege8Schicht1 = [...einsatzfaehigeTageKollege8];
        kollege8Schicht2 = [...einsatzfaehigeTageKollege8];
    }
    if (kollege8SchichtPraeferenz === "1+3") {
        kollege8Schicht1 = [...einsatzfaehigeTageKollege8];
        kollege8Schicht3 = [...einsatzfaehigeTageKollege8];
    }
    if (kollege8SchichtPraeferenz === "2+3") {
        kollege8Schicht2 = [...einsatzfaehigeTageKollege8];
        kollege8Schicht3 = [...einsatzfaehigeTageKollege8];
    }
    if (kollege8SchichtPraeferenz === "1+2+3") {
        kollege8Schicht1 = [...einsatzfaehigeTageKollege8];
        kollege8Schicht2 = [...einsatzfaehigeTageKollege8];
        kollege8Schicht3 = [...einsatzfaehigeTageKollege8];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege8-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege8Schicht1.length = 0;
        kollege8Schicht2.length = 0;
        kollege8Schicht3.length = 0;
    });
});

function kollege8EinsatzfaehigeTage() {
    return kollege8.filter(tag => !kollege8WunschFrei.includes(tag));
}  

function kollege8_input_reset() {
    document.getElementById('kollege8-name-input').value = '';
    document.getElementById('kollege8-wunschfrei-input').value = '';
    document.getElementById('kollege8-schicht-praeferenz-input').value = '';
    kollege8.length = 0;
    kollege8WunschFrei.length = 0;
    kollege8Schicht1.length = 0;
    kollege8Schicht2.length = 0;
    kollege8Schicht3.length = 0;
    kollege8.push(...einsatzplanMonatIdentifikation);
}



// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege8WunschArbeitstag = document.getElementById("kollege8-wunscharbeiten-input");
    kollege8WunschArbeitstag.addEventListener("change", function() {
        kollege8WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege8WunschArbeitstage.push(kollege8WunschArbeitstag.value);
    });
});

let kollege8WunschArbeitenBtn = document.getElementById("kollege8-wunscharbeiten-hinzufuegen-btn");
kollege8WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege8-wunscharbeiten-schicht-input").value;
    const tag = kollege8WunschArbeitstage[0];

    [kollege8WunschArbeitstageInSchicht1, kollege8WunschArbeitstageInSchicht2, kollege8WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege8WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege8WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege8WunschArbeitstageInSchicht3.push(tag);
});

function kollege8_wunscharbeiten_input_reset() {
    document.getElementById('kollege8-wunscharbeiten-input').value = '';
    document.getElementById('kollege8-wunscharbeiten-schicht-input').value = '';
    kollege8WunschArbeitstage.length = 0;
    kollege8WunschArbeitstageInSchicht1.length = 0;
    kollege8WunschArbeitstageInSchicht2.length = 0;
    kollege8WunschArbeitstageInSchicht3.length = 0;
};


// Kollege 9
document.addEventListener("DOMContentLoaded", function() { 
    let kollege9WunschFreierTag = document.getElementById("kollege9-wunschfrei-input");
    kollege9WunschFreierTag.addEventListener("change", function() {
        kollege9WunschFrei.push(kollege9WunschFreierTag.value);
        aktualisiereSchichtenKollege9(); 
    });
});

document.getElementById("kollege9-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege9();
    document.getElementById("kollege9-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege9() {
    // Reset arrays bei jedem Aufruf
    kollege9Schicht1.length = 0;
    kollege9Schicht2.length = 0;
    kollege9Schicht3.length = 0;

    const kollege9SchichtPraeferenz = document.getElementById("kollege9-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege9 = kollege9EinsatzfaehigeTage();

    if (kollege9SchichtPraeferenz === "1") {
        kollege9Schicht1 = [...einsatzfaehigeTageKollege9];
    }
    if (kollege9SchichtPraeferenz === "2") {
        kollege9Schicht2 = [...einsatzfaehigeTageKollege9];
    }
    if (kollege9SchichtPraeferenz === "3") {
        kollege9Schicht3 = [...einsatzfaehigeTageKollege9];
    }
    if (kollege9SchichtPraeferenz === "1+2") {
        kollege9Schicht1 = [...einsatzfaehigeTageKollege9];
        kollege9Schicht2 = [...einsatzfaehigeTageKollege9];
    }
    if (kollege9SchichtPraeferenz === "1+3") {
        kollege9Schicht1 = [...einsatzfaehigeTageKollege9];
        kollege9Schicht3 = [...einsatzfaehigeTageKollege9];
    }
    if (kollege9SchichtPraeferenz === "2+3") {
        kollege9Schicht2 = [...einsatzfaehigeTageKollege9];
        kollege9Schicht3 = [...einsatzfaehigeTageKollege9];
    }
    if (kollege9SchichtPraeferenz === "1+2+3") {
        kollege9Schicht1 = [...einsatzfaehigeTageKollege9];
        kollege9Schicht2 = [...einsatzfaehigeTageKollege9];
        kollege9Schicht3 = [...einsatzfaehigeTageKollege9];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege9-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege9Schicht1.length = 0;
        kollege9Schicht2.length = 0;
        kollege9Schicht3.length = 0;
    });
});

function kollege9EinsatzfaehigeTage() {
    return kollege9.filter(tag => !kollege9WunschFrei.includes(tag));
}

function kollege9_input_reset() {
    document.getElementById('kollege9-name-input').value = '';
    document.getElementById('kollege9-wunschfrei-input').value = '';
    document.getElementById('kollege9-schicht-praeferenz-input').value = '';
    kollege9.length = 0;
    kollege9WunschFrei.length = 0;
    kollege9Schicht1.length = 0;
    kollege9Schicht2.length = 0;
    kollege9Schicht3.length = 0;
    kollege9.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege9WunschArbeitstag = document.getElementById("kollege9-wunscharbeiten-input");
    kollege9WunschArbeitstag.addEventListener("change", function() {
        kollege9WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege9WunschArbeitstage.push(kollege9WunschArbeitstag.value);
    });
});

let kollege9WunschArbeitenBtn = document.getElementById("kollege9-wunscharbeiten-hinzufuegen-btn");
kollege9WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege9-wunscharbeiten-schicht-input").value;
    const tag = kollege9WunschArbeitstage[0];

    [kollege9WunschArbeitstageInSchicht1, kollege9WunschArbeitstageInSchicht2, kollege9WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    if (schicht === "1") kollege9WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege9WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege9WunschArbeitstageInSchicht3.push(tag);
});

function kollege9_wunscharbeiten_input_reset() {
    document.getElementById('kollege9-wunscharbeiten-input').value = '';
    document.getElementById('kollege9-wunscharbeiten-schicht-input').value = '';
    kollege9WunschArbeitstage.length = 0;
    kollege9WunschArbeitstageInSchicht1.length = 0;
    kollege9WunschArbeitstageInSchicht2.length = 0;
    kollege9WunschArbeitstageInSchicht3.length = 0;
};

// Kollege 0
document.addEventListener("DOMContentLoaded", function() {
    let kollege0WunschFreierTag = document.getElementById("kollege0-wunschfrei-input");
    kollege0WunschFreierTag.addEventListener("change", function() {
        kollege0WunschFrei.push(kollege0WunschFreierTag.value);
        aktualisiereSchichtenKollege0(); 
    });
}); 

document.getElementById("kollege0-schicht-praeferenz-input").addEventListener("change", function() {
    aktualisiereSchichtenKollege0();
    document.getElementById("kollege0-schicht-praeferenz-input").disabled = true;
});

function aktualisiereSchichtenKollege0() {
    // Reset arrays bei jedem Aufruf
    kollege0Schicht1.length = 0;
    kollege0Schicht2.length = 0;
    kollege0Schicht3.length = 0;

    const kollege0SchichtPraeferenz = document.getElementById("kollege0-schicht-praeferenz-input").value;
    const einsatzfaehigeTageKollege0 = kollege0EinsatzfaehigeTage();

    if (kollege0SchichtPraeferenz === "1") {
        kollege0Schicht1 = [...einsatzfaehigeTageKollege0];
    }
    if (kollege0SchichtPraeferenz === "2") {
        kollege0Schicht2 = [...einsatzfaehigeTageKollege0];
    }
    if (kollege0SchichtPraeferenz === "3") {
        kollege0Schicht3 = [...einsatzfaehigeTageKollege0];
    }
    if (kollege0SchichtPraeferenz === "1+2") {
        kollege0Schicht1 = [...einsatzfaehigeTageKollege0];
        kollege0Schicht2 = [...einsatzfaehigeTageKollege0];
    }
    if (kollege0SchichtPraeferenz === "1+3") {
        kollege0Schicht1 = [...einsatzfaehigeTageKollege0];
        kollege0Schicht3 = [...einsatzfaehigeTageKollege0];
    }
    if (kollege0SchichtPraeferenz === "2+3") {
        kollege0Schicht2 = [...einsatzfaehigeTageKollege0];
        kollege0Schicht3 = [...einsatzfaehigeTageKollege0];
    }
    if (kollege0SchichtPraeferenz === "1+2+3") {
        kollege0Schicht1 = [...einsatzfaehigeTageKollege0];
        kollege0Schicht2 = [...einsatzfaehigeTageKollege0];
        kollege0Schicht3 = [...einsatzfaehigeTageKollege0];
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("kollege0-schicht-praeferenz-input");
    input.addEventListener("focus", function() {
        kollege0Schicht1.length = 0;
        kollege0Schicht2.length = 0;
        kollege0Schicht3.length = 0;
    });
});

function kollege0EinsatzfaehigeTage() {
    return kollege0.filter(tag => !kollege0WunschFrei.includes(tag));
}

function kollege0_input_reset() {
    document.getElementById('kollege0-name-input').value = '';
    document.getElementById('kollege0-wunschfrei-input').value = '';
    document.getElementById('kollege0-schicht-praeferenz-input').value = '';
    kollege0.length = 0;
    kollege0WunschFrei.length = 0;
    kollege0Schicht1.length = 0;
    kollege0Schicht2.length = 0;
    kollege0Schicht3.length = 0;
    kollege0.push(...einsatzplanMonatIdentifikation);
}

// Wunsch-Arbeiten Input (nur ein Tag auswählbar)
document.addEventListener("DOMContentLoaded", function() { 
    let kollege0WunschArbeitstag = document.getElementById("kollege0-wunscharbeiten-input");
    kollege0WunschArbeitstag.addEventListener("change", function() {
        kollege0WunschArbeitstage.length = 0; // Vorherige Auswahl löschen
        kollege0WunschArbeitstage.push(kollege0WunschArbeitstag.value);
    });
});

// Füge den Tag beim Klick auf den Button in das jeweilige Schicht-Array ein
let kollege0WunschArbeitenBtn = document.getElementById("kollege0-wunscharbeiten-hinzufuegen-btn");
kollege0WunschArbeitenBtn.addEventListener("click", function() {
    aktualisiereSchichtenKollege1();  
    aktualisiereSchichtenKollege2();
    aktualisiereSchichtenKollege3();
    aktualisiereSchichtenKollege4();
    aktualisiereSchichtenKollege5();
    aktualisiereSchichtenKollege6();
    aktualisiereSchichtenKollege7();
    aktualisiereSchichtenKollege8();
    aktualisiereSchichtenKollege9();
    aktualisiereSchichtenKollege0();

    const schicht = document.getElementById("kollege0-wunscharbeiten-schicht-input").value;
    const tag = kollege0WunschArbeitstage[0];

    // Entferne den Tag aus allen Schicht-Arrays
    [kollege0WunschArbeitstageInSchicht1, kollege0WunschArbeitstageInSchicht2, kollege0WunschArbeitstageInSchicht3].forEach(arr => {
        const idx = arr.indexOf(tag);
        if (idx !== -1) arr.splice(idx, 1);
    });

    // Füge den Tag nur in das Array der gewählten Schicht ein
    if (schicht === "1") kollege0WunschArbeitstageInSchicht1.push(tag);
    if (schicht === "2") kollege0WunschArbeitstageInSchicht2.push(tag);
    if (schicht === "3") kollege0WunschArbeitstageInSchicht3.push(tag);
});

function kollege0_wunscharbeiten_input_reset() {
    document.getElementById('kollege0-wunscharbeiten-input').value = '';
    document.getElementById('kollege0-wunscharbeiten-schicht-input').value = '';
    kollege0WunschArbeitstage.length = 0;
    kollege0WunschArbeitstageInSchicht1.length = 0;
    kollege0WunschArbeitstageInSchicht2.length = 0;
    kollege0WunschArbeitstageInSchicht3.length = 0;
};


// BESTÄTIGEN 1 - AUSGEWÄHLTER MONAT - UNBETREUTE TAGE -
document.addEventListener("DOMContentLoaded", function() {
   let unbetreuterTag = document.getElementById("unbetreuter-tag-input");
       unbetreuterTag.addEventListener("change", function() {
       unbetreuteTage.push(unbetreuterTag.value);
       aktualisiereSchichten();
    });


// Funktion zum Aktualisieren der Schicht-Arrays basierend auf Schichtsystem und betreuten Tagen
function aktualisiereSchichten() {
    const schichtsystem = document.getElementById("schichtsystem-input").value;
    let betreuteTage = berechneBetreuteTage();

    if (schichtsystem === "1") {
        Schicht1 = [...betreuteTage];
        Schicht2 = [];
        Schicht3 = [];
    }
    if (schichtsystem === "2") {
        Schicht1 = [...betreuteTage];
        Schicht2 = [...betreuteTage];
        Schicht3 = [];
    }
    if (schichtsystem === "3") {
        Schicht1 = [...betreuteTage];
        Schicht2 = [...betreuteTage];
        Schicht3 = [...betreuteTage];
    }
}

// Algorithmus zum Generieren der Schicht-Arrays mit Berücksichtigung der Wunsch-Arbeitstage & WunschFrei-Tage und Ausgabe der Monatsübersicht

function generiereSchichtArraysMitWunschArbeitstagen() {
    let uebersicht = "Monatsübersicht WunschArbeitstage:\n";
     // Alle WunschArbeitstageInSchicht-Arrays sammeln
     const alleWunschArbeitstageInSchicht1 = [
          kollege1WunschArbeitstageInSchicht1,
          kollege2WunschArbeitstageInSchicht1,
          kollege3WunschArbeitstageInSchicht1,
          kollege4WunschArbeitstageInSchicht1,
          kollege5WunschArbeitstageInSchicht1,
          kollege6WunschArbeitstageInSchicht1,
          kollege7WunschArbeitstageInSchicht1,
          kollege8WunschArbeitstageInSchicht1,
          kollege9WunschArbeitstageInSchicht1,
          kollege0WunschArbeitstageInSchicht1
     ];
     const alleWunschArbeitstageInSchicht2 = [
          kollege1WunschArbeitstageInSchicht2,
          kollege2WunschArbeitstageInSchicht2,
          kollege3WunschArbeitstageInSchicht2,
          kollege4WunschArbeitstageInSchicht2,
          kollege5WunschArbeitstageInSchicht2,
          kollege6WunschArbeitstageInSchicht2,
          kollege7WunschArbeitstageInSchicht2,
          kollege8WunschArbeitstageInSchicht2,
          kollege9WunschArbeitstageInSchicht2,
          kollege0WunschArbeitstageInSchicht2
     ];
     const alleWunschArbeitstageInSchicht3 = [
          kollege1WunschArbeitstageInSchicht3,
          kollege2WunschArbeitstageInSchicht3,
          kollege3WunschArbeitstageInSchicht3,
          kollege4WunschArbeitstageInSchicht3,
          kollege5WunschArbeitstageInSchicht3,
          kollege6WunschArbeitstageInSchicht3,
          kollege7WunschArbeitstageInSchicht3,
          kollege8WunschArbeitstageInSchicht3,
          kollege9WunschArbeitstageInSchicht3,
          kollege0WunschArbeitstageInSchicht3
     ];

     // Alle WunschArbeitstage pro Schicht sammeln
     const alleWunschTageSchicht1 = alleWunschArbeitstageInSchicht1.flat();
     const alleWunschTageSchicht2 = alleWunschArbeitstageInSchicht2.flat();
     const alleWunschTageSchicht3 = alleWunschArbeitstageInSchicht3.flat();

     // Schicht-Arrays bereinigen
     const Schicht1Generate = Schicht1.filter(tag => !alleWunschTageSchicht1.includes(tag));
     const Schicht2Generate = Schicht2.filter(tag => !alleWunschTageSchicht2.includes(tag));
     const Schicht3Generate = Schicht3.filter(tag => !alleWunschTageSchicht3.includes(tag));

     // Monatsübersicht generieren
    
     alleWunschArbeitstageInSchicht1.forEach((arr, idx) => {
          if (arr.length > 0) {
                uebersicht += `Kollege${idx === 9 ? 0 : idx + 1} Schicht 1: ${arr.join(", ")}\n`;
          }
     });
     alleWunschArbeitstageInSchicht2.forEach((arr, idx) => {
          if (arr.length > 0) {
                uebersicht += `Kollege${idx === 9 ? 0 : idx + 1} Schicht 2: ${arr.join(", ")}\n`;
          }
     });
     alleWunschArbeitstageInSchicht3.forEach((arr, idx) => {
          if (arr.length > 0) {
                uebersicht += `Kollege${idx === 9 ? 0 : idx + 1} Schicht 3: ${arr.join(", ")}\n`;
          }
     });

     document.getElementById("monat-details-ausgabe").innerText += "\n" + uebersicht;

     // Die generierten Arrays global verfügbar machen
     window.Schicht1Generate = Schicht1Generate;  
     window.Schicht2Generate = Schicht2Generate;
     window.Schicht3Generate = Schicht3Generate;
     globalThis.uebersicht = uebersicht;

}


// Optional: automatisch nach jeder Änderung ausführen
document.getElementById("zeige-monat-details-btn").addEventListener("click", generiereSchichtArraysMitWunschArbeitstagen);   



function generate_einsatzplan_with_rules() {
//    document.querySelector("#monat-details-input-container").style.display = "none";
    const kollegenContainer = document.querySelector("#kollegen-1bis0-container");
    if (kollegenContainer) {
        kollegenContainer.style.display = "none";
    }
    document.querySelector("#allgemeine_einstellungen_ausblenden-btn").style.display = "inline-flex";
    // Helferfunktion: Wert aus Array entfernen
    const removeFromArray = (arr, val) => {
        if (!Array.isArray(arr)) return;
        const idx = arr.indexOf(val);
        if (idx !== -1) arr.splice(idx, 1);
    };

    // Hilfsfunktion: Prüfen ob durch Hinzufügen eines Datums eine Serie längerer Länge entsteht
    const wouldCreateSeriesLongerThan = (col, newDateStr, maxSeries = 6) => {
        const toDay = dstr => Math.floor(new Date(dstr + 'T00:00:00').getTime() / 86400000);
        const assignedDates = (col.assigned || []).map(a => a.date).filter(Boolean);
        const set = new Set(assignedDates);
        set.add(newDateStr);
        const days = Array.from(set).map(toDay).sort((a, b) => a - b);
        let maxRun = 1, run = 1;
        for (let i = 1; i < days.length; i++) {
            if (days[i] === days[i - 1] + 1) {
                run++;
                if (run > maxRun) maxRun = run;
            } else {
                run = 1;
            }
            if (maxRun > maxSeries) return true;
        }
        return maxRun > maxSeries;
    };

    // Kollegen-Metadaten aufbauen (kollege1 .. kollege9, kollege0)
    const colleagues = [
        { id: "kollege1", schicht1: kollege1Schicht1, schicht2: kollege1Schicht2, schicht3: kollege1Schicht3, assigned: [] },
        { id: "kollege2", schicht1: kollege2Schicht1, schicht2: kollege2Schicht2, schicht3: kollege2Schicht3, assigned: [] },
        { id: "kollege3", schicht1: kollege3Schicht1, schicht2: kollege3Schicht2, schicht3: kollege3Schicht3, assigned: [] },
        { id: "kollege4", schicht1: kollege4Schicht1, schicht2: kollege4Schicht2, schicht3: kollege4Schicht3, assigned: [] },
        { id: "kollege5", schicht1: kollege5Schicht1, schicht2: kollege5Schicht2, schicht3: kollege5Schicht3, assigned: [] },
        { id: "kollege6", schicht1: kollege6Schicht1, schicht2: kollege6Schicht2, schicht3: kollege6Schicht3, assigned: [] },
        { id: "kollege7", schicht1: kollege7Schicht1, schicht2: kollege7Schicht2, schicht3: kollege7Schicht3, assigned: [] },
        { id: "kollege8", schicht1: kollege8Schicht1, schicht2: kollege8Schicht2, schicht3: kollege8Schicht3, assigned: [] },
        { id: "kollege9", schicht1: kollege9Schicht1, schicht2: kollege9Schicht2, schicht3: kollege9Schicht3, assigned: [] },
        { id: "kollege0", schicht1: kollege0Schicht1, schicht2: kollege0Schicht2, schicht3: kollege0Schicht3, assigned: [] }
    ];

    // Alle Kollegen aktivieren und Cooldown-Set initialisieren
    colleagues.forEach(c => {
        c.enabled = true;
        c.cooldowns = new Set(); // Daten, an denen dieser Kollege nicht verplant werden darf (z.B. nach 5 Tagen + 2 freie Tage)
    });

    // Max-Arbeitstage pro Kollege aus Input lesen (falls vorhanden)
    colleagues.forEach(c => {
        const el = document.getElementById(`${c.id}-max-arbeitstage-input`);
        let max = Number.POSITIVE_INFINITY;
        if (el) {
             const v = parseInt(String(el.value || "").trim(), 10);
             if (!Number.isNaN(v) && v >= 0) max = v;
        }
        c.maxDays = max;
    });

    // Vorbelegte Wunsch-Arbeitstage (pro Schicht) initial zuweisen, zählen diese zur Belegung und erzeugen keine Serienbruch-Logik
    const wishPerCol = {
        kollege1: {1: kollege1WunschArbeitstageInSchicht1,2: kollege1WunschArbeitstageInSchicht2,3: kollege1WunschArbeitstageInSchicht3},
        kollege2: {1: kollege2WunschArbeitstageInSchicht1,2: kollege2WunschArbeitstageInSchicht2,3: kollege2WunschArbeitstageInSchicht3},
        kollege3: {1: kollege3WunschArbeitstageInSchicht1,2: kollege3WunschArbeitstageInSchicht2,3: kollege3WunschArbeitstageInSchicht3},
        kollege4: {1: kollege4WunschArbeitstageInSchicht1,2: kollege4WunschArbeitstageInSchicht2,3: kollege4WunschArbeitstageInSchicht3},
        kollege5: {1: kollege5WunschArbeitstageInSchicht1,2: kollege5WunschArbeitstageInSchicht2,3: kollege5WunschArbeitstageInSchicht3},
        kollege6: {1: kollege6WunschArbeitstageInSchicht1,2: kollege6WunschArbeitstageInSchicht2,3: kollege6WunschArbeitstageInSchicht3},
        kollege7: {1: kollege7WunschArbeitstageInSchicht1,2: kollege7WunschArbeitstageInSchicht2,3: kollege7WunschArbeitstageInSchicht3},
        kollege8: {1: kollege8WunschArbeitstageInSchicht1,2: kollege8WunschArbeitstageInSchicht2,3: kollege8WunschArbeitstageInSchicht3},
        kollege9: {1: kollege9WunschArbeitstageInSchicht1,2: kollege9WunschArbeitstageInSchicht2,3: kollege9WunschArbeitstageInSchicht3},
        kollege0: {1: kollege0WunschArbeitstageInSchicht1,2: kollege0WunschArbeitstageInSchicht2,3: kollege0WunschArbeitstageInSchicht3}
    };

    colleagues.forEach(c => {
        const wishes = wishPerCol[c.id] || {};
        const added = new Set();
        [1,2,3].forEach(shift => {
             const arr = wishes[shift] || [];
             arr.forEach(d => {
                 if (!added.has(d)) {
                     c.assigned.push({ date: d, shift });
                     added.add(d);
                 }
                 // Wunschtermine aus Kandidaten-Schicht-Arrays entfernen, damit sie nicht nochmal vergeben werden
                 removeFromArray(c.schicht1, d);
                 removeFromArray(c.schicht2, d);
                 removeFromArray(c.schicht3, d);
             });
        });
        // Falls Wunschtermine Max überschreiten, Max anpassen und warnen
        if (Number.isFinite(c.maxDays) && c.assigned.length > c.maxDays) {
             console.warn(`${c.id}: Anzahl Wunsch-Arbeitstage (${c.assigned.length}) überschreitet Max (${c.maxDays}). Max wird auf Wunschanzahl gesetzt.`);
             c.maxDays = c.assigned.length;
        }
    });

    // Start-Kollege aus Input bestimmen (Input-ID: start-kollege-input)
    let startIndex = 0; // Default: kollege1
    const startEl = document.getElementById("start-kollege-input");
    if (startEl) {
        const raw = String(startEl.value || "").trim();
        if (raw) {
             if (/^kollege[0-9]$/.test(raw)) {
                 const found = colleagues.findIndex(c => c.id === raw);
                 if (found !== -1) startIndex = found;
             } else if (/^[0-9]$/.test(raw)) {
                 if (raw === "0") {
                     startIndex = colleagues.findIndex(c => c.id === "kollege0");
                 } else {
                     const n = parseInt(raw, 10);
                     if (n >= 1 && n <= 9) startIndex = n - 1;
                 }
             } else {
                 const found = colleagues.findIndex(c => c.id === raw);
                 if (found !== -1) startIndex = found;
             }
        }
    }

    // Schicht-Arrays (zu verplanende Tage). Falls SchichtGenerate bereits existiert, verwenden, ansonsten SchichtN
    let schichtGenerates = [
        Array.isArray(window.Schicht1Generate) ? [...window.Schicht1Generate] : (Array.isArray(Schicht1Generate) ? [...Schicht1Generate] : (Array.isArray(Schicht1) ? [...Schicht1] : [])),
        Array.isArray(window.Schicht2Generate) ? [...window.Schicht2Generate] : (Array.isArray(Schicht2Generate) ? [...Schicht2Generate] : (Array.isArray(Schicht2) ? [...Schicht2] : [])),
        Array.isArray(window.Schicht3Generate) ? [...window.Schicht3Generate] : (Array.isArray(Schicht3Generate) ? [...Schicht3Generate] : (Array.isArray(Schicht3) ? [...Schicht3] : []))
    ];

    // Zeiger pro Schicht (Round-Robin Start)
    const pointerPerShift = [startIndex, startIndex, startIndex];
    const remainingPerShift = [[], [], []];

    // Hilfsfunktion: Prüfen ob ein Datum ein Montag ist (UTC-freundlich)
    const isMonday = (dateStr) => {
        if (!dateStr) return false;
        const d = new Date(dateStr + "T00:00:00");
        return d.getDay() === 1; // 1 = Montag
    };

    // Für jede Schicht getrennt verplanen
    for (let s = 0; s < 3; s++) {
        const gen = schichtGenerates[s];
        if (!Array.isArray(gen) || gen.length === 0) {
             remainingPerShift[s] = [];
             continue;
        }

        const assignedDates = new Set();

        // Aktive Kollegen in Reihenfolge
        const activeCols = colleagues.filter((c) => c.enabled);

        if (activeCols.length === 0) {
             remainingPerShift[s] = gen.slice();
             continue;
        }

        // Pointer-Start in der aktiven Liste bestimmen
        let globalPointer = pointerPerShift[s] % colleagues.length;
        let startIdxInActive = activeCols.findIndex(c => colleagues.indexOf(c) === globalPointer);
        if (startIdxInActive === -1) startIdxInActive = 0;
        let rrPointerActive = startIdxInActive >= 0 ? startIdxInActive : 0;

        for (let i = 0; i < gen.length; i++) {
             const date = gen[i];
             if (assignedDates.has(date)) continue;

             // Kandidaten suchen: Round-Robin durch activeCols
             let chosen = null;
             let chosenActiveIdx = -1;
             for (let offset = 0; offset < activeCols.length; offset++) {
                 const idxActive = (rrPointerActive + offset) % activeCols.length;
                 const cand = activeCols[idxActive];

                 // Prüfen: ist Datum auf Cooldown für diesen Kollegen gesetzt?
                 if (cand.cooldowns && cand.cooldowns.has(date)) {
                     continue; // darf an diesem Datum nicht eingesetzt werden (z.B. 2 freie Tage nach 5er-Serie)
                 }

                 // Kapazitätsprüfung
                 const currentAssignedCount = cand.assigned ? cand.assigned.length : 0;
                 const cap = Number.isFinite(cand.maxDays) ? cand.maxDays : Number.POSITIVE_INFINITY;
                 if (currentAssignedCount >= cap) continue;

                 // Prüfen, ob der Kandidat für diese Schicht überhaupt verfügbar ist
                 const schArr = s === 0 ? cand.schicht1 : (s === 1 ? cand.schicht2 : cand.schicht3);
                 if (!Array.isArray(schArr) || !schArr.includes(date)) continue;

                 // WICHTIG: Serienregel: Neue Serie von bis zu 5 aufeinanderfolgenden Tagen darf NUR beginnen, wenn der Starttag ein Montag ist.
                 // (Ausnahme: bereits vorhandene Wunschtermine wurden vorher zugewiesen und zählen nicht hierher)
                 if (!isMonday(date)) {
                     // wenn das Datum nicht Montag ist, starten wir hier keine neue 5-Tage-Serie; überspringe diesen Kandidaten
                     continue;
                 }

                 // Verhindern, dass durch Zuweisung dieser Startserie eine Serie länger als 6 Tage entsteht.
                 // Wir prüfen grob: wenn wir diesem Kandidaten hier mindestens 1 Tag (den Start) zuweisen, entsteht keine Serie >6.
                 // Konservativ prüfen: wenn bereits eine Serie sehr lang ist, blocken wir.
                 if (wouldCreateSeriesLongerThan(cand, date, 6)) {
                     continue;
                 }

                 // Wenn alle Prüfungen passen, wählen wir den Kandidaten
                 chosen = cand;
                 chosenActiveIdx = idxActive;
                 break;
             }

             if (!chosen) {
                 // Keine passende Zuweisung möglich (oder Starttag kein Montag) => bleibt für Remaining
                 continue;
             }

             // Weise bis zu 5 aufeinanderfolgende Tage zu, aber niemals über Kapazität hinaus
             let assignedCount = 0;
             let lastAssignedIdx = i - 1;
             for (let j = i; j < gen.length && assignedCount < 5; j++) {
                 const d = gen[j];
                 if (assignedDates.has(d)) break; // bereits vergeben
                 // prüfe, ob Datum für diesen Kandidaten in der Schicht verfügbar ist (kann sich beim Zuweisen ändern)
                 const schArrChosen = s === 0 ? chosen.schicht1 : (s === 1 ? chosen.schicht2 : chosen.schicht3);
                 if (!Array.isArray(schArrChosen) || !schArrChosen.includes(d)) break;
                 // prüfe Kapazität
                 const cap = Number.isFinite(chosen.maxDays) ? chosen.maxDays : Number.POSITIVE_INFINITY;
                 if (chosen.assigned.length >= cap) break;

                 // Prüfe, ob das Hinzufügen dieses konkreten Datums eine Serie >6 erzeugen würde
                 if (wouldCreateSeriesLongerThan(chosen, d, 6)) {
                     // wenn ja, brechen wir die Serie-Vergabe hier ab
                     break;
                 }

                 // Assign
                 chosen.assigned.push({ date: d, shift: s + 1 });
                 assignedDates.add(d);
                 // Aus den Kandidaten-Schicht-Arrays entfernen, damit später nicht nochmal betrachtet
                 removeFromArray(chosen.schicht1, d);
                 removeFromArray(chosen.schicht2, d);
                 removeFromArray(chosen.schicht3, d);

                 assignedCount++;
                 lastAssignedIdx = j;
             }

             if (assignedCount === 0) {
                 continue;
             }

             // NACH einer 5-Tage-Serie: zwei freie Tage setzen (Cooldown)
             // Wir setzen die nächsten 2 Tage aus dem gen-Array als Cooldown für diesen Kollegen,
             // damit keine weiteren Tage in Serie an diesen Kollegen vergeben werden.
             // Dadurch entsteht effektiv das Muster: 5 Tage arbeiten (gleiche Schicht) + 2 Tage frei.
             for (let k = 1; k <= 2; k++) {
                 const candIdx = lastAssignedIdx + k;
                 if (candIdx < gen.length) {
                     const cooldownDate = gen[candIdx];
                     if (cooldownDate) chosen.cooldowns.add(cooldownDate);
                 }
             }

             // Round-Robin Pointer nach gewähltem Kandidaten weiterschalten
             rrPointerActive = (chosenActiveIdx + 1) % activeCols.length;
             const chosenGlobalIdx = colleagues.indexOf(chosen);
             pointerPerShift[s] = (chosenGlobalIdx + 1) % colleagues.length;

             // Sprung i auf das zuletzt zugewiesene Datum (weiter danach)
             i = lastAssignedIdx;
        }

        // Verbleibende, nicht zugewiesene Tage für diese Schicht ermitteln
        remainingPerShift[s] = gen.filter(d => !assignedDates.has(d));
    }

    // Globale SchichtGenerate-Arrays aktualisieren (nicht verplante Tage)
    window.Schicht1Generate = remainingPerShift[0];
    window.Schicht2Generate = remainingPerShift[1];
    window.Schicht3Generate = remainingPerShift[2];

    // --- Neue Logik: Verteile die noch unbesetzten Tage (remainingPerShift) auf Kollegen mit noch freier Kapazität ---
    // Ziel: verbleibende Tage versuchen zu vergeben an Kollegen, die für die jeweilige Schicht verfügbar sind und noch Kapazität haben.
    for (let s = 0; s < 3; s++) {
        const rem = remainingPerShift[s].slice(); // Kopie, wir verändern original später
        // Sortiere Kollegen nach derzeitiger Belegung (wenigste Belegung zuerst) für fairere Verteilung
        const order = [...colleagues].sort((a,b) => (a.assigned.length - b.assigned.length));
        rem.forEach(date => {
            // Finde Kandidaten, die an dem Datum in dieser Schicht verfügbar sind und Kapazität & kein Cooldown haben
            const cand = order.find(c => {
                const schArr = s === 0 ? c.schicht1 : (s === 1 ? c.schicht2 : c.schicht3);
                const cap = Number.isFinite(c.maxDays) ? c.maxDays : Number.POSITIVE_INFINITY;
                if (!Array.isArray(schArr) || !schArr.includes(date)) return false;
                if (c.cooldowns && c.cooldowns.has(date)) return false;
                if (c.assigned.length >= cap) return false;
                // zusätzlich: vermeiden, dass derselbe Kollege an mehreren Schichten desselben Tages (falls system) eingesetzt wird
                // Prüfe, ob Kollege an diesem Datum bereits in einer anderen Schicht verplant ist
                if (c.assigned.some(a => a.date === date)) return false;
                // NEU: prüfen, ob durch diese Vergabe eine Serie >6 entsteht
                if (wouldCreateSeriesLongerThan(c, date, 6)) return false;
                return true;
            });

            if (cand) {
                // Vergabe
                cand.assigned.push({ date, shift: s + 1 });
                // Datum aus den Kandidaten-Schicht-Arrays entfernen, damit es nicht erneut vergeben wird
                removeFromArray(cand.schicht1, date);
                removeFromArray(cand.schicht2, date);
                removeFromArray(cand.schicht3, date);
                // Datum aus globalen remaining entfernen
                const idx = remainingPerShift[s].indexOf(date);
                if (idx !== -1) remainingPerShift[s].splice(idx,1);
            }
        });
    }

    // Aktualisiere globale SchichtGenerate-Arrays nachdem Verteilung der unbesetzten Tage versucht wurde
    window.Schicht1Generate = remainingPerShift[0];
    window.Schicht2Generate = remainingPerShift[1];
    window.Schicht3Generate = remainingPerShift[2];

    // Kompakte Kalender-Darstellung: pro Kollege drei Reihen (S1..S3) mit kleinen Kästchen für jeden Monatstag
    (function setupRenderAndDnD() {

        // --- Erweiterung: Verschiedene Darstellungsmodi ---
        // epState.viewMode: "normal" | "compact" | "large" | "xlarge"
        // "compact": wie bisher, kleine Kästchen
        // "normal": Standard
        // "large": größere Kästchen, größere Schrift
        // "xlarge": noch größere Kästchen, alles maximal groß (für Übersicht aller Kollegen)

        // Render-Funktion (kann mehrfach aufgerufen werden, z.B. nach Drag&Drop)
        function renderCalendarOverview() {
        const styleId = "ep-calendar-styles";
        if (!document.getElementById(styleId)) {
            const s = document.createElement("style");
            s.id = styleId;
            s.textContent = `
            .ep-calendar-card{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:12px; color:#0b2540; background:#fff; border:1px solid #e6eaef; border-radius:8px; padding:12px; box-shadow:0 1px 6px rgba(16,24,40,0.04); max-width:1100px; margin:32px auto 24px auto; overflow:auto; display:flex; gap:0}
            .ep-cal-main{flex:1;min-width:0;display:flex;flex-direction:column;}
            .ep-cal-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px}
            .ep-cal-controls{display:flex;gap:8px;align-items:center;margin-bottom:10px;}
            .ep-cal-grid{display:flex;flex-direction:column;gap:12px}
            .ep-col-row{display:flex;flex-direction:column;gap:6px;border-top:1px solid #f1f5f9;padding-top:8px}
            .ep-col-title{display:flex;justify-content:space-between;align-items:center}
            .ep-col-title .name{font-weight:700;color:#102a43}
            .ep-shift-rows{display:flex;flex-direction:column;gap:4px}
            .ep-shift-row{display:grid;grid-auto-flow:column;grid-auto-columns:20px;gap:4px;align-items:center}
            .ep-day{width:20px;height:20px;display:inline-grid;place-items:center;border-radius:4px;font-size:10px;color:#fff}
            .ep-day.empty{background:transparent;border:1px dashed #e6eef8;color:#9aa6b2}
            .ep-day.s1{background:#2b6cb0}
            .ep-day.s2{background:#2f855a}
            .ep-day.s3{background:#dd6b20}
            .ep-day.header{background:transparent;border:1px solid transparent;color:#475569}
            .ep-day.header.empty{border:1px solid transparent;color:#475569;background:transparent}
            .ep-day.header.weekend{background:#f1f5f9;border:1px solid #e2e8f0;color:#0b2540}
            .ep-shift-label{width:28px;font-size:11px;color:#475569;margin-right:6px}
            .ep-days-header{display:flex;align-items:center;gap:6px;margin-bottom:6px}
            .ep-legend{margin-top:0;color:#475569;font-size:12px;display:none;}
            .ep-scroll{overflow:auto}
            .ep-day[title]{cursor:default}
            .ep-day.dragging{opacity:0.45; transform:scale(0.98); box-shadow:0 6px 18px rgba(2,6,23,0.12);}
            .ep-day.drop-target{outline:2px dashed rgba(59,130,246,0.45); outline-offset:2px;}
            .ep-day.unassigned{background:transparent;border:1px dashed #94a3b8;color:#0b2540}
            .ep-col-unassigned{border-top:1px dashed #e2e8f0;padding-top:10px;margin-top:8px}
            .ep-col-name-input{font-weight:700;border:1px solid transparent;background:transparent;padding:2px 6px;border-radius:4px;font-size:12px;min-width:48px}
            .ep-col-name-input:focus{outline:2px solid rgba(59,130,246,0.12);background:#fff;border-color:#e6eef8}
            .ep-compact .ep-day{width:14px;height:14px;font-size:9px;border-radius:3px}
            .ep-compact .ep-shift-row{grid-auto-columns:14px;gap:3px}
            .ep-compact .ep-shift-label{display:none}
            .ep-compact .ep-col-title{padding:2px 0}
            .ep-compact .ep-col-name-input{font-size:11px;padding:1px 4px;min-width:36px}
            .ep-compact .ep-col-row{gap:4px;padding-top:6px}
            .ep-compact .ep-cal-head{margin-bottom:6px}
            .ep-compact .ep-legend{display:none}
            .ep-compact .ep-col-unassigned{padding-top:6px;margin-top:6px}
            .ep-calendar-card{overflow:auto;white-space:nowrap}
            .ep-col-row{min-width:100%}
            /* Large mode */
            .ep-large .ep-day{width:32px;height:32px;font-size:16px;border-radius:6px}
            .ep-large .ep-shift-row{grid-auto-columns:32px;gap:7px}
            .ep-large .ep-shift-label{font-size:15px;width:38px}
            .ep-large .ep-col-name-input{font-size:16px;padding:4px 10px;min-width:70px}
            .ep-large .ep-col-title{padding:4px 0}
            .ep-large .ep-col-row{gap:10px;padding-top:14px}
            .ep-large .ep-cal-head{margin-bottom:12px}
            .ep-large .ep-col-unassigned{padding-top:12px;margin-top:12px}
            /* XLarge mode */
            .ep-xlarge .ep-day{width:44px;height:44px;font-size:22px;border-radius:8px}
            .ep-xlarge .ep-shift-row{grid-auto-columns:44px;gap:10px}
            .ep-xlarge .ep-shift-label{font-size:20px;width:54px}
            .ep-xlarge .ep-col-name-input{font-size:22px;padding:6px 16px;min-width:100px}
            .ep-xlarge .ep-col-title{padding:8px 0}
            .ep-xlarge .ep-col-row{gap:16px;padding-top:20px}
            .ep-xlarge .ep-cal-head{margin-bottom:18px}
            .ep-xlarge .ep-col-unassigned{padding-top:18px;margin-top:18px}
            @media (max-width: 1200px) {
            .ep-calendar-card { max-width: 98vw; }
            }
            .ep-col-toggle-btn {
            background: #e6eef8;
            border: none;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 700;
            color: #2b6cb0;
            padding: 1px 6px;
            margin-right: 2px;
            cursor: pointer;
            transition: background 0.15s;
            margin-bottom: 0;
            }
            .ep-col-toggle-btn.inactive {
            background: #f1f5f9;
            color: #b0b7c3;
            text-decoration: line-through;
            }
            .ep-col-toggle-btn:focus {
            outline: 2px solid #bcd0ee;
            }
            .ep-col-toggle-btn:hover {
            background: #cfe2fa;
            }
            .ep-cal-head .ep-col-toggle-btn { margin-right: 2px; margin-bottom: 0; }
            .ep-cal-head > div > div { margin-bottom: 0 !important; }
            .ep-legend-popover-btn {
            background:none;
            border:none;
            color:#2b6cb0;
            font-size:14px;
            cursor:pointer;
            padding:0 2px;
            margin-left:2px;
            border-radius:50%;
            width:18px;
            height:18px;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            transition:background 0.15s;
            }
            .ep-legend-popover-btn:focus,
            .ep-legend-popover-btn:hover{
            background:#e6eef8;
            }
            .ep-legend-popover {
            display:none;
            position:absolute;
            left:0;
            top:28px;
            z-index:20;
            background:#fff;
            border:1px solid #e6eef8;
            border-radius:6px;
            box-shadow:0 2px 8px rgba(16,24,40,0.08);
            padding:10px 14px;
            font-size:12px;
            color:#475569;
            min-width:220px;
            max-width:320px;
            }
            .ep-legend-popover.visible {
            display:block;
            }
            /* Export styling (like legend) */
            .ep-export-panel {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-left: 18px;
            position: relative;
            font-size: 12px;
            color: #2b6cb0;
            background: #f8fafc;
            border: 1px solid #e6eef8;
            border-radius: 6px;
            padding: 7px 14px 7px 10px;
            box-shadow: 0 1px 6px rgba(16,24,40,0.04);
            }
            .ep-export-panel label {
            margin: 0;
            font-weight: 500;
            color: #475569;
            font-size: 12px;
            display: none; /* Überschrift "Export" ausblenden */
            }
            .ep-export-panel select {
            border: 1px solid #e6eef8;
            border-radius: 4px;
            padding: 2px 6px;
            font-size: 12px;
            background: #f1f5f9;
            color: #2b6cb0;
            margin: 0;
            }
            .ep-export-panel button#ep-export-btn {
            background: #e6eef8;
            border: none;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 700;
            color: #2b6cb0;
            padding: 2px 10px;
            cursor: pointer;
            transition: background 0.15s;
            }
            .ep-export-panel button#ep-export-btn:hover {
            background: #cfe2fa;
            }
            .ep-export-panel .ep-export-note-btn {
            background:none;
            border:none;
            color:#2b6cb0;
            font-size:14px;
            cursor:pointer;
            padding:0 2px;
            margin-left:2px;
            border-radius:50%;
            width:18px;
            height:18px;
            display:inline-flex;
            align-items:center;
            justify-content:center;
            transition:background 0.15s;
            }
            .ep-export-panel .ep-export-note-btn:focus,
            .ep-export-panel .ep-export-note-btn:hover{
            background:#e6eef8;
            }
            .ep-export-panel .ep-export-note {
            display:none;
            position:absolute;
            left:0;
            top:38px;
            z-index:20;
            background:#fff;
            border:1px solid #e6eef8;
            border-radius:6px;
            box-shadow:0 2px 8px rgba(16,24,40,0.08);
            padding:10px 14px;
            font-size:12px;
            color:#475569;
            min-width:220px;
            max-width:320px;
            white-space:normal;
            word-break:break-word;
            }
            .ep-export-panel .ep-export-note.visible {
            display:block;
            }
            `;
            document.head.appendChild(s);
        }

        const outEl = document.getElementById("uebersicht-output") || document.getElementById("monat-details-ausgabe");
        let container = outEl;
        if (!container) {
            container = document.createElement("div");
            document.body.appendChild(container);
        }
        container.classList.add("ep-calendar-card");

        // --- Darstellungsmodus-Logik ---
        const epState = window.epState || (window.epState = { compactMode: false, colVisible: {}, viewMode: "normal" });
        // viewMode: "normal" | "compact" | "large" | "xlarge"
        let viewMode = epState.viewMode || "normal";
        // Kompatibilität: falls nur compactMode gesetzt ist
        if (epState.compactMode && !epState.viewMode) viewMode = "compact";
        // CSS-Klassen setzen
        container.classList.remove('ep-compact', 'ep-large', 'ep-xlarge');
        if (viewMode === "compact") container.classList.add('ep-compact');
        if (viewMode === "large") container.classList.add('ep-large');
        if (viewMode === "xlarge") container.classList.add('ep-xlarge');

        function escapeHtml(s) {
            return String(s || "").replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        }

        let locationName = "";
        let monthValue = "";
        const locationInput = document.getElementById("location-name-input");
        if (locationInput && locationInput.value) {
            locationName = String(locationInput.value).trim();
        }
        const monatInput = document.getElementById("monat-input");
        if (monatInput && monatInput.value) {
            monthValue = String(monatInput.value).trim();
        }
        function formatMonth(val) {
            if (!val) return "";
            const [y, m] = val.split("-");
            if (!y || !m) return val;
            const monthNames = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
            const idx = parseInt(m,10)-1;
            return (monthNames[idx] || m) + " " + y;
        }

        const monthDays = Array.isArray(einsatzplanMonatIdentifikation) && einsatzplanMonatIdentifikation.length
            ? einsatzplanMonatIdentifikation.slice()
            : (() => {
            const all = new Set([...(Schicht1||[]), ...(Schicht2||[]), ...(Schicht3||[])]);
            return Array.from(all).sort();
            })();

        const colTogglesHtml = colleagues.map((c, idx) => {
            const nameEl = document.getElementById(`${c.id}-name-input`);
            const displayName = (nameEl && String(nameEl.value || "").trim()) ? String(nameEl.value).trim() : (c._displayName || (c.id === "kollege0" ? "K0" : "K" + (idx + 1)));
            const abbr = (displayName || "").trim() ? displayName.match(/^[A-Za-zÄÖÜäöüß0-9]{1,2}/) ? displayName.match(/^[A-Za-zÄÖÜäöüß0-9]{1,2}/)[0] : displayName.slice(0,2) : (c.id === "kollege0" ? "K0" : "K" + (idx + 1));
            const visible = (epState.colVisible[c.id] !== false);
            return `<button type="button" class="ep-col-toggle-btn${visible ? "" : " inactive"}" data-col="${escapeHtml(c.id)}" title="${escapeHtml(displayName)}">${escapeHtml(abbr)}</button>`;
        }).join("");

        // --- Darstellungsmodus-Buttons ---
        let viewModeHtml = `
            <label style="font-size:12px;color:#667085;display:flex;align-items:center;gap:4px;margin-left:10px;">
            <input type="radio" name="ep-viewmode" id="ep-viewmode-compact" value="compact" ${viewMode === "compact" ? "checked" : ""} style="margin-right:2px;" /> Kompakt
            </label>
            <label style="font-size:12px;color:#667085;display:flex;align-items:center;gap:4px;">
            <input type="radio" name="ep-viewmode" id="ep-viewmode-normal" value="normal" ${viewMode === "normal" ? "checked" : ""} style="margin-right:2px;" /> Normal
            </label>
            <label style="font-size:12px;color:#667085;display:flex;align-items:center;gap:4px;">
            <input type="radio" name="ep-viewmode" id="ep-viewmode-large" value="large" ${viewMode === "large" ? "checked" : ""} style="margin-right:2px;" /> Groß
            </label>
            <label style="font-size:12px;color:#667085;display:flex;align-items:center;gap:4px;">
            <input type="radio" name="ep-viewmode" id="ep-viewmode-xlarge" value="xlarge" ${viewMode === "xlarge" ? "checked" : ""} style="margin-right:2px;" /> Extra Groß
            </label>
        `;

        // Legende oben als Icon-Button mit Popover
        let legendPopoverHtml = `
            <div style="position:relative;display:inline-block;">
            <button type="button" class="ep-legend-popover-btn" id="ep-legend-popover-btn" tabindex="0" aria-label="Legende anzeigen" title="Legende"><span style="font-weight:bold;font-size:13px;">?</span></button>
            <div class="ep-legend-popover" id="ep-legend-popover">
                <strong>Legende</strong><br>
                <div style="margin:6px 0 0 0;">
                <span style="display:inline-block;width:14px;height:14px;background:#2b6cb0;border-radius:3px;margin-right:4px;"></span> S1 (blau)<br>
                <span style="display:inline-block;width:14px;height:14px;background:#2f855a;border-radius:3px;margin-right:4px;"></span> S2 (grün)<br>
                <span style="display:inline-block;width:14px;height:14px;background:#dd6b20;border-radius:3px;margin-right:4px;"></span> S3 (orange)<br>
                <span style="display:inline-block;width:14px;height:14px;border:1px dashed #94a3b8;background:transparent;border-radius:3px;margin-right:4px;"></span> Unbesetzt<br>
                <span style="display:inline-block;width:14px;height:14px;border:1px dashed #e6eef8;background:transparent;border-radius:3px;margin-right:4px;"></span> Leer<br>
                </div>
                <div style="margin-top:8px;">
                Reihen = Schichten pro Kollege bzw. Unbesetzt<br>
                Spalten = Tage des Monats
                </div>
            </div>
            </div>
        `;

        // Export panel: styled like legend, boxed, right of legend, with a gap
        let exportPanelHtml = `
            <div class="ep-export-panel" data-export-panel style="align-self:flex-start;">
            <select id="ep-export-select" aria-label="Exportformat">
                <option value="pdf">PDF</option>
                <option value="png">PNG</option>
                <option value="ics">ICS</option>
                <option value="csv">CSV</option>
                <option value="xlsx">XLSX</option>
                <option value="json">JSON</option>
                <option value="xml">XML</option>
            </select>
            <button id="ep-export-btn" style="margin-bottom:0;">Export</button>
            <button type="button" class="ep-export-note-btn" id="ep-export-note-btn" tabindex="0" aria-label="Export-Hinweis anzeigen" title="Export-Hinweis"><span style="font-weight:bold;font-size:13px;">i</span></button>
            <div class="small ep-export-note" id="ep-export-note">Hinweis: PNG/PDF nutzen ggf. Fallbacks; JSON/CSV/ICS/XML werden direkt erzeugt.</div>
            </div>
        `;

        html = `<div class="ep-cal-main"><div class="ep-cal-head">
                    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:2px">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <strong>Einsatzplan</strong>
                        <span style="margin-left:12px;display:flex;gap:4px;align-items:center;">${viewModeHtml}</span>
                        ${locationName ? `<span style="font-weight:400;color:#475569;font-size:13px;margin-left:12px">📍 ${escapeHtml(locationName)}</span>` : ""}
                        ${monthValue ? `<span style="font-weight:400;color:#475569;font-size:13px;margin-left:12px">🗓️ ${escapeHtml(formatMonth(monthValue))}</span>` : ""}
                    </div>
                    <div style="display:flex;align-items:center;gap:4px;margin-top:2px;">
                        ${colTogglesHtml}
                        <div style="display:inline-flex;align-items:center;gap:0;">
                        ${legendPopoverHtml}
                        ${exportPanelHtml}
                        </div>
                    </div>
                    </div>
                </div>
                <div class="ep-cal-controls" style="margin-bottom:0; margin-left:0; margin-right:0; flex-wrap:wrap;">
                    <span style="font-size:12px;color:#475569;margin-left:8px;">
                    </span>
                </div>`;

        html += `<div class="ep-col-row" data-col="header">
            <div class="ep-col-title">
            <div><input class="ep-col-name-input" data-col="header" value="${escapeHtml("Monatstage")}" readonly /></div>
            <div style="color:#667085;font-size:12px"></div>
            </div>
            <div class="ep-shift-rows">
            <div style="display:flex;align-items:center">
                <div class="ep-shift-label" style="visibility:visible;color:transparent">.</div>
                <div class="ep-shift-row" aria-hidden="true">${monthDays.map(d => {
                const dayNum = (d || "").split("-").pop() || "";
                let weekend = false;
                try {
                    const dow = new Date(d + "T00:00:00").getDay();
                    weekend = (dow === 0 || dow === 6);
                } catch (e) { weekend = false; }
                const weekendClass = weekend ? " weekend" : "";
                return `<div class="ep-day header${weekendClass}" data-date="${d}" data-shift="0" title="${escapeHtml(d)}">${escapeHtml(dayNum)}</div>`;
                }).join("")}</div>
            </div>
            </div>
        </div>`;

        html += `<div class="ep-cal-grid">`;

        colleagues.forEach((c, idx) => {
            const byShift = {1: new Set(), 2: new Set(), 3: new Set()};
            (c.assigned || []).forEach(a => {
            if (a && a.date && a.shift) byShift[a.shift].add(a.date);
            });
            window[`${c.id}Assigned`] = (c.assigned || []).map(a => a.date);
            const nameEl = document.getElementById(`${c.id}-name-input`);
            const displayName = (nameEl && String(nameEl.value || "").trim()) ? String(nameEl.value).trim() : (c._displayName || (c.id === "kollege0" ? "K0" : "K" + (idx + 1)));
            c._displayName = displayName;
            const visKey = c.id;
            const visible = (epState.colVisible[visKey] !== false);
            if (!visible) return;
            const maxLabel = Number.isFinite(c.maxDays) ? c.maxDays : "∞";
            const verplant = (c.assigned || []).length;
            html += `<div class="ep-col-row" data-col="${c.id}">
            <div class="ep-col-title">
                <div>
                <input class="ep-col-name-input" data-col="${c.id}" value="${escapeHtml(displayName)}" />
                </div>
                <div style="color:#667085;font-size:12px">Max ${maxLabel} • ${verplant}</div>
            </div>
            <div class="ep-shift-rows">`;
            [1,2,3].forEach(s => {
            const dayCells = monthDays.map(d => {
                const dayNum = (d || "").split("-").pop() || "";
                const isAssigned = byShift[s].has(d);
                if (isAssigned) {
                return `<div class="ep-day s${s}" data-date="${d}" data-shift="${s}" title="${escapeHtml(displayName)} • S${s} • ${escapeHtml(d)}" draggable="true">${escapeHtml(dayNum)}</div>`;
                } else {
                return `<div class="ep-day empty" data-date="${d}" data-shift="${s}" title="${escapeHtml(d)}"></div>`;
                }
            }).join("");
            html += `<div style="display:flex;align-items:center"><div class="ep-shift-label">S${s}</div><div class="ep-shift-row">${dayCells}</div></div>`;
            });
            html += `</div></div>`;
        });

        const unassignedSets = {
            1: Array.isArray(window.Schicht1Generate) ? new Set(window.Schicht1Generate) : new Set(),
            2: Array.isArray(window.Schicht2Generate) ? new Set(window.Schicht2Generate) : new Set(),
            3: Array.isArray(window.Schicht3Generate) ? new Set(window.Schicht3Generate) : new Set()
        };

        html += `<div class="ep-col-unassigned" style="margin-top:6px"><div style="font-weight:600;margin-bottom:6px">Unbesetzt (freie Tage pro Schicht)</div></div>`;

        [1,2,3].forEach(s => {
            const dayCells = monthDays.map(d => {
            const dayNum = (d || "").split("-").pop() || "";
            const isUnassigned = unassignedSets[s].has(d);
            if (isUnassigned) {
                return `<div class="ep-day unassigned" data-date="${d}" data-shift="${s}" title="Unbesetzt S${s} • ${escapeHtml(d)}" draggable="true">${escapeHtml(dayNum)}</div>`;
            } else {
                return `<div class="ep-day empty" data-date="${d}" data-shift="${s}" title="${escapeHtml(d)}"></div>`;
            }
            }).join("");
            html += `<div class="ep-col-row" data-col="unbesetzt-s${s}">
            <div style="display:flex;align-items:center">
                <div class="ep-shift-label">S${s}</div>
                <div class="ep-shift-row">${dayCells}</div>
            </div>
            </div>`;
        });

        // Legende unten entfernt, jetzt oben als Popover
        html += `</div></div>`;

        container.innerHTML = html;

        container.querySelectorAll('.ep-col-name-input').forEach(inp => {
            if (inp._attached) return;
            inp._attached = true;
            inp.addEventListener('change', function() {
            const colId = inp.dataset.col;
            const newName = String(inp.value || "").trim();
            const col = colleagues.find(c => c.id === colId);
            if (col) {
                col._displayName = newName || (col.id === "kollege0" ? "K0" : (collegesIndexFallback(col) || col.id));
                col.acceptUnassigned = true;
            }
            const original = document.getElementById(`${colId}-name-input`);
            if (original) original.value = newName;
            if (col) window[`${col.id}Assigned`] = (col.assigned || []).map(a => a.date);
            renderCalendarOverview();
            });
            inp.addEventListener('blur', function() {
            inp.dispatchEvent(new Event('change'));
            });
        });

        function collegesIndexFallback(col) {
            const idx = colleagues.indexOf(col);
            if (idx === -1) return null;
            return (col.id === "kollege0") ? "K0" : "K" + (idx + 1);
        }

        updateWunschInputsAvailability();
        initDragAndDrop(container);

        // --- Darstellungsmodus-Buttons: Event-Handler ---
        ["compact","normal","large","xlarge"].forEach(mode => {
            const radio = document.getElementById(`ep-viewmode-${mode}`);
            if (radio && !radio._attached) {
            radio._attached = true;
            radio.addEventListener("change", function() {
                if (this.checked) {
                epState.viewMode = mode;
                epState.compactMode = (mode === "compact");
                setTimeout(() => renderCalendarOverview(), 0);
                }
            });
            }
        });

        container.querySelectorAll('.ep-col-toggle-btn').forEach(btn => {
            if (btn._attached) return;
            btn._attached = true;
            btn.addEventListener('click', function() {
            const col = this.dataset.col;
            epState.colVisible[col] = !(epState.colVisible[col] !== false);
            setTimeout(() => renderCalendarOverview(), 0);
            });
        });

        const exportBtn = container.querySelector('#ep-export-btn');
        const exportSelect = container.querySelector('#ep-export-select');
        if (exportBtn && !exportBtn._attached) {
            exportBtn._attached = true;
            exportBtn.addEventListener('click', function() {
            const format = exportSelect ? exportSelect.value : 'json';
            const payload = {
                month: einsatzplanMonatIdentifikation.slice(),
                schichtGenerates: {
                s1: Array.isArray(window.Schicht1Generate) ? window.Schicht1Generate.slice() : [],
                s2: Array.isArray(window.Schicht2Generate) ? window.Schicht2Generate.slice() : [],
                s3: Array.isArray(window.Schicht3Generate) ? window.Schicht3Generate.slice() : []
                },
                colleagues: colleagues.map(c => ({
                id: c.id,
                name: c._displayName || (document.getElementById(`${c.id}-name-input`) ? document.getElementById(`${c.id}-name-input`).value : c.id),
                maxDays: c.maxDays,
                assigned: (c.assigned || []).slice()
                }))
            };
            function downloadBlob(content, mimeType, filename) {
                const blob = new Blob([content], { type: mimeType });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
            }
            if (format === 'json') {
                downloadBlob(JSON.stringify(payload, null, 2), 'application/json', `einsatzplan_${(new Date()).toISOString().slice(0,10)}.json`);
                return;
            }
            if (format === 'csv' || format === 'xlsx') {
                const rows = [['kollegeId','name','shift','date']];
                payload.colleagues.forEach(col => {
                (col.assigned || []).forEach(a => rows.push([col.id, col.name, String(a.shift), a.date]));
                });
                const csv = rows.map(r => r.map(cell => `"${String(cell || '').replace(/"/g,'""')}"`).join(',')).join('\n');
                const fname = format === 'csv' ? `einsatzplan_${(new Date()).toISOString().slice(0,10)}.csv` : `einsatzplan_${(new Date()).toISOString().slice(0,10)}.xlsx`;
                const mime = format === 'csv' ? 'text/csv' : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                downloadBlob(csv, mime, fname);
                return;
            }
            if (format === 'xml') {
                let xml = '<?xml version="1.0" encoding="utf-8"?><Einsatzplan>';
                xml += `<Monat>${escapeHtml((payload.month[0] || '').toString())}</Monat>`;
                xml += '<Schichten>';
                ['s1','s2','s3'].forEach(k => {
                xml += `<${k}>`;
                (payload.schichtGenerates[k === 's1' ? 's1' : k === 's2' ? 's2' : 's3'] || []).forEach(d => {
                    xml += `<Tag>${escapeHtml(d)}</Tag>`;
                });
                xml += `</${k}>`;
                });
                xml += '</Schichten>';
                xml += '<Kollegen>';
                payload.colleagues.forEach(col => {
                xml += `<Kollege id="${escapeHtml(col.id)}"><Name>${escapeHtml(col.name)}</Name><Max>${escapeHtml(String(col.maxDays))}</Max><Einsätze>`;
                (col.assigned || []).forEach(a => {
                    xml += `<Einsatz><Datum>${escapeHtml(a.date)}</Datum><Schicht>${escapeHtml(String(a.shift))}</Schicht></Einsatz>`;
                });
                xml += `</Einsätze></Kollege>`;
                });
                xml += '</Kollegen></Einsatzplan>';
                downloadBlob(xml, 'application/xml', `einsatzplan_${(new Date()).toISOString().slice(0,10)}.xml`);
                return;
            }
            if (format === 'ics') {
                function toICSDT(dstr) {
                return (dstr || '').replace(/-/g,'');
                }
                let ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Einsatzplaner//DE\r\n';
                payload.colleagues.forEach(col => {
                (col.assigned || []).forEach(a => {
                    const dt = toICSDT(a.date);
                    ics += 'BEGIN:VEVENT\r\n';
                    ics += `UID:${col.id}-${dt}-@einsatzplan\r\n`;
                    ics += `DTSTAMP:${(new Date()).toISOString().replace(/[-:]/g,'').split('.')[0]}Z\r\n`;
                    ics += `DTSTART;VALUE=DATE:${dt}\r\n`;
                    ics += `SUMMARY:${escapeHtml(col.name)} S${a.shift}\r\n`;
                    ics += `DESCRIPTION:Einsatz ${escapeHtml(col.name)} — Schicht ${a.shift}\r\n`;
                    ics += 'END:VEVENT\r\n';
                });
                });
                ics += 'END:VCALENDAR\r\n';
                downloadBlob(ics, 'text/calendar', `einsatzplan_${(new Date()).toISOString().slice(0,10)}.ics`);
                return;
            }
            if (format === 'png' || format === 'pdf') {
                alert(`PNG/PDF-Export ist in dieser Umgebung nicht voll implementiert. Es wird ein JSON-Fallback erzeugt.`)
                downloadBlob(JSON.stringify(payload, null, 2), 'application/json', `einsatzplan_${(new Date()).toISOString().slice(0,10)}.${format === 'png' ? 'png.json' : 'pdf.json'}`);
                return;
            }
            downloadBlob(JSON.stringify(payload, null, 2), 'application/json', `einsatzplan_${(new Date()).toISOString().slice(0,10)}.json`);
            });
        }

        // Export-Hinweis Button (styled like legend, popover)
        const exportNoteBtn = container.querySelector('#ep-export-note-btn');
        const exportNote = container.querySelector('#ep-export-note');
        if (exportNoteBtn && exportNote) {
            exportNoteBtn.onclick = function(e) {
            exportNote.classList.toggle('visible');
            if (exportNote.classList.contains('visible')) {
                exportNoteBtn.setAttribute('aria-expanded', 'true');
            } else {
                exportNoteBtn.setAttribute('aria-expanded', 'false');
            }
            };
            // Klick außerhalb schließt Hinweis
            document.addEventListener('mousedown', function hideExportNote(ev) {
            if (!exportNote.classList.contains('visible')) return;
            if (!exportNote.contains(ev.target) && ev.target !== exportNoteBtn) {
                exportNote.classList.remove('visible');
                exportNoteBtn.setAttribute('aria-expanded', 'false');
            }
            });
        }

        // Legende Popover Button
        const legendBtn = container.querySelector('#ep-legend-popover-btn');
        const legendPopover = container.querySelector('#ep-legend-popover');
        if (legendBtn && legendPopover) {
            legendBtn.onclick = function(e) {
            legendPopover.classList.toggle('visible');
            if (legendPopover.classList.contains('visible')) {
                legendBtn.setAttribute('aria-expanded', 'true');
            } else {
                legendBtn.setAttribute('aria-expanded', 'false');
            }
            };
            document.addEventListener('mousedown', function hideLegend(ev) {
            if (!legendPopover.classList.contains('visible')) return;
            if (!legendPopover.contains(ev.target) && ev.target !== legendBtn) {
                legendPopover.classList.remove('visible');
                legendBtn.setAttribute('aria-expanded', 'false');
            }
            });
        }
        }

        // DnD-Initialisierung und Handler (unverändert)
        function initDragAndDrop(container) {
        // ... (wie bisher, siehe Original)
        // --- BEGIN COPY ---
        const findColRow = (el) => el && el.closest ? el.closest('.ep-col-row') : null;
        const findColId = (el) => {
            const row = findColRow(el);
            return row ? row.dataset.col : null;
        };
        const isUnassignedId = id => typeof id === "string" && id.startsWith("unbesetzt-");
        const ensureArrayUniquePush = (arr, val) => { if (!arr.includes(val)) arr.push(val); };
        const removeFromGenerate = (shift, date) => {
            const key = shift === 1 ? "Schicht1Generate" : (shift === 2 ? "Schicht2Generate" : "Schicht3Generate");
            const arr = Array.isArray(window[key]) ? window[key] : [];
            const idx = arr.indexOf(date);
            if (idx !== -1) arr.splice(idx,1);
            window[key] = arr;
        };
        const addToGenerate = (shift, date) => {
            const key = shift === 1 ? "Schicht1Generate" : (shift === 2 ? "Schicht2Generate" : "Schicht3Generate");
            const arr = Array.isArray(window[key]) ? window[key] : [];
            ensureArrayUniquePush(arr, date);
            arr.sort();
            window[key] = arr;
        };
        const removeAssignedDatesFromGenerates = () => {
            colleagues.forEach(c => {
            (c.assigned || []).forEach(a => {
                if (!a || !a.date) return;
                const s = Number(a.shift) || null;
                if (s === 1 || s === 2 || s === 3) {
                removeFromGenerate(s, a.date);
                } else {
                removeFromGenerate(1, a.date);
                removeFromGenerate(2, a.date);
                removeFromGenerate(3, a.date);
                }
            });
            });
        };
        function updateUnassignedGeneratesBasedOnCoverage() {
            const schInput = document.getElementById("schichtsystem-input");
            const schVal = schInput ? String(schInput.value || "3").trim() : "3";
            const requiredShifts = (schVal === "1") ? [1] : (schVal === "2") ? [1,2] : [1,2,3];
            const monthDays = Array.isArray(einsatzplanMonatIdentifikation) && einsatzplanMonatIdentifikation.length
            ? einsatzplanMonatIdentifikation.slice()
            : (() => {
                const all = new Set([...(Schicht1||[]), ...(Schicht2||[]), ...(Schicht3||[])]);
                return Array.from(all).sort();
            })();
            const unbet = new Set(Array.isArray(unbetreuteTage) ? unbetreuteTage : []);
            const assignedByShift = {1: new Set(), 2: new Set(), 3: new Set()};
            colleagues.forEach(c => (c.assigned || []).forEach(a => {
            if (a && a.date && a.shift) assignedByShift[Number(a.shift)].add(a.date);
            }));
            requiredShifts.forEach(s => {
            const missing = monthDays.filter(d => {
                if (!d) return false;
                if (unbet.has(d)) return false;
                return !assignedByShift[s].has(d);
            });
            const uniq = Array.from(new Set(missing)).sort();
            if (s === 1) window.Schicht1Generate = uniq;
            if (s === 2) window.Schicht2Generate = uniq;
            if (s === 3) window.Schicht3Generate = uniq;
            });
            [1,2,3].forEach(s => {
            if (!requiredShifts.includes(s)) {
                if (s === 1) window.Schicht1Generate = [];
                if (s === 2) window.Schicht2Generate = [];
                if (s === 3) window.Schicht3Generate = [];
            }
            });
        }
        const days = container.querySelectorAll('.ep-day');
        days.forEach(day => {
            day.addEventListener('dragover', (ev) => {
            ev.preventDefault();
            const targetDay = ev.currentTarget;
            targetDay.classList.add('drop-target');
            ev.dataTransfer.dropEffect = 'move';
            });
            day.addEventListener('dragleave', (ev) => {
            ev.currentTarget.classList.remove('drop-target');
            });
            day.addEventListener('drop', (ev) => {
            ev.preventDefault();
            const targetDay = ev.currentTarget;
            targetDay.classList.remove('drop-target');
            const payload = ev.dataTransfer.getData('application/json') || ev.dataTransfer.getData('text/plain');
            if (!payload) return;
            let src;
            try { src = JSON.parse(payload); } catch (e) { return; }
            const srcColId = src.colId;
            const srcDate = src.date;
            const srcShift = Number(src.shift);
            const tgtDate = targetDay.dataset.date;
            const tgtShift = Number(targetDay.dataset.shift);
            const tgtColId = findColId(targetDay);
            if (!srcColId || !srcDate || !tgtDate || !tgtColId || Number.isNaN(tgtShift)) return;
            if (srcColId === tgtColId && srcDate === tgtDate && srcShift === tgtShift) return;
            const srcIsUnassigned = isUnassignedId(srcColId);
            const tgtIsUnassigned = isUnassignedId(tgtColId);
            const srcCol = colleagues.find(c => c.id === srcColId);
            const tgtCol = colleagues.find(c => c.id === tgtColId);
            const findAssignIndex = (col, date, shift) => {
                if (!col || !Array.isArray(col.assigned)) return -1;
                return col.assigned.findIndex(a => a.date === date && Number(a.shift) === Number(shift));
            };
            if (srcIsUnassigned && !tgtIsUnassigned) {
                if (!tgtCol) return;
                const schArr = tgtShift === 1 ? tgtCol.schicht1 : (tgtShift === 2 ? tgtCol.schicht2 : tgtCol.schicht3);
                if (!((Array.isArray(schArr) && schArr.includes(tgtDate)) || tgtCol.acceptUnassigned)) {
                alert("Kollege ist für dieses Datum/Schicht nicht verfügbar.");
                return;
                }
                tgtCol.assigned.push({ date: tgtDate, shift: tgtShift });
                removeFromGenerate(tgtShift, tgtDate);
            }
            else if (!srcIsUnassigned && tgtIsUnassigned) {
                if (!srcCol) return;
                const srcIdx = findAssignIndex(srcCol, srcDate, srcShift);
                if (srcIdx === -1) return;
                srcCol.assigned.splice(srcIdx, 1);
                addToGenerate(tgtShift, tgtDate);
            }
            else if (srcIsUnassigned && tgtIsUnassigned) {
                return;
            }
            else {
                const srcIdx = findAssignIndex(srcCol, srcDate, srcShift);
                const tgtIdx = findAssignIndex(tgtCol, tgtDate, tgtShift);
                if (srcIdx === -1) return;
                const srcAssign = srcCol.assigned[srcIdx];
                const tgtAssign = tgtIdx !== -1 ? tgtCol.assigned[tgtIdx] : null;
                srcCol.assigned.splice(srcIdx, 1);
                if (tgtAssign) {
                const removed = tgtCol.assigned.splice(tgtIdx,1)[0];
                tgtCol.assigned.push({ date: tgtDate, shift: tgtShift });
                srcCol.assigned.push({ date: srcDate, shift: srcAssign.shift });
                } else {
                tgtCol.assigned.push({ date: tgtDate, shift: tgtShift });
                }
            }
            colleagues.forEach(c => {
                window[`${c.id}Assigned`] = (c.assigned || []).map(a => a.date);
            });
            removeAssignedDatesFromGenerates();
            updateUnassignedGeneratesBasedOnCoverage();
            renderCalendarOverview();
            });
            if (day.classList.contains('s1') || day.classList.contains('s2') || day.classList.contains('s3') || day.classList.contains('unassigned')) {
            day.setAttribute('draggable','true');
            day.addEventListener('dragstart', (ev) => {
                const el = ev.currentTarget;
                const colId = findColId(el);
                const date = el.dataset.date;
                const shift = Number(el.dataset.shift);
                const payload = { colId, date, shift };
                try {
                ev.dataTransfer.setData('application/json', JSON.stringify(payload));
                } catch (e) {
                ev.dataTransfer.setData('text/plain', JSON.stringify(payload));
                }
                if (ev.dataTransfer.setDragImage) {
                try {
                    const img = document.createElement('canvas');
                    img.width = 1; img.height = 1;
                    ev.dataTransfer.setDragImage(img, 0, 0);
                } catch (e) { /* ignore */ }
                }
                el.classList.add('dragging');
            });
            day.addEventListener('dragend', (ev) => {
                const els = container.querySelectorAll('.ep-day.dragging');
                els.forEach(x => x.classList.remove('dragging'));
                container.querySelectorAll('.ep-day.drop-target').forEach(x => x.classList.remove('drop-target'));
            });
            } else {
            day.removeAttribute('draggable');
            }
        });
        // --- END COPY ---
        }

        renderCalendarOverview();
        window.renderCalendarOverview = renderCalendarOverview;

    })();

    globalThis.einsatzplanÜbersicht = uebersicht;



    // Kalenderdarstellung ist hier fertig gestellt


    // Aktualisiere Verfügbarkeit der Wunsch-Eingaben (z.B. deaktivierte Optionen)
    updateWunschInputsAvailability();
}

// --- Funktionen zur Deaktivierung/Validierung von Wunscharbeitstagen (Kommentare auf Deutsch) ---

function updateWunschInputsAvailability() {
    // IDs in Reihenfolge: kollege1 .. kollege9, kollege0
    const ids = ["kollege1","kollege2","kollege3","kollege4","kollege5","kollege6","kollege7","kollege8","kollege9","kollege0"];
    ids.forEach(id => {
        const assigned = Array.isArray(window[`${id}Assigned`]) ? window[`${id}Assigned`] : [];
        const el = document.getElementById(`${id}-wunscharbeiten-input`);
        if (!el) return;

        // Wenn es ein SELECT ist, die bereits verplanten Optionen deaktivieren
        if (el.tagName === "SELECT") {
             Array.from(el.options).forEach(opt => {
                 opt.disabled = assigned.includes(opt.value);
             });
        } else if (el.type === "date") {
             // Bei date-Inputs merken wir die belegten Daten im dataset, löschen ggf. den aktuellen Wert
             el.dataset.taken = JSON.stringify(assigned);
             if (el.value && assigned.includes(el.value)) {
                 el.value = "";
             }
        }
    });
}

// Attach onchange-Validierung für date-inputs, damit Nutzer keine bereits verplanten Tage wählen
(function attachWunschDateValidation() {
    const ids = ["kollege1","kollege2","kollege3","kollege4","kollege5","kollege6","kollege7","kollege8","kollege9","kollege0"];
    const setup = () => {
        ids.forEach(id => {
             const el = document.getElementById(`${id}-wunscharbeiten-input`);
             if (!el) return;
             if (el._wunsch_date_validation_attached) return;
             el._wunsch_date_validation_attached = true;

             el.addEventListener("change", function() {
                 const assigned = Array.isArray(window[`${id}Assigned`]) ? window[`${id}Assigned`] : [];
                 const val = this.value;
                 if (!val) return;
                 if (assigned.includes(val)) {
                     alert("Dieser Tag ist bereits verplant. Bitte wählen Sie einen anderen Tag.");
                     this.value = "";
                 }
             });
        });
    };
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setup);
    } else {
        setup();
    }
})();

// Button anhängen
(function attachGenerateButton() {
    const attach = () => {
        const btn = document.getElementById("generate-einsatzplan-btn");
        if (btn) btn.addEventListener("click", generate_einsatzplan_with_rules);
    };
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", attach);
    } else {
        attach();
    }
})();

// Sicherstellen, dass initial die Wunsch-Eingaben aktualisiert werden
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateWunschInputsAvailability);
} else {
    updateWunschInputsAvailability();
}




// Ausgabe in der Konsole

// Bestätigen 1 - Event Listener für Schichtsystem- und Monat-Änderungen
document.getElementById("schichtsystem-input").addEventListener("change", aktualisiereSchichten);
document.getElementById("monat-input").addEventListener("change", function() {
    fuelleTageFuerMonat(this.value);
    aktualisiereSchichten();
});




    let zeigeMonatDetailsBtn = document.getElementById("zeige-monat-details-btn");
    zeigeMonatDetailsBtn.addEventListener("click", function() {
        document.getElementById("monat-details-ausgabe").style.display = "block";
        document.getElementById("monat-details-ausgabe").innerText = "Nächster Einsatzplan: " + naechsterEinsatzplan.join(", ") + "\n";
        document.getElementById("monat-details-ausgabe").innerText += "Unbetreute Tage: " + unbetreuteTage.join(", ") + "\n";
        console.log("Nächster Einsatzplan:", naechsterEinsatzplan);
        console.log("Unbetreute Tage:", unbetreuteTage);
        console.log("Kompletter Monat:", einsatzplanMonatIdentifikation);
        console.log("Betreute Tage:", berechneBetreuteTage());
        console.log("Schichtsystem:", document.getElementById("schichtsystem-input").value);
        console.log("Schicht1:", Schicht1);
        console.log("Schicht2:", Schicht2);
        console.log("Schicht3:", Schicht3);
        console.log("Schicht1Generate:", window.Schicht1Generate);
        console.log("Schicht2Generate:", window.Schicht2Generate);
        console.log("Schicht3Generate:", window.Schicht3Generate);
        console.log(uebersicht);
        
    });

});



// BESTÄTIGEN 2 - KOLLEGEN 1 HINZUFÜGEN
// Hilfsfunktion zur Aktualisierung der Ausgabe der Wunscharbeitstage von Kollege 1
function updateKollege1WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 1 Wunscharbeitstage: ";
    let arr = [];
    if (kollege1WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege1WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege1WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege1WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege1WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege1WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {
    let kollege1HinzufuegenBtn = document.getElementById("kollege1-hinzufuegen-btn");
    kollege1HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 1 Name:", document.getElementById("kollege1-name-input").value);
        console.log("Kollege 1 Wunschfreie Tage:", kollege1WunschFrei);
        console.log("Kollege 1 Kompletter Monat:", kollege1);
        console.log("Kollege 1 Einsatzfähige Tage:", kollege1EinsatzfaehigeTage());
        console.log("Kollege 1 Schicht Präferenz Input:", document.getElementById("kollege1-schicht-praeferenz-input").value);
        console.log("kollege1Schicht1 Array:", kollege1Schicht1);
        console.log("kollege1Schicht2 Array:", kollege1Schicht2);
        console.log("kollege1Schicht3 Array:", kollege1Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line =>
            !line.startsWith("Kollege 1 Wunschfrei: ") &&
            !line.startsWith("Kollege 1 Wunscharbeitstage: ")
        );
        lines.push("Kollege 1 Wunschfrei: " + kollege1WunschFrei.join(", "));

        // Wunscharbeitstage-Ausgabe über Hilfsfunktion
        updateKollege1WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege1WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 1 Wunscharbeitstage:", kollege1WunschArbeitstage);
    console.log("Kollege 1 Wunscharbeitstage in Schicht 1:", kollege1WunschArbeitstageInSchicht1);
    console.log("Kollege 1 Wunscharbeitstage in Schicht 2:", kollege1WunschArbeitstageInSchicht2);
    console.log("Kollege 1 Wunscharbeitstage in Schicht 3:", kollege1WunschArbeitstageInSchicht3);

    // Auch nach Klick auf "Wunscharbeiten hinzufügen" die Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line =>
        !line.startsWith("Kollege 1 Wunscharbeitstage: ")
    );
    // Wunscharbeitstage-Ausgabe über Hilfsfunktion
    updateKollege1WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 3 - KOLLEGEN 2 HINZUFÜGEN
// Hilfsfunktion zur Aktualisierung der Ausgabe der Wunscharbeitstage von Kollege 2
function updateKollege2WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 2 Wunscharbeitstage: ";
    let arr = [];
    if (kollege2WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege2WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege2WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege2WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege2WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege2WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}


document.addEventListener("DOMContentLoaded", function() {

    let kollege2HinzufuegenBtn = document.getElementById("kollege2-hinzufuegen-btn");
    kollege2HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 2 Name:", document.getElementById("kollege2-name-input").value);
        console.log("Kollege 2 Wunschfreie Tage:", kollege2WunschFrei);
        console.log("Kollege 2 Kompletter Monat:", kollege2);
        console.log("Kollege 2 Einsatzfähige Tage:", kollege2EinsatzfaehigeTage());
        console.log("Kollege 2 Schicht Präferenz Input:", document.getElementById("kollege2-schicht-praeferenz-input").value);
       
        console.log("kollege2Schicht1 Array:", kollege2Schicht1);
        console.log("kollege2Schicht2 Array:", kollege2Schicht2);
        console.log("kollege2Schicht3 Array:", kollege2Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 2 Wunschfrei: ") &&
            !line.startsWith("Kollege 2 Wunscharbeitstage: ")
        );
        lines.push("Kollege 2 Wunschfrei: " + kollege2WunschFrei.join(", "));

        // Wunscharbeitstage-Ausgabe über Hilfsfunktion
        updateKollege2WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
}); 

kollege2WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 2 Wunscharbeitstage:", kollege2WunschArbeitstage);
    console.log("Kollege 2 Wunscharbeitstage in Schicht 1:", kollege2WunschArbeitstageInSchicht1);
    console.log("Kollege 2 Wunscharbeitstage in Schicht 2:", kollege2WunschArbeitstageInSchicht2);
    console.log("Kollege 2 Wunscharbeitstage in Schicht 3:", kollege2WunschArbeitstageInSchicht3);

    // Auch nach Klick auf "Wunscharbeiten hinzufügen" die Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 2 Wunscharbeitstage: ")
    );
    // Wunscharbeitstage-Ausgabe über Hilfsfunktion
    updateKollege2WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 4  - KOLLEGEN 3 HINZUFÜGEN
function updateKollege3WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 3 Wunscharbeitstage: ";
    let arr = [];
    if (kollege3WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege3WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege3WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege3WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege3WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege3WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege3HinzufuegenBtn = document.getElementById("kollege3-hinzufuegen-btn");
    kollege3HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 3 Name:", document.getElementById("kollege3-name-input").value);
        console.log("Kollege 3 Wunschfreie Tage:", kollege3WunschFrei);
        console.log("Kollege 3 Kompletter Monat:", kollege3);
        console.log("Kollege 3 Einsatzfähige Tage:", kollege3EinsatzfaehigeTage());
        console.log("Kollege 3 Schicht Präferenz Input:", document.getElementById("kollege3-schicht-praeferenz-input").value);
       
        console.log("kollege3Schicht1 Array:", kollege3Schicht1);
        console.log("kollege3Schicht2 Array:", kollege3Schicht2);
        console.log("kollege3Schicht3 Array:", kollege3Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 3 Wunschfrei: ") &&
            !line.startsWith("Kollege 3 Wunscharbeitstage: ")
        );
        lines.push("Kollege 3 Wunschfrei: " + kollege3WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 3 ausgeben
        updateKollege3WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege3WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 3 Wunscharbeitstage:", kollege3WunschArbeitstage);
    console.log("Kollege 3 Wunscharbeitstage in Schicht 1:", kollege3WunschArbeitstageInSchicht1);
    console.log("Kollege 3 Wunscharbeitstage in Schicht 2:", kollege3WunschArbeitstageInSchicht2);
    console.log("Kollege 3 Wunscharbeitstage in Schicht 3:", kollege3WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 3 Wunscharbeitstage: ")
    );
    updateKollege3WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 5 - KOLLEGEN 4 HINZUFÜGEN
function updateKollege4WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 4 Wunscharbeitstage: ";
    let arr = [];
    if (kollege4WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege4WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege4WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege4WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege4WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege4WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege4HinzufuegenBtn = document.getElementById("kollege4-hinzufuegen-btn");
    kollege4HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 4 Name:", document.getElementById("kollege4-name-input").value);
        console.log("Kollege 4 Wunschfreie Tage:", kollege4WunschFrei);
        console.log("Kollege 4 Kompletter Monat:", kollege4);
        console.log("Kollege 4 Einsatzfähige Tage:", kollege4EinsatzfaehigeTage());
        console.log("Kollege 4 Schicht Präferenz Input:", document.getElementById("kollege4-schicht-praeferenz-input").value);
       
        console.log("kollege4Schicht1 Array:", kollege4Schicht1);
        console.log("kollege4Schicht2 Array:", kollege4Schicht2);
        console.log("kollege4Schicht3 Array:", kollege4Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 4 Wunschfrei: ") &&
            !line.startsWith("Kollege 4 Wunscharbeitstage: ")
        );
        lines.push("Kollege 4 Wunschfrei: " + kollege4WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 4 ausgeben
        updateKollege4WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege4WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 4 Wunscharbeitstage:", kollege4WunschArbeitstage);
    console.log("Kollege 4 Wunscharbeitstage in Schicht 1:", kollege4WunschArbeitstageInSchicht1);
    console.log("Kollege 4 Wunscharbeitstage in Schicht 2:", kollege4WunschArbeitstageInSchicht2);
    console.log("Kollege 4 Wunscharbeitstage in Schicht 3:", kollege4WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 4 Wunscharbeitstage: ")
    );
    updateKollege4WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 6 - KOLLEGEN 5 HINZUFÜGEN
function updateKollege5WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 5 Wunscharbeitstage: ";
    let arr = [];
    if (kollege5WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege5WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege5WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege5WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege5WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege5WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege5HinzufuegenBtn = document.getElementById("kollege5-hinzufuegen-btn");
    kollege5HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 5 Name:", document.getElementById("kollege5-name-input").value);
        console.log("Kollege 5 Wunschfreie Tage:", kollege5WunschFrei);
        console.log("Kollege 5 Kompletter Monat:", kollege5);
        console.log("Kollege 5 Einsatzfähige Tage:", kollege5EinsatzfaehigeTage());
        console.log("Kollege 5 Schicht Präferenz Input:", document.getElementById("kollege5-schicht-praeferenz-input").value);
       
        console.log("kollege5Schicht1 Array:", kollege5Schicht1);
        console.log("kollege5Schicht2 Array:", kollege5Schicht2);
        console.log("kollege5Schicht3 Array:", kollege5Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 5 Wunschfrei: ") &&
            !line.startsWith("Kollege 5 Wunscharbeitstage: ")
        );
        lines.push("Kollege 5 Wunschfrei: " + kollege5WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 5 ausgeben
        updateKollege5WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege5WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 5 Wunscharbeitstage:", kollege5WunschArbeitstage);
    console.log("Kollege 5 Wunscharbeitstage in Schicht 1:", kollege5WunschArbeitstageInSchicht1);
    console.log("Kollege 5 Wunscharbeitstage in Schicht 2:", kollege5WunschArbeitstageInSchicht2);
    console.log("Kollege 5 Wunscharbeitstage in Schicht 3:", kollege5WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 5 Wunscharbeitstage: ")
    );
    updateKollege5WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 7 - KOLLEGEN 6 HINZUFÜGEN
function updateKollege6WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 6 Wunscharbeitstage: ";
    let arr = [];
    if (kollege6WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege6WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege6WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege6WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege6WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege6WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege6HinzufuegenBtn = document.getElementById("kollege6-hinzufuegen-btn");
    kollege6HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 6 Name:", document.getElementById("kollege6-name-input").value);
        console.log("Kollege 6 Wunschfreie Tage:", kollege6WunschFrei);
        console.log("Kollege 6 Kompletter Monat:", kollege6);
        console.log("Kollege 6 Einsatzfähige Tage:", kollege6EinsatzfaehigeTage());
        console.log("Kollege 6 Schicht Präferenz Input:", document.getElementById("kollege6-schicht-praeferenz-input").value);
       
        console.log("kollege6Schicht1 Array:", kollege6Schicht1);
        console.log("kollege6Schicht2 Array:", kollege6Schicht2);
        console.log("kollege6Schicht3 Array:", kollege6Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 6 Wunschfrei: ") &&
            !line.startsWith("Kollege 6 Wunscharbeitstage: ")
        );
        lines.push("Kollege 6 Wunschfrei: " + kollege6WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 6 ausgeben
        updateKollege6WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege6WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 6 Wunscharbeitstage:", kollege6WunschArbeitstage);
    console.log("Kollege 6 Wunscharbeitstage in Schicht 1:", kollege6WunschArbeitstageInSchicht1);
    console.log("Kollege 6 Wunscharbeitstage in Schicht 2:", kollege6WunschArbeitstageInSchicht2);
    console.log("Kollege 6 Wunscharbeitstage in Schicht 3:", kollege6WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 6 Wunscharbeitstage: ")
    );
    updateKollege6WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 8 - KOLLEGEN 7 HINZUFÜGEN
function updateKollege7WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 7 Wunscharbeitstage: ";
    let arr = [];
    if (kollege7WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege7WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege7WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege7WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege7WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege7WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege7HinzufuegenBtn = document.getElementById("kollege7-hinzufuegen-btn");
    kollege7HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 7 Name:", document.getElementById("kollege7-name-input").value);
        console.log("Kollege 7 Wunschfreie Tage:", kollege7WunschFrei);
        console.log("Kollege 7 Kompletter Monat:", kollege7);
        console.log("Kollege 7 Einsatzfähige Tage:", kollege7EinsatzfaehigeTage());
        console.log("Kollege 7 Schicht Präferenz Input:", document.getElementById("kollege7-schicht-praeferenz-input").value);
       
        console.log("kollege7Schicht1 Array:", kollege7Schicht1);
        console.log("kollege7Schicht2 Array:", kollege7Schicht2);
        console.log("kollege7Schicht3 Array:", kollege7Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 7 Wunschfrei: ") &&
            !line.startsWith("Kollege 7 Wunscharbeitstage: ")
        );
        lines.push("Kollege 7 Wunschfrei: " + kollege7WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 7 ausgeben
        updateKollege7WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege7WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 7 Wunscharbeitstage:", kollege7WunschArbeitstage);
    console.log("Kollege 7 Wunscharbeitstage in Schicht 1:", kollege7WunschArbeitstageInSchicht1);
    console.log("Kollege 7 Wunscharbeitstage in Schicht 2:", kollege7WunschArbeitstageInSchicht2);
    console.log("Kollege 7 Wunscharbeitstage in Schicht 3:", kollege7WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 7 Wunscharbeitstage: ")
    );
    updateKollege7WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 9 - KOLLEGEN 8 HINZUFÜGEN
function updateKollege8WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 8 Wunscharbeitstage: ";
    let arr = [];
    if (kollege8WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege8WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege8WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege8WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege8WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege8WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege8HinzufuegenBtn = document.getElementById("kollege8-hinzufuegen-btn");
    kollege8HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 8 Name:", document.getElementById("kollege8-name-input").value);
        console.log("Kollege 8 Wunschfreie Tage:", kollege8WunschFrei);
        console.log("Kollege 8 Kompletter Monat:", kollege8);
        console.log("Kollege 8 Einsatzfähige Tage:", kollege8EinsatzfaehigeTage());
        console.log("Kollege 8 Schicht Präferenz Input:", document.getElementById("kollege8-schicht-praeferenz-input").value);
       
        console.log("kollege8Schicht1 Array:", kollege8Schicht1);
        console.log("kollege8Schicht2 Array:", kollege8Schicht2);
        console.log("kollege8Schicht3 Array:", kollege8Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 8 Wunschfrei: ") &&
            !line.startsWith("Kollege 8 Wunscharbeitstage: ")
        );
        lines.push("Kollege 8 Wunschfrei: " + kollege8WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 8 ausgeben
        updateKollege8WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege8WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 8 Wunscharbeitstage:", kollege8WunschArbeitstage);
    console.log("Kollege 8 Wunscharbeitstage in Schicht 1:", kollege8WunschArbeitstageInSchicht1);
    console.log("Kollege 8 Wunscharbeitstage in Schicht 2:", kollege8WunschArbeitstageInSchicht2);
    console.log("Kollege 8 Wunscharbeitstage in Schicht 3:", kollege8WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 8 Wunscharbeitstage: ")
    );
    updateKollege8WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 10 - KOLLEGEN 9 HINZUFÜGEN
function updateKollege9WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 9 Wunscharbeitstage: ";
    let arr = [];
    if (kollege9WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege9WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege9WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege9WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege9WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege9WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege9HinzufuegenBtn = document.getElementById("kollege9-hinzufuegen-btn");
    kollege9HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 9 Name:", document.getElementById("kollege9-name-input").value);
        console.log("Kollege 9 Wunschfreie Tage:", kollege9WunschFrei);
        console.log("Kollege 9 Kompletter Monat:", kollege9);
        console.log("Kollege 9 Einsatzfähige Tage:", kollege9EinsatzfaehigeTage());
        console.log("Kollege 9 Schicht Präferenz Input:", document.getElementById("kollege9-schicht-praeferenz-input").value);
       
        console.log("kollege9Schicht1 Array:", kollege9Schicht1);
        console.log("kollege9Schicht2 Array:", kollege9Schicht2);
        console.log("kollege9Schicht3 Array:", kollege9Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 9 Wunschfrei: ") &&
            !line.startsWith("Kollege 9 Wunscharbeitstage: ")
        );
        lines.push("Kollege 9 Wunschfrei: " + kollege9WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 9 ausgeben
        updateKollege9WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege9WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 9 Wunscharbeitstage:", kollege9WunschArbeitstage);
    console.log("Kollege 9 Wunscharbeitstage in Schicht 1:", kollege9WunschArbeitstageInSchicht1);
    console.log("Kollege 9 Wunscharbeitstage in Schicht 2:", kollege9WunschArbeitstageInSchicht2);
    console.log("Kollege 9 Wunscharbeitstage in Schicht 3:", kollege9WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 9 Wunscharbeitstage: ")
    );
    updateKollege9WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});

// BESTÄTIGEN 11 - KOLLEGEN 0 HINZUFÜGEN
function updateKollege0WunschArbeitstage(lines) {
    let wunschArbeitenText = "Kollege 0 Wunscharbeitstage: ";
    let arr = [];
    if (kollege0WunschArbeitstageInSchicht1.length > 0) {
        arr.push("S1: " + kollege0WunschArbeitstageInSchicht1.join(", "));
    }
    if (kollege0WunschArbeitstageInSchicht2.length > 0) {
        arr.push("S2: " + kollege0WunschArbeitstageInSchicht2.join(", "));
    }
    if (kollege0WunschArbeitstageInSchicht3.length > 0) {
        arr.push("S3: " + kollege0WunschArbeitstageInSchicht3.join(", "));
    }
    wunschArbeitenText += arr.length > 0 ? arr.join(" | ") : "—";
    lines.push(wunschArbeitenText);
}

document.addEventListener("DOMContentLoaded", function() {

    let kollege0HinzufuegenBtn = document.getElementById("kollege0-hinzufuegen-btn");
    kollege0HinzufuegenBtn.addEventListener("click", function() {
        console.log("Kollege 0 Name:", document.getElementById("kollege0-name-input").value);
        console.log("Kollege 0 Wunschfreie Tage:", kollege0WunschFrei);
        console.log("Kollege 0 Kompletter Monat:", kollege0);
        console.log("Kollege 0 Einsatzfähige Tage:", kollege0EinsatzfaehigeTage());
        console.log("Kollege 0 Schicht Präferenz Input:", document.getElementById("kollege0-schicht-praeferenz-input").value);
       
        console.log("kollege0Schicht1 Array:", kollege0Schicht1);
        console.log("kollege0Schicht2 Array:", kollege0Schicht2);
        console.log("kollege0Schicht3 Array:", kollege0Schicht3);

        // Aktualisiere die Ausgabe der Wunschfreien Tage im Monat-Details-Ausgabefeld
        let ausgabe = document.getElementById("monat-details-ausgabe");
        let lines = ausgabe.innerText.split("\n").filter(line => 
            !line.startsWith("Kollege 0 Wunschfrei: ") &&
            !line.startsWith("Kollege 0 Wunscharbeitstage: ")
        );
        lines.push("Kollege 0 Wunschfrei: " + kollege0WunschFrei.join(", "));

        // Wunscharbeitstage für Kollege 0 ausgeben
        updateKollege0WunschArbeitstage(lines);

        ausgabe.innerText = lines.join("\n");
    });
});

kollege0WunschArbeitenBtn.addEventListener("click", function() {
    console.log("Kollege 0 Wunscharbeitstage:", kollege0WunschArbeitstage);
    console.log("Kollege 0 Wunscharbeitstage in Schicht 1:", kollege0WunschArbeitstageInSchicht1);
    console.log("Kollege 0 Wunscharbeitstage in Schicht 2:", kollege0WunschArbeitstageInSchicht2);
    console.log("Kollege 0 Wunscharbeitstage in Schicht 3:", kollege0WunschArbeitstageInSchicht3);

    // Anzeige im Ausgabefeld aktualisieren
    let ausgabe = document.getElementById("monat-details-ausgabe");
    let lines = ausgabe.innerText.split("\n").filter(line => 
        !line.startsWith("Kollege 0 Wunscharbeitstage: ")
    );
    updateKollege0WunschArbeitstage(lines);
    ausgabe.innerText = lines.join("\n");
});


