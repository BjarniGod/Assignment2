        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
        import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyDy3xovguQBDBWV7zQ2W-MwflKSI8vj_2k",
          authDomain: "binder-93d54.firebaseapp.com",
          projectId: "binder-93d54",
          storageBucket: "binder-93d54.appspot.com",
          messagingSenderId: "314302548891",
          appId: "1:314302548891:web:baf7acdcc878319e3d6f3e",
          measurementId: "G-DQ9JM6XB1K"
        };
      
        // // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        async function getHouses(app) {
            const housesCol = collection(db, "Houses");
            const housesSnapshot = await getDocs(housesCol);
            const housesList = housesSnapshot.docs.map((doc) => doc.data());
            return housesList;
        }

        // console.log(getHouses(app));