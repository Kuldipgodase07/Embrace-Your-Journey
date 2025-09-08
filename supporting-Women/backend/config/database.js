
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const { getFirestore } = require('firebase-admin/firestore');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const db = getFirestore();

module.exports = { db };
