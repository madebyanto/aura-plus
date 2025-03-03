// login.js

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // Ottieni l'ID dell'utente e la data di accesso
        const userId = user.uid;
        const timestamp = new Date().toISOString();
        const userAgent = navigator.userAgent; // Ottieni informazioni sul dispositivo/browswer

        // Aggiungi la sessione in Firestore
        db.collection('sessions').add({
            userId: userId,
            timestamp: timestamp,
            userAgent: userAgent,
            active: true
        }).then(() => {
            console.log("Sessione registrata.");
        }).catch((error) => {
            console.error("Errore nel registrare la sessione:", error);
        });
    } else {
        window.location.href = "login.html";  // Redirigi alla pagina di login se l'utente non è autenticato
    }
});
