// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_AUTH_DOMAIN",
    projectId: "VOTRE_PROJECT_ID",
    storageBucket: "VOTRE_STORAGE_BUCKET",
    messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
    appId: "VOTRE_APP_ID"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Récupérer les données de Firestore
async function fetchEvaluations() {
    const querySnapshot = await getDocs(collection(db, "evaluations"));
    let evaluations = [];

    querySnapshot.forEach(doc => {
        evaluations.push(doc.data());
    });

    populateTable(evaluations);
    generateChart(evaluations);
}

// Afficher les données dans le tableau
tableBody = document.querySelector("#statsTable tbody");
function populateTable(data) {
    tableBody.innerHTML = "";
    data.forEach(evaluation => {
        let row = `<tr>
            <td>${evaluation.nom_agent}</td>
            <td>${evaluation.attentif_radio}</td>
            <td>${evaluation.anticipation_direc}</td>
            <td>${evaluation.vigilance_environ}</td>
            <td>${evaluation.placements}</td>
            <td>${evaluation.respect_cons}</td>
            <td>${evaluation.prise_contact}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Générer un graphique
function generateChart(data) {
    const ctx = document.getElementById("statsChart").getContext("2d");
    const agentNames = data.map(e => e.nom_agent);
    const scores = data.map(e => (parseInt(e.attentif_radio) + parseInt(e.anticipation_direc) + parseInt(e.vigilance_environ) + parseInt(e.placements) + parseInt(e.respect_cons) + parseInt(e.prise_contact)) / 6);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: agentNames,
            datasets: [{
                label: "Score moyen par agent",
                data: scores,
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Charger les évaluations au chargement de la page
document.addEventListener("DOMContentLoaded", fetchEvaluations);
